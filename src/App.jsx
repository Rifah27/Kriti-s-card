import { AmbientBackground } from './components/background/AmbientBackground';
import { GreetingCard } from './components/card/GreetingCard';

/** Single-section luxury birthday card SPA */
export default function App() {
  return (
    <div className="relative h-full min-h-dvh w-full overflow-hidden">
      <AmbientBackground />
      <GreetingCard />
    </div>
  );
}
