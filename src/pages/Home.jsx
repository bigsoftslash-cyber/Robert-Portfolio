import { Link } from 'react-router-dom'
import { CtaGroup } from '../components/RoundButton.jsx'
import heroMan from '../assets/img/hero-man.png'

const stats = [
  { id: 'years', value: '8', label: 'Years experience' },
  { id: 'awards', value: '5', label: 'Themeforest awwards' },
  { id: 'projects', value: '60', label: 'Projects Done' },
]

export default function Home() {
  return (
    <section className="grid grid-cols-[minmax(240px,626px)_minmax(0,1fr)] min-h-[calc(100dvh-89px)]">
      <div className="flex flex-col gap-[22px] min-w-0 pt-9 px-7 pb-7">
        <p className="text-body text-cream">
          Always available for freelance work, contact me and get your greate design ;)
        </p>
        <h1 className="section-title">
          <span className="flex justify-between gap-8 max-w-[520px]">
            <span>GET</span>
            <span>YOUR</span>
          </span>
          <span>GREAT DESIGN</span>
        </h1>
        <p className="text-body text-cream max-w-[270px]">
          Hello, my name is Pattison and i am UX/UI designer and front-end developer, im
          working via developer 9 years and i know all about design
        </p>
        <CtaGroup text="(hire me :)" to="/contact" label="Hire me" />
        <div className="flex flex-wrap gap-7 mt-auto pt-12">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-3">
              <span className="font-heading text-stat font-light">{stat.value}</span>
              <span className="text-body max-w-[8ch]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[22px] min-w-0 pt-[26px] pr-[72px] pb-7 pl-5 bg-grid">
        <div className="flex items-center h-full pt-12">
          <div className="rounded-full overflow-hidden w-full max-w-[608px] aspect-square shrink-0">
            <img
              src={heroMan}
              alt="Pattison working on a laptop"
              width={608}
              height={609}
              className="size-full object-cover"
            />
          </div>
          <div className="rounded-full bg-ink-overlay w-full max-w-[608px] aspect-square -ml-[12%] flex items-start p-[18%_16%] shrink-0">
            <Link to="/contact" className="text-[22px] underline text-cream">
              Fill out the brief to find out the cost
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
