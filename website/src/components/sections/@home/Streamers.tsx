import Image from 'next/image';
import Link from 'next/link';
import NoticiasMaromba from '../../../images/streamers/noticias-maromba.jpg';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

const streamers = [
  {
    name: 'Notícias Maromba',
    image: NoticiasMaromba,
    description:
      'Aqui você encontra notícias, cobertura de campeonatos de fisiculturismo, entrevistas com profissionais do meio e muito mais.',
    link: 'https://www.youtube.com/channel/UCxxxxxxx',
    game: 'Perfect World',
    videosCount: 57,
  },
  {
    name: 'Streamer Exemplo',
    image: NoticiasMaromba,
    description: 'Transmissões diárias com muito PvP, diversão e dicas.',
    link: 'https://www.twitch.tv/exemplo',
    game: 'PW Vanilla',
    streamedHours: 120,
  },
];

interface StreamerCardProps {
  name: string;
  image: StaticImageData;
  description: string;
  link: string;
  game: string;
  videosCount?: number;
  streamedHours?: number;
}

function StreamerCard({
  name,
  image,
  description,
  link,
  game,
}: StreamerCardProps) {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-[#0a0a15] border border-transparent rounded-lg overflow-hidden w-80 shadow-2xl hover:scale-[1.03] transition-all duration-300 relative group no-underline hover:shadow-[0_0_25px_var(--color-gold)] hover:border-[var(--color-gold)]'
      style={{
        background: 'linear-gradient(145deg, #0a0a15 0%, #1a1a2e 100%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Efeito de brilho dourado ao redor */}
      <div className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        style={{
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, transparent 70%)'
        }}
      />
      
      {/* Bordas decorativas estilo MMORPG */}
      <div className='absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-gold)] rounded-lg transition-all duration-500 pointer-events-none'>
        {/* Cantos decorativos estilo runas */}
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, idx) => (
          <div
            key={idx}
            className={`absolute ${pos} w-6 h-6 bg-transparent z-20 overflow-hidden`}
          >
            <div className='absolute w-full h-full border-2 border-[var(--color-gold)] opacity-70'
              style={{
                transform: pos.includes('right') ? 
                  (pos.includes('top') ? 'rotate(45deg)' : 'rotate(-45deg)' ) : 
                  (pos.includes('top') ? 'rotate(-45deg)' : 'rotate(45deg)' ),
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%)'
              }}
            />
          </div>
        ))}
        
        {/* Linhas decorativas nas bordas */}
        <div className='absolute top-0 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent transform -translate-x-1/2' />
        <div className='absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent transform -translate-x-1/2' />
      </div>
      
      {/* Banner com efeito de pergaminho */}
      <div className='relative overflow-hidden h-48'>
        <Image 
          src={image.src} 
          alt={name} 
          width={320} 
          height={192} 
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
        />
        {/* Overlay estilo pergaminho */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a15] via-transparent to-transparent opacity-90' />
      </div>
      
      {/* Conteúdo do card */}
      <div className='p-5 relative'>
        {/* Efeito de nome estilo MMORPG */}
        <h3 className='text-2xl font-bold text-white mb-2 font-fantasy tracking-wide relative inline-block'>
          <span className='relative z-10'>{name}</span>
          <span 
            className='absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-gold)] opacity-60 z-0'
            style={{
              transform: 'skewX(-15deg)',
              boxShadow: '0 0 10px var(--color-gold)'
            }}
          />
        </h3>
        
        <p className='text-sm text-gray-300 mb-4 font-display leading-relaxed'>{description}</p>
        
        {/* Status estilo MMORPG */}
        <div className='space-y-2'>
          <div className='flex items-center'>
            <span className='text-sm text-[var(--color-cyan)] font-bold'>{game}</span>
          </div>
        </div>
      </div>
      
      {/* Efeito de partículas (opcional) */}
      <div className='absolute inset-0 pointer-events-none opacity-20'>
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className='absolute w-1 h-1 bg-[var(--color-gold)] rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `${2 + Math.random() * 3}s infinite alternate`
            }}
          />
        ))}
      </div>
    </Link>
  );
}

export default function StreamersSection() {
  return (
    <section
      className='relative py-20 px-6 bg-dark-blue text-white'
      style={{ backgroundImage: "url('/images/streamers-bg.jpg')" }}
      id='streamers'
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-base font-semibold text-[var(--color-light-blue)] tracking-wide uppercase'>
          Streamers da Comunidade
        </h2>
        <p className='mt-2 text-4xl font-sans tracking-tight text-[var(--color-gold)] sm:text-5xl'>
          Aventure-se com quem já domina os Reinos dos jogos
        </p>
        <p className='mt-6 text-lg text-gray-300 font-display'>
          Descubra criadores de conteúdo que vivem as maiores batalhas, exploram os segredos do nosso mundo e
          compartilham dicas valiosas para sua jornada.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 z-10 mt-8'>
        {streamers.map((s) => (
          <StreamerCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
