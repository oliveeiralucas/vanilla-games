'use client';

import Image from 'next/image';

import logo from '@/images/logo.png';
import Background from '@/images/about-background.png';
import { UserGroupIcon, ShieldCheckIcon, BoltIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Regras do Servidor',
    description: 'Conheça as regras de conduta e convívio no Vanilla. Jogar limpo é essencial para manter a magia.',
    href: '/regras',
    icon: BookOpenIcon,
  },
  {
    name: 'Comunidade Ativa',
    description:
      'Jogadores engajados, eventos regulares e suporte direto via Discord. Uma comunidade acolhedora e vibrante.',
    href: '',
    icon: UserGroupIcon,
  },
  {
    name: 'Equilíbrio e Qualidade',
    description:
      'Balanceamento contínuo entre as classes, progressão justa e sem Pay-to-Win. Nosso foco é diversão duradoura.',
    href: '',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Experiência Rápida e Estável',
    description:
      'Servidores otimizados com baixa latência, atualizações frequentes e desempenho confiável para sua aventura.',
    href: '',
    icon: BoltIcon,
  },
];

// Logo do servidor
function ServerLogo() {
  return (
    <div className='relative z-10 mx-auto w-48 md:w-60'>
      <Image src={logo.src} alt='Vanilla Logo' width={300} height={300} className='w-full h-auto' priority />
    </div>
  );
}

// Label “Jogue agora”
function PlayLabel() {
  return (
    <div className='relative mx-auto w-fit flex z-10 bg-[var(--color-gold)] text-[var(--color-dark-blue)] px-4 py-1 text-xs font-bold rounded uppercase tracking-wider shadow-md'>
      Lançamento Oficial em Setembro
    </div>
  );
}

// 🔹 Título principal
function SectionTitle() {
  return (
    <h2 className='relative z-10 text-4xl md:text-5xl text-white font-sans text-center mt-4 drop-shadow-md'>
      UMA REVOLUÇÃO, SERVIDORES ILIMITADOS
    </h2>
  );
}

// 🔹 Legenda explicativa
function SectionDescription() {
  return (
    <p className='relative z-10 mt-4 max-w-2xl mx-auto text-center text-base md:text-lg text-white/80 font-light font-display'>
      Somos uma empresa criada por programadores apaixonados, unidos para revolucionar o cenário de servidores privados
      no Brasil. Nosso primeiro grande lançamento acontecerá em breve, no Perfect World e será preparado com tecnologia
      de ponta e experiência única para os jogadores. Em breve, iremos expandir nosso portfólio com clássicos que todo
      mundo ama!
    </p>
  );
}

function FeatureSection() {
  return (
    <div className='mx-auto mt-20 max-w-2xl lg:max-w-none lg:mt-24 text-center md:text-left'>
      <dl className='grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature) => (
          <div key={feature.name} className='flex flex-col'>
            <dt className='flex items-center gap-x-3 text-lg font-semibold text-white justify-center md:justify-start'>
              <feature.icon className='w-6 h-6 text-[var(--color-cyan)]' />
              {feature.name}
            </dt>
            <dd className='mt-4 flex flex-col text-base text-gray-300'>
              <p className='flex-1 font-display'>{feature.description}</p>
              {feature.href && (
                <p className='mt-4'>
                  <a
                    href={feature.href}
                    className='text-sm font-semibold text-[var(--color-light-blue)] hover:text-white transition font-display'
                  >
                    Saiba mais <span aria-hidden='true'>→</span>
                  </a>
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      className='relative py-24 px-6 md:py-32 text-white overflow-hidden bg-dark-blue'
      id='servidor'
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='relative z-10 max-w-7xl mx-auto'>
        <ServerLogo />
        <PlayLabel />
        <SectionTitle />
        <SectionDescription />
        <FeatureSection />
      </div>

      {/* Overlay escuro para legibilidade */}
      <div className='absolute inset-0 bg-black/60 z-0' />
    </section>
  );
}
