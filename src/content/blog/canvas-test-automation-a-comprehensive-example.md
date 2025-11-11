## TLDR

AskUI enables rapid automation of test cases for Canvas applications, exemplified by automating a calculator test (3 * 33 = 99) in under 63 seconds using simple instructions to click on-screen elements and verify the resulting calculation. This streamlined approach significantly reduces the time and effort required for UI test automation.

## Introduction

This article demonstrates AskUI's ability to rapidly automate test cases within Canvas applications, potentially in 63 seconds or less. We'll illustrate this with a practical example using an online calculator. This guide assumes you already have an AskUI account and a properly configured environment, following the initial setup guides for Windows, macOS, or Linux.

## Automating Canvas Applications with AskUI

Let's dive into how AskUI can streamline your testing process, specifically within Canvas environments. The following sections will detail the use case, test steps, and the quick implementation using AskUI.

### Use Case: Testing a Canvas-Based Calculator

Our example focuses on automating a test run on a canvas-based calculator, available at [https://www.online-calculator.com//html5/simple/index.php?v=10](https://www.online-calculator.com//html5/simple/index.php?v=10).

### Test Steps for Calculator Automation

The test will follow these simple steps:

1.  Open the Calculator URL in a Browser.
2.  Press the "3" button.
3.  Press the Multiplication button ("×").
4.  Press the "3" button twice.
5.  Verify that the result displayed is "99".

## Building the Automation Workflow

The key to AskUI's speed lies in its intuitive syntax and efficient execution. Here's how to construct the test in under 63 seconds. [STAT: Studies show that low-code automation tools can reduce test automation time by up to 80% compared to traditional coding methods.]

### Step 1: Setting Up the Workflow File

First, open the file `askui_example/my-first-askui-test-suite.test.ts` and clear its contents. Ensure your file structure matches the following template:

```typescript
import { aui } from './helper/jest.setup';

describe('Canvas Calculator Test', () => {
  it('should calculate 3 * 33 = 99', async () => {
    // Test code will go here
  });
});
```

### Step 2: Inputting the AskUI Instructions

Paste the following AskUI instructions into the designated area. This assumes the AskUI Controller is running and a browser (like Chrome) is already open. [STAT: Automating UI interactions can significantly improve test coverage, reportedly by up to 40%, due to faster execution and reduced manual effort.]

```typescript
import { aui } from './helper/jest.setup';

describe('Canvas Calculator Test', () => {
  it('should calculate 3 * 33 = 99', async () => {
    await aui.click().text().withText('3').exec();
    await aui.click().text().withText('×').exec();
    await aui.click().text().withText('3').exec();
    await aui.click().text().withText('3').exec();
    await aui.expect().text().withText('99').exists().exec();
  });
});
```

### Step 3: Running the Automated Test

Execute the workflow and observe AskUI automatically performing each of the test steps in sequence. [STAT: Automated tests can run 24/7, which can accelerate the software development lifecycle by catching bugs earlier and more frequently.]

## Conclusion

AskUI offers a streamlined and remarkably fast solution for automating test cases, even within complex canvas environments. Its cross-platform capabilities extend its applicability across browsers, operating systems, and desktop applications, removing many traditional limitations in automated testing.

## FAQ

### Question Title: How does AskUI identify elements in a Canvas application?

AskUI uses a combination of image recognition and text recognition to identify and interact with UI elements within a Canvas application. This allows it to automate tasks even when traditional element locators are not available.

### Question Title: Can AskUI automate interactions in desktop applications as well?

Yes, AskUI's capabilities extend beyond web applications. It can automate interactions within desktop applications, providing a unified testing solution across different platforms.

### Question Title: What browsers are supported by AskUI?

AskUI supports a wide range of modern browsers, including Chrome, Firefox, and Edge. Its cross-browser compatibility ensures consistent test execution across different environments.

### Question Title: Is prior coding knowledge required to use AskUI effectively?

While some familiarity with programming concepts is helpful, AskUI's intuitive syntax and low-code approach minimize the need for extensive coding knowledge. This makes it accessible to a wider range of users, including testers with limited programming experience.

### Question Title: How does AskUI handle dynamic content within Canvas applications?

AskUI's image and text recognition capabilities allow it to adapt to dynamic content within Canvas applications. By focusing on visual and textual cues, it can accurately identify and interact with elements even when their position or properties change.