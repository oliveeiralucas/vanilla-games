'use client';

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const icons = {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
};

interface Highlight {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

interface ContentData {
  tag: string;
  title: string;
  intro: string;
  paragraphs: string[];
  highlights: Highlight[];
  outroTitle: string;
  outroText: string;
}

interface ContentSectionProps {
  data: ContentData;
  imageUrl: string;
}

export default function ContentSection({ data, imageUrl }: ContentSectionProps) {
  return (
    <section className='relative'>
      <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
        <div className='px-6 lg:contents'>
          <div className='mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2'>
            <p className='text-base font-semibold text-[var(--color-light-blue)] font-sans'>{data.tag}</p>
            <h1 className='mt-2 text-4xl font-bold tracking-tight text-pretty text-gold sm:text-5xl font-sans'>
              {data.title}
            </h1>
            <p className='mt-6 text-lg white font-display'>{data.intro}</p>

            <div className='mt-10 max-w-xl text-base white font-display lg:max-w-none space-y-6'>
              {data.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}

              <ul role='list' className='mt-8 space-y-8 white'>
                {data.highlights.map((item, index) => {
                  const Icon = icons[item.icon];
                  return (
                    <li key={index} className='flex gap-x-3'>
                      <Icon aria-hidden='true' className='mt-1 size-5 flex-none text-[var(--color-cyan)]' />
                      <span>
                        <strong className='font-semibold text-gold'>{item.title}.</strong> {item.description}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gold font-sans'>{data.outroTitle}</h2>
              <p className='mt-6'>{data.outroText}</p>
            </div>
          </div>
        </div>
        <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
          <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
            <Image
              src={imageUrl}
              alt={data.title}
              fill
              className='object-cover object-center'
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
