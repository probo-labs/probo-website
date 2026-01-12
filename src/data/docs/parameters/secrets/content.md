## Security and Secret Parameters

Probium takes your security seriously and handles sensitive data with special care.

### Important Security Notice

We do **NOT** store sensitive information (such as passwords used in authentication scenarios) on our servers. This data is stored exclusively on your local computer.

### What Are Secret Parameters?

When you record scenarios involving sensitive information, these values are automatically marked as secret:

- Login passwords
- Authentication tokens
- Other confidential data

<img src="/images/screenshots/secret-parameters.png" alt="Secret parameters" width="300" />

### How Secret Parameters Work

- 🔒 **Local Storage:** Secret values are stored only in your local environment
- 🔒 **Never Transmitted:** Your sensitive data never leaves your computer
- 🔒 **Automatic Detection:** Probium automatically identifies password fields and other sensitive inputs
- 🔒 **Secure Replay:** During replay, secrets are retrieved from local storage only

### How to Edit Secret Parameters

Probium prioritizes security by storing sensitive data, such as passwords, locally on your computer rather than on its servers. These values are stored in a file named `.env` in your home directory (e.g., `C://Users/<Your username>/.probium/.env` on Windows).

### Method 1: Using the App Settings
1. Click on **Settings** at the bottom of the side panel.
<img src="/images/screenshots/settings-button.png" alt="Settings button" width="400" />
2. Locate the **Environmental Variables** section.
<img src="/images/screenshots/env-variables.png" alt="Environment Variables" width="500" />
3. Add, delete, or update the values of your secret parameters directly in the interface.
4. Click on the **Save** button.

### Method 2: Manual File Editing
1. Open the `.env` file located in the `~/.probium/` folder using any text editor.
2. Modify the parameters and save the file.
3. To sync these changes with the app, click the **Reload** icon in the application settings.
<img src="/images/screenshots/reload-env-icon.png" alt="Reload env" width="500" />