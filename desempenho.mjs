import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { minify as minifyHtml } from 'html-minifier-terser';
import CleanCSS from 'clean-css';
import { minify as minifyJs } from 'terser';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

// 1. CONFIGURAÇÕES DE DIRETÓRIOS E PORTA
const DIRETORIO_ENTRADA = './public';
const DIRETORIO_SAIDA = './dist';
const PORTA_SERVIDOR = 3000;
const FICHEIRO_HEADERS = path.join(DIRETORIO_SAIDA, '_headers');
const RELATORIO_LIGHTHOUSE = path.join(DIRETORIO_SAIDA, 'relatorio-lighthouse.html');

/**
 * Função para criar um servidor HTTP local temporário usando módulos nativos
 */
function iniciarServidorLocal(pasta, porta) {
  return new Promise((resolve) => {
    const servidor = http.createServer((req, res) => {
      let caminhoReq = req.url === '/' ? '/index.html' : req.url;
      const caminhoFicheiro = path.join(pasta, caminhoReq);

      if (fs.existsSync(caminhoFicheiro) && fs.statSync(caminhoFicheiro).isFile()) {
        const extensao = path.extname(caminhoFicheiro).toLowerCase();
        
        // Mapeamento básico de tipos MIME
        const tiposMime = {
          '.html': 'text/html; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.js': 'text/javascript; charset=utf-8',
          '.webp': 'image/webp',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.json': 'application/json'
        };

        res.writeHead(200, { 'Content-Type': tiposMime[extensao] || 'application/octet-stream' });
        fs.createReadStream(caminhoFicheiro).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Ficheiro Não Encontrado');
      }
    });

    servidor.listen(porta, () => {
      resolve(servidor);
    });
  });
}

/**
 * Localiza o executável do Chrome ou Edge no sistema Windows
 */
function encontrarExecutavelChromium() {
  const localAppData = process.env.LOCALAPPDATA || '';
  const programFiles = process.env['ProgramFiles'] || 'C:\\Program Files';
  const programFilesX86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';

  const caminhosPossiveis = [
    process.env.CHROME_PATH,
    path.join(programFiles, 'Google\\Chrome\\Application\\chrome.exe'),
    path.join(programFilesX86, 'Google\\Chrome\\Application\\chrome.exe'),
    path.join(localAppData, 'Google\\Chrome\\Application\\chrome.exe'),
    path.join(programFilesX86, 'Microsoft\\Edge\\Application\\msedge.exe'),
    path.join(programFiles, 'Microsoft\\Edge\\Application\\msedge.exe'),
  ];

  for (const caminho of caminhosPossiveis) {
    if (caminho && fs.existsSync(caminho)) {
      return caminho;
    }
  }
  return null;
}

/**
 * Lê ficheiros de uma pasta recursivamente
 */
function obterFicheirosRecursivos(diretorio) {
  let resultados = [];
  if (!fs.existsSync(diretorio)) return resultados;

  const lista = fs.readdirSync(diretorio);
  lista.forEach((ficheiro) => {
    const caminhoCompleto = path.join(diretorio, ficheiro);
    const stat = fs.statSync(caminhoCompleto);
    if (stat && stat.isDirectory()) {
      resultados = resultados.concat(obterFicheirosRecursivos(caminhoCompleto));
    } else {
      resultados.push(caminhoCompleto);
    }
  });
  return resultados;
}

/**
 * ETAPA 1: Otimização e Minificação (HTML, CSS, JS)
 */
async function otimizarECopiarFicheiros() {
  console.log('📦 [1/3] A iniciar minificação e otimização de ficheiros...');

  if (!fs.existsSync(DIRETORIO_ENTRADA)) {
    fs.mkdirSync(DIRETORIO_ENTRADA, { recursive: true });
  }

  if (!fs.existsSync(DIRETORIO_SAIDA)) {
    fs.mkdirSync(DIRETORIO_SAIDA, { recursive: true });
  }

  const ficheiros = obterFicheirosRecursivos(DIRETORIO_ENTRADA);

  for (const ficheiro of ficheiros) {
    const caminhoRelativo = path.relative(DIRETORIO_ENTRADA, ficheiro);
    const caminhoDestino = path.join(DIRETORIO_SAIDA, caminhoRelativo);
    const pastaDestino = path.dirname(caminhoDestino);

    if (!fs.existsSync(pastaDestino)) {
      fs.mkdirSync(pastaDestino, { recursive: true });
    }

    const extensao = path.extname(ficheiro).toLowerCase();
    const conteudo = fs.readFileSync(ficheiro, 'utf-8');

    if (extensao === '.html') {
      const htmlMinificado = await minifyHtml(conteudo, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      });
      fs.writeFileSync(caminhoDestino, htmlMinificado);
      console.log(`  ✅ HTML minificado: ${caminhoRelativo}`);
    } else if (extensao === '.css') {
      const cssMinificado = new CleanCSS().minify(conteudo).styles;
      fs.writeFileSync(caminhoDestino, cssMinificado);
      console.log(`  ✅ CSS minificado: ${caminhoRelativo}`);
    } else if (extensao === '.js') {
      const jsMinificado = await minifyJs(conteudo);
      fs.writeFileSync(caminhoDestino, jsMinificado.code || conteudo);
      console.log(`  ✅ JS minificado: ${caminhoRelativo}`);
    } else {
      fs.copyFileSync(ficheiro, caminhoDestino);
      console.log(`  📁 Ficheiro copiado: ${caminhoRelativo}`);
    }
  }
}

/**
 * ETAPA 2: Configuração do Cache-Control
 */
function gerarEstrategiaCache() {
  console.log('\n🔒 [2/3] A aplicar regras e estratégia de Cache-Control...');

  const conteudoHeaders = `
# Regras de Cache para Produção

/*.html
  Cache-Control: public, no-cache, must-revalidate

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`.trim();

  fs.writeFileSync(FICHEIRO_HEADERS, conteudoHeaders, 'utf-8');
  console.log(`  ✅ Ficheiro de regras de cache gerado em: ${FICHEIRO_HEADERS}`);
}

/**
 * ETAPA 3: Auditoria Google Lighthouse via Servidor HTTP Local
 */
async function executarAuditoriaLighthouse() {
  console.log('\n🚦 [3/3] A iniciar auditoria do Google Lighthouse...');

  const indexDestino = path.join(DIRETORIO_SAIDA, 'index.html');

  if (!fs.existsSync(indexDestino)) {
    console.log('  ⚠️ Ficheiro index.html não encontrado em ./dist. A pular auditoria.');
    return;
  }

  const caminhoNavegador = encontrarExecutavelChromium();

  if (!caminhoNavegador) {
    console.log('  ⚠️ Nenhum navegador Chromium (Chrome ou Edge) foi localizado.');
    return;
  }

  // 1. Inicia o servidor HTTP local
  const servidor = await iniciarServidorLocal(DIRETORIO_SAIDA, PORTA_SERVIDOR);
  const urlLocal = `http://localhost:${PORTA_SERVIDOR}/`;
  console.log(`  🌐 Servidor local ativo em: ${urlLocal}`);

  try {
    // 2. Lança o navegador em modo headless
    const chrome = await chromeLauncher.launch({
      chromePath: caminhoNavegador,
      chromeFlags: ['--headless', '--no-sandbox'],
    });

    const opcoes = {
      logLevel: 'silent',
      output: 'html',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };

    // 3. Executa a auditoria sobre o servidor HTTP
    const resultadoAuditoria = await lighthouse(urlLocal, opcoes);
    const relatorioHtml = resultadoAuditoria.report;
    const pontuacoes = resultadoAuditoria.lhr.categories;

    fs.writeFileSync(RELATORIO_LIGHTHOUSE, relatorioHtml);

    console.log('\n📊 === RESULTADOS DA AUDITORIA LIGHTHOUSE ===');
    console.log(`  ⚡ Desempenho      : ${Math.round(pontuacoes.performance.score * 100)} / 100`);
    console.log(`  ♿ Acessibilidade   : ${Math.round(pontuacoes.accessibility.score * 100)} / 100`);
    console.log(`  🛡️ Boas Práticas   : ${Math.round(pontuacoes['best-practices'].score * 100)} / 100`);
    console.log(`  🔍 SEO              : ${Math.round(pontuacoes.seo.score * 100)} / 100`);
    console.log(`\n📄 Relatório salvo em: ${RELATORIO_LIGHTHOUSE}`);

    await chrome.kill();
  } finally {
    // 4. Garante que o servidor é encerrado após o teste
    servidor.close();
  }
}

/**
 * Execução Principal
 */
async function executarPipelineCompleto() {
  console.log('==================================================');
  console.log('     PIPELINE DE OTIMIZAÇÃO, CACHE E AUDITORIA    ');
  console.log('==================================================\n');

  try {
    await otimizarECopiarFicheiros();
    gerarEstrategiaCache();
    await executarAuditoriaLighthouse();
    console.log('\n✨ Processo concluído com sucesso!');
  } catch (erro) {
    console.error('❌ Erro durante a execução do pipeline:', erro);
  }
}

executarPipelineCompleto();