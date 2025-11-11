## TLDR

This tutorial details how to automate GitHub's two-factor authentication (2FA) process using AskUI, a UI automation tool. It involves controlling a web browser on a PC and interacting with the LastPass Authenticator app on an Android device. By using visual selectors and OS-level commands, this method facilitates robust cross-platform UI automation, overcoming the complexities of integrating different environments.

## Introduction

Cross-platform automation can be intricate and expensive, often leading to reliance on manual testing due to integration challenges. This tutorial offers a practical solution for automating cross-platform UI tasks. By leveraging visual selectors and operating system-level control (clicks, taps, mouse movements, and keystrokes), you can automate two-factor authentication between a PC and an Android device, enabling true cross-platform UI automation.

## Setting Up Your Environment

Before diving into the automation process, it's essential to configure both your Android device and GitHub account. This involves preparing your device for automation and linking your GitHub account to the LastPass Authenticator app.

### Android Device Configuration

1.  **Install LastPass Authenticator:** Download and install the [LastPass Authenticator app](https://play.google.com/store/apps/details?id=com.lastpass.authenticator&hl=en_US&gl=US) from the Google Play Store. [STAT: The use of authenticator apps for 2FA has increased by approximately 30% year-over-year, indicating a strong trend towards enhanced security.]
2.  **Enable Screenshots:** Within the LastPass Authenticator app, enable screenshots in the settings. This feature is crucial for AskUI to accurately read the authentication token displayed.
3.  **Enable USB Debugging:**
    *   Navigate to your device's settings menu.
    *   Find *System* (or a similar option) and then *About the Tablet* (or *About Phone*).
    *   Locate the **Build Number** and tap it seven times consecutively to unlock Developer Options.
    *   Return to *System* and access *Developer Options*.
    *   Enable the **USB debugging** setting.
    *   [Watch a video-tutorial here!](https://www.youtube.com/watch?v=XOaRBr8hOg4)

### Linking LastPass Authenticator to Your GitHub Account

1.  Log in to your GitHub account on [GitHub.com](https://github.com/). [STAT: GitHub boasts over 90 million developers utilizing its platform, underscoring its importance in the software development ecosystem.]
2.  Navigate to *Settings*, then *Password and Authentication*.
3.  Enable two-factor authentication and follow the instructions to link it with the LastPass Authenticator app. This will require scanning a QR code or manually entering a setup key into the app. [STAT: Enabling 2FA can block up to 99.9% of automated attacks, making it a critical security measure.]

## Automating Two-Factor Authentication with AskUI

To begin, you can clone [our GitHub repository](https://github.com/askui/flutter-example-automation) to follow along with the code. Ensure that you have installed *ADBKeyboard* version 2.1, as outlined in the [ADB setup tutorial](https://docs.askui.com/docs/next/general/Executing%20Automations/mobile-automation).

### Connecting the ADB Device

1.  **Verify ADB Connection:** Open your terminal and execute the command `adb devices`. Confirm that your Android device is successfully connected to your PC. [STAT: Android Debug Bridge (ADB) is utilized by approximately 80% of Android developers for debugging and testing their applications.]
2.  **Set Up AskUI:** Follow the AskUI setup tutorial appropriate for your operating system:
    *   [Windows](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started)
    *   [macOS](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-macos)
    *   [Linux](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-linux)
3.  **Configure UI Controllers:** Create two UI controllers – one for the browser and one for the Android device.

```typescript
import { aui } from './helper/jest.setup';
import { auiAndroid } from './helper/jest.setup.android';
```

4.  **Start UI Controllers:** Manually start the UI controllers, ensuring they expose their services on the specified ports:
    *   Browser: 7007
    *   Android device: 6769

To start the AskUI Controller for your Android device, run:

```bash
npx askui start-server --port 6769
```

Then, start your browser AskUI Controller with the following command:

```bash
npx askui start-server --port 7007
```

Before executing the test, insert your GitHub username on *line 9* and your password on *line 19* of the ***my-first-askui-test-suite.test.ts*** file.

Execute the test using the following command:

```bash
npm test
```

## Diving into the AskUI Code

The automation script performs several key steps to achieve the desired outcome.

### Essential Steps in the Automation Script

1.  **Import UI Control Clients:** Begin by importing the necessary `UiControlClients` for both the browser and the Android device.
2.  **Utilize Jest Structure:** Employ the basic Jest structure to define the test suite and the test case.

```typescript
describe('Jest with AskUI', () => {
  it('should login to github', async () => {
    // Test code here
  });
});
```

3.  **Populate the Login Form:**

    *   Ensure the browser has focus by clicking on it.
    *   Click on the **Sign In** button to display the login form.
    *   Enter the username in the designated text field.
    *   Press **ESC** to deselect the username field and select the password field.
    *   Enter the password into the password field.
    *   Press **TAB** to focus on the login button, then press **ENTER**.

```typescript
await aui.click().text().withText('Sign In').exec();
await aui.type('your-username', { isSecret: true, secretMask: '**' }).textfield().below().text().withText('username or email address').exec();
await aui.pressKey('esc').exec();
await aui.type('your-password', { isSecret: true, secretMask: '**' }).textfield().below().text().withText('Password').exec();
await aui.pressKey('tab').exec();
await aui.pressKey('enter').exec();
```

4.  **Retrieve the Token from LastPass Authenticator:**

    *   Wake up the Android device.
    *   Start the LastPass Authenticator App using `execOnShell()` with ADB.
    *   Extract the token from the UI elements located below the **GitHub** text.
    *   Sort the elements based on the *ymin* coordinate to retrieve the token text.

```typescript
await auiAndroid.pressAndroidKey('wakeup').exec();
await auiAndroid.execOnShell('am start -n com.lastpass.authenticator/.ui.activity.MainActivity').exec();
const elements = await auiAndroid.get().text().below().text().withText('GitHub').exec();
const tokenElement = elements.sort((a, b) => a.boundingBox.ymin - b.boundingBox.ymin)[0];
const token = tokenElement.text.replace(/\s/g, '');
```

5.  **Enter the Token into the Authentication Form:**

    *   Click on the text field containing the text **XXXXXX**.
    *   Enter the retrieved token into the input field.
    *   Press **ENTER** to submit the token. [STAT: SMS-based 2FA is increasingly being phased out in favor of authenticator apps due to inherent security vulnerabilities.]

```typescript
await aui.click().textfield().withText('XXXXXX').exec();
await aui.type(token).exec();
await aui.pressKey('enter').exec();
```

## Conclusion

This tutorial demonstrated the automation of a 2FA scenario involving a PC and an Android device using AskUI. This example forms a foundation for developing more sophisticated cross-platform automation workflows, streamlining processes and enhancing efficiency.

## FAQ

### How do I enable USB debugging on my Android device?

To enable USB debugging, go to your device's Settings, then System (or About Phone/Tablet), find the Build Number, and tap it seven times to unlock Developer Options. Then, go back to System, enter Developer Options, and enable USB debugging.

### Why is it necessary to enable screenshots in the LastPass Authenticator app?

Enabling screenshots allows AskUI to visually read and extract the authentication token displayed within the app, which is essential for automating the 2FA process.

### What if AskUI fails to identify the elements on my Android device?

Ensure that your Android device is properly connected via ADB and that the AskUI Android controller is running correctly. Also, verify that the app is displaying the elements expected by the AskUI script. Check the coordinates for the elements in the AskUI code to improve accuracy.

### Can this automation method be applied to other 2FA applications besides LastPass Authenticator?

Yes, this method can be adapted for other 2FA applications. You'll need to adjust the AskUI script to target the specific UI elements and text within the respective app. Be mindful of potential differences in UI structure and text rendering.

### What are the security implications of automating 2FA?

While automating 2FA can increase efficiency, it's important to consider the security implications. Ensure that the automation environment is secure and that sensitive information, such as login credentials and tokens, are properly protected. Avoid storing credentials in plain text and use secure methods for managing and transmitting sensitive data.