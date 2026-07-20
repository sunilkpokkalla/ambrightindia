import { useState } from 'react';

const CLIENTS = [
  { name: 'Beghou', domain: 'beghouconsulting.com' },
  { name: 'DirectTire', domain: 'directtire.com' },
  { name: 'Johnson & Johnson', domain: 'jnj.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Medline', domain: 'medline.com' },
  { name: 'Mr. Cooper', domain: 'mrcooper.com' },
  { name: 'Sony', domain: 'sony.com' },
  { name: 'Amex', domain: 'americanexpress.com' },
  { name: 'Medical Mutual', domain: 'medmutual.com' },
  { name: 'Health Partners', domain: 'healthpartners.com' },
  { name: 'TenTek', domain: 'tentek.com' },
  { name: 'Eliassen Group', domain: 'eliassen.com' },
  { name: 'Amzech', domain: 'amzech.com' }, // or amitech
  { name: 'TechStar', domain: 'techstars.com' },
  { name: 'IntraEdge', domain: 'intraedge.com' },
  { name: 'Amplified Sourcing', domain: 'amplifiedsourcing.com' },
  { name: 'TCS', domain: 'tcs.com' },
  { name: 'Artech', domain: 'artech.com' },
];

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${domain}`;

  return (
    <div className="flex items-center justify-center gap-2 pr-12 sm:pr-20 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
      {!imgError ? (
        <img
          src={logoUrl}
          alt={name}
          className="h-8 max-w-[120px] object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="whitespace-nowrap text-[22px] font-extrabold tracking-tight text-gray-800">
          {name}
        </span>
      )}
    </div>
  );
}

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
            <ClientLogo key={i} name={client.name} domain={client.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
