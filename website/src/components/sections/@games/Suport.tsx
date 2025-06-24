'use client';

import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function SupportSection() {
  return (
    <section className='bg-dark-blue py-24 px-6 text-white' id='suporte'>
      <div className='z-10 relative'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-gold)] font-sans'>
            Suporte e Ajuda
          </h2>
          <p className='mt-4 text-lg text-gray-300 font-display'>
            Precisa de ajuda? Nossa equipe está pronta para te apoiar em qualquer momento da sua jornada.
          </p>
        </div>

        <div className='mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
          {/* Bloco 1 - Suporte Geral */}
          <div className='flex flex-col items-center'>
            <div className='flex size-14 items-center justify-center rounded-full bg-[var(--color-gold)] shadow-md mb-4'>
              <ChatBubbleLeftRightIcon className='h-7 w-7 text-[var(--color-dark-blue)]' />
            </div>
            <h3 className='text-lg font-bold text-white'>Suporte Geral</h3>
            <p className='mt-2 text-base text-gray-300 font-display'>
              Dúvidas sobre conta, login ou acesso ao jogo? Fale com a equipe.
            </p>
            <p className='mt-4 text-sm font-semibold'>
              <a href='#' className='text-[var(--color-light-blue)] hover:underline'>
                Entrar em contato <span aria-hidden='true'>→</span>
              </a>
            </p>
          </div>

          {/* Bloco 2 - Reportar Bug */}
          <div className='flex flex-col items-center'>
            <div className='flex size-14 items-center justify-center rounded-full bg-[var(--color-gold)] shadow-md mb-4'>
              <BugAntIcon className='h-7 w-7 text-[var(--color-dark-blue)]' />
            </div>
            <h3 className='text-lg font-bold text-white'>Reportar Bug</h3>
            <p className='mt-2 text-base text-gray-300 font-display'>
              Encontrou um erro no servidor? Nos avise para resolvermos rapidamente.
            </p>
            <p className='mt-4 text-sm font-semibold'>
              <a href='#' className='text-[var(--color-light-blue)] hover:underline'>
                Reportar problema <span aria-hidden='true'>→</span>
              </a>
            </p>
          </div>

          {/* Bloco 3 - Suporte Técnico / Discord */}
          <div className='flex flex-col items-center'>
            <div className='flex size-14 items-center justify-center rounded-full bg-[var(--color-gold)] shadow-md mb-4'>
              <ComputerDesktopIcon className='h-7 w-7 text-[var(--color-dark-blue)]' />
            </div>
            <h3 className='text-lg font-bold text-white'>Ajuda Técnica</h3>
            <p className='mt-2 text-base text-gray-300 font-display'>
              Entre no Discord para suporte técnico ao vivo e interação com a comunidade.
            </p>
            <p className='mt-4 text-sm font-semibold'>
              <a
                href='https://discord.gg/seu-servidor'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[var(--color-light-blue)] hover:underline'
              >
                Acessar Discord <span aria-hidden='true'>→</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
