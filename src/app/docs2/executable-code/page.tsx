export default function ExecutableCodePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Executable Code and Export Options
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to export your scenarios as TypeScript code for CI/CD integration.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            TypeScript Code Generation
          </h2>
          <p className="text-slate-700">
            Every recorded scenario is automatically converted into executable TypeScript code that
            you can view, download, and run independently of the Probium application.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Export as Code?</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Run tests in your CI/CD pipeline automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Execute tests without the Probium application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Version control your tests alongside your code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Customize test execution with custom configurations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Share tests with team members who don&apos;t use Probium</span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Viewing the Generated Code</h3>
          <p className="text-slate-700 mb-4">
            You can view the TypeScript code for any scenario directly in the Probium interface.
          </p>

          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Steps to View Code</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Open your scenario in the Probium side panel</li>
              <li>Click the <span className="font-semibold text-blue-600">Code</span> button at the bottom of the panel</li>
              <li>The generated TypeScript code will be displayed</li>
              <li>You can review the code to understand what each step does</li>
            </ol>
          </div>

          <div className="rounded-lg bg-green-50 p-4 border border-green-200 mt-4">
            <p className="text-green-800 text-sm">
              <span className="font-semibold">Benefit:</span> Viewing the code helps you understand
              exactly what your scenario does at a technical level and can be useful for debugging.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Downloading and Running as a Standalone Package
          </h3>
          <p className="text-slate-700 mb-4">
            You can export your scenario as a complete, self-contained package that can run without
            the Probium application.
          </p>

          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">How to Download</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Click the <span className="font-semibold text-blue-600">Code</span> button</li>
              <li>Click the <span className="font-semibold">Save</span> button</li>
              <li>A ZIP archive will be downloaded to your computer</li>
              <li>Extract the archive to a folder of your choice</li>
            </ol>
          </div>

          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">What&apos;s in the Package?</h4>
            <p className="text-slate-700 mb-3">
              The downloaded ZIP archive contains:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
              <li><span className="font-mono text-sm">readme.md</span> - Setup and execution instructions</li>
              <li><span className="font-mono text-sm">package.json</span> - Node.js dependencies</li>
              <li><span className="font-mono text-sm">test files</span> - Your scenario as TypeScript code</li>
              <li><span className="font-mono text-sm">configuration files</span> - Test runner configuration</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Running the Tests</h4>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                <span className="font-medium">Read the README:</span> Open the{' '}
                <span className="font-mono text-sm">readme.md</span> file and read the instructions
              </li>
              <li>
                <span className="font-medium">Install Dependencies:</span> Run the command specified
                in the readme (typically <span className="font-mono text-sm">npm install</span>)
              </li>
              <li>
                <span className="font-medium">Execute Tests:</span> Run the test command from the readme
                (typically <span className="font-mono text-sm">npm test</span>)
              </li>
              <li>
                <span className="font-medium">View Results:</span> Test results will be displayed in
                your terminal
              </li>
            </ol>
          </div>
        </div>

        <div className="rounded-lg bg-purple-50 p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">CI/CD Integration</h3>
          <p className="text-purple-800 mb-4">
            The exported package can be integrated into your continuous integration and deployment
            pipelines, enabling automated testing as part of your development workflow.
          </p>

          <h4 className="font-semibold text-purple-900 mb-2">Common Integration Points</h4>
          <ul className="space-y-2 text-purple-800">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">→</span>
              <span><span className="font-semibold">GitHub Actions:</span> Run tests on every commit or pull request</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">→</span>
              <span><span className="font-semibold">GitLab CI:</span> Include in your .gitlab-ci.yml pipeline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">→</span>
              <span><span className="font-semibold">Jenkins:</span> Add as a build step in your Jenkins jobs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">→</span>
              <span><span className="font-semibold">Azure DevOps:</span> Include in your Azure Pipelines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">→</span>
              <span><span className="font-semibold">Scheduled Runs:</span> Set up cron jobs to run tests regularly</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-amber-50 p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900 mb-3">Best Practices</h3>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>
                <span className="font-semibold">Version Control:</span> Commit exported tests to your
                repository to track changes over time
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>
                <span className="font-semibold">Environment Variables:</span> Use environment variables
                for URLs and credentials in CI/CD
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>
                <span className="font-semibold">Regular Updates:</span> Re-export scenarios when you
                make changes in Probium
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>
                <span className="font-semibold">Test Isolation:</span> Ensure tests can run independently
                of each other
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
