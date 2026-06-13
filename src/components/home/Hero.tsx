import { useId, useLayoutEffect, useRef, useState } from 'react'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ArrowRightIcon } from '../common/icons'

const heroImageSrc = '/images/hero-software-consulting.webp'
const heroImageWidth = 960
const heroImageHeight = 1200

function PatternBlock({ x, y }: { x: number; y: number }) {
  return (
    <path
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
    />
  )
}

function HeroPattern() {
  const id = useId()
  const yOffset = -96
  const staticBlocks = [
    [1, 1],
    [2, 2],
    [4, 3],
    [6, 2],
    [7, 4],
    [5, 5],
  ] as const

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-x-0 -top-16 z-0 h-[1000px] w-full fill-white/70 stroke-heading/10"
    >
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0" />
      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {staticBlocks.map(([x, y]) => (
          <PatternBlock key={`${x}-${y}`} x={x} y={y} />
        ))}
      </svg>
      <defs>
        <pattern
          id={id}
          width="96"
          height="480"
          x="50%"
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(0 ${yOffset})`}
          fill="none"
        >
          <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
        </pattern>
      </defs>
    </svg>
  )
}

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null)
  const [imageReady, setImageReady] = useState(false)

  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setImageReady(true)
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[640px] bg-gradient-to-b from-brand-soft/70 via-surface-soft to-surface"
      />
      <HeroPattern />
      <Container className="relative z-10 pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-16 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.82fr)] lg:gap-16">
          <div className="max-w-3xl lg:max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold leading-6 text-brand-dark">
              Software Consulting
            </p>
            <h1 className="hero-display mt-6 text-4xl font-semibold leading-[1.05] tracking-normal text-heading text-balance sm:text-6xl">
              We build reliable <span className="text-brand-dark">software</span>{' '}
              for <span className="text-brand-dark">businesses</span> that need
              more than just a <span className="text-brand-dark">website</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              ekansoft helps businesses design, build, integrate, and scale web
              platforms, mobile apps, backend systems, AI workflows, and
              automation tools.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg">
                Start a project
              </Button>
              <Button to="/work" variant="secondary" size="lg">
                View our work
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl bg-brand-soft shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-border/70">
              <img
                ref={imgRef}
                src={heroImageSrc}
                alt="Illustrative software consulting workspace with app screens, code, and workflow diagrams"
                width={heroImageWidth}
                height={heroImageHeight}
                fetchPriority="high"
                decoding="sync"
                onLoad={() => setImageReady(true)}
                className={`aspect-[4/5] h-full w-full object-cover object-center lg:aspect-[5/6] ${imageReady ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
