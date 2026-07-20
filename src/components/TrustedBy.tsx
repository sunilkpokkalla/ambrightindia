import React from 'react';
import { 
  Building2, Monitor, HeartPulse, Wallet, Target, Network, Layers, ShieldCheck, Database, 
  Cpu, Briefcase, Code, Terminal, Server, Globe2, Activity, Zap, Factory
} from 'lucide-react';

const CLIENTS = [
  { name: 'Behguo', icon: Globe2 },
  { name: 'DirectTire', icon: Factory },
  { name: 'Johnson & Johnson', icon: HeartPulse },
  { name: 'Microsoft', icon: Monitor },
  { name: 'Medline', icon: Activity },
  { name: 'Mr. Cooper', icon: Building2 },
  { name: 'Sony', icon: Target },
  { name: 'Amex', icon: Wallet },
  { name: 'Medical Mutual', icon: ShieldCheck },
  { name: 'Health Partners', icon: HeartPulse },
  { name: 'TenTek', icon: Network },
  { name: 'Elliassan Group', icon: Layers },
  { name: 'Amzech', icon: Cpu },
  { name: 'TechStar', icon: Zap },
  { name: 'IntraEdge', icon: Database },
  { name: 'Amplified Sourcing', icon: Briefcase },
  { name: 'TCS', icon: Terminal },
  { name: 'Artech', icon: Code },
];

export default function TrustedBy() {
  // Duplicate the list to allow for seamless infinite scrolling
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-b border-gray-100 bg-white py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 mb-8 text-center">
        <p className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase">
          Trusted by innovative companies and vendors worldwide
        </p>
      </div>
      
      {/* Marquee container */}
      <div className="relative flex max-w-[100vw] overflow-hidden bg-white group">
        {/* Fade gradients on edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[100px] bg-gradient-to-r from-white to-transparent sm:w-[200px]"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[100px] bg-gradient-to-l from-white to-transparent sm:w-[200px]"></div>

        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, i) => (
            <div key={i} className="flex items-center gap-2.5 pr-12 sm:pr-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <client.icon size={26} className="text-gray-700" strokeWidth={1.5} />
              <span className="whitespace-nowrap text-[22px] font-extrabold tracking-tight text-gray-800">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
