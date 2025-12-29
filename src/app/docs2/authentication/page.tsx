export default function AuthenticationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Authentication and Account Management
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to sign up, log in, and manage your Probium account.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Signing Up and Logging In</h2>
          <p className="text-slate-700">
            If you haven&apos;t signed in to Probium on your current computer, you&apos;ll see a
            &quot;Sign up at ProboLabs.ai&quot; button in the side panel when you open the application.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Authentication Methods</h3>
          <p className="text-slate-700 mb-4">
            Click the sign-up button to access the authentication page, where you can choose from
            the following options:
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">OAuth Providers</h4>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Sign in with Google</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Sign in with GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Sign in with LinkedIn</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Sign in with Microsoft SSO</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Email Authentication</h4>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Sign up using email and password</span>
                </li>
              </ul>
              <p className="text-xs text-slate-600 mt-3">
                Create an account with your email address and a secure password.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Account Linking</h3>
          <p className="text-blue-800 mb-3">
            When you register with email and password or sign in for the first time using
            Google, GitHub, or LinkedIn, an account is created and linked to your email address.
          </p>
          <p className="text-blue-800">
            You can subsequently sign in using any authentication method, as long as it uses
            the same email address associated with your account.
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Example Scenario</h3>
          <div className="space-y-2 text-green-800">
            <p>
              <span className="font-semibold">Step 1:</span> You initially sign up using Google with email address: user@example.com
            </p>
            <p>
              <span className="font-semibold">Step 2:</span> An account is created and linked to user@example.com
            </p>
            <p>
              <span className="font-semibold">Step 3:</span> Next time, you can sign in using:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Google (same account)</li>
              <li>GitHub (if your GitHub account uses user@example.com)</li>
              <li>LinkedIn (if your LinkedIn account uses user@example.com)</li>
              <li>Microsoft SSO (if your Microsoft account uses user@example.com)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
