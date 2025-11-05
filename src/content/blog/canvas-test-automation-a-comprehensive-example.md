This article demonstrates how AskUI helps users to automate a Canvas applications' test cases in 63 seconds or less.

Given you have an AskUI account and setup already ready to go.

- [Getting Started: Windows](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started), [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos), [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux)

## The Use Case

Automate a single test run, on our canvas based [calculator.](https://www.online-calculator.com//html5/simple/index.php?v=10) This is what our result will look like eventually:

### Lets dig a little bit deeper to understand how we could do this:

#### Test Steps:

1. Open Calculator URL in Browser
2. Press 3
3. Press Multiplication button
4. Press 3 and then 3 again
5. Verify, that 99 is the Result

## How to build this in 63 seconds or less

Yes it is really that fast.

**1. Create a new Workflow, like demonstrated here:**

Open the file ***askui_example/my-first-askui-test-suite.test.ts*** and delete its entire contents! It should look like this afterward:

```typescript
import { aui } from './helper/jest.setup';

describe('Canvas Calculator Test', () => {
  it('should calculate 3 * 33 = 99', async () => {
    // Test code will go here
  });
});
```

**2. Paste the following AskUI Instructions. They assume that you started the AskUI Controller and have chrome already open:**

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

**3. Run the workflow and you should see how AskUI executes the test steps outlined above:**

Thats it, that is how you automate a given test case in a canvas environment. It is important to note that it is applicable to any browser, any Operating System and also any desktop application.

There are truly no limitations of what you can automate, test, build.
