export default function EditingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Scenario Editing and Modification
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to modify recorded scenarios by deleting or adding steps.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Editing Recorded Scenarios
          </h2>
          <p className="text-slate-700">
            After recording a scenario, you can modify it by deleting steps or adding new ones.
            This flexibility allows you to refine your tests without re-recording from scratch.
          </p>
        </div>

        <section>
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Deleting Steps</h3>
            <p className="text-slate-700 mb-4">
              Remove unnecessary or incorrect steps from your scenario.
            </p>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">How to Delete Steps</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Select the steps you want to delete (you can select multiple steps)</li>
                <li>Click the delete button</li>
                <li>The selected steps will be removed from the scenario</li>
              </ol>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 mt-4">
              <p className="text-amber-900 text-sm">
                <span className="font-semibold">Caution:</span> Make sure you don&apos;t delete
                steps that other steps depend on. For example, if step 5 uses data extracted in
                step 3, deleting step 3 will cause step 5 to fail.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Adding New Steps</h3>
            <p className="text-slate-700 mb-4">
              Insert new steps into an existing scenario at any position.
            </p>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">How to Add Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li>
                  <span className="font-medium text-slate-900">Set a Breakpoint:</span> Place a breakpoint
                  on the step where you want to insert new steps. The new steps will be added before this step.
                </li>
                <li>
                  <span className="font-medium text-slate-900">Start Debug Mode:</span> Click{' '}
                  <span className="font-semibold">Start</span> in the Debug menu. The scenario will execute
                  up to the breakpoint and pause.
                </li>
                <li>
                  <span className="font-medium text-slate-900">Begin Recording:</span> Click the{' '}
                  <span className="font-semibold text-blue-600">Record</span> button.
                </li>
                <li>
                  <span className="font-medium text-slate-900">Add New Steps:</span> Perform the actions
                  you want to add to the scenario.
                </li>
                <li>
                  <span className="font-medium text-slate-900">Stop Recording:</span> Click{' '}
                  <span className="font-semibold text-blue-600">Record</span> again to save the new steps.
                </li>
              </ol>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 border border-blue-200 mt-4">
              <h4 className="font-semibold text-blue-900 mb-3">Example: Adding Validation Steps</h4>
              <p className="text-blue-800 mb-3">
                Suppose you have a login scenario, but you forgot to add a step that verifies
                the user&apos;s name appears after login:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                <li>Set a breakpoint on the step after login completes</li>
                <li>Run the scenario up to that breakpoint (it will log you in)</li>
                <li>Start recording</li>
                <li>Switch to Assert mode and click on the username element</li>
                <li>Stop recording</li>
                <li>The assertion step is now inserted into your scenario</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="rounded-lg bg-green-50 p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Best Practices</h3>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>
                <span className="font-semibold">Use breakpoints wisely:</span> Place them at logical
                points in your scenario where you want to insert new steps.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>
                <span className="font-semibold">Test incrementally:</span> After adding or deleting
                steps, replay the scenario to ensure it still works correctly.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>
                <span className="font-semibold">Build complex scenarios incrementally:</span> Use the
                combination of breakpoints and recording to build scenarios step by step, testing each
                section as you go.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
