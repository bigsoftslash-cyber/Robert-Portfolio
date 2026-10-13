import { FiArrowUpRight } from 'react-icons/fi'

export function ListRow({ title, active, onSelect, id }) {
  return (
    <button
      type="button"
      className={
        active
          ? 'flex items-center justify-between h-[52px] w-full border-t border-b border-cream text-cream text-list bg-transparent text-left p-0'
          : 'flex items-center justify-between h-[52px] w-full border-b border-line text-cream-muted text-list bg-transparent text-left p-0'
      }
      onClick={() => onSelect(id)}
      onMouseEnter={() => onSelect(id)}
      aria-current={active ? 'true' : undefined}
      aria-expanded={active}
    >
      <span>{title}</span>
      {active ? <FiArrowUpRight aria-hidden="true" size={27} /> : null}
    </button>
  )
}
