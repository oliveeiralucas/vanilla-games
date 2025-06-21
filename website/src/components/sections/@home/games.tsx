'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

// Imagens dos jogos
import PWImage from '@/images/games/pw.webp';
import RagnarokImage from '@/images/games/ragnarok.webp';
import MuImage from '@/images/games/mu.webp';
import GTAImage from '@/images/games/gta-rp.webp';

interface Game {
  title: string;
  slug: string;
  image: StaticImageData;
  tags: string[];
}

const games: Game[] = [
  {
    title: 'Perfect World',
    slug: 'pw',
    image: PWImage,
    tags: ['Lançamento em Setembro'],
  },
  {
    title: 'Ragnarok',
    slug: 'ragnarok',
    image: RagnarokImage,
    tags: ['em breve'],
  },
  {
    title: 'Mu Online',
    slug: 'mu',
    image: MuImage,
    tags: ['em breve'],
  },
  {
    title: 'GTA RP',
    slug: 'gta',
    image: GTAImage,
    tags: ['em breve'],
  },
];

function GameCard({ title, slug, image, tags }: Game) {
  const isComingSoon = tags.some((tag) => tag.toLowerCase() === 'em breve');

  return (
    <div
      className={`relative group bg-gradient-to-b from-[#0c0c1c] to-[#1a1a40] border border-gray-600 rounded-md overflow-hidden shadow-xl transition duration-300 ${
        isComingSoon ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
      }`}
    >
      {/* Tags */}
      <div className='absolute top-2 left-2 flex flex-wrap gap-1 z-10'>
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 rounded text-xs font-bold ${
              tag.toLowerCase() === 'em breve' ? 'bg-red-500 text-white' : 'bg-[var(--color-gold)] text-darkBlue'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Imagem do jogo */}
      <div className='relative w-full h-72'>
        {isComingSoon ? (
          <Image src={image} alt={title} fill className='object-cover grayscale' />
        ) : (
          <Link href={`/jogos/${slug}`}>
            <Image src={image} alt={title} fill className='object-cover' quality={100} />
          </Link>
        )}
      </div>

      {/* Título e botão */}
      <div className='p-3 bg-black/40 text-center text-[var(--color-gold)] font-sans text-lg tracking-wide uppercase border-t border-gray-700'>
        {title}
        <div className='mt-3'>
          {isComingSoon ? (
            <span className='inline-block text-sm text-gray-400 italic font-display'>Em breve</span>
          ) : (
            <Link
              href={`/jogos/${slug}`}
              className='inline-block text-sm text-[var(--color-light-blue)] underline hover:text-white transition font-display'
            >
              Conhecer jogo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className='relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-12'>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold text-white drop-shadow-md leading-tight'>
        Os melhores servidores privados para você!
      </h2>
    </div>
  );
}

export default function GamesSection() {
  return (
    <section
      className='relative py-24 px-6 bg-no-repeat bg-cover bg-center bg-gradient-to-br from-dark-blue via-fantasy-purple to-gold'
      id='jogos'
    >
      <SectionTitle />
      <div className='relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {games.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </div>
      <div className='absolute inset-0 bg-black/50 pointer-events-none' />
    </section>
  );
}
