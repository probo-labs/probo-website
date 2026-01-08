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