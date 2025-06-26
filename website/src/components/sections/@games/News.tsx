'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { PlayIcon } from '@heroicons/react/20/solid';

interface NewsItem {
  id: number;
  type: string;
  date: string;
  title: string;
  summary: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
}

interface NewsSectionProps {
  title: string;
  endpoint: string;
}

export default function NewsSection({ title, endpoint }: NewsSectionProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error('Erro ao carregar notícias:', err));
  }, [endpoint]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  if (!news.length) return null;

  return (
    <section className='bg-[var(--color-dark-blue)] text-white py-20 px-6 font-sans relative'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12'>{title}</h2>

        <div className='relative'>
          <div ref={scrollRef} className='flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4'>
            {news.map((item) => (
              <article
                key={item.id}
                className='min-w-[300px] max-w-sm flex-shrink-0 snap-start bg-[#1a1a40] border border-[var(--color-light-blue)] rounded-lg overflow-hidden shadow-lg'
              >
                <div className='relative w-full h-56'>
                  {item.media.type === 'video' ? (
                    <div className='relative aspect-video'>
                      <Image
                        src={item.media.thumbnail ?? '/images/default-thumb.jpg'}
                        alt={item.title}
                        fill
                        className='object-cover'
                      />
                      <PlayIcon className='absolute right-4 bottom-4 w-8 h-8 text-gold' />
                    </div>
                  ) : (
                    <Image src={item.media.url} alt={item.title} fill className='object-cover' />
                  )}{' '}
                </div>
                <div className='p-4'>
                  <p className='text-[var(--color-gold)] text-xs font-semibold font-display uppercase'>
                    {item.type} <span className='mx-2'>|</span> {item.date}
                  </p>
                  <h3 className='mt-2 text-lg font-bold font-display'>{item.title}</h3>
                  <p className='mt-1 text-sm text-[var(--color-light-blue)] font-display'>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Botões de navegação */}
          <div className='absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 pr-2'>
            <button
              onClick={() => scroll('left')}
              className='p-2 bg-transparent hover:scale-105 transition'
              aria-label='Scroll left'
            >
              <ChevronLeftIcon className='w-6 h-6 text-[var(--color-light-blue)]' />
            </button>
            <button
              onClick={() => scroll('right')}
              className='p-2 bg-transparent hover:scale-105 transition'
              aria-label='Scroll right'
            >
              <ChevronRightIcon className='w-6 h-6 text-[var(--color-gold)]' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
