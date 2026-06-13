import { usePageTitle } from '../hooks/usePageTitle'
import { Hero } from '../components/home/Hero'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { HowWeWork } from '../components/home/HowWeWork'
import { TechnologyMarquee } from '../components/home/TechnologyMarquee'
import { FeaturedWork } from '../components/home/FeaturedWork'
import { FounderCredibility } from '../components/home/FounderCredibility'
import { Process } from '../components/home/Process'
import { FinalCta } from '../components/home/FinalCta'

export default function Home() {
  usePageTitle('ekansoft | Software Consulting for Web, Mobile, Backend and AI Systems')

  return (
    <>
      <Hero />
      <ServicesPreview />
      <TechnologyMarquee />
      <HowWeWork />
      <FeaturedWork />
      <FounderCredibility />
      <Process />
      <FinalCta />
    </>
  )
}
