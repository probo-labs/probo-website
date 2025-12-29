export default function UsageScenariosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Main Usage Scenarios
        </h1>
        <p className="text-lg text-slate-600">
          Learn the core workflows for working with Probium test scenarios.
        </p>
      </div>

      <div className="space-y-8">
        {/* Recording */}
        <section id="recording" className="scroll-mt-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scenario Recording</h2>
            <p className="text-slate-700 mb-4">
              Recording allows you to capture all interactions with a website, which can then be
              replayed automatically.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">How to Record</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Launch the Application:</span> Start Probium
                on your computer. This will open a browser with the Probium extension installed.
              </li>
              <li>
                <span className="font-medium text-slate-900">Open the Side Panel:</span> Click the Probium
                icon in the browser toolbar to open the side panel interface.
              </li>
              <li>
                <span className="font-medium text-slate-900">Navigate to Target Website:</span> In the main
                browser window, navigate to the website you want to test.
              </li>
              <li>
                <span className="font-medium text-slate-900">Start Recording:</span> Click the{' '}
                <span className="font-semibold text-blue-600">Record</span> button in the side panel.
              </li>
              <li>
                <span className="font-medium text-slate-900">Interact with the Website:</span> Perform your
                desired actions (clicks, form filling, scrolling, etc.). All interactions will be recorded.
              </li>
              <li>
                <span className="font-medium text-slate-900">Stop Recording:</span> Click the{' '}
                <span className="font-semibold text-blue-600">Record</span> button again to stop and save
                your scenario.
              </li>
            </ol>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Tip:</span> Plan your test scenario before recording.
                Think about the user flow you want to capture and any validations you want to include.
              </p>
            </div>
          </div>
        </section>

        {/* Replay */}
        <section id="replay" className="scroll-mt-6">
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scenario Replay</h2>
            <p className="text-slate-700 mb-4">
              Once you&apos;ve recorded a scenario, you can replay it to automatically execute all
              the recorded steps.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">How to Replay</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Select Your Scenario:</span> Choose the
                scenario you want to replay from your list of saved scenarios.
              </li>
              <li>
                <span className="font-medium text-slate-900">Click Replay:</span> Press the{' '}
                <span className="font-semibold text-green-600">Replay</span> button in the toolbar.
              </li>
              <li>
                <span className="font-medium text-slate-900">Watch the Automation:</span> The application
                will automatically perform all recorded actions in sequence.
              </li>
            </ol>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 mt-4">
              <p className="text-slate-700">
                The replay functionality executes each step exactly as it was recorded, allowing you
                to verify that your website behaves consistently across different runs.
              </p>
            </div>
          </div>
        </section>

        {/* Fortification */}
        <section id="fortification" className="scroll-mt-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scenario Fortification</h2>
            <p className="text-slate-700 mb-4">
              Fortification is an AI-powered process that makes your test scenarios more resilient
              to changes in the website&apos;s structure.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">How It Works</h3>
            <p className="text-slate-700 mb-4">
              During fortification, Probium generates AI prompts for each step in your scenario.
              These prompts enable the system to locate page elements even when their CSS selectors
              have changed.
            </p>

            <div className="rounded-lg bg-purple-50 p-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Benefits of Fortification</h4>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Tests remain functional even when website structure changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Reduces test maintenance overhead significantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Uses AI to intelligently locate elements based on context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Increases test reliability and longevity</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 mt-4">
              <p className="text-amber-900 text-sm">
                <span className="font-semibold">Best Practice:</span> Fortify your scenarios after
                recording them to ensure they remain stable as your website evolves.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
