## Access Control and Scenario Locking

To prevent conflicts when multiple team members work on the same project, Probium implements an automatic locking system.

### How Locking Works

**When a User Opens a Scenario**

The scenario is automatically locked from editing by other team members. This prevents two people from making conflicting changes simultaneously.

<img src="/images/screenshots/locked-scenario.png" alt="Locked scenario" width="300" />

**Other Team Members**

Can view the scenario's contents but cannot make changes while it's locked. They'll see an indication that the scenario is being edited by another user.

**Lock Release**

The lock is automatically released when the user opens a different scenario or starts recording a new one. This ensures locks don't remain indefinitely. The lock can also be released manually.


<img src="/images/screenshots/release-lock.png" alt="Release lock" width="300" />

### Best Practices for Team Collaboration

1. **Close scenarios when done:** Switch to a different scenario or close the side panel when you're finished editing to release the lock
2. **Communicate with team:** Use team chat or project management tools to coordinate who's working on which scenarios
3. **Check lock status:** If a scenario is locked, contact the team member who has it open if you need to make urgent changes
4. **Organize by feature:** Create separate scenarios for different features to minimize editing conflicts
5. **Regular sync:** Regularly check for updates from team members to stay current with scenario changes

### Collaboration Workflow Example

**Morning Standup:** Team discusses which scenarios need work and assigns tasks

**Developer A:** Opens "Login Flow" scenario to add 2FA steps, scenario is locked

**Developer B:** Tries to open "Login Flow", sees it's locked by Developer A, works on "Checkout Flow" instead

**Developer A Finishes:** Switches to a different scenario, lock on "Login Flow" is released

**Developer B Returns:** Can now edit "Login Flow" to add parameter sets for different users