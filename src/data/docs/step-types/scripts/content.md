## Custom Node.js Scripts

For advanced use cases, you can execute arbitrary Node.js scripts as part of your scenario.

### How to Add a Step with Custom Node.js Script

1. Click the "plus" icon in the required part of scenario
<img src="/images/screenshots/add-script.png" alt="Add script" width="300" />
2. Fill in a script name, a code, and click the "Add & Run" button
<img src="/images/screenshots/add-script-form.png" alt="Add script form" width="300" />
3. A script step will be added to the scenario. Result of the script can be used in the next steps of scenario.
<img src="/images/screenshots/script-step.png" alt="Script step" width="300" />

### What You Can Do

- Perform complex data transformations
- Make external API calls
- Generate dynamic test data
- Implement custom validation logic
- Integrate with external services

> **Advanced Feature:** Custom scripts give you unlimited flexibility to extend Probium's capabilities for your specific testing needs.

### Returning Values from Scripts
To pass data from a script to subsequent steps in a scenario, use the `returnValue()` function.

* **Simple value:**
    ```javascript
    returnValue("Hello");
    ```
* **Dynamic value (example: unique username):**
    ```javascript
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const result = "user_" + String(currentTimestamp).slice(-7);
    returnValue(result);
    ```

### Using Parameters in Scripts
Scripts can access existing scenario parameters using the `param` object:
* **Example:** `returnValue("Hello, " + param.username);` (where `username` is a previously defined parameter).

### Automatic Parameter Creation
When a script returns a value, Probium automatically creates a new parameter. The parameter name is derived from the **Script Name**:
* **Script Name:** `generate username`
* **Created Parameter:** `generate_username`

### How to Change the Code of the Script


1. Within your recorded scenario, find the specific **Script** step you wish to modify.
2. Click on the **icon** located on that step.
<img src="/images/screenshots/script-step-in-list.png" alt="Script step in list" width="300" />
3.  This will open the Interaction Browser page, where you can see the current code being executed for this step.
4.  Click on the **edit icon** (pencil) to edit this code.
<img src="/images/screenshots/script-step-int-br.png" alt="Script step in interaction browser" width="500" />
