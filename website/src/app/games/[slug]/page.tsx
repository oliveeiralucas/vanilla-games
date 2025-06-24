// app/games/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { gamesData } from '@/lib/games';
import PresentationSection from '@/components/sections/@games/Presentation';
import SupportSection from '@/components/sections/@games/Suport';
import RequirementsSection from '@/components/sections/@games/Requirements';
import VideoSection from '@/components/sections/@games/Video';
import ContentSection from '@/components/sections/@games/Content';

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = gamesData[slug];

  if (!game) {
    return notFound();
  }

  return (
    <main className='min-h-screen bg-dark-blue text-white'>
      <PresentationSection data={game.presentation} />
      <ContentSection data={gamesData.pw.content} imageUrl={gamesData.pw.content.image} />{' '}
      <VideoSection videoUrl={game.video.videoUrl} thumbnailUrl={game.video.thumbnailUrl} />
      <RequirementsSection
        title={game.title}
        downloadUrl={game.recommendedRequirements.downloadUrl}
        minimumRequirements={game.recommendedRequirements.minimum}
        recommendedRequirements={game.recommendedRequirements.recommended}
        drivers={game.recommendedRequirements.drivers}
      />
      <SupportSection />
    </main>
  );
}
