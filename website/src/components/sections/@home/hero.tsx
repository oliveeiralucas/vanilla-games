// components/Hero.tsx
'use client';

import Link from 'next/link';
import heroBackground from '@/images/hero-bg-vanilla.jpg';

// Botão de ação
function CTAButtons() {
  return (
    <div className='mt-6 flex flex-wrap gap-4 font-display justify-center md:justify-start'>
      <Link
        href='/criar-conta'
        className='bg-medium-blue text-darkBlue font-bold px-6 py-3 rounded shadow hover:brightness-110 transition'
      >
        Criar Conta
      </Link>
      <Link
        href='/download'
        className='bg-fantasy-purple text-darkBlue font-bold px-6 py-3 rounded shadow hover:brightness-110 transition'
      >
        Baixar Jogo
      </Link>
    </div>
  );
}

// Legenda
function HeroSubtitle() {
  return (
    <p className='mt-4 max-w-xl text-center md:text-left text-lg text-white/90 font-display'>
      Aventure-se em Vanilla! Domine a fantasia, evolua sua jornada e torne-se uma lenda nos mundos mágicos de PW e
      Ragnarok.
    </p>
  );
}

// Título principal
function HeroTitle() {
  return (
    <h1 className='text-white text-5xl md:text-6xl font-bold text-center md:text-left drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]'>
      BEM-VINDO AO <br />
      <span className='text-gold'>VANILLA GAMES</span>
    </h1>
  );
}

// Vídeo
function FloatingVideoBox() {
  return (
    <div className='relative md:absolute md:top-16 md:right-12 md:w-120 w-72 z-30 md:px-0'>
      <div className='bg-[var(--color-gold)] text-darkBlue font-bold px-3 py-1 text-md rounded-t-md text-center font-display'>
        Explore o Universo
      </div>
      <div className='overflow-hidden rounded-b-md shadow-lg bg-black'>
        <video
          src='../../../videos/intro-vanilla.mp4'
          className='w-full h-32 sm:h-40 md:h-60 object-cover'
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className='relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex justify-center md:justify-start items-center text-center md:text-left px-6 text-white flex-col md:flex-row gap-y-8 md:gap-y-0'
      style={{
        backgroundImage: `url(${heroBackground.src})`,
      }}
    >
      {/* Vídeo flutuante */}
      <FloatingVideoBox />

      {/* Conteúdo central */}
      <div className='relative z-10 text-center max-w-4xl lg:ml-24'>
        <HeroTitle />
        <HeroSubtitle />
        <CTAButtons />
      </div>

      {/* Overlay escuro para contraste */}
      <div className='absolute inset-0 bg-black/60 z-0' aria-hidden='true' />
    </section>
  );
}
