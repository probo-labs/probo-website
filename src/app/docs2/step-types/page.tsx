export default function StepTypesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Scenario Step Types
        </h1>
        <p className="text-lg text-slate-600">
          Understand the different types of steps you can include in your test scenarios.
        </p>
      </div>

      <div className="space-y-8">
        {/* Interact Mode */}
        <section id="interact" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Interaction (Interact Mode)</h2>
            <p className="text-slate-700 mb-4">
              This is the default mode for recording standard user interactions with the website.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Supported Actions</h3>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mb-4">
              <li>Clicking on buttons, links, and other clickable elements</li>
              <li>Filling out forms and input fields</li>
              <li>Scrolling through pages</li>
              <li>Navigating between pages</li>
              <li>Any other standard user interaction</li>
            </ul>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
              <p className="text-slate-700 text-sm">
                <span className="font-semibold">How to use:</span> Ensure that Interact mode is selected
                using the <span className="font-semibold text-blue-600">Change mode</span> button, then
                perform your desired actions on the website.
              </p>
            </div>
          </div>
        </section>

        {/* Assert Mode */}
        <section id="assert" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Assertions (Assert Mode)</h2>
            <p className="text-slate-700 mb-4">
              Assert steps verify that specific page elements contain expected text content.
              These are crucial for validating that your website displays the correct information.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record an Assertion</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>During recording, switch to <span className="font-semibold">Assert</span> mode using the Change mode button</li>
              <li>Click on the element whose text content you want to verify</li>
              <li>The current text content will be captured and saved</li>
            </ol>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">During Replay</h3>
            <p className="text-slate-700 mb-4">
              When the scenario is replayed, Probium will check if the element&apos;s text matches
              the expected value. If the texts don&apos;t match, the step will be marked as{' '}
              <span className="font-semibold text-red-600">failed</span>.
            </p>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
              <p className="text-amber-900 text-sm">
                <span className="font-semibold">Important:</span> Assertions help ensure your website
                displays correct information to users. Use them to validate critical content like
                success messages, user names, prices, and status indicators.
              </p>
            </div>
          </div>
        </section>

        {/* Wait For Mode */}
        <section id="wait-for" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Waiting Mechanisms (Wait for Mode)</h2>
            <p className="text-slate-700 mb-4">
              This step type waits for a specific element with specific text content to appear
              on the page before proceeding.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">When to Use</h3>
            <p className="text-slate-700 mb-2">Use Wait For steps when:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mb-4">
              <li>Content loads dynamically via AJAX</li>
              <li>Waiting for animations to complete</li>
              <li>Ensuring a success message appears</li>
              <li>Waiting for data to be processed</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Switch to <span className="font-semibold">Wait for</span> mode</li>
              <li>Wait for the desired element to appear on the page</li>
              <li>Click on the element</li>
              <li>The step will be recorded with the element&apos;s selector and text content</li>
            </ol>
          </div>
        </section>

        {/* Hover Mode */}
        <section id="hover" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Hover Actions (Hover Mode)</h2>
            <p className="text-slate-700 mb-4">
              Hover steps simulate moving the mouse cursor over a specific page element without clicking it.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Use Cases</h3>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mb-4">
              <li>Triggering dropdown menus</li>
              <li>Revealing tooltips</li>
              <li>Activating hover-based animations</li>
              <li>Testing hover states in UI components</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Switch to <span className="font-semibold">Hover</span> mode</li>
              <li>Wait for the target element to appear</li>
              <li>Click on the element you want to hover over</li>
              <li>During replay, the cursor will hover over this element</li>
            </ol>
          </div>
        </section>

        {/* Extract Mode */}
        <section id="extract" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Extraction (Extract Mode)</h2>
            <p className="text-slate-700 mb-4">
              Extract steps capture text content from page elements so you can use this data
              in subsequent steps of your scenario.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Common Use Cases</h3>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mb-4">
              <li>Extracting order IDs or confirmation numbers</li>
              <li>Capturing user-generated content</li>
              <li>Reading dynamic values to use in forms</li>
              <li>Storing reference data for later assertions</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>Switch to <span className="font-semibold">Extract</span> mode</li>
              <li>Click on the element containing the text you want to extract</li>
              <li>The extracted value is saved as a parameter</li>
              <li>You can reference this parameter in later steps</li>
            </ol>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Tip:</span> Extracted values appear in the Parameters
                table where you can view and manage them alongside other scenario parameters.
              </p>
            </div>
          </div>
        </section>

        {/* Email OTP */}
        <section id="email-otp" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Email OTP Integration</h2>
            <p className="text-slate-700 mb-4">
              This step type automates the process of receiving and entering one-time passwords
              sent via email during authentication flows.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record an Email OTP Step</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>Click the <span className="font-semibold text-blue-600">Actions</span> button in the toolbar</li>
              <li>Select <span className="font-semibold">OTP</span> from the dropdown menu</li>
              <li>In the OTP Wizard, choose <span className="font-semibold">Email OTP</span></li>
              <li>Enter the email address where the OTP will be sent</li>
              <li>Click <span className="font-semibold">Next</span></li>
              <li>Close the OTP Wizard</li>
              <li>Click on the input field where the OTP should be entered</li>
            </ol>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 mb-4">
              <p className="text-amber-900 text-sm">
                <span className="font-semibold">Important:</span> Probium currently works only
                with email addresses on the <span className="font-mono">@mailpit.probolabs.ai</span> domain!
              </p>
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">During Replay</h3>
            <p className="text-slate-700 mb-2">Probium will automatically:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Wait for the email to arrive</li>
              <li>Extract the OTP code from the email</li>
              <li>Enter the code into the specified field</li>
            </ul>
          </div>
        </section>

        {/* TOTP */}
        <section id="totp" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">TOTP and Authenticator App Support</h2>
            <p className="text-slate-700 mb-4">
              This step type handles authentication using time-based one-time passwords, similar
              to authenticator apps like Google Authenticator or Authy.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">How to Record a TOTP Step</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>Click the <span className="font-semibold text-blue-600">Actions</span> button</li>
              <li>Select <span className="font-semibold">OTP</span> from the dropdown</li>
              <li>In the OTP Wizard, choose <span className="font-semibold">TOTP (Shared secret)</span></li>
              <li>Enter the following information:
                <ul className="list-disc list-inside space-y-1 pl-6 mt-2">
                  <li>Secret key (the shared secret from your authenticator setup)</li>
                  <li>Code length (typically 6 digits)</li>
                  <li>Generation algorithm (usually SHA-1)</li>
                </ul>
              </li>
              <li>Click <span className="font-semibold">Next</span></li>
              <li>Close the OTP Wizard</li>
              <li>Click on the input field where the TOTP code should be entered</li>
            </ol>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
              <p className="text-blue-800 text-sm">
                During replay, Probium will generate the current TOTP code based on the shared
                secret and enter it into the specified field automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Ask AI */}
        <section id="ask-ai" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Ask AI Functionality</h2>
            <p className="text-slate-700 mb-4">
              The Ask AI step allows you to formulate questions in natural language that the AI
              will answer based on the current page content.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Example Questions</h3>
            <div className="space-y-3 mb-4">
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 text-sm">Yes/No Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;Is the user logged in to the website?&quot;
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 text-sm">Descriptive Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;What color is the submit button?&quot;
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 text-sm">Counting Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;How many products are displayed on the page?&quot;
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">Using AI Responses</h3>
            <p className="text-slate-700 mb-2">The value obtained from Ask AI can be:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Used as a condition for assertions</li>
              <li>Referenced in subsequent steps</li>
              <li>Stored as a parameter for later use</li>
            </ul>
          </div>
        </section>

        {/* Custom Scripts */}
        <section id="scripts" className="scroll-mt-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Custom Node.js Scripts</h2>
            <p className="text-slate-700 mb-4">
              For advanced use cases, you can execute arbitrary Node.js scripts as part of your scenario.
            </p>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">What You Can Do</h3>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mb-4">
              <li>Perform complex data transformations</li>
              <li>Make external API calls</li>
              <li>Generate dynamic test data</li>
              <li>Implement custom validation logic</li>
              <li>Integrate with external services</li>
            </ul>

            <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
              <p className="text-purple-900 text-sm">
                <span className="font-semibold">Advanced Feature:</span> Custom scripts give you
                unlimited flexibility to extend Probium&apos;s capabilities for your specific testing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
