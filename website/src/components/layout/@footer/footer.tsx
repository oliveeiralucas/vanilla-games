'use client';

import { useEffect, useState } from 'react';
import { getSubdomain, getMenuBySubdomain } from '../@navbar/utils';
import { CameraIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import footerBg from '@/images/perfect-word.png';
import Link from 'next/link';

const navigation = {
  social: [
    { name: 'Facebook', href: '#', icon: ChatBubbleLeftRightIcon },
    { name: 'Instagram', href: '#', icon: CameraIcon },
    { name: 'X', href: '#', icon: GlobeAltIcon },
    { name: 'YouTube', href: '#', icon: PlayCircleIcon },
  ],
};

const institutional = [
  { label: 'Termos de Serviço', href: '/terms-of-service' },
  { label: 'Política de Privacidade', href: '/privacy-policy' },
  { label: 'Regras do Servidor', href: '/server-rules' },
  { label: 'Informações de Contato', href: '/contact-information' },
];

export default function Footer() {
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    const host = window.location.hostname;
    setSubdomain(getSubdomain(host));
  }, []);

  const menuItems = getMenuBySubdomain(subdomain);

  return (
    <footer
      className='relative bg-no-repeat bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className='absolute inset-0 bg-black/40 z-0' aria-hidden='true' />

      <div className='mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Navegação */}
          <nav aria-labelledby='navigation-heading'>
            <h2 id='navigation-heading' className='text-base font-semibold text-[var(--color-gold)] uppercase mb-4'>
              Navegação
            </h2>
            <ul className='space-y-2'>
              {menuItems.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <span className='font-semibold text-white'>{item.label}</span>
                    <ul className='ml-4 mt-1 space-y-1'>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className='text-sm text-gray-300 hover:text-white'>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href={item.href} className='text-sm text-white hover:underline'>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Institucional */}
          <section aria-labelledby='institutional-heading'>
            <h2 id='institutional-heading' className='text-base font-semibold text-[var(--color-gold)] uppercase mb-4'>
              Institucional
            </h2>
            <ul className='space-y-2'>
              {institutional.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className='text-sm text-gray-300 hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Newsletter */}
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-sm font-semibold text-white'>Receba novidades</h3>
            <p className='mt-2 text-sm text-gray-300 font-display'>As últimas atualizações direto no seu e-mail.</p>
          </div>
          <form className='mt-6 sm:flex sm:max-w-md lg:mt-0'>
            <label htmlFor='email-address' className='sr-only'>
              Email
            </label>
            <input
              id='email-address'
              type='email'
              autoComplete='email'
              required
              placeholder='Digite seu e-mail'
              className='w-full min-w-0 rounded-md bg-white/90 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:w-64 placeholder:font-display'
            />
            <div className='mt-4 sm:mt-0 sm:ml-4'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold font-display text-white shadow-sm hover:bg-indigo-500'
              >
                Assinar
              </button>
            </div>
          </form>
        </div>

        {/* Rodapé inferior */}
        <div className='mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex gap-x-6 md:order-2'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
          <p className='mt-8 text-sm text-gray-300 md:order-1 md:mt-0'>
            &copy; {2025} Vanilla Games. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
