import NotFound from '@/images/4041.jpg';
import NotFound2 from '@/images/4042.jpg';
import NotFound3 from '@/images/4043.jpg';
import NotFound4 from '@/images/4044.jpg';
import NotFound5 from '@/images/4045.jpg';

import Image from 'next/image';
import Link from 'next/link';

const notFoundImages = [NotFound, NotFound2, NotFound3, NotFound4, NotFound5];

export default function Example() {
  return (
    <>
      {notFoundImages.map((img, index) => (
        <main key={index} className='relative isolate h-screen'>
          <Image
            alt={`not found image ${index + 1}`}
            width={img.width}
            height={img.height}
            quality={100}
            src={img.src}
            className='absolute inset-0 -z-10 w-full h-full object-cover object-bottom'
          />
          <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
            <p className='text-base/8 font-semibold text-white'>404</p>
            <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl'>
              Page not found
            </h1>
            <p className='mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8'>
              O hamster que roda nosso servidor tirou férias.
            </p>
            <div className='mt-10 flex justify-center'>
              <Link href='/' className='text-sm/7 font-semibold text-white'>
                <span aria-hidden='true'>&larr;</span> Voltar pro início
              </Link>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
