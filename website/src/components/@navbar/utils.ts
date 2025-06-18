import bgVanillaLogo from '@/images/logo.png';

export function getSubdomain(host: string): string | null {
  const parts = host.split('.');
  if (parts.length > 2) return parts[0];
  return null;
}

export function getMenuBySubdomain(subdomain: string | null) {
  if (!subdomain) {
    return [
      { label: 'Home', href: '/' },
      { label: 'Streamers', href: '/streamers' },
      { label: 'Criar Conta', href: '/criar-conta' },
      { label: 'Lista de Jogos', href: '/jogos' },
    ];
  }

  return [
    { label: 'Home', href: '/' },
    { label: 'Sobre o Servidor', href: '/sobre' },
    { label: 'Notícias', href: '/noticias' },
    {
      label: 'Guias',
      href: '/guias',
      children: [
        { label: 'Iniciante', href: '/guias/iniciante' },
        { label: 'Avançado', href: '/guias/avancado' },
      ],
    },
    { label: 'Download', href: '/download' },
    { label: 'Criar Conta', href: '/criar-conta' },
    { label: 'Ranking', href: '/ranking' },
    { label: 'Regras', href: '/regras' },
  ];
}

export function getLogoBySubdomain(subdomain: string | null) {
  if (subdomain === 'ragnarok') return '/logos/logo-ragnarok.png';
  if (subdomain === 'pw') return '/logos/logo-pw.png';
  return `${bgVanillaLogo.src}`;
}
