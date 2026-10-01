export function Chevron({ className = '' }) {
  return (
    <svg
      className={`chevron ${className}`}
      viewBox="0 0 20 20"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7.5 10 13.5 16 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRight({ className = '' }) {
  return (
    <svg
      className={`menu-arrow ${className}`}
      viewBox="0 0 20 20"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const groupIcons = {
  security: 'M10 2.5 16 5v5.2c0 3.6-2.5 6.3-6 7.3-3.5-1-6-3.7-6-7.3V5l6-2.5Z',
  electronic: 'M6 3.5h8v13H6z M9 7h2 M9 10h2 M9 13h2',
  physical: 'M10 3.5a3 3 0 0 1 3 3v3h2.5V17h-11V9.5H7v-3a3 3 0 0 1 3-3Z',
  access: 'M3 7.5h14 M5.5 7.5V4.5h9v3 M6 11h8 M6 14.5h8',
  fleet: 'M2.5 6.5h9v6h-9z M11.5 9h3l2 2v1.5h-5z M6 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M14 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
}

export function MenuIcon({ name }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
      <path d={groupIcons[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
