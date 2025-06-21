// components/Hero.tsx
'use client';

import Link from 'next/link';
import heroBackground from '@/images/hero-bg-vanilla.jpg';

// Botão de ação
function DiscordButton() {
  return (
    <a
      href='https://discord.gg/suadiscord'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-2 bg-indigo-600 text-darkBlue px-6 py-3 rounded font-bold shadow hover:brightness-110 transition'
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 245 240' className='w-5 h-5 fill-current'>
        <path d='M104.4 104.2c-5.7 0-10.2 5-10.2 11.2s4.5 11.2 10.2 11.2c5.7 0 10.3-5 10.2-11.2.1-6.2-4.5-11.2-10.2-11.2Zm36.2 0c-5.7 0-10.2 5-10.2 11.2s4.5 11.2 10.2 11.2c5.7 0 10.3-5 10.2-11.2.1-6.2-4.5-11.2-10.2-11.2Z' />
        <path d='M189.5 20h-134C42.4 20 30 32.4 30 47.5v145c0 15.1 12.4 27.5 27.5 27.5h113l-5.3-18.4 12.8 11.9 12.1 11.2 21.5 19V47.5C212 32.4 199.6 20 189.5 20Zm-39.2 131.7s-3.7-4.4-6.8-8.3c13.5-3.8 18.6-12.1 18.6-12.1-4.2 2.7-8.2 4.7-11.8 6-5.1 2.2-10 3.6-14.8 4.4-9.8 1.8-18.8 1.3-26.6-.1-5.9-1.1-11-2.7-15.2-4.4-2.4-1-5-2.2-7.6-3.7-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s5 8.3 18.2 12.1c-3.1 3.9-6.9 8.5-6.9 8.5-22.7-.7-31.3-15.6-31.3-15.6 0-33 14.7-59.8 14.7-59.8 14.7-11 28.7-10.7 28.7-10.7l1 1.2c-18.4 5.3-26.9 13.3-26.9 13.3s2.2-1.2 5.9-2.9c10.7-4.7 19.1-6 22.6-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-8.1-7.7-25.5-13l1.4-1.6s13.9-.3 28.7 10.7c0 0 14.7 26.8 14.7 59.8 0 0-8.8 14.9-31.5 15.6Z' />
      </svg>
      Entrar no Discord
    </a>
  );
}

function CTAButtons() {
  return (
    <div className='mt-8 flex flex-wrap justify-center items-center gap-4 font-display'>
      <Link
        href='#criarconta'
        className='bg-[var(--color-fantasy-purple)] text-darkBlue font-bold px-6 py-3 rounded shadow hover:brightness-110 transition'
      >
        Jogue Aqui!
      </Link>
      <DiscordButton />
    </div>
  );
}

// Legenda
function HeroSubtitle() {
  return (
    <p className='mt-4 max-w-xl text-center text-lg text-white/90 font-display'>
      Milhares já garantiram seu lugar. E você? Os primeiros a entrar escrevem a história. Acesse nosso discord e não
      perca nenhuma novidade!
    </p>
  );
}

// Título principal
function HeroTitle() {
  return (
    <h1 className='text-white text-5xl md:text-6xl font-bold text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]'>
      BEM-VINDO AO <br />
      <span className='text-gold'>VANILLA GAMES</span>
    </h1>
  );
}

function LaunchLabel() {
  return (
    <div className='relative mx-auto mb-8 flex w-fit items-center justify-center rounded bg-[var(--color-gold)] px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-dark-blue)] shadow-md sm:text-sm'>
      🔸Lançamento Oficial em Setembro🔸
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className='relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex justify-center items-center text-center px-6 text-white flex-col md:flex-row gap-y-8 md:gap-y-0'
      style={{
        backgroundImage: `url(${heroBackground.src})`,
      }}
      id='home'
    >
      {/* Conteúdo central */}
      <div className='relative z-10 text-center max-w-4xl justify-center flex flex-col items-center'>
        <LaunchLabel />
        <HeroTitle />
        <HeroSubtitle />
        <CTAButtons />
      </div>

      {/* Overlay escuro para contraste */}
      <div className='absolute inset-0 bg-black/60 z-0' aria-hidden='true' />
    </section>
  );
}
