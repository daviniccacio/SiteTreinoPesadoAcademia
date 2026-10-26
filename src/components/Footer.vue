<template>
  <footer class="border-t border-border bg-background/95 py-16 text-foreground relative">
    <div class="mx-auto max-w-6xl px-5">
      <div class="grid gap-10 md:grid-cols-12 items-start">

        <!-- Coluna 1: Marca & Apresentação -->
        <div class="space-y-4 md:col-span-5">
          <!-- Logótipo Oficial -->
          <a href="#topo" class="inline-block transition-transform hover:scale-105 duration-300">
            <img 
              src="/assets/img/logo-treino-pesado-icon.png" 
              alt="Treino Pesado Academia" 
              width="200" 
              height="200"
              class="h-20 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,230,91,0.2)]" 
              loading="lazy"
              decoding="async" 
            />
          </a>

          <!-- Slogan Profissional -->
          <p class="text-xs text-muted-foreground leading-relaxed max-w-sm">
            A estrutura completa para atingir a sua melhor versão em São Mateus do Maranhão. Equipamentos modernos,
            fichas 100% digitais e acompanhamento de verdade.
          </p>

          <!-- Badge de Localização -->
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
            <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span>São Mateus do Maranhão - MA</span>
          </div>
        </div>

        <!-- Coluna 2: Navegação Rápida -->
        <div class="space-y-3 md:col-span-3">
          <h2 class="font-display text-xs font-bold uppercase tracking-wider text-primary">Navegação</h2>
          <ul class="space-y-2 text-xs text-muted-foreground">
            <li>
              <a 
                href="#planos"
                class="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
              >
                <span>•</span> Planos e Preços
              </a>
            </li>
            <li>
              <a 
                href="#aplicativo"
                class="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
              >
                <span>•</span> Aplicativo Oficial
              </a>
            </li>
            <li>
              <a 
                href="#avaliacoes"
                class="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
              >
                <span>•</span> Avaliações de Alunos
              </a>
            </li>
            <li>
              <a 
                href="#duvidas"
                class="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
              >
                <span>•</span> Dúvidas Frequentes
              </a>
            </li>
            <li>
              <a 
                href="#local"
                class="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
              >
                <span>•</span> Como Chegar
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Canais Oficiais -->
        <div class="space-y-3 md:col-span-4">
          <h2 class="font-display text-xs font-bold uppercase tracking-wider text-primary">Canais Oficiais</h2>
          <ul class="space-y-2.5 text-xs text-muted-foreground">
            <!-- WhatsApp (Corrigido) -->
            <li>
              <a 
                href="https://wa.me/5585900000000?text=Ol%C3%A1!" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2.5 transition-all duration-200 hover:text-primary"
              >
                <div class="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <span>Atendimento via WhatsApp</span>
              </a>
            </li>

            <!-- Instagram -->
            <li>
              <a 
                href="https://www.instagram.com/treinopesadoa/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2.5 transition-all duration-200 hover:text-primary"
              >
                <div class="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>Instagram @treinopesadoa</span>
              </a>
            </li>

            <!-- Google Play Store -->
            <li>
              <a 
                href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2.5 transition-all duration-200 hover:text-primary"
              >
                <div class="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.3 11.3 2.4 2.4-11 6.3 8.6-8.7Zm3.6-3.6 2.8 1.6c.8.5.8 1.4 0 1.9l-2.8 1.6-2.6-2.6 2.6-2.5ZM6.3 2.2l11 6.3-2.4 2.4-8.6-8.7Z" />
                  </svg>
                </div>
                <span>Baixar App na Google Play</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Divisor e Copyright -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row text-xs text-muted-foreground">
        <p>© 2026 Treino Pesado Academia. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://github.com/daviniccacio" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">daviniccacio</a></p>

        <a 
          href="#topo"
          class="inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface px-3 py-1.5 font-display text-[11px] font-bold uppercase transition-colors hover:border-primary hover:text-primary"
        >
          <span>Voltar ao topo</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-3 w-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>