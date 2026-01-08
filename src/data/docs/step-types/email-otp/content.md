## Email OTP Integration

This step type automates the process of receiving and entering one-time passwords sent via email during authentication flows.

### How to Record an Email OTP Step

1. Click the **Actions** button in the toolbar
2. Select **OTP** from the dropdown menu
<img src="/images/screenshots/otp.png" alt="OTP" width="300" />
3. In the OTP Wizard, choose **Email OTP**
<img src="/images/screenshots/otp-wizard-email.png" alt="OTP Wizard Email" width="300" />
4. Enter the email address where the OTP will be sent
   > **Important:** Probium currently works only with email addresses on the `@mailpit.probolabs.ai` domain!
<img src="/images/screenshots/otp-email.png" alt="OTP Email" width="300" />
5. Click **Next**
6. Close the OTP Wizard
7. Click on the input field where the OTP should be entered

### During Replay

Probium will automatically:
- Wait for the email to arrive
- Extract the OTP code from the email
- Enter the code into the specified field