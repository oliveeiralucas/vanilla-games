import AboutSection from '@/components/sections/@about/aboutSection';
import CreateAccountSection from '@/components/sections/@cta/createAccount';
import GamesSection from '@/components/sections/@games/gamesSection';
import HeroSection from '@/components/sections/@hero/heroSection';
import StreamersSection from '@/components/sections/@streamers/Streamers';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <CreateAccountSection />
      <StreamersSection />
    </div>
  );
}
