'use client';

import Image from 'next/image';
import Link from 'next/link';
import DiscordImage from '@/images/discord.jpg';

export default function DiscordSection() {
  return (
    <section className='bg-[var(--color-dark-blue)] relative isolate overflow-hidden'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00bfff] to-[#8a2be2] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]'
        />
      </div>

      <div className='py-24 sm:py-32 lg:pb-40 px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-4xl sm:text-5xl font-sans text-[var(--color-gold)] tracking-wide'>
              Entre no Discord do Vanilla
            </h2>
            <p className='mt-6 text-lg text-white/80 font-display'>
              Participe da nossa comunidade, receba suporte, acompanhe atualizações e participe de eventos exclusivos
              direto do nosso servidor no Discord.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='https://discord.gg/seu-servidor'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-dark-blue shadow-md hover:brightness-110 transition'
              >
                Entrar no Discord
              </Link>
            </div>
          </div>

          <div className='mt-16 sm:mt-24'>
            <Image
              src={DiscordImage.src}
              alt='Banner do Discord'
              width={DiscordImage.width}
              height={DiscordImage.height}
              quality={100}
              className='rounded-md shadow-2xl ring-1 ring-white/10 w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#00bfff] to-[#8a2be2] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72rem]'
        />
      </div>
    </section>
  );
}
