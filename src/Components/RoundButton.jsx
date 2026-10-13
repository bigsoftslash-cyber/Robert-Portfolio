import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export function RoundButton({
  to,
  href,
  onClick,
  label,
  variant = 'filled',
  type = 'button',
}) {
  const className = variant === 'outline' ? 'round-btn-outline' : 'round-btn'
  const content = (
    <HiArrowLongRight className="w-[37px] h-auto" size={28} aria-hidden="true" />
  )

  if (to) {
    return (
      <Link to={to} className={className} aria-label={label}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        aria-label={label}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} aria-label={label}>
      {content}
    </button>
  )
}

export function CtaGroup({ text, ...buttonProps }) {
  return (
    <div className="cta-group">
      <span className="text-body">{text}</span>
      <RoundButton {...buttonProps} />
    </div>
  )
}
