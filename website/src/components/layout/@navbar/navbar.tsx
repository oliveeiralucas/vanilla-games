'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLogoBySubdomain, getMenuBySubdomain, getSubdomain } from './utils';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import bgImage from '@/images/background-navbar.png';

type SubMenuItem = { label: string; href: string };

interface MenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

function Logo({ src }: { src: string }) {
  return (
    <Link href='/' className='flex items-center'>
      <Image src={src} alt='Logo' width={64} height={64} className='h-16 w-auto' quality={100} />
    </Link>
  );
}

function MenuItems({ items }: { items: MenuItem[] }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className='hidden md:flex gap-6 items-center text-gold font-sans text-xl'>
      {items.map((item) =>
        item.children ? (
          <div
            key={item.label}
            className='relative'
            onMouseEnter={() => setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className='flex items-center gap-1 hover:text-cyan transition'>
              {item.label}
              <ChevronDownIcon className='w-4 h-4' />
            </button>
            {openDropdown === item.label && (
              <div className='absolute left-0 top-full mt-2 w-48 bg-gold border border-fantasyPurple rounded shadow-lg z-50'>
                {item.children.map((child: SubMenuItem) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className='block px-4 py-2 text-gold hover:bg-gold hover:text-fantasy-purple transition'
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link key={item.label} href={item.href} className='hover:text-fantasy-purple transition'>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}

export default function Navbar() {
  const [subdomain, setSubdomain] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    setSubdomain(getSubdomain(host));
  }, []);

  const logoSrc = getLogoBySubdomain(subdomain);
  const menuItems: MenuItem[] = getMenuBySubdomain(subdomain);

  return (
    <header
      className='z-50 w-full'
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    >
      <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between py-2'>
        <Logo src={logoSrc} />

        <div className='flex items-center space-x-4'>
          <MenuItems items={menuItems} />

          {/* Botão estilizado como paralelogramo */}

          <button
            className='md:hidden inline-flex items-center text-lightBlue'
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6 text-white' />}
          </button>
        </div>
        <Link
          href='/painel'
          className='hidden md:inline-block relative px-6 py-2 text-sm font-display font-semibold text-white'
          style={{
            backgroundColor: '#3c4ba3',
            clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)',
          }}
        >
          Painel do Jogador
        </Link>
      </div>

      {mobileOpen && (
        <div className='md:hidden bg-gold px-4 pb-4 text-lightBlue'>
          {menuItems.map((item) =>
            item.children ? (
              <div key={item.label} className='mb-2'>
                <span className='font-semibold'>{item.label}</span>
                <div className='ml-4'>
                  {item.children.map((child: SubMenuItem) => (
                    <Link key={child.label} href={child.href} className='block py-1 text-sm hover:text-cyan'>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className='block py-2'>
                {item.label}
              </Link>
            )
          )}

          <Link
            href='/painel'
            className='block py-2 mt-3 text-left text-white'
            style={{
              backgroundColor: '#3c4ba3',
              clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)',
            }}
          >
            Painel do Jogador
          </Link>
        </div>
      )}
      <div className='border-b border-[#b39b68] border-3'></div>
    </header>
  );
}
