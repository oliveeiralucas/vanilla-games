'use client';

import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  slug: string;
  image: string;
}

const games = [
  {
    title: 'Perfect World',
    slug: 'pw',
    image: '/games/pw.jpg',
  },
  {
    title: 'Ragnarok',
    slug: 'ragnarok',
    image: '/games/ragnarok.jpg',
  },
  {
    title: 'Mu Online',
    slug: 'mu',
    image: '/games/mu.jpg',
  },
  {
    title: 'GTA RP',
    slug: 'gta',
    image: '/games/gta.jpg',
  },
];

function GameCard({ title, slug, image }: GameCardProps) {
  return (
    <Link
      href={`/jogos/${slug}`}
      className='group bg-gradient-to-b from-[#0c0c1c] to-[#1a1a40] border border-gray-600 rounded-md overflow-hidden shadow-xl hover:scale-105 transition duration-300'
    >
      <div className='relative w-full h-72'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <div className='p-3 bg-black/40 text-center text-[var(--color-gold)] font-display text-lg tracking-wide uppercase border-t border-gray-700'>
        {title}
      </div>
    </Link>
  );
}

export default function GamesSection() {
  return (
    <section
      className='relative py-24 px-6 bg-no-repeat bg-cover bg-center bg-dark-blue'
      style={{ backgroundImage: "url('/images/games-bg.jpg')" }}
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {games.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </div>

      {/* overlay para legibilidade, se necessário */}
      <div className='absolute inset-0 bg-black/50 pointer-events-none' />
    </section>
  );
}
