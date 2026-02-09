import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Mission } from '@/components/Mission'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Mission />
        <PrimaryFeatures />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
