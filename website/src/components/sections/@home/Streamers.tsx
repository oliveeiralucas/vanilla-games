import Image from 'next/image';
import Link from 'next/link';

const streamers = [
  {
    name: 'KuroTV',
    image: '/streamers/kuro.jpg',
    description: 'Lives semanais de Perfect World. PvP e diversão garantida.',
    link: 'https://twitch.tv/kurotv',
  },
  {
    name: 'YukiChan',
    image: '/streamers/yuki.jpg',
    description: 'Especialista em Ragnarok com foco em builds e dicas!',
    link: 'https://youtube.com/yukichan',
  },
  {
    name: 'SenhorMístico',
    image: '/streamers/mistico.jpg',
    description: 'Conteúdo de Mu Online e guias completos.',
    link: 'https://kick.com/mistico',
  },
];

interface StreamerCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

function StreamerCard({ name, image, description, link }: StreamerCardProps) {
  return (
    <div className='bg-[#0c0c1c] border-2 border-[var(--color-gold)] rounded-md overflow-hidden w-80 shadow-xl hover:scale-105 transition relative group'>
      {/* Canto decorativo */}
      <div className='absolute top-0 left-0 w-5 h-5 bg-[var(--color-gold)] rotate-45 origin-top-left z-10' />
      <div className='absolute top-0 right-0 w-5 h-5 bg-[var(--color-gold)] rotate-45 origin-top-right z-10' />
      <div className='absolute bottom-0 left-0 w-5 h-5 bg-[var(--color-gold)] rotate-45 origin-bottom-left z-10' />
      <div className='absolute bottom-0 right-0 w-5 h-5 bg-[var(--color-gold)] rotate-45 origin-bottom-right z-10' />

      <Image src={image} alt={name} width={320} height={180} className='w-full h-44 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg text-[var(--color-gold)] font-sans'>{name}</h3>
        <p className='text-sm text-white/80 mt-1 font-display'>{description}</p>
        <Link
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-3 text-sm text-[var(--color-light-blue)] underline hover:text-white transition font-display'
        >
          Assistir
        </Link>
      </div>
    </div>
  );
}

export default function StreamersSection() {
  return (
    <section
      className='relative py-20 px-6 bg-dark-blue text-white'
      style={{ backgroundImage: "url('/images/streamers-bg.jpg')" }}
      id='streamers'
    >
      <h2 className='text-center text-3xl md:text-4xl font-sans text-[var(--color-gold)] uppercase tracking-wider mb-12'>
        Streamers da Comunidade
      </h2>

      <div className='flex flex-wrap justify-center gap-6 relative z-10'>
        {streamers.map((s) => (
          <StreamerCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
