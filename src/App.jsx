import { AmbientBackground } from './components/background/AmbientBackground';
import { GreetingCard } from './components/card/GreetingCard';
import { MusicToggle } from './components/layout/MusicToggle';
import { useMusic } from './hooks/useMusic';

/** Single-section luxury birthday card SPA */
export default function App() {
  const { playing, toggle } = useMusic();

  return (
    <div className="relative h-full min-h-dvh w-full overflow-hidden">
      <AmbientBackground />
      <MusicToggle playing={playing} onToggle={toggle} />
      <GreetingCard />
    </div>
  );
}
