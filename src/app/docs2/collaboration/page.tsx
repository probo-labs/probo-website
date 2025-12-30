export default function CollaborationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Collaboration and Project Management
        </h1>
        <p className="text-lg text-slate-600">
          Learn how to work with teams and manage shared test scenarios.
        </p>
      </div>

      <div className="space-y-8">
        {/* Projects and Sharing */}
        <section id="sharing" className="scroll-mt-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Projects and Team Sharing</h2>
            <p className="text-slate-700 mb-4">
              Scenarios in Probium are organized into projects. Projects allow multiple users to
              collaborate on test scenarios, making it easy to distribute testing responsibilities
              across your team.
            </p>

            <div className="rounded-lg bg-blue-50 p-6 border border-blue-200 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">What Are Projects?</h3>
              <p className="text-blue-800 mb-3">
                A project is a container for related test scenarios. Projects enable:
              </p>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Organizing scenarios by application, feature, or team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Sharing test scenarios with team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Collaborative test development and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Centralized test management for teams</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Adding Collaborators</h3>
              <p className="text-slate-700 mb-4">
                Share your project with team members to enable collaboration.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-3">How to Add a Collaborator</h4>
              <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li>
                  <span className="font-medium">Locate the Share Icon:</span> Click the{' '}
                  <span className="font-semibold">Share project</span> icon next to the project name
                </li>
                <li>
                  <span className="font-medium">Enter Email:</span> In the dialog that opens, enter
                  the collaborator&apos;s email address in the{' '}
                  <span className="font-semibold">Add collaborator</span> field
                </li>
                <li>
                  <span className="font-medium">Add User:</span> Click{' '}
                  <span className="font-semibold">Add</span>
                </li>
                <li>
                  <span className="font-medium">Confirmation:</span> The user will now have access to
                  all scenarios in the project
                </li>
              </ol>
            </div>

            <div className="rounded-lg bg-green-50 p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Collaborator Permissions</h3>
              <p className="text-green-800 mb-3">
                All team members added to a project can:
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>View all scenarios in the project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Edit scenarios (subject to locking rules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Create new scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Run and replay scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Export scenarios as code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Manage parameters and parameter sets</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scenario Locking */}
        <section id="locking" className="scroll-mt-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Access Control and Scenario Locking</h2>
            <p className="text-slate-700 mb-4">
              To prevent conflicts when multiple team members work on the same project, Probium
              implements an automatic locking system.
            </p>

            <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">How Locking Works</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">When a User Opens a Scenario</h4>
                  <p className="text-purple-800 text-sm">
                    The scenario is automatically locked from editing by other team members.
                    This prevents two people from making conflicting changes simultaneously.
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Other Team Members</h4>
                  <p className="text-slate-700 text-sm">
                    Can view the scenario&apos;s contents but cannot make changes while it&apos;s locked.
                    They&apos;ll see an indication that the scenario is being edited by another user.
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Lock Release</h4>
                  <p className="text-green-800 text-sm">
                    The lock is automatically released when the user opens a different scenario or
                    starts recording a new one. This ensures locks don&apos;t remain indefinitely.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-6 border border-amber-200 mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Best Practices for Team Collaboration</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">1.</span>
                  <span>
                    <span className="font-semibold">Close scenarios when done:</span> Switch to a
                    different scenario or close the side panel when you&apos;re finished editing to
                    release the lock
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">2.</span>
                  <span>
                    <span className="font-semibold">Communicate with team:</span> Use team chat or
                    project management tools to coordinate who&apos;s working on which scenarios
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">3.</span>
                  <span>
                    <span className="font-semibold">Check lock status:</span> If a scenario is locked,
                    contact the team member who has it open if you need to make urgent changes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">4.</span>
                  <span>
                    <span className="font-semibold">Organize by feature:</span> Create separate
                    scenarios for different features to minimize editing conflicts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">5.</span>
                  <span>
                    <span className="font-semibold">Regular sync:</span> Regularly check for updates
                    from team members to stay current with scenario changes
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Collaboration Workflow Example</h3>
              <div className="space-y-3 text-blue-800">
                <div>
                  <p className="font-semibold mb-1">Morning Standup</p>
                  <p className="text-sm">
                    Team discusses which scenarios need work and assigns tasks
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Developer A</p>
                  <p className="text-sm">
                    Opens &quot;Login Flow&quot; scenario to add 2FA steps, scenario is locked
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Developer B</p>
                  <p className="text-sm">
                    Tries to open &quot;Login Flow&quot;, sees it&apos;s locked by Developer A,
                    works on &quot;Checkout Flow&quot; instead
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Developer A Finishes</p>
                  <p className="text-sm">
                    Switches to a different scenario, lock on &quot;Login Flow&quot; is released
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Developer B Returns</p>
                  <p className="text-sm">
                    Can now edit &quot;Login Flow&quot; to add parameter sets for different users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
