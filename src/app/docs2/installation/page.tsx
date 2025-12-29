export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Installation Guide
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to download and install Probium on your computer.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">How to Download and Install</h2>
        <p className="text-slate-700">
          Probium is available as a browser application that you can install on your computer.
        </p>

        <div className="rounded-lg bg-slate-50 p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Installation Steps</h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-700">
            <li>
              Visit the{' '}
              <a
                href="https://apps.microsoft.com/detail/9phvfgqbndkb?hl=en-US&gl=WF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
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

        <div className="rounded-lg bg-amber-50 p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">Note</h3>
          <p className="text-amber-900">
            The Probium browser extension is automatically included with the application.
            You interact with it through a convenient side panel interface.
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-6 border border-green-200 mt-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">What Happens After Installation</h3>
          <p className="text-green-800 mb-3">
            Once you launch Probium for the first time:
          </p>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">1.</span>
              <span>A browser window will open with the Probium extension pre-installed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">2.</span>
              <span>You&apos;ll see the Probium icon in your browser toolbar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">3.</span>
              <span>Click the icon to open the side panel interface</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">4.</span>
              <span>You&apos;ll be prompted to sign in or create an account</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
