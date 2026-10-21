<template>
  <section class="w-full py-12 bg-brand-dark">
    <div class="max-w-4xl mx-auto px-4 lg:px-12 space-y-6">
      <div class="text-center space-y-1">
        <h3 class="font-display text-2xl uppercase text-white font-extrabold tracking-wide">Dúvidas Frequentes</h3>
        <p class="text-xs text-[#bacbb6]">Tudo o que você precisa saber antes de começar</p>
      </div>

      <div class="space-y-3">
        <details class="group bg-brand-card p-4 rounded-lg cursor-pointer border border-[#3c4b3b]/30">
          <summary class="flex justify-between items-center font-display text-sm uppercase text-white font-bold list-none">
            <span>Preciso pagar taxa de matrícula?</span>
            <span class="material-symbols-outlined text-brand-primary group-open:rotate-180 transition-transform">expand_more</span>
          </summary>
          <p class="text-xs text-[#bacbb6] pt-3 leading-relaxed">
            Não cobramos taxas de matrícula. Escolha seu plano (Diária, Quinzena ou Mensalidade) e comece imediatamente.
          </p>
        </details>

        <details class="group bg-brand-card p-4 rounded-lg cursor-pointer border border-[#3c4b3b]/30">
          <summary class="flex justify-between items-center font-display text-sm uppercase text-white font-bold list-none">
            <span>Como tenho acesso ao aplicativo oficial?</span>
            <span class="material-symbols-outlined text-brand-primary group-open:rotate-180 transition-transform">expand_more</span>
          </summary>
          <p class="text-xs text-[#bacbb6] pt-3 leading-relaxed">
            Ao se matricular, liberamos seu perfil e disponibilizamos o app no Google Play Store.
          </p>
        </details>

        <details class="group bg-brand-card p-4 rounded-lg cursor-pointer border border-[#3c4b3b]/30">
          <summary class="flex justify-between items-center font-display text-sm uppercase text-white font-bold list-none">
            <span>Quais são os dias e horários de funcionamento?</span>
            <span class="material-symbols-outlined text-brand-primary group-open:rotate-180 transition-transform">expand_more</span>
          </summary>
          <p class="text-xs text-[#bacbb6] pt-3 leading-relaxed">
            De Segunda a Sexta-feira, das 06:00 às 21:00 sem interrupção.
          </p>
        </details>
      </div>
    </div>
  </section>
</template>