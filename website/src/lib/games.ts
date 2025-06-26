import AMD from '@/images/drivers/amd.svg';
import Intel from '@/images/drivers/intel.svg';
import Nvidia from '@/images/drivers/nvidia.svg';
import Windows from '@/images/drivers/windows.svg';

import PW from '@/images/games/pw.webp';
import { GameContent } from '@/types/gameContent';

export const gamesData: Record<string, GameContent> = {
  pw: {
    slug: 'pw',
    title: 'Perfect World',
    presentation: {
      title: 'Aventura Fantástica',
      subtitle: 'Explore um mundo cheio de magia, desafios e combates épicos.',
      image: '/images/games/pw-banner.jpg',
    },
    recommendedRequirements: {
      downloadUrl: 'https://google.com',
      minimum: {
        os: 'Windows 7',
        processor: 'Intel Core i3',
        ram: '4GB',
        storage: '30GB livres',
        gpu: 'Intel HD Graphics 4000',
      },
      recommended: {
        os: 'Windows 10/11',
        processor: 'Intel Core i5 ou superior',
        ram: '8GB ou mais',
        storage: 'SSD com 30GB livres',
        gpu: 'GeForce GTX 750 ou superior',
      },
      drivers: [
        {
          name: 'AMD',
          logo: AMD.src,
          href: 'https://www.amd.com/pt/support',
        },
        {
          name: 'Intel',
          logo: Intel.src,
          href: 'https://www.intel.com.br/content/www/br/pt/support.html',
        },
        {
          name: 'NVIDIA',
          logo: Nvidia.src,
          href: 'https://www.nvidia.com/Download/index.aspx',
        },
        {
          name: 'Windows Update',
          logo: Windows.src,
          href: 'https://www.microsoft.com/pt-br/software-download/windows10',
        },
      ],
    },
    video: {
      videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ',
      thumbnailUrl: '/images/videos/perfect-world-thumb.jpg',
    },
    content: {
      image: PW.src,
      tag: 'Sobre o jogo',
      title: 'Perfect World: um mundo de fantasia ao seu alcance',
      intro:
        'Perfect World é um MMORPG de fantasia baseado na mitologia chinesa, onde você cria seu personagem, escolhe sua raça e classe e embarca em aventuras épicas por um vasto mundo aberto.',
      paragraphs: [
        'Lançado originalmente em 2005, Perfect World conquistou milhões de jogadores ao redor do mundo com sua jogabilidade imersiva e liberdade de exploração.',
        'O jogo permite que você voe com asas, monte criaturas, forme clãs e participe de guerras territoriais. Seu sistema de personalização é um dos mais avançados já feitos em MMOs.',
        'Com eventos constantes, conteúdo PvP e PvE e uma comunidade ativa, Perfect World é a escolha ideal para jogadores que buscam um RPG online completo e envolvente.',
      ],
      highlights: [
        {
          icon: 'CloudArrowUpIcon',
          title: 'Exploração Livre',
          description: 'Voe livremente pelo mapa, atravesse montanhas e mares com total liberdade.',
        },
        {
          icon: 'LockClosedIcon',
          title: 'Sistema de Cultivo',
          description: 'Evolua espiritualmente através de missões e desafios únicos do seu personagem.',
        },
        {
          icon: 'ServerIcon',
          title: 'Conquistas de Território',
          description: 'Lute por território com sua guilda em batalhas estratégicas massivas.',
        },
      ],
      outroTitle: 'Jogue como quiser',
      outroText:
        'Com diversas classes, sistemas de progressão e customização profunda, Perfect World se adapta ao seu estilo de jogo — seja você um guerreiro solitário ou parte de uma grande aliança.',
    },
  },
};
