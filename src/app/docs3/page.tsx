import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const documentation = [
  {
    section: 'Introduction and Overview',
    id: 'introduction',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">What is Probium?</h2>
        <p className="text-slate-700">
          Probium is a powerful browser extension designed to simplify and automate website testing.
          It allows you to record, replay, and manage test scenarios for web applications with ease.
        </p>
        <p className="text-slate-700">
          With Probium, you can capture complex user interactions, validate page content, handle
          authentication flows including OTP (One-Time Password), and export your tests as executable
          TypeScript code for CI/CD integration.
        </p>
        <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Record and replay user interactions with websites</li>
            <li>AI-powered scenario fortification for resilient tests</li>
            <li>Support for complex authentication flows (Email OTP, TOTP)</li>
            <li>Parameter management and test data organization</li>
            <li>Team collaboration with project sharing</li>
            <li>Export tests as TypeScript code for automated testing</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    section: 'Installation Guide',
    id: 'installation',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">How to Download and Install</h2>
        <p className="text-slate-700">
          Probium is available as a browser application that you can install on your computer.
        </p>
        <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Installation Steps</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              Visit the{' '}
              <a
                href="https://apps.microsoft.com/detail/9phvfgqbndkb?hl=en-US&gl=WF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Microsoft Store page
              </a>{' '}
              for Probium
            </li>
            <li>Click the download/install button</li>
            <li>Follow the installation wizard</li>
            <li>Once installed, launch Probium from your applications</li>
            <li>The application will open a browser with the Probium extension installed</li>
            <li>Click the Probium icon in the browser toolbar to open the side panel</li>
          </ol>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
          <p className="text-amber-900">
            <span className="font-semibold">Note:</span> The Probium browser extension is automatically
            included with the application. You interact with it through a convenient side panel interface.
          </p>
        </div>
      </div>
    ),
  },
  {
    section: 'Authentication and Account Management',
    id: 'authentication',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Signing Up and Logging In</h2>
        <p className="text-slate-700">
          If you haven&apos;t signed in to Probium on your current computer, you&apos;ll see a
          &quot;Sign up at ProboLabs.ai&quot; button in the side panel when you open the application.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Authentication Methods</h3>
        <p className="text-slate-700">
          Click the sign-up button to access the authentication page, where you can choose from
          the following options:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
          <li>Sign in with Google</li>
          <li>Sign in with GitHub</li>
          <li>Sign in with LinkedIn</li>
          <li>Sign in with Microsoft SSO</li>
          <li>Sign up using email and password</li>
        </ul>

        <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
          <h4 className="font-semibold text-blue-900 mb-2">Account Linking</h4>
          <p className="text-blue-800">
            When you register with email and password or sign in for the first time using
            Google, GitHub, or LinkedIn, an account is created and linked to your email address.
          </p>
          <p className="text-blue-800 mt-2">
            You can subsequently sign in using any authentication method, as long as it uses
            the same email address associated with your account.
          </p>
        </div>
      </div>
    ),
  },
  {
    section: 'Main Usage Scenarios',
    id: 'usage-scenarios',
    subsections: [
      {
        title: 'Scenario Recording',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Recording a Test Scenario</h3>
            <p className="text-slate-700">
              Recording allows you to capture all interactions with a website, which can then be
              replayed automatically.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
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
                <span className="font-medium text-slate-900">Start Recording:</span> Click the <span className="font-semibold text-blue-600">Record</span> button
                in the side panel.
              </li>
              <li>
                <span className="font-medium text-slate-900">Interact with the Website:</span> Perform your
                desired actions (clicks, form filling, scrolling, etc.). All interactions will be recorded.
              </li>
              <li>
                <span className="font-medium text-slate-900">Stop Recording:</span> Click the <span className="font-semibold text-blue-600">Record</span> button
                again to stop and save your scenario.
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: 'Scenario Replay',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Replaying a Recorded Scenario</h3>
            <p className="text-slate-700">
              Once you&apos;ve recorded a scenario, you can replay it to automatically execute all
              the recorded steps.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Replay</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Select Your Scenario:</span> Choose the
                scenario you want to replay from your list of saved scenarios.
              </li>
              <li>
                <span className="font-medium text-slate-900">Click Replay:</span> Press the <span className="font-semibold text-blue-600">Replay</span> button
                in the toolbar.
              </li>
              <li>
                <span className="font-medium text-slate-900">Watch the Automation:</span> The application
                will automatically perform all recorded actions in sequence.
              </li>
            </ol>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 mt-4">
              <p className="text-slate-700">
                The replay functionality executes each step exactly as it was recorded, allowing you
                to verify that your website behaves consistently.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Scenario Fortification',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">What is Fortification?</h3>
            <p className="text-slate-700">
              Fortification is an AI-powered process that makes your test scenarios more resilient
              to changes in the website&apos;s structure.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How It Works</h4>
            <p className="text-slate-700">
              During fortification, Probium generates AI prompts for each step in your scenario.
              These prompts enable the system to locate page elements even when their CSS selectors
              have changed.
            </p>

            <div className="rounded-lg bg-green-50 p-4 border border-green-200 mt-4">
              <h5 className="font-semibold text-green-900 mb-2">Benefits of Fortification</h5>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Tests remain functional even when website structure changes</li>
                <li>Reduces test maintenance overhead</li>
                <li>Uses AI to intelligently locate elements based on context</li>
                <li>Increases test reliability and longevity</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    section: 'Scenario Step Types',
    id: 'step-types',
    subsections: [
      {
        title: 'Interaction (Interact Mode)',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Interact Mode</h3>
            <p className="text-slate-700">
              This is the default mode for recording standard user interactions with the website.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Supported Actions</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Clicking on buttons, links, and other clickable elements</li>
              <li>Filling out forms and input fields</li>
              <li>Scrolling through pages</li>
              <li>Navigating between pages</li>
              <li>Any other standard user interaction</li>
            </ul>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 mt-4">
              <p className="text-slate-700">
                <span className="font-semibold">How to use:</span> Ensure that Interact mode is selected
                using the <span className="font-semibold text-blue-600">Change mode</span> button, then
                perform your desired actions on the website.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Assertions (Assert Mode)',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Assert Mode</h3>
            <p className="text-slate-700">
              Assert steps verify that specific page elements contain expected text content.
              These are crucial for validating that your website displays the correct information.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record an Assertion</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>During recording, switch to <span className="font-semibold">Assert</span> mode using the Change mode button</li>
              <li>Click on the element whose text content you want to verify</li>
              <li>The current text content will be captured and saved</li>
            </ol>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">During Replay</h4>
            <p className="text-slate-700">
              When the scenario is replayed, Probium will check if the element&apos;s text matches
              the expected value. If the texts don&apos;t match, the step will be marked as <span className="font-semibold text-red-600">failed</span>.
            </p>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 mt-4">
              <p className="text-amber-900">
                <span className="font-semibold">Important:</span> Assertions help ensure your website
                displays correct information to users. Use them to validate critical content like
                success messages, user names, prices, and status indicators.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Waiting Mechanisms (Wait for Mode)',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Wait For Mode</h3>
            <p className="text-slate-700">
              This step type waits for a specific element with specific text content to appear
              on the page before proceeding.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">When to Use</h4>
            <p className="text-slate-700">
              Use Wait For steps when:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Content loads dynamically via AJAX</li>
              <li>Waiting for animations to complete</li>
              <li>Ensuring a success message appears</li>
              <li>Waiting for data to be processed</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Switch to <span className="font-semibold">Wait for</span> mode</li>
              <li>Wait for the desired element to appear on the page</li>
              <li>Click on the element</li>
              <li>The step will be recorded with the element&apos;s selector and text content</li>
            </ol>
          </div>
        ),
      },
      {
        title: 'Hover Actions (Hover Mode)',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Hover Mode</h3>
            <p className="text-slate-700">
              Hover steps simulate moving the mouse cursor over a specific page element without clicking it.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Use Cases</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Triggering dropdown menus</li>
              <li>Revealing tooltips</li>
              <li>Activating hover-based animations</li>
              <li>Testing hover states in UI components</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Switch to <span className="font-semibold">Hover</span> mode</li>
              <li>Wait for the target element to appear</li>
              <li>Click on the element you want to hover over</li>
              <li>During replay, the cursor will hover over this element</li>
            </ol>
          </div>
        ),
      },
      {
        title: 'Data Extraction (Extract Mode)',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Extract Mode</h3>
            <p className="text-slate-700">
              Extract steps capture text content from page elements so you can use this data
              in subsequent steps of your scenario.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Common Use Cases</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Extracting order IDs or confirmation numbers</li>
              <li>Capturing user-generated content</li>
              <li>Reading dynamic values to use in forms</li>
              <li>Storing reference data for later assertions</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Switch to <span className="font-semibold">Extract</span> mode</li>
              <li>Click on the element containing the text you want to extract</li>
              <li>The extracted value is saved as a parameter</li>
              <li>You can reference this parameter in later steps</li>
            </ol>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800">
                <span className="font-semibold">Tip:</span> Extracted values appear in the Parameters
                table where you can view and manage them alongside other scenario parameters.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Email OTP Integration',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Email OTP (One-Time Password)</h3>
            <p className="text-slate-700">
              This step type automates the process of receiving and entering one-time passwords
              sent via email during authentication flows.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record an Email OTP Step</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Click the <span className="font-semibold text-blue-600">Actions</span> button in the toolbar</li>
              <li>Select <span className="font-semibold">OTP</span> from the dropdown menu</li>
              <li>In the OTP Wizard, choose <span className="font-semibold">Email OTP</span></li>
              <li>
                Enter the email address where the OTP will be sent
                <div className="rounded-lg bg-amber-50 p-3 border border-amber-200 mt-2">
                  <p className="text-amber-900 text-sm">
                    <span className="font-semibold">Important:</span> Probium currently works only
                    with email addresses on the <span className="font-mono">@mailpit.probolabs.ai</span> domain!
                  </p>
                </div>
              </li>
              <li>Click <span className="font-semibold">Next</span></li>
              <li>Close the OTP Wizard</li>
              <li>Click on the input field where the OTP should be entered</li>
            </ol>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">During Replay</h4>
            <p className="text-slate-700">
              Probium will automatically:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Wait for the email to arrive</li>
              <li>Extract the OTP code from the email</li>
              <li>Enter the code into the specified field</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'TOTP and Authenticator App Support',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">TOTP (Time-based One-Time Password)</h3>
            <p className="text-slate-700">
              This step type handles authentication using time-based one-time passwords, similar
              to authenticator apps like Google Authenticator or Authy.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How to Record a TOTP Step</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
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

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800">
                During replay, Probium will generate the current TOTP code based on the shared
                secret and enter it into the specified field automatically.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Ask AI Functionality',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Ask AI</h3>
            <p className="text-slate-700">
              The Ask AI step allows you to formulate questions in natural language that the AI
              will answer based on the current page content.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Example Questions</h4>
            <div className="space-y-2">
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="font-semibold text-slate-900">Yes/No Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;Is the user logged in to the website?&quot;
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="font-semibold text-slate-900">Descriptive Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;What color is the submit button?&quot;
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="font-semibold text-slate-900">Counting Questions:</p>
                <p className="text-slate-700 text-sm mt-1">
                  &quot;How many products are displayed on the page?&quot;
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Using AI Responses</h4>
            <p className="text-slate-700">
              The value obtained from Ask AI can be:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Used as a condition for assertions</li>
              <li>Referenced in subsequent steps</li>
              <li>Stored as a parameter for later use</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Custom Node.js Scripts',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Custom Scripts</h3>
            <p className="text-slate-700">
              For advanced use cases, you can execute arbitrary Node.js scripts as part of your scenario.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">What You Can Do</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Perform complex data transformations</li>
              <li>Make external API calls</li>
              <li>Generate dynamic test data</li>
              <li>Implement custom validation logic</li>
              <li>Integrate with external services</li>
            </ul>

            <div className="rounded-lg bg-purple-50 p-4 border border-purple-200 mt-4">
              <p className="text-purple-900">
                <span className="font-semibold">Advanced Feature:</span> Custom scripts give you
                unlimited flexibility to extend Probium&apos;s capabilities for your specific testing needs.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    section: 'Debugging and Step-by-Step Execution',
    id: 'debugging',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Scenario Execution</h2>
        <p className="text-slate-700">
          You can execute scenarios partially or step-by-step using breakpoints and the Debug menu.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Setting Breakpoints</h3>
        <p className="text-slate-700">
          Place a breakpoint on any step where you want execution to pause. You can set multiple breakpoints.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Debug Menu Options</h3>
        <div className="space-y-3">
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900">Start</h4>
            <p className="text-slate-700 text-sm mt-1">
              Begins execution from the first step and runs until the first breakpoint is reached,
              or until the end if no breakpoints are set.
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900">Continue</h4>
            <p className="text-slate-700 text-sm mt-1">
              Resumes execution from the current position and runs until the next breakpoint,
              or until the end if no more breakpoints exist.
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900">Step</h4>
            <p className="text-slate-700 text-sm mt-1">
              Executes only the next single step in the scenario, then pauses.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-6">
          <h4 className="font-semibold text-blue-900 mb-2">Debugging Workflow</h4>
          <p className="text-blue-800">
            Use breakpoints and step-by-step execution to:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-blue-800 mt-2">
            <li>Troubleshoot failing scenarios</li>
            <li>Verify individual steps work correctly</li>
            <li>Inspect page state at specific points</li>
            <li>Test partial scenario execution</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    section: 'Scenario Editing and Modification',
    id: 'editing',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Editing Recorded Scenarios</h2>
        <p className="text-slate-700">
          After recording a scenario, you can modify it by deleting steps or adding new ones.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Deleting Steps</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li>Select the steps you want to delete</li>
          <li>Click the delete button</li>
          <li>The selected steps will be removed from the scenario</li>
        </ol>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Adding New Steps</h3>
        <p className="text-slate-700">
          To insert new steps into an existing scenario:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 mt-2">
          <li>
            <span className="font-medium text-slate-900">Set a Breakpoint:</span> Place a breakpoint
            on the step where you want to insert new steps (new steps will be added before this step).
          </li>
          <li>
            <span className="font-medium text-slate-900">Start Debug Mode:</span> Click <span className="font-semibold">Start</span> in
            the Debug menu. The scenario will execute up to the breakpoint and pause.
          </li>
          <li>
            <span className="font-medium text-slate-900">Begin Recording:</span> Click the <span className="font-semibold text-blue-600">Record</span> button.
          </li>
          <li>
            <span className="font-medium text-slate-900">Add New Steps:</span> Perform the actions
            you want to add to the scenario.
          </li>
          <li>
            <span className="font-medium text-slate-900">Stop Recording:</span> Click <span className="font-semibold text-blue-600">Record</span> again
            to save the new steps.
          </li>
        </ol>

        <div className="rounded-lg bg-green-50 p-4 border border-green-200 mt-6">
          <p className="text-green-900">
            <span className="font-semibold">Tip:</span> Use the combination of breakpoints and recording
            to build complex scenarios incrementally, testing each section as you go.
          </p>
        </div>
      </div>
    ),
  },
  {
    section: 'Parameter Management',
    id: 'parameters',
    subsections: [
      {
        title: 'Parameters Table Overview',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">What are Parameters?</h3>
            <p className="text-slate-700">
              The Parameters table stores all textual data captured during scenario recording and execution.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Types of Parameters</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>URLs of web pages visited</li>
              <li>Data entered into online forms</li>
              <li>Expected text values for Assert steps</li>
              <li>Text values for Wait For steps</li>
              <li>Extracted text from Extract steps</li>
              <li>Results from Ask AI steps</li>
              <li>Output from custom scripts</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Viewing the Parameters Table</h4>
            <p className="text-slate-700">
              Click the <span className="font-semibold text-blue-600">Params</span> button in the
              bottom toolbar of the side panel. The parameters table will open in the main browser window.
            </p>
          </div>
        ),
      },
      {
        title: 'Editing and Binding Parameters',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Editing Parameters</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Open the Parameters table</li>
              <li>Click the <span className="font-semibold">Edit</span> button</li>
              <li>Modify the parameter values as needed</li>
              <li>Confirm or cancel your changes</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-800 mt-4">Linking Parameters</h3>
            <p className="text-slate-700">
              You can link parameters together by referencing one parameter&apos;s variable name
              in another parameter&apos;s value.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Automatic Binding</h4>
            <p className="text-slate-700">
              Click the <span className="font-semibold">Binding</span> button to automatically link
              parameters with identical text values:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700 mt-2">
              <li>For each group of parameters with the same value, the first parameter becomes the primary</li>
              <li>The primary parameter retains its value unchanged</li>
              <li>All subsequent parameters in the group are redefined to reference the primary parameter&apos;s name</li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800">
                <span className="font-semibold">Benefit:</span> Linking parameters means you only
                need to update one value, and all linked parameters will automatically use the new value.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Parameter Sets and Cloning',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Multiple Parameter Sets</h3>
            <p className="text-slate-700">
              You can create multiple parameter sets for a single scenario, allowing you to run
              the same test with different data.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Creating a New Parameter Set</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Open the Parameters table</li>
              <li>Click the <span className="font-semibold">Clone</span> button</li>
              <li>A copy of the current parameter set is created</li>
              <li>Edit the new parameter set as needed</li>
              <li>Save your changes</li>
            </ol>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Selecting a Parameter Set for Replay</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Click on the scenario&apos;s <span className="font-semibold">Details</span></li>
              <li>In the <span className="font-semibold">Active Parameter Set</span> dropdown, select the desired set</li>
              <li>When you replay the scenario, it will use the selected parameter set</li>
            </ol>

            <div className="rounded-lg bg-green-50 p-4 border border-green-200 mt-4">
              <h4 className="font-semibold text-green-900 mb-2">Use Cases for Multiple Parameter Sets</h4>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Testing with different user accounts</li>
                <li>Running the same flow with various input data</li>
                <li>Testing edge cases and boundary conditions</li>
                <li>Data-driven testing scenarios</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: 'Security and Secret Parameters',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Handling Sensitive Information</h3>
            <p className="text-slate-700">
              Probium takes your security seriously and handles sensitive data with special care.
            </p>

            <div className="rounded-lg bg-red-50 p-4 border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Important Security Notice</h4>
              <p className="text-red-800">
                We do NOT store sensitive information (such as passwords used in authentication scenarios)
                on our servers. This data is stored exclusively on your local computer.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Secret Parameters</h4>
            <p className="text-slate-700">
              When you record scenarios involving:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li>Login passwords</li>
              <li>API keys</li>
              <li>Authentication tokens</li>
              <li>Other confidential data</li>
            </ul>

            <p className="text-slate-700 mt-3">
              These values are automatically marked as secret and stored only in your local environment,
              ensuring your sensitive data never leaves your computer.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    section: 'Executable Code and Export Options',
    id: 'executable-code',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">TypeScript Code Generation</h2>
        <p className="text-slate-700">
          Every recorded scenario is automatically converted into executable TypeScript code that
          you can view, download, and run independently.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Viewing the Generated Code</h3>
        <p className="text-slate-700">
          Click the <span className="font-semibold text-blue-600">Code</span> button at the bottom
          of the side panel to view the TypeScript code for your scenario.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">Downloading and Running as a Standalone Package</h3>
        <p className="text-slate-700">
          You can export your scenario as a complete package to run without the Probium application:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-slate-700 mt-3">
          <li>Click the <span className="font-semibold text-blue-600">Code</span> button</li>
          <li>Click the <span className="font-semibold">Save</span> button</li>
          <li>A ZIP archive will be downloaded to your computer</li>
          <li>Extract the archive</li>
          <li>Read the <span className="font-mono text-sm">readme.md</span> file included in the archive</li>
          <li>Follow the instructions in the readme to install dependencies and run the tests</li>
        </ol>

        <div className="rounded-lg bg-purple-50 p-4 border border-purple-200 mt-6">
          <h4 className="font-semibold text-purple-900 mb-2">CI/CD Integration</h4>
          <p className="text-purple-800">
            The exported package can be integrated into your continuous integration and deployment
            pipelines, allowing you to run your tests automatically as part of your development workflow.
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-purple-800 mt-2">
            <li>Run tests on every commit</li>
            <li>Include in your build process</li>
            <li>Schedule regular test runs</li>
            <li>Integrate with GitHub Actions, Jenkins, GitLab CI, etc.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    section: 'Collaboration and Project Management',
    id: 'collaboration',
    subsections: [
      {
        title: 'Projects and Team Sharing',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Working with Projects</h3>
            <p className="text-slate-700">
              Scenarios in Probium are organized into projects. Projects allow multiple users to
              collaborate on test scenarios.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">Adding Collaborators</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>
                Click the <span className="font-semibold">Share project</span> icon next to the project name
              </li>
              <li>In the dialog that opens, enter the collaborator&apos;s email address in the
                <span className="font-semibold"> Add collaborator</span> field
              </li>
              <li>Click <span className="font-semibold">Add</span></li>
              <li>The user will now have access to all scenarios in the project</li>
            </ol>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <p className="text-blue-800">
                <span className="font-semibold">Team Collaboration:</span> All team members can view,
                edit, and run scenarios within shared projects, making it easy to distribute testing
                responsibilities across your team.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Access Control and Scenario Locking',
        content: (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Scenario Locking Mechanism</h3>
            <p className="text-slate-700">
              To prevent conflicts when multiple team members work on the same project, Probium
              implements an automatic locking system.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mt-4">How It Works</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">When a user opens a scenario:</span> That
                scenario is automatically locked from editing by other team members.
              </li>
              <li>
                <span className="font-medium text-slate-900">Other team members:</span> Can view the
                scenario&apos;s contents but cannot make changes while it&apos;s locked.
              </li>
              <li>
                <span className="font-medium text-slate-900">Lock release:</span> The lock is released
                when the user opens a different scenario or starts recording a new one.
              </li>
            </ul>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 mt-4">
              <h4 className="font-semibold text-amber-900 mb-2">Best Practices</h4>
              <ul className="list-disc list-inside space-y-1 text-amber-800">
                <li>Close scenarios when you&apos;re finished editing them</li>
                <li>Communicate with team members about which scenarios you&apos;re working on</li>
                <li>If a scenario is locked and you need to edit it, contact the team member who has it open</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
]

export default function DocsPage() {
  return (
    <main className="py-20 sm:py-32">
      <Container>
        <div className="mb-12">
          <Logo className="inline-flex" imageClassName="h-8 w-auto sm:h-9" />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Probium Documentation
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Complete guide to using Probium for automated website testing. Learn how to record,
            replay, and manage test scenarios with ease.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Table of Contents</h2>
          <nav className="grid gap-2 sm:grid-cols-2">
            {documentation.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-start gap-2 rounded-lg bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all"
              >
                <span className="text-blue-500 group-hover:text-blue-600">→</span>
                <span>{section.section}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {documentation.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                {section.content ? (
                  section.content
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                      {section.section}
                    </h2>
                    {section.subsections && (
                      <div className="space-y-8">
                        {section.subsections.map((subsection, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-blue-200 pl-6"
                          >
                            {subsection.content}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            <span>↑</span>
            <span>Back to Top</span>
          </a>
        </div>
      </Container>
    </main>
  )
}
