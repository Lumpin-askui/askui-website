To integrate UI test results directly into Jira XRAY, you can use the `AskUIXRayStepReporter`. This reporter creates XRAY-compatible JSON files, including step-level results and screenshots, for seamless quality tracking.

## What Are the Prerequisites for Using the AskUI XRAY Reporter?

To follow this guide, make sure you have:

- **AskUI installed** on Windows, Linux, or macOS.
- Access to your **Jira/XRAY server with REST API enabled.**
- API credentials: `CLIENT_ID`, `CLIENT_SECRET`, `JIRA_SERVER_URL`, and your `PROJECT_KEY` stored as environment variables (for CI/CD).

## How Do You Enable the AskUIXRayStepReporter in Your Tests?

By default, AskUI uses an Allure reporter. To switch to XRAY reporting:

**1. Edit your `helper/askui-helper.ts` file:**

```typescript
import { AskUIXRayStepReporter } from 'askui/dist/reporters/askui-xray-step-reporter';

// Configure the reporter
const xrayReporter = new AskUIXRayStepReporter({
  outputDir: './xray-report',
  projectKey: process.env.PROJECT_KEY,
  screenshotMode: 'on-failure', // or 'always'
});
```

**2. Activate the special Jest environment** in your `jest.config.ts` to capture the `it` block names as test keys:

```typescript
module.exports = {
  testEnvironment: '@askui/jest-environment',
  // ... other config
};
```

## What Does a Generated XRAY JSON Report Look Like?

The XRAY JSON file maps each Jest `it` block to a test case. It also includes step statuses and base64-encoded screenshots.

Example snippet:

```json
{
  "testExecutionKey": "DEMO-123",
  "tests": [
    {
      "testKey": "DEMO-456",
      "start": "2025-07-14T10:00:00Z",
      "finish": "2025-07-14T10:00:05Z",
      "status": "PASSED",
      "steps": [
        {
          "status": "PASSED",
          "comment": "Clicked login button",
          "evidence": [
            {
              "data": "base64-encoded-screenshot",
              "filename": "step-1.png",
              "contentType": "image/png"
            }
          ]
        }
      ]
    }
  ]
}
```

👉 You can configure screenshots to be taken on **fail only** or **always**.

## How Do You Upload the JSON Report to XRAY via REST API?

Use XRAY's REST API to push your results. In CI/CD (like GitLab), you might:

1. **Run your tests and generate `xray-report/report.json`.**
2. **Obtain an auth token from Jira.**
3. **POST your report to XRAY**.

Example job flow in GitLab:

```yaml
upload-xray-report:
  script:
    - |
      curl -X POST \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $JIRA_AUTH_TOKEN" \
        -d @xray-report/report.json \
        "$JIRA_SERVER_URL/rest/raven/2.0/import/execution/junit"
```

## What Are the Key Benefits for QA Teams?

- **End-to-end visibility:** Link UI automation with manual test cases in XRAY.
- **Detailed evidence:** Each step can include screenshots, improving audit and defect discussions.
- **CI/CD integration:** Automate quality gates in pipelines.

## Frequently Asked Questions (FAQ)

### Can I use this with Allure too?

Yes. AskUI supports multiple reporters. Configure either `Allure` or `AskUIXRayStepReporter` in your helper file.

### Will screenshots slow down my tests?

Minimal. But you can toggle screenshots to `fail-only` or `always` based on your QA needs.

## Related Resources

- [Automating HMI Testing for Automotive Applications with Agentic AI](https://www.askui.com/blog-posts/hmi-testing-automation)
- [Best Practices for Automated UI Testing in 2025](https://www.askui.com/blog-posts/end-to-end-ui-testing)

## Conclusion: A Smarter Way to Manage Test Evidence in Jira

The AskUIXRayStepReporter closes the gap between UI automation and Jira XRAY's manual testing workflows. It ensures your team gets reliable, visual documentation — directly inside your existing QA hub.

For a full sample project with all configuration files, visit our [AskUI XRAY example repo on GitHub](https://github.com/askui/askui-example-xray-reporter).
