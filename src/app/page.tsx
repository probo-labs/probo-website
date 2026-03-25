import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LeadMagnet } from '@/components/LeadMagnet'
import { ProblemSection } from '@/components/ProblemSection'
import { ProcessSection } from '@/components/ProcessSection'
import { SolutionPillars } from '@/components/SolutionPillars'
import { ComplianceSection } from '@/components/ComplianceSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionPillars />
        <ComplianceSection />
        <ProcessSection />
        <LeadMagnet />
      </main>
      <Footer />
    </>
  )
}
