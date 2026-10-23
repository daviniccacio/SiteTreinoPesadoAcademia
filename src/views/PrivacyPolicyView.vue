<template>
  <div class="min-h-screen bg-background text-foreground py-16 px-5 flex justify-center items-start">
    <div class="max-w-3xl w-full bg-surface border border-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">

      <!-- Barra de Navegação Superior -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          ← Voltar ao site
        </router-link>

        <router-link 
          to="/exclusao-de-conta" 
          class="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary hover:underline"
        >
          Exclusão de Conta →
        </router-link>
      </div>

      <!-- Título Principal -->
      <div class="space-y-2">
        <h1 class="font-display text-2xl sm:text-3xl font-black uppercase text-primary leading-tight">
          Política de Privacidade — Treino Pesado
        </h1>
        <p class="text-xs font-mono text-muted-foreground">
          Última atualização: Setembro de 2026
        </p>
      </div>

      <p class="text-sm text-muted-foreground leading-relaxed">
        O aplicativo <strong class="text-foreground">Treino Pesado</strong> tem o compromisso de proteger a privacidade e a segurança dos dados pessoais de seus usuários (Alunos e Personal Trainers).
      </p>

      <!-- Seções da Política -->
      <div class="space-y-6 pt-2 text-sm text-muted-foreground leading-relaxed">
        
        <!-- Seção 1 -->
        <section class="space-y-2">
          <h2 class="font-display text-base font-bold uppercase text-foreground">
            1. Coleta e Uso de Informações
          </h2>
          <p>Coletamos apenas os dados necessários para o funcionamento das fichas e acompanhamento de treinos:</p>
          <ul class="list-disc list-inside space-y-1.5 pl-2">
            <li>
              <strong class="text-foreground">Informações de Cadastro:</strong> Nome completo e e-mail para autenticação de conta e vínculo entre Personal e Aluno.
            </li>
            <li>
              <strong class="text-foreground">Dados do Dispositivo:</strong> Tokens de notificação push (Expo) para alertas de treino finalizado e prescrições.
            </li>
            <li>
              <strong class="text-foreground">Registros de Exercícios:</strong> Histórico e tempo de execução dos treinos.
            </li>
          </ul>
        </section>

        <!-- Seção 2 -->
        <section class="space-y-2">
          <h2 class="font-display text-base font-bold uppercase text-foreground">
            2. Compartilhamento e Segurança dos Dados
          </h2>
          <p>
            Todos os dados são transferidos com criptografia (HTTPS/TLS) e armazenados com segurança. Não vendemos e não compartilhamos dados pessoais com terceiros.
          </p>
        </section>

        <!-- Seção 3 -->
        <section class="space-y-2">
          <h2 class="font-display text-base font-bold uppercase text-foreground">
            3. Exclusão de Conta e Dados
          </h2>
          <p>
            O usuário pode solicitar a exclusão definitiva de sua conta e histórico a qualquer momento dentro do app ou através da página dedicada de solicitação.
          </p>
        </section>

        <!-- Seção 4 -->
        <section class="space-y-2 border-t border-border/60 pt-6">
          <h2 class="font-display text-base font-bold uppercase text-foreground">
            4. Contato
          </h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: 
            <a 
              href="mailto:daviniccacio@gmail.com" 
              class="text-primary font-bold hover:underline"
            >
              daviniccacio@gmail.com
            </a>.
          </p>
        </section>

      </div>

    </div>
  </div>
</template>