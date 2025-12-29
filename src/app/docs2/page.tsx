export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Probium Documentation
        </h1>
        <p className="text-lg text-slate-600">
          Welcome to the complete guide for using Probium for automated website testing.
        </p>
      </div>

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

        <div className="rounded-lg bg-blue-50 p-6 border border-blue-200 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Features</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Record and replay user interactions with websites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>AI-powered scenario fortification for resilient tests</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Support for complex authentication flows (Email OTP, TOTP)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Parameter management and test data organization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Team collaboration with project sharing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Export tests as TypeScript code for automated testing</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-slate-50 p-6 border border-slate-200 mt-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Getting Started</h3>
          <p className="text-slate-700 mb-4">
            To get started with Probium, follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Install Probium from the Microsoft Store</li>
            <li>Sign up or log in to your account</li>
            <li>Launch the application and open the side panel</li>
            <li>Start recording your first test scenario</li>
          </ol>
          <p className="text-slate-700 mt-4">
            Use the navigation menu on the left to explore different sections of the documentation.
          </p>
        </div>
      </div>
    </div>
  )
}
