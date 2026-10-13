import { useState } from 'react'
import { ListRow } from '../components/ListRow.jsx'
import { CtaGroup } from '../components/RoundButton.jsx'
import heroMan from '../assets/img/Home.png'

const items = [
  {
    id: 'berling',
    title: 'BERLING agency website',
    preview: heroMan,
    alt: 'BERING brand recognition website preview',
  },
  {
    id: 'prettylittlething',
    title: 'Prettylittlething american shop',
    preview: heroMan,
    alt: 'Prettylittlething shop website preview',
  },
  {
    id: 'benhome',
    title: 'Benhome - Architecture theme',
    preview: heroMan,
    alt: 'Benhome architecture theme preview',
  },
  {
    id: 'gilhouse',
    title: 'Gilhouse - architecture website',
    preview: heroMan,
    alt: 'Gilhouse architecture website preview',
  },
  {
    id: 'gilber',
    title: 'gilber - personal website',
    preview: heroMan,
    alt: 'Gilber personal website preview',
  },
  {
    id: 'jonny',
    title: 'jonny - personal website',
    preview: heroMan,
    alt: 'Jonny personal website preview',
  },
]

export default function Projects() {
  const [activeId, setActiveId] = useState(items[0].id)
  const [hoveredId, setHoveredId] = useState(null)

  const active = items.find((item) => item.id === (hoveredId || activeId)) ?? items[0]

  return (
    <section className="grid grid-cols-[minmax(240px,626px)_minmax(0,1fr)] min-h-[calc(100dvh-89px)]">
      <div className="flex flex-col gap-[22px] min-w-0 pt-9 px-7 pb-7">
        <h1 className="section-title">projects</h1>
        <ul className="list-none m-0 p-0 max-w-[626px]">
          {items.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <ListRow
                id={item.id}
                title={item.title}
                active={item.id === (hoveredId || activeId)}
                onSelect={setActiveId}
              />
            </li>
          ))}
        </ul>
        <CtaGroup text="View all works" to="/projects" label="View all works" />
      </div>
      <div className="flex flex-col gap-[22px] min-w-0 pt-[26px] pr-[72px] pb-7 pl-5">
        <figure className="relative overflow-hidden h-[calc(100dvh-89px-26px)] bg-cream">
          <img
            src={heroMan}
            alt={active.alt}
            width={1093}
            height={903}
            loading="lazy"
            className="size-full object-cover"
          />
          <figcaption className="sr-only">{active.title}</figcaption>
          <span
            className="absolute -right-[8%] -bottom-[12%] font-heading text-next leading-[0.8] text-ink opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            NEXT
          </span>
        </figure>
      </div>
    </section>
  )
}