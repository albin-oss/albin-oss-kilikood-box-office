import Link from 'next/link'

interface KilikoodLogoProps {
  showText?: boolean
  className?: string
  asLink?: boolean
}

export default function KilikoodLogo({ showText = true, className = '', asLink = true }: KilikoodLogoProps) {
  const content = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative w-12 h-12">
        {/* Yellow circle background */}
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center overflow-visible relative">
          {/* Bird nest with baby birds - black silhouette inside circle */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1 left-2"
          >
            {/* Nest base - bowl shape */}
            <path
              d="M4 18C4 18 6 20 8 20C10 20 12 18 12 18C12 18 14 20 16 20C18 20 20 18 20 18L20 22C20 22 18 24 16 24C14 24 12 22 12 22C12 22 10 24 8 24C6 24 4 22 4 22L4 18Z"
              fill="black"
            />
            {/* Baby bird 1 - facing right with open beak */}
            <circle cx="8" cy="18" r="1.5" fill="black" />
            <path
              d="M9 17L8.5 16L9 15.5L9.5 16L9 17Z"
              fill="black"
            />
            {/* Baby bird 2 - facing right with open beak */}
            <circle cx="16" cy="18" r="1.5" fill="black" />
            <path
              d="M17 17L16.5 16L17 15.5L17.5 16L17 17Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Branch with leaves - extending outside circle to top-left */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 -left-1"
        >
          {/* Branch - curved line */}
          <path
            d="M10 24L6 20L4 16L6 12L10 8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaf 1 - at middle of branch */}
          <ellipse
            cx="6"
            cy="16"
            rx="2.5"
            ry="4"
            fill="black"
            transform="rotate(-35 6 16)"
          />
          {/* Leaf 2 - at top of branch */}
          <ellipse
            cx="4"
            cy="12"
            rx="2.5"
            ry="4"
            fill="black"
            transform="rotate(-50 4 12)"
          />
          {/* Leaf 3 - at upper part */}
          <ellipse
            cx="8"
            cy="10"
            rx="2.5"
            ry="4"
            fill="black"
            transform="rotate(-65 8 10)"
          />
        </svg>
      </div>
      {showText && (
        <span className="text-yellow-400 font-bold text-xl lowercase tracking-tight">
          kilikood
        </span>
      )}
    </div>
  )

  if (asLink) {
    return <Link href="/">{content}</Link>
  }

  return content
}

