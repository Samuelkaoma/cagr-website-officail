import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  textColor?: string
}

export function Logo({ textColor = "#84a27a" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="CAGR Logo" width={40} height={40} />
      <div className="flex flex-col">
        <span className="font-bold text-xl" style={{ color: textColor }}>
          CAGR
        </span>
        <span className="text-xs text-muted-foreground hidden sm:inline-block">
          Crest Atlas Geospatial and Research
        </span>
      </div>
    </Link>
  )
}
