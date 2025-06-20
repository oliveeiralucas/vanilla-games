import { UserGroupIcon, ShieldCheckIcon, BoltIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const features = [
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
    href: '/sobre',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Experiência Rápida e Estável',
    description:
      'Servidores otimizados com baixa latência, atualizações frequentes e desempenho confiável para sua aventura.',
    href: '/download',
    icon: BoltIcon,
  },
  {
    name: 'Regras do Servidor',
    description: 'Conheça as regras de conduta e convívio no Vanilla. Jogar limpo é essencial para manter a magia.',
    href: '/regras',
    icon: BookOpenIcon,
  },
];

export default function ServerFeaturesSection() {
  return (
    <section className='bg-[var(--color-dark-blue)] py-24 sm:py-32 px-6 lg:px-8 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-base font-semibold text-[var(--color-light-blue)] tracking-wide uppercase'>
            Nosso Servidor
          </h2>
          <p className='mt-2 text-4xl font-display tracking-tight text-[var(--color-gold)] sm:text-5xl'>
            Uma Experiência Completa, Justa e Divertida
          </p>
          <p className='mt-6 text-lg text-gray-300'>
            O Vanilla oferece servidores estáveis, balanceados e com uma comunidade incrível. Conheça alguns dos nossos
            diferenciais abaixo:
          </p>
        </div>

        <div className='mx-auto mt-20 max-w-2xl lg:max-w-none lg:mt-24'>
          <dl className='grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='flex items-center gap-x-3 text-lg font-semibold text-white'>
                  <feature.icon className='w-6 h-6 text-[var(--color-cyan)]' />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-col text-base text-gray-300'>
                  <p className='flex-1'>{feature.description}</p>
                  {feature.href && (
                    <p className='mt-4'>
                      <a
                        href={feature.href}
                        className='text-sm font-semibold text-[var(--color-light-blue)] hover:text-white transition'
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
      </div>
    </section>
  );
}
