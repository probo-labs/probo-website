import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="bg-slate-950 py-32 text-white"
    >
      <Container className="text-center">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Ready to see ProboLabs.ai in action?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Capture your first journey in minutes. Start free — no setup needed.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="mailto:hello@probolabs.ai" color="white" className="text-blue-600">
            Start free trial
          </Button>
        </div>
      </Container>
    </section>
  )
}
