## TOTP and Authenticator App Support

This step type handles authentication using time-based one-time passwords, similar to authenticator apps like Google Authenticator or Authy.

### How to Record a TOTP Step

1. Click the **Actions** button
2. Select **OTP** from the dropdown
3. In the OTP Wizard, choose **TOTP (Shared secret)**
4. Enter the following information:
   - Secret key (the shared secret from your authenticator setup)
   - Code length (typically 6 digits)
   - Generation algorithm (usually SHA-1)
5. Click **Next**
6. Close the OTP Wizard
7. Click on the input field where the TOTP code should be entered

During replay, Probium will generate the current TOTP code based on the shared secret and enter it into the specified field automatically.