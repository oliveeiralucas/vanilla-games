'use client';

import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface VideoSectionProps {
  thumbnailUrl: string;
  videoUrl: string;
}

export default function VideoSection({ thumbnailUrl, videoUrl }: VideoSectionProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        setVideoOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className='bg-[var(--color-dark-blue)] py-24 px-6 text-white' id='video'>
      <div className='max-w-6xl mx-auto'>
        <div className='relative h-[300px] md:h-[480px] rounded-lg overflow-hidden shadow-lg'>
          <Image
            src={thumbnailUrl}
            alt='Thumb do vídeo'
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, 1024px'
            priority
          />
          <button
            onClick={() => setVideoOpen(true)}
            className='absolute inset-0 flex items-center justify-center text-white z-10'
            aria-label='Abrir vídeo'
          >
            <PlayCircleIcon className='w-20 h-20 text-[var(--color-gold)] hover:scale-105 transition-transform' />
          </button>
          <div className='absolute inset-0 bg-black/40' />
        </div>
      </div>

      {videoOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4'>
          <div className='relative w-full max-w-3xl' ref={domNode}>
            <iframe
              className='w-full aspect-video rounded shadow-lg'
              src={`${videoUrl}?autoplay=1&mute=1`}
              allow='autoplay; encrypted-media'
              allowFullScreen
            />
            <button
              onClick={() => setVideoOpen(false)}
              className='absolute -top-4 -right-4 bg-[var(--color-gold)] text-[var(--color-dark-blue)] p-2 rounded-full shadow hover:bg-white transition'
              aria-label='Fechar vídeo'
            >
              <XMarkIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
