export default function ParametersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Parameter Management
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to manage test data and parameters in your scenarios.
        </p>
      </div>

      <div className="space-y-8">
        {/* Parameters Table */}
        <section id="table" className="scroll-mt-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Parameters Table Overview</h2>
            <p className="text-slate-700 mb-4">
              The Parameters table stores all textual data captured during scenario recording and execution.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Types of Parameters</h3>
            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Navigation Data</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• URLs of web pages visited</li>
                </ul>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Form Data</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Data entered into online forms</li>
                  <li>• Input field values</li>
                </ul>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Validation Data</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Expected text values for Assert steps</li>
                  <li>• Text values for Wait For steps</li>
                </ul>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Dynamic Data</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Extracted text from Extract steps</li>
                  <li>• Results from Ask AI steps</li>
                  <li>• Output from custom scripts</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Viewing the Parameters Table</h4>
              <p className="text-blue-800">
                Click the <span className="font-semibold text-blue-600">Params</span> button in the
                bottom toolbar of the side panel. The parameters table will open in the main browser window.
              </p>
            </div>
          </div>
        </section>

        {/* Editing and Binding */}
        <section id="editing" className="scroll-mt-6">
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Editing and Binding Parameters</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Editing Parameters</h3>
            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">How to Edit</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Open the Parameters table</li>
                <li>Click the <span className="font-semibold">Edit</span> button</li>
                <li>Modify the parameter values as needed</li>
                <li>Confirm or cancel your changes</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Linking Parameters</h3>
            <p className="text-slate-700 mb-4">
              You can link parameters together by referencing one parameter&apos;s variable name
              in another parameter&apos;s value.
            </p>

            <div className="rounded-lg bg-slate-50 p-6 border border-slate-200 mb-4">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Manual Linking</h4>
              <p className="text-slate-700 mb-3">
                When editing a parameter value, you can reference another parameter by using its variable name.
                This creates a link where the value is dynamically pulled from the referenced parameter.
              </p>
              <div className="rounded-lg bg-blue-50 p-3 border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <span className="font-semibold">Example:</span> If parameter <span className="font-mono">user_email</span> has
                  the value &quot;test@example.com&quot;, you can set another parameter&apos;s value
                  to reference <span className="font-mono">user_email</span> so it always uses the same email.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-green-900 mb-3">Automatic Binding</h4>
              <p className="text-green-800 mb-3">
                Click the <span className="font-semibold">Binding</span> button to automatically link
                parameters with identical text values:
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">1.</span>
                  <span>Probium groups all parameters with the same value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">2.</span>
                  <span>For each group, the first parameter becomes the primary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">3.</span>
                  <span>The primary parameter retains its value unchanged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">4.</span>
                  <span>All other parameters in the group reference the primary parameter&apos;s name</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Benefit:</span> Linking parameters means you only
                need to update one value, and all linked parameters will automatically use the new value.
              </p>
            </div>
          </div>
        </section>

        {/* Parameter Sets */}
        <section id="sets" className="scroll-mt-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Parameter Sets and Cloning</h2>
            <p className="text-slate-700 mb-4">
              You can create multiple parameter sets for a single scenario, allowing you to run
              the same test with different data.
            </p>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Creating a New Parameter Set</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Open the Parameters table</li>
                <li>Click the <span className="font-semibold">Clone</span> button</li>
                <li>A copy of the current parameter set is created</li>
                <li>Edit the new parameter set as needed</li>
                <li>Save your changes</li>
              </ol>
            </div>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Selecting a Parameter Set for Replay</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Click on the scenario&apos;s <span className="font-semibold">Details</span></li>
                <li>In the <span className="font-semibold">Active Parameter Set</span> dropdown, select the desired set</li>
                <li>When you replay the scenario, it will use the selected parameter set</li>
              </ol>
            </div>

            <div className="rounded-lg bg-purple-50 p-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Use Cases for Multiple Parameter Sets</h4>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Testing with different user accounts (admin, regular user, guest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Running the same flow with various input data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Testing edge cases and boundary conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Data-driven testing scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Testing in different environments (dev, staging, production)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Secret Parameters */}
        <section id="secrets" className="scroll-mt-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security and Secret Parameters</h2>
            <p className="text-slate-700 mb-4">
              Probium takes your security seriously and handles sensitive data with special care.
            </p>

            <div className="rounded-lg bg-red-50 p-6 border border-red-200 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Important Security Notice</h3>
              <p className="text-red-800">
                We do <span className="font-bold">NOT</span> store sensitive information (such as passwords
                used in authentication scenarios) on our servers. This data is stored exclusively on your
                local computer.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What Are Secret Parameters?</h3>
              <p className="text-slate-700 mb-3">
                When you record scenarios involving sensitive information, these values are automatically
                marked as secret:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
                <li>Login passwords</li>
                <li>API keys</li>
                <li>Authentication tokens</li>
                <li>Credit card information</li>
                <li>Other confidential data</li>
              </ul>
            </div>

            <div className="rounded-lg bg-green-50 p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">How Secret Parameters Work</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🔒</span>
                  <span>
                    <span className="font-semibold">Local Storage:</span> Secret values are stored only
                    in your local environment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🔒</span>
                  <span>
                    <span className="font-semibold">Never Transmitted:</span> Your sensitive data never
                    leaves your computer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🔒</span>
                  <span>
                    <span className="font-semibold">Automatic Detection:</span> Probium automatically
                    identifies password fields and other sensitive inputs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🔒</span>
                  <span>
                    <span className="font-semibold">Secure Replay:</span> During replay, secrets are
                    retrieved from local storage only
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
