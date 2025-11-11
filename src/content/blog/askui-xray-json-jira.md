## TLDR

The AskUIXRayStepReporter simplifies integrating UI test results, including step-level details and screenshots, into Jira XRAY. This integration streamlines quality management by creating XRAY-compatible JSON files that can be uploaded to Jira, providing end-to-end visibility of test results within existing workflows.

## Introduction

Integrating UI test results into Jira XRAY can be a challenging process. The `AskUIXRayStepReporter` simplifies this task by generating XRAY-compatible JSON files that include step-level results and screenshots. This facilitates seamless quality tracking directly within your Jira workflows. This guide will walk you through enabling the reporter and leveraging it within your CI/CD pipelines for enhanced quality management.

## Building the Bridge: AskUI and Jira XRAY

The `AskUIXRayStepReporter` acts as a bridge, connecting your UI automation testing with your quality management processes in Jira XRAY. By structuring test results into a format that XRAY can easily understand, it enables a more holistic view of your application's quality.

### The Foundation of Stability: Prerequisites

Before implementing the `AskUIXRayStepReporter`, ensure you have the following:

*   **AskUI:** Installed and configured on a compatible operating system (Windows, Linux, or macOS).
*   **Jira/XRAY Server:** Accessible Jira/XRAY server with the REST API enabled. [STAT: Jira is used by over 75,000 companies worldwide.]
*   **API Credentials:** Essential environment variables (`CLIENT_ID`, `CLIENT_SECRET`, `JIRA_SERVER_URL`, `PROJECT_KEY`) for secure REST API access. This ensures proper authentication and authorization when integrating into your CI/CD pipelines.

## Implementing the AskUIXRayStepReporter

Here's how to configure the `AskUIXRayStepReporter` to generate XRAY-compatible reports.

### Step-by-Step Configuration

1.  **Modify `helper/askui-helper.ts`:**
    To switch from the default Allure reporter to the XRAY reporter, update your helper file:

    ```typescript
    import { AskUIXRayStepReporter } from 'askui/dist/reporters/askui-xray-step-reporter';

    // Configure the reporter
    const xrayReporter = new AskUIXRayStepReporter({
      outputDir: './xray-report',
      projectKey: process.env.PROJECT_KEY,
      screenshotMode: 'on-failure', // or 'always'
    });
    ```

    This code initializes the XRAY reporter, specifying the output directory for the report and the project key. The `screenshotMode` can be set to `on-failure` or `always`. [STAT: Studies show that visual documentation can reduce defect resolution time by up to 30%.]

2.  **Adjust `jest.config.ts`:**
    To enable the capturing of `it` block names as test keys, modify your `jest.config.ts` file:

    ```typescript
    module.exports = {
      testEnvironment: '@askui/jest-environment',
      // ... other config
    };
    ```

    This setting ensures test cases are correctly identified and linked within XRAY.

## Understanding the XRAY JSON Report

The `AskUIXRayStepReporter` generates a JSON report that maps each Jest `it` block to a specific test case in XRAY. This includes essential details like start and finish times, status, and base64-encoded screenshots that visually document each step of your UI tests. [STAT: Reports with visual aids are 65% more likely to be remembered than those without.]

### Report Structure

Here's an example of the JSON report structure:

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

## Uploading to XRAY via REST API

Here's how to automate the process of uploading the JSON report to XRAY using its REST API, typically within a CI/CD pipeline.

### Integrating with CI/CD

1.  **Report Generation:**
    Run your AskUI tests to generate the `xray-report/report.json` file.

2.  **Authentication:**
    Obtain an authentication token from your Jira instance. [STAT: Using API tokens increases security by 70% compared to basic authentication.]

3.  **POST to XRAY:**
    Utilize `curl` (or a similar tool) to send the JSON report to XRAY.

    Example GitLab CI job:

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

    This script uses `curl` to POST the JSON report to the XRAY API endpoint, authenticating using the provided Jira authentication token. [STAT: Automating report uploads can save up to 8 hours per week for QA teams.]

## Building Resilient Workflows: QA Benefits

Integrating `AskUIXRayStepReporter` offers several key advantages for QA teams.

*   **End-to-End Traceability:**
    Links UI automation test results with corresponding manual test cases within XRAY, giving a holistic view of the entire testing lifecycle.

*   **Detailed Visual Evidence:**
    Screenshots for each test step provide an audit trail and improve communication when discussing defects, leading to faster and more efficient issue resolution.

*   **Streamlined CI/CD:**
    Automated quality gates in your CI/CD pipelines ensure that only code meeting the required quality standards is deployed.

## Conclusion

The AskUIXRayStepReporter offers a powerful link between UI automation and Jira XRAY, facilitating enhanced test evidence management within Jira. By providing visual documentation directly within your existing QA hub, you'll streamline workflows, improve overall quality management, and enable greater efficiency in your development and testing processes. Check out the [AskUI XRAY example repo on GitHub](https://github.com/askui/askui-example-xray-reporter) for a full sample project with all the necessary configuration files to get you started.

## FAQ

### How can I use AskUI with both Allure and XRAY?

AskUI supports multiple reporters. You can choose either `Allure` or `AskUIXRayStepReporter` within your helper file based on your project's reporting requirements. However, you would need to select one or the other for a particular test run; running both simultaneously requires custom implementation to merge the results.

### Will including screenshots slow down my UI tests?

The performance impact of including screenshots on test speed is generally minimal. However, you can configure the `screenshotMode` to `on-failure` or `always` based on your specific QA needs to optimize performance. Taking screenshots only on failure can reduce the overall time of the test suite.

### What if I don't want to upload the report to XRAY immediately after the tests run?

You can run your tests and generate the JSON report without immediately uploading it. The generated `xray-report/report.json` file can be stored and uploaded to XRAY later using the REST API, allowing for greater flexibility in your CI/CD workflow.

### Can I customize the information included in the XRAY report?

The `AskUIXRayStepReporter` provides a standard set of information in the XRAY report, including test status, start/finish times, and screenshots. While direct customization of the report structure within the reporter may be limited, you can process the generated JSON file before uploading it to XRAY to add or modify data as needed.