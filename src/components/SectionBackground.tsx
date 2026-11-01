interface SectionBackgroundProps {
  /**
   * Background image src. Leave empty — it will be configured in src/data/config.ts.
   * Example: '/images/hero-bg.jpg'
   */
  src?: string
  alt?: string
  overlay?: string
  children?: React.ReactNode
  className?: string
  id?: string
}

/**
 * Renders a full-bleed section background.
 * When `src` is empty, the overlay/gradient is applied over the base dark color.
 * Replace `src` values in src/data/config.ts to add background images.
 */
export default function SectionBackground({
  src,
  alt = '',
  overlay = 'bg-dark-900/70',
  children,
  className = '',
  id,
}: SectionBackgroundProps) {
  return (
    <div className={`relative ${className}`} id={id}>
      {/* Background image placeholder — add your image src in src/data/config.ts */}
      {src ? (
        <img
          src={src}
          alt={alt}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          loading="lazy"
        />
      ) : null}
      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 ${overlay} pointer-events-none`}
        aria-hidden="true"
      />
      {/* Section content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
