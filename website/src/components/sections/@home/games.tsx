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
    tags: ['2 Years', 'PvP'],
  },
  {
    title: 'Ragnarok',
    slug: 'ragnarok',
    image: RagnarokImage,
    tags: ['New Server', 'Classic'],
  },
  {
    title: 'Mu Online',
    slug: 'mu',
    image: MuImage,
    tags: ['4 Years', 'Season 6'],
  },
  {
    title: 'GTA RP',
    slug: 'gta',
    image: GTAImage,
    tags: ['Roleplay', '1 Year'],
  },
];

function GameCard({ title, slug, image, tags }: Game) {
  return (
    <div className='relative group bg-gradient-to-b from-[#0c0c1c] to-[#1a1a40] border border-gray-600 rounded-md overflow-hidden shadow-xl hover:scale-105 transition duration-300'>
      {/* Tags */}
      <div className='absolute top-2 left-2 flex flex-wrap gap-1 z-10'>
        {tags.map((tag) => (
          <span key={tag} className='bg-[var(--color-gold)] text-darkBlue text-xs font-bold px-2 py-0.5 rounded'>
            {tag}
          </span>
        ))}
      </div>

      {/* Imagem do jogo */}
      <Link href={`/jogos/${slug}`}>
        <div className='relative w-full h-72'>
          <Image src={image} alt={title} fill className='object-cover' quality={100} />
        </div>
      </Link>

      {/* Título e botão */}
      <div className='p-3 bg-black/40 text-center text-[var(--color-gold)] font-sans text-lg tracking-wide uppercase border-t border-gray-700'>
        {title}
        <div className='mt-3'>
          <Link
            href={`/jogos/${slug}`}
            className='inline-block text-sm text-[var(--color-light-blue)] underline hover:text-white transition font-display'
          >
            Conhecer jogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GamesSection() {
  return (
    <section
      className='relative py-24 px-6 bg-no-repeat bg-cover bg-center bg-dark-blue'
      style={{ backgroundImage: "url('/images/games-bg.jpg')" }}
      id='jogos'
    >
      <div className='relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {games.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </div>
      <div className='absolute inset-0 bg-black/50 pointer-events-none' />
    </section>
  );
}
