import { GradientMesh } from './GradientMesh';
import { ParticleField } from './ParticleField';
import { MachliWhispers } from './MachliWhispers';

export function AmbientBackground() {
  return (
    <div className="glass-veil fixed inset-0 overflow-hidden bg-luxury-mesh pointer-events-none">
      <GradientMesh />
      <ParticleField />
      <MachliWhispers />
      <div className="absolute inset-0 bg-linear-to-t from-[#11051a]/80 via-transparent to-[#06040c]/70" />
    </div>
  );
}
