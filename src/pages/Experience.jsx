import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const icons = {
  facebook: FaFacebook,
  behance: FaBehance,
  twitter: FaTwitter,
  instagramm: FaInstagram,
  linkedin: FaLinkedin,
}

const items = [
  {
    id: 'facebook',
    name: 'facebook',
    years: '2019-2021',
    description:
      'Assertively exploit wireless initiatives rather than synergistic core competencies.',
  },
  {
    id: 'behance',
    name: 'behance',
    years: '2017-2019',
    description: ' im working via developer 9 years and i know all about design',
  },
  {
    id: 'twitter',
    name: 'twitter',
    years: '2014-2017',
    description:
      'Credibly streamline mission-critical value with multifunctional functionalities. Leading team designers.',
  },
  {
    id: 'instagramm',
    name: 'instagramm',
    years: '2012-2014',
    description:
      'Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.',
  },
  {
    id: 'linkedin',
    name: 'linkedin',
    years: '2006-2012',
    description:
      'Assertively exploit wireless initiatives rather than synergistic core competencies.',
  },
]

export default function Experience() {
  return (
    <section className="relative grid grid-cols-[minmax(240px,626px)_minmax(0,1fr)] min-h-[calc(100dvh-89px)] bg-grain bg-vignette">
      <img
        className="absolute inset-0 size-full object-cover opacity-35"
        src="/images/experience-bg.svg"
        alt=""
        width={2112}
        height={1987}
        loading="lazy"
      />
      <div className="relative z-[1] flex flex-col gap-[22px] min-w-0 pt-9 px-7 pb-7">
        <h1 className="section-title">
          <span className="flex justify-between gap-8 max-w-[520px]">
            <span>EDUCATION</span>
            <span>&</span>
          </span>
          <span>EXPERIENCE</span>
        </h1>
        <p className="text-body text-cream">
          Professional awards I’ve reached during my working times.
        </p>
        <p className="text-body text-cream max-w-[320px]">
          I have been developing sites for 8 years and I know for sure the main trends and
          directions of modern design, you will get a decent result
        </p>
        <a
          className="inline-flex items-center justify-center w-[196px] h-[52px] rounded-pill bg-accent text-cream text-form"
          href="/Pattison-resume.pdf"
          aria-label="Download resume"
        >
          resume
        </a>
      </div>
      <div className="relative z-[1] flex flex-col gap-[22px] min-w-0 pt-[26px] pr-[72px] pb-7 pl-5">
        {items.map((item) => {
          const Icon = icons[item.id]
          return (
            <article key={item.id} className="experience-row">
              <Icon className="size-[58px] text-[58px] text-cream" aria-hidden="true" />
              <div>
                <p className="text-body text-cream-muted">{item.years}</p>
                <h3 className="text-list leading-[1.3] lowercase">{item.name}</h3>
              </div>
              <p className="text-body text-cream">{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
