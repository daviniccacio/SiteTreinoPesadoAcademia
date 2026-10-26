<template>
  <div class="min-h-screen bg-background text-foreground py-16 px-5 flex justify-center items-start">
    <div class="max-w-3xl w-full bg-surface border border-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">

      <!-- Navegação Superior -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <router-link to="/" class="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground hover:text-primary transition-colors">
          ← Voltar ao site
        </router-link>
        <router-link to="/politica-de-privacidade/app" class="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary hover:underline">
          Política do App Mobile →
        </router-link>
      </div>

      <!-- Título -->
      <div class="space-y-2">
        <h1 class="font-display text-2xl sm:text-3xl font-black uppercase text-primary leading-tight">
          Política de Privacidade do Website
        </h1>
        <p class="text-xs font-mono text-muted-foreground">Última atualização: Outubro de 2026</p>
      </div>

      <p class="text-sm text-muted-foreground leading-relaxed">
        Esta Política de Privacidade descreve como o site institucional da <strong class="text-foreground">Treino Pesado Academia</strong> trata os dados de navegação e contacto dos utilizadores.
      </p>

      <div class="space-y-6 pt-2 text-sm text-muted-foreground leading-relaxed">
        <section class="space-y-2">
          <h2 class="font-display text-base font-bold uppercase text-foreground">1. Recolha de Dados no Site</h2>
          <p>Durante a sua navegação neste site, podemos recolher:</p>
          <ul class="list-disc list-inside space-y-1.5 pl-2">
            <li><strong class="text-foreground">Dados de Navegação Técnicos:</strong> Endereço IP, tipo de navegador e páginas visitadas para fins estatísticos e de desempenho.</li>
            <li><strong class="text-foreground">Atendimento via WhatsApp:</strong> Ao clicar nos botões de contato, é redirecionado para a aplicação oficial do WhatsApp. Não guardamos conversas no servidor do site.</li>
          </ul>
        </section>

        <section class="space-y-2">
          <h2 class="font-display text-base font-bold uppercase text-foreground">2. Cookies e Tecnologias de Medição</h2>
          <p>Utilizamos cookies essenciais para garantir o correto funcionamento e otimização do site. Não utilizamos cookies de rastreio publicitário de terceiros sem o seu consentimento.</p>
        </section>

        <section class="space-y-2 border-t border-border/60 pt-6">
          <h2 class="font-display text-base font-bold uppercase text-foreground">3. Encarregado de Proteção de Dados (DPO)</h2>
          <p>Para dúvidas relativas aos seus dados neste site, entre em contacto com o responsável técnico: <a href="mailto:daviniccacio@gmail.com" class="text-primary font-bold hover:underline">daviniccacio@gmail.com</a>.</p>
        </section>
      </div>

    </div>
  </div>
</template>