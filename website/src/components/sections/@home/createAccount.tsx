'use client';

import Image from 'next/image';
import Link from 'next/link';

// 🔹 Imagem de fundo curvada ou decorativa
function DecorativeBanner() {
  return (
    <div className='relative z-0 w-full max-w-5xl mx-auto overflow-hidden rounded-t-full border-y-4 border-[var(--color-gold)]'>
      <Image
        src='/images/create-banner.png'
        alt='Banner de personagens'
        width={1200}
        height={400}
        className='w-full h-auto object-cover'
      />
    </div>
  );
}

// 🔹 Título épico
function CreateTitle() {
  return (
    <h2 className='text-center text-3xl md:text-4xl font-sans text-[var(--color-gold)] mt-6 uppercase tracking-wider drop-shadow'>
      Crie sua Conta e Inicie sua Jornada
    </h2>
  );
}

// 🔹 Texto secundário
function CreateDescription() {
  return (
    <p className='text-center max-w-2xl mx-auto mt-4 text-white/90 text-base md:text-lg font-light font-display'>
      Explore mundos mágicos, evolua seu personagem, participe de batalhas épicas e conquiste seu lugar entre os
      melhores. Registre-se agora e faça parte da lenda Vanilla.
    </p>
  );
}

// 🔹 Botão de ação
function CTAButton() {
  return (
    <div className='mt-6 flex justify-center'>
      <Link
        href='/criar-conta'
        className='bg-[var(--color-gold)] text-[var(--color-dark-blue)] font-bold px-6 py-3 rounded shadow-md hover:brightness-110 uppercase tracking-wide text-sm transition'
      >
        Criar Conta Agora
      </Link>
    </div>
  );
}

export default function CreateAccountSection() {
  return (
    <section className='relative bg-[var(--color-dark-blue)] px-6 py-20 text-white text-center overflow-hidden' id='criarconta'>
      <DecorativeBanner />
      <div className='relative z-10'>
        <CreateTitle />
        <CreateDescription />
        <CTAButton />
      </div>
    </section>
  );
}
