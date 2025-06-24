'use client';

import Image from 'next/image';

interface RequirementsSectionProps {
  title: string;
  downloadUrl: string;
  minimumRequirements: {
    os: string;
    processor: string;
    ram: string;
    storage: string;
    gpu: string;
  };
  recommendedRequirements: {
    os: string;
    processor: string;
    ram: string;
    storage: string;
    gpu: string;
  };
  drivers: {
    name: string;
    logo: string;
    href: string;
  }[];
}

export default function RequirementsSection({
  title,
  downloadUrl,
  minimumRequirements,
  recommendedRequirements,
  drivers,
}: RequirementsSectionProps) {
  return (
    <section
      className='bg-[var(--color-dark-blue)] py-16 px-6 text-[var(--color-light-blue)] text-sm font-display'
      id='download'
    >
      <div className='text-center max-w-2xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl text-[var(--color-gold)] font-bold font-sans'>Download - {title}</h2>
        <p className='mt-2 text-[var(--color-light-blue)]'>
          Baixe o cliente completo do {title} e prepare-se para uma experiência única!
        </p>
        <a
          href={downloadUrl}
          target='_blank'
          className='inline-flex items-center gap-2 mt-6 bg-[var(--color-fantasy-purple)] hover:brightness-110 text-white font-bold py-3 px-6 rounded shadow transition'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='white'
            className='h-5 w-5'
            aria-hidden='true'
          >
            <path d='M1.5 3.005v8.25l9.5 1.32V1.568l-9.5 1.437zm10.5-1.503v10.837l10.5 1.46V1.45L12 1.502zM1.5 12.743v8.252l9.5 1.5v-9.013l-9.5-1.24zm10.5 1.368v9.003l10.5 1.39v-8.224l-10.5-2.17z' />
          </svg>
          Download para Windows
        </a>
      </div>

      <div className='mt-12 flex flex-col lg:flex-row gap-8 justify-center'>
        <RequirementsCard title='Requisitos Mínimos' data={minimumRequirements} />
        <RequirementsCard title='Requisitos Recomendados' data={recommendedRequirements} />
      </div>

      <div className='mt-20 max-w-3xl mx-auto text-center'>
        <h3 className='text-2xl font-sans font-bold border-b border-[var(--color-gold)] inline-block pb-1 mb-2 text-white'>
          Importante Também
        </h3>
        <p className='text-[var(--color-gold)] font-bold text-lg'>Download de drivers</p>
        <p className='text-sm text-[var(--color-light-blue)] mt-1'>
          Evite problemas na hora de rodar o jogo. Mantenha seus drivers atualizados!
        </p>

        <div className='flex flex-wrap justify-center items-center gap-6 mt-6'>
          {drivers.map((driver) => (
            <a
              key={driver.name}
              href={driver.href}
              target='_blank'
              rel='noopener noreferrer'
              className='grayscale hover:grayscale-0 transition'
            >
              <Image src={driver.logo} alt={driver.name} width={64} height={64} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequirementsCard({
  title,
  data,
}: {
  title: string;
  data: {
    os: string;
    processor: string;
    ram: string;
    storage: string;
    gpu: string;
  };
}) {
  return (
    <div className='bg-[var(--color-medium-blue)] border border-[var(--color-light-blue)] rounded shadow-md p-6 w-full max-w-md'>
      <h4 className='text-center font-sans font-bold text-lg mb-4 text-[var(--color-gold)]'>{title}</h4>
      <table className='w-full text-sm text-white'>
        <tbody className='[&>tr>td]:py-1 [&>tr>td:first-child]:font-semibold'>
          <tr>
            <td>Sistema Operacional:</td>
            <td className='text-right'>{data.os}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td className='text-right'>{data.processor}</td>
          </tr>
          <tr>
            <td>Memória RAM:</td>
            <td className='text-right'>{data.ram}</td>
          </tr>
          <tr>
            <td>Armazenamento:</td>
            <td className='text-right'>{data.storage}</td>
          </tr>
          <tr>
            <td>Placa de Vídeo:</td>
            <td className='text-right'>{data.gpu}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
