import { DownloadButton } from '@/components/DownloadButton'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="download"
      className="bg-slate-950 py-32 text-white"
    >
      <Container className="text-center">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Try Probium Now.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Stop fixing broken tests.<br />
          Record them once. Let Probium keep them working.<br />
          Create your first test in minutes.
        </p>
        <div className="mt-10 flex justify-center">
          <DownloadButton color="white" className="!text-black hover:bg-white hover:!text-black" />
        </div>
      </Container>
    </section>
  )
}
