import AboutSection from '@/components/sections/@home/about';
import CreateAccountSection from '@/components/sections/@home/createAccount';
import DiscordSection from '@/components/sections/@home/discord';
import GamesSection from '@/components/sections/@home/games';
import HeroSection from '@/components/sections/@home/hero';
import ServerFeaturesSection from '@/components/sections/@home/Server';
import StreamersSection from '@/components/sections/@home/Streamers';
import VideoBox from '@/components/sections/@home/video';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VideoBox />
      <AboutSection />
      <GamesSection />
      <CreateAccountSection />
      <StreamersSection />
      <ServerFeaturesSection />
      <DiscordSection />
    </div>
  );
}
