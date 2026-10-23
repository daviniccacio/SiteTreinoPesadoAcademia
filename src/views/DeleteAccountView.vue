<template>
  <div class="min-h-screen bg-background text-foreground py-16 px-5 flex justify-center items-start">
    <div class="max-w-3xl w-full bg-surface border border-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">

      <!-- Barra de Navegação Superior -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <router-link 
          to="/politica-de-privacidade" 
          class="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary hover:underline"
        >
          ← Política de Privacidade
        </router-link>

        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          Voltar ao site
        </router-link>
      </div>

      <!-- Título Principal -->
      <div class="space-y-2">
        <h1 class="font-display text-2xl sm:text-3xl font-black uppercase text-red-500 leading-tight">
          Solicitação de Exclusão de Conta e Dados — Treino Pesado
        </h1>
        <p class="text-xs font-mono text-muted-foreground">
          Desenvolvedor: <strong class="text-foreground">Davi Nicacio de Oliveira Cunha</strong>
        </p>
      </div>

      <!-- Caixa de Destaque / Instruções -->
      <div class="rounded-xl border border-red-500/30 bg-red-500/10 p-5 space-y-3">
        <h2 class="font-display text-sm font-bold uppercase tracking-wide text-red-400">
          Como solicitar a exclusão da sua conta:
        </h2>
        <ol class="list-decimal list-inside space-y-2 text-sm text-foreground/90 leading-relaxed">
          <li>
            <strong class="text-foreground">Pelo Aplicativo:</strong> Acesse a aba <em>Perfil</em> no app <strong class="text-foreground">Treino Pesado</strong> e toque em <em>Excluir minha conta</em>.
          </li>
          <li>
            <strong class="text-foreground">Por E-mail:</strong> Envie uma mensagem para 
            <a 
              href="mailto:daviniccacio@gmail.com?subject=Exclus%C3%A3o%20de%20Conta%20-%20Treino%20Pesado" 
              class="text-primary font-bold hover:underline"
            >
              daviniccacio@gmail.com
            </a> 
            com o assunto <em>"Exclusão de Conta - Treino Pesado"</em> informando o e-mail cadastrado na plataforma.
          </li>
        </ol>
      </div>

      <!-- Lista de Dados Excluídos -->
      <div class="space-y-4 pt-2 text-sm text-muted-foreground leading-relaxed">
        <h2 class="font-display text-base font-bold uppercase text-foreground">
          Dados que serão excluídos permanentemente:
        </h2>
        <ul class="list-disc list-inside space-y-1.5 pl-2">
          <li>Informações de cadastro (Nome completo e E-mail).</li>
          <li>Histórico de treinos realizados e fichas personalizadas.</li>
          <li>Tokens de notificação associados ao dispositivo.</li>
        </ul>

        <p class="text-xs italic text-muted-foreground/80 border-t border-border/60 pt-4">
          * Os dados são removidos da base de dados imediatamente após a confirmação da solicitação.
        </p>
      </div>

    </div>
  </div>
</template>