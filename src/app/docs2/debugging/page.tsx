export default function DebuggingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Debugging and Step-by-Step Execution
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to debug scenarios using breakpoints and step-by-step execution.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Step-by-Step Scenario Execution
          </h2>
          <p className="text-slate-700">
            You can execute scenarios partially or step-by-step using breakpoints and the Debug menu.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Setting Breakpoints</h3>
          <p className="text-blue-800 mb-3">
            Place a breakpoint on any step where you want execution to pause. You can set multiple breakpoints
            throughout your scenario to control execution flow precisely.
          </p>
          <p className="text-blue-800">
            Breakpoints are useful for inspecting the state of the page at specific points during
            test execution or for adding new steps mid-scenario.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Debug Menu Options</h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 border-l-4 border-green-500 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Start</h4>
              <p className="text-slate-700 mb-3">
                Begins execution from the first step and runs until the first breakpoint is reached,
                or until the end if no breakpoints are set.
              </p>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="text-slate-600 text-sm">
                  <span className="font-semibold">Use when:</span> You want to run the scenario from
                  the beginning up to a specific point.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border-l-4 border-blue-500 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Continue</h4>
              <p className="text-slate-700 mb-3">
                Resumes execution from the current position and runs until the next breakpoint,
                or until the end if no more breakpoints exist.
              </p>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="text-slate-600 text-sm">
                  <span className="font-semibold">Use when:</span> You&apos;ve paused at a breakpoint
                  and want to continue to the next breakpoint or completion.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border-l-4 border-purple-500 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Step</h4>
              <p className="text-slate-700 mb-3">
                Executes only the next single step in the scenario, then pauses.
              </p>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="text-slate-600 text-sm">
                  <span className="font-semibold">Use when:</span> You want to carefully observe
                  each step&apos;s execution and its effect on the page.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-green-50 p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Debugging Workflow</h3>
          <p className="text-green-800 mb-3">
            Use breakpoints and step-by-step execution to:
          </p>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Troubleshoot failing scenarios by isolating problematic steps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Verify individual steps work correctly before running the entire scenario</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Inspect page state at specific points in the test flow</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Test partial scenario execution during development</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-amber-50 p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900 mb-3">Example Debugging Session</h3>
          <ol className="list-decimal list-inside space-y-2 text-amber-800">
            <li>Set a breakpoint on step 5 (where you suspect an issue)</li>
            <li>Click <span className="font-semibold">Start</span> in the Debug menu</li>
            <li>The scenario runs steps 1-4 and pauses at step 5</li>
            <li>Inspect the page to verify the state is correct</li>
            <li>Click <span className="font-semibold">Step</span> to execute step 5 and observe what happens</li>
            <li>If the issue is found, fix it; otherwise, continue stepping or use Continue</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
