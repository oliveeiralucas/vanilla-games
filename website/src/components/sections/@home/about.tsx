'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/logo.png';
import Background from '@/images/about-background.png';

// Logo do servidor
function ServerLogo() {
  return (
    <div className='relative z-10 mx-auto w-48 md:w-60'>
      <Image src={logo.src} alt='Vanilla Logo' width={300} height={300} className='w-full h-auto' priority />
    </div>
  );
}

// Label “Jogue agora”
function PlayLabel() {
  return (
    <div className='relative z-10 inline-block bg-[var(--color-gold)] text-[var(--color-dark-blue)] px-4 py-1 text-xs font-bold rounded uppercase tracking-wider shadow-md'>
      Jogue Agora
    </div>
  );
}

// 🔹 Título principal
function SectionTitle() {
  return (
    <h2 className='relative z-10 text-4xl md:text-5xl text-white font-sans text-center mt-4 drop-shadow-md'>
      Um Mundo de Fantasia Espera por Você
    </h2>
  );
}

// 🔹 Legenda explicativa
function SectionDescription() {
  return (
    <p className='relative z-10 mt-4 max-w-2xl mx-auto text-center text-base md:text-lg text-white/80 font-light font-display'>
      Vanilla Games nasceu da paixão por mundos fantásticos e do desejo de oferecer uma experiência única e acessível.
      Aqui, você encontra servidores como Perfect World e Ragnarok com ajustes modernos, equilíbrio, fidelidade e muita
      magia no ar.
    </p>
  );
}

// 🔹 Conjunto de botões
function ActionButtons() {
  return (
    <div className='relative z-10 mt-6 flex justify-center gap-4 flex-wrap'>
      <Link
        href='/download'
        className='bg-[var(--color-light-blue)] hover:bg-[var(--color-cyan)] text-[var(--color-dark-blue)] font-bold px-6 py-2 rounded shadow-md transition'
      >
        Download
      </Link>
     
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      className='relative py-24 px-6 md:py-32 text-white overflow-hidden bg-dark-blue'
      id='servidor'
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='relative z-10 max-w-5xl mx-auto text-center'>
        <ServerLogo />
        <PlayLabel />
        <SectionTitle />
        <SectionDescription />
        <ActionButtons />
      </div>

      {/* Overlay escuro para legibilidade */}
      <div className='absolute inset-0 bg-black/60 z-0' />
    </section>
  );
}
