'use client';

import { useState } from 'react';
import type { Category } from '@/app/data/categories';

type ArchiveCardsProps = {
  categories: Category[];
};

function PixelSymbol({ symbol, expanded }: { symbol: Category['symbol']; expanded: boolean }) {
  const base = 'fill-black transition-transform duration-500 ease-out';
  const zoom = expanded ? 'scale-100' : 'scale-[1.75]';

  return (
    <svg viewBox="0 0 100 160" className={`h-full w-full ${zoom}`} aria-hidden>
      {symbol === 'spiral' && (
        <g className={base}>
          <rect x="8" y="12" width="14" height="14" />
          <rect x="22" y="12" width="14" height="14" />
          <rect x="22" y="26" width="14" height="14" />
          <rect x="22" y="40" width="14" height="14" />
          <rect x="36" y="40" width="14" height="14" />
          <rect x="50" y="40" width="14" height="14" />
          <rect x="50" y="54" width="14" height="14" />
          <rect x="50" y="68" width="14" height="14" />
          <rect x="36" y="68" width="14" height="14" />
          <rect x="22" y="68" width="14" height="14" />
          <rect x="22" y="82" width="14" height="14" />
          <rect x="22" y="96" width="14" height="14" />
          <rect x="36" y="96" width="14" height="14" />
          <rect x="50" y="96" width="14" height="14" />
          <rect x="64" y="96" width="14" height="14" />
          <rect x="64" y="110" width="14" height="14" />
          <rect x="64" y="124" width="14" height="14" />
        </g>
      )}
      {symbol === 'face' && (
        <g className={base}>
          <rect x="16" y="16" width="68" height="12" />
          <rect x="16" y="28" width="12" height="88" />
          <rect x="72" y="28" width="12" height="88" />
          <rect x="16" y="116" width="68" height="12" />
          <rect x="34" y="54" width="10" height="10" />
          <rect x="56" y="54" width="10" height="10" />
          <rect x="44" y="82" width="12" height="10" />
        </g>
      )}
      {symbol === 'bomb' && (
        <g className={base}>
          <rect x="30" y="32" width="40" height="40" />
          <rect x="20" y="44" width="12" height="24" />
          <rect x="68" y="44" width="12" height="24" />
          <rect x="34" y="72" width="32" height="36" />
          <rect x="44" y="48" width="12" height="12" className="fill-zinc-100" />
          <rect x="44" y="88" width="12" height="12" className="fill-zinc-100" />
          <rect x="56" y="24" width="10" height="10" />
          <rect x="66" y="14" width="8" height="8" />
          <rect x="74" y="6" width="6" height="6" />
        </g>
      )}
      {symbol === 'horse' && (
        <g className={base}>
          <rect x="20" y="34" width="12" height="12" />
          <rect x="32" y="34" width="12" height="12" />
          <rect x="44" y="34" width="12" height="12" />
          <rect x="56" y="46" width="12" height="12" />
          <rect x="44" y="58" width="12" height="12" />
          <rect x="32" y="70" width="12" height="12" />
          <rect x="20" y="82" width="12" height="12" />
          <rect x="32" y="82" width="12" height="12" />
          <rect x="44" y="82" width="12" height="12" />
          <rect x="44" y="94" width="12" height="24" />
          <rect x="56" y="94" width="12" height="24" />
          <rect x="32" y="94" width="12" height="12" />
          <rect x="56" y="34" width="8" height="8" className="fill-zinc-100" />
        </g>
      )}
      {symbol === 'pointer' && (
        <g className={base}>
          <rect x="20" y="20" width="14" height="96" />
          <rect x="34" y="20" width="14" height="14" />
          <rect x="48" y="34" width="14" height="14" />
          <rect x="62" y="48" width="14" height="14" />
          <rect x="48" y="62" width="14" height="14" />
          <rect x="34" y="76" width="14" height="14" />
          <rect x="48" y="90" width="14" height="14" />
          <rect x="62" y="104" width="14" height="14" />
          <rect x="76" y="118" width="14" height="14" />
        </g>
      )}
    </svg>
  );
}

export function ArchiveCards({ categories }: ArchiveCardsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mt-14">
      <div className="hidden gap-4 md:flex">
        {categories.map((item) => {
          const expanded = activeId === item.id;
          const dimmed = activeId !== null && !expanded;
          return (
            <article
              key={item.id}
              onClick={() => setActiveId(expanded ? null : item.id)}
              className={`group relative h-[560px] cursor-pointer overflow-hidden rounded-[2px] border border-zinc-200 bg-zinc-100 transition-all duration-500 ease-out ${
                expanded ? 'w-[360px]' : 'w-[170px]'
              } ${dimmed ? 'scale-[0.985] opacity-35 blur-[0.5px]' : 'opacity-100'}`}
            >
              <div className="absolute inset-0 p-5">
                <div className={`h-[60%] w-full overflow-hidden ${expanded ? 'translate-y-0' : 'translate-y-8'} transition-transform duration-500`}>
                  <PixelSymbol symbol={item.symbol} expanded={expanded} />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs tracking-wide text-zinc-700">
                  {item.label}
                </span>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 border-t border-zinc-300 bg-zinc-50/95 p-5 transition-all duration-500 ${
                  expanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
                  {item.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <ul className="mt-4 space-y-1 text-sm text-zinc-900">
                  {item.works.map((work) => (
                    <li key={work}>— {work}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="space-y-3 md:hidden">
        {categories.map((item) => {
          const expanded = activeId === item.id;
          return (
            <article
              key={item.id}
              onClick={() => setActiveId(expanded ? null : item.id)}
              className="overflow-hidden rounded-[2px] border border-zinc-200 bg-zinc-100"
            >
              <div className="flex h-36 items-center justify-between px-4">
                <div className="h-28 w-24 overflow-hidden">
                  <PixelSymbol symbol={item.symbol} expanded={expanded} />
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-zinc-900">{item.title}</p>
                  <span className="mt-2 inline-flex rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-[11px] text-zinc-700">
                    {item.label}
                  </span>
                </div>
              </div>
              <div className={`grid transition-all duration-500 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden border-t border-zinc-300 bg-zinc-50/95 px-4 py-4 text-sm">
                  {item.description.map((line) => (
                    <p key={line} className="mb-2 text-zinc-700">
                      {line}
                    </p>
                  ))}
                  <ul className="mt-3 space-y-1 text-zinc-900">
                    {item.works.map((work) => (
                      <li key={work}>— {work}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
