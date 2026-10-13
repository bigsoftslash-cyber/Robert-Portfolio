import { CtaGroup } from '../Components/RoundButton.jsx'

const awards = [
  {
    id: 'championship',
    title: '1ST WINNER CREATIVE DESIGN CHAMPIONSHIP',
    description: 'For most favorited design voted by NY City Style customers',
  },
  {
    id: 'branding',
    title: 'BEST 5 BRANDING PROJECT OF NOMINATIONS',
    description: 'For best creative & usable health care mobile app design',
  },
  {
    id: 'membership',
    title: '8 Years of Membership',
    description: 'Has been part of the Envato Community for over 8 years',
  },
  {
    id: 'author',
    title: 'Exclusive Author',
    description: 'Sells items exclusively on Envato Market',
  },
]

export default function Awards() {
  return (
    <section className="relative grid grid-cols-[minmax(240px,626px)_minmax(0,1fr)] min-h-[calc(100dvh-89px)] bg-grain bg-vignette">
      <div className="relative z-[1] flex flex-col gap-[22px] min-w-0 pt-9 px-7 pb-7">
        <h1 className="section-title">
          <span>EXPLORE MY</span>
          <span>PROFILE</span>
        </h1>
        <p className="text-body text-cream">I love my work and every project is my pride</p>
        <p className="text-body text-cream max-w-[270px]">
          Hello, my name is Pavel Suslov and i am UX/UI designer and front-end developer, im
          working via developer 9 years and i know all about design
        </p>
        <CtaGroup
          text="View behance"
          href="https://www.behance.net/Paulggooo"
          label="View Behance profile"
        />
      </div>
      <div className="relative z-[1] flex flex-col gap-[22px] min-w-0 pt-[26px] pr-[72px] pb-7 pl-5">
        <h2 className="font-heading text-sub font-light">
          Professional <span className="text-accent">awards</span>
        </h2>
        {awards.map((item) => (
          <article key={item.id} className="award-row">
            <div className="size-[85px] bg-placeholder" aria-hidden="true" />
            <div>
              <h3 className="text-award uppercase">{item.title}</h3>
              <p className="text-body text-cream">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
