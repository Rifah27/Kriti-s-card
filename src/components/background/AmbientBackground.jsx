import { GradientMesh } from './GradientMesh';
import { ParticleField } from './ParticleField';
import { MachliWhispers } from './MachliWhispers';

export function AmbientBackground() {
  return (
    <div className="glass-veil fixed inset-0 overflow-hidden bg-luxury-mesh pointer-events-none">
      <GradientMesh />
      <ParticleField />
      <MachliWhispers />
      <div className="absolute inset-0 bg-linear-to-t from-midnight/50 via-transparent to-midnight/30" />
    </div>
  );
}
