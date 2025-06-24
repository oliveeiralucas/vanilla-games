import Image from 'next/image';

interface PresentationProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
  };
}

export default function PresentationSection({ data }: PresentationProps) {
  return (
    <section className='relative py-20 px-6 bg-black text-white'>
      <div className='absolute inset-0 -z-10'>
        <Image src={data.image} alt={data.title} fill className='object-cover opacity-30' />
        <div className='absolute inset-0 bg-black/50' />
      </div>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-bold font-sans'>{data.title}</h1>
        <p className='mt-4 text-lg md:text-xl text-gray-300 font-display'>{data.subtitle}</p>
      </div>
    </section>
  );
}
