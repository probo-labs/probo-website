# Executable Code and Export Options

Learn how to export your scenarios as TypeScript code for CI/CD integration.

## TypeScript Code Generation

Every recorded scenario is automatically converted into executable TypeScript code that you can view, download, and run independently of the Probium application.

### Why Export as Code?

- ✓ Run tests in your CI/CD pipeline automatically
- ✓ Execute tests without the Probium application
- ✓ Version control your tests alongside your code
- ✓ Customize test execution with custom configurations
- ✓ Share tests with team members who don't use Probium

## Viewing the Generated Code

You can view the TypeScript code for any scenario directly in the Probium interface.

### Steps to View Code

1. Open your scenario in the Probium side panel
2. Click the **Code** button at the bottom of the panel
<img src="/images/screenshots/code.png" alt="Code" width="300" />
3. The generated TypeScript code will be displayed
4. You can review the code to understand what each step does

> **Benefit:** Viewing the code helps you understand exactly what your scenario does at a technical level and can be useful for debugging.

## Downloading and Running as a Standalone Package

You can export your scenario as a complete, self-contained package that can run without the Probium application.

### How to Download

1. Click the **Code** button
2. Click the **Save** button
3. A ZIP archive will be downloaded to your computer
4. Extract the archive to a folder of your choice

### What's in the Package?

The downloaded ZIP archive contains:

- `readme.md` - Setup and execution instructions
- `package.json` - Node.js dependencies
- `test files` - Your scenario as TypeScript code
- `configuration files` - Test runner configuration

### Running the Tests

1. **Read the README:** Open the `readme.md` file and read the instructions
2. **Install Dependencies:** Run the command specified in the readme (typically `npm install`)
3. **Execute Tests:** Run the test command from the readme (typically `npm test`)
4. **View Results:** Test results will be displayed in your terminal

## CI/CD Integration

The exported package can be integrated into your continuous integration and deployment pipelines, enabling automated testing as part of your development workflow.

### Common Integration Points

- **GitHub Actions:** Run tests on every commit or pull request
- **GitLab CI:** Include in your .gitlab-ci.yml pipeline
- **Jenkins:** Add as a build step in your Jenkins jobs
- **Azure DevOps:** Include in your Azure Pipelines
- **Scheduled Runs:** Set up cron jobs to run tests regularly

### Best Practices

- **Version Control:** Commit exported tests to your repository to track changes over time
- **Environment Variables:** Use environment variables for URLs and credentials in CI/CD
- **Regular Updates:** Re-export scenarios when you make changes in Probium
- **Test Isolation:** Ensure tests can run independently of each other