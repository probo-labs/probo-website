## Waiting Mechanisms (Wait for Mode)

This step type waits for a specific element with specific text content to appear on the page before proceeding.

### When to Use

Use Wait For steps when:

- Content loads dynamically via AJAX
- Waiting for animations to complete
- Ensuring a success message appears
- Waiting for data to be processed

### How to Record

1. Switch to **Wait for** mode
<img src="/images/screenshots/wait-for-mode.png" alt="Wait for mode" width="200" />
2. Wait for the desired element to appear on the page
3. Click on the element
4. The step will be recorded with the element's selector and text content

### How to Change Timeout in a "Wait for" Step


1. Within your recorded scenario, find the specific **Wait for** step you wish to modify.
2. Click on the **clock icon** located on that step.
<img src="/images/screenshots/wait-for-step.png" alt="Wait for step" width="300" />
3.  This will open the Interaction Browser page, where you can see the current values for both the **timeout** and the **polling interval**.
4.  Click on the **edit icon** (pencil) to adjust these values according to your testing needs.
<img src="/images/screenshots/wait-for-step-int-browser.png" alt="Wait for step in interaction browser" width="500" />