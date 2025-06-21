import NotFound from '@/images/404.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Example() {
  return (
    <>
      <main className='relative isolate h-screen'>
        <Image
          alt='not found image'
          width={NotFound.width}
          height={NotFound.height}
          quality={100}
          src={NotFound.src}
          className='absolute inset-0 -z-10 w-full h-full object-cover object-bottom'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
          <p className='text-base/8 font-semibold text-white'>404</p>
          <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gold sm:text-7xl'>
            Page not found
          </h1>
          <p className='mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8'>
            O hamster que roda nosso servidor tirou férias.
          </p>
          <div className='mt-10 flex justify-center'>
            <Link href='/home' className='text-sm/7 font-semibold text-gold' target='_blank' rel='noopener noreferrer'>
              <span aria-hidden='true'>&larr;</span> Voltar pro início
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
