import { ReactNode } from 'react';
import OrbitalSpheres from '../sections/OrbitalSpheres';

interface PageWrapperProps {
  children: ReactNode;
  showSpheres?: boolean;
}

export default function PageWrapper({ children, showSpheres = true }: PageWrapperProps) {
  return (
    <div className="relative min-h-screen">
      {showSpheres && <OrbitalSpheres />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
