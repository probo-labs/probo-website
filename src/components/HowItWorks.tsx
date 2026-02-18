import { Container } from '@/components/Container'

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Download and install the app',
      time: '<2 min',
    },
    {
      number: 2,
      title: 'Register',
      time: '<1 min, free, no credit card required',
    },
    {
      number: 3,
      title: 'Press record and interact with your app like a user. No selectors. No scripting.',
      time: '<1 min',
    },
  ]

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              E2E testing is painful for predictable reasons
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span>Recorded tests generate brittle selectors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span>Minor UI changes break half your suite</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">•</span>
                <span>Maintaining tests costs more than writing them</span>
              </li>
            </ul>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Probium fixes this by recording tests at the browser level and regenerating selectors when the DOM changes — automatically.
            </p>
          </div>

          {/* Right side */}
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              How It Works
            </h2>
            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-blue-800"
                      style={{ 
                        backgroundColor: '#bfdbfe',
                        borderRadius: '50%',
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 inline">
                      {step.title}
                      <span className="ml-2 text-base font-normal text-slate-600">
                        ({step.time})
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

