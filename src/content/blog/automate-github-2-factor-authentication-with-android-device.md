Today, we're building a two-factor authentication GitHub workflow automation with a browser we have on our Personal Computer (PC) and a physical Android device.

Cross-Platform automation and within one framework is hard to do. That is why testing is often done by humans. This means it is expensive. Both in working hours and also for elaborate setups with multiple devices.

We will show you a way to automate cross-platform based on visual selectors and Operating System (OS) automation (Clicks/Taps, mouse movement, keystrokes.). Getting you started on your journey to **real** Cross-Platform UI Automation.

## Setup

For the setup of this tutorial, we need to do two things:

- Set up your Android device
- Set up our GitHub account with the Android device as a second factor

## Android Device

We need to enable USB debugging, install the LastPass Authenticator app, and enable screenshots for it. So let's do that now.

### Lastpass Authenticator App

You have to install the [LastPass Authenticator app](https://play.google.com/store/apps/details?id=com.lastpass.authenticator&hl=en_US&gl=US) from the Google Play Store.

### Enable Screenshots in the LastPass Authenticator App

Open the app. Go to the settings of the LastPass Authenticator app and enable screenshots.

### Enable USB Debugging

Next, we have to enable USB debugging on the device. Depending on your Android version and the manufacturer of the device, this always is a little bit different. So I'll show you how it's done on my device.

First, head over to the settings. Then find *System* and scroll down to *About the Tablet*. Then find the **Build Number** and hit it seven times. A little pop-up on the bottom should show up which says: **You are now a Developer!**. If it were always this easy to learn a new profession 😋

Let's go back to *System* and there should be a new option: *Developer Options*. Tap it and scroll down to **USB debugging**. Make sure it is enabled and now you're good to go to complete the setup.

[Here is a video-tutorial to show it visually!](https://www.youtube.com/watch?v=XOaRBr8hOg4)

That is it for the basic setup of your Android device 🥳

## Link LastPass Authenticator App to GitHub Account

You have to link your two-factor authentication of GitHub with your LastPass Authenticator app. Hop over to [GitHub.com](https://github.com/) and you should see your personal page after logging in. Then click on the avatar on the right top, go to *Settings*, *Password and Authentication* and there you should be able to enable the two-factor authentication by following the instructions steps.

You should end up with something like this in your app:

And that's it! You're good to go and can start implementing the automation for AskUI 😎

## Implement the Automation of 2-Factor Authentication with AskUI

*If you want to follow along, clone [our GitHub repository](https://github.com/askui/flutter-example-automation).*

If you followed the [tutorial for setting up the ADB](https://docs.askui.com/docs/next/general/Executing%20Automations/mobile-automation), you should also have the *ADBKeyboard* in version 2.1 installed.

Once you have everything set up, head over to your preferred IDE, open a terminal, and type in adb devices. You should see your device successfully connected if you connected it to your PC.

### Setup AskUI

Please follow along the specific tutorial for your operating system and come back once you set that up:

- [Windows](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started)
- [macOS](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-macos)
- [Linux](https://docs.askui.com/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-linux)

### Setup the UI Controllers - One for your System and one for your Android Device

We need two UI controllers, one for the Android device and one for our browser on our PC.

```typescript
import { aui } from './helper/jest.setup';
import { auiAndroid } from './helper/jest.setup.android';
```

We'll also need to start the UI controllers manually. They'll expose their service on a specific port:

- For the browser 7007
- For the Android device 6769

Start the AskUI Controller for your Android device by running:

```bash
npx askui start-server --port 6769
```

Then start your browser AskUI Controller by running:

```bash
npx askui start-server --port 7007
```

You must first insert your Github-Username on *line 9* and your password on *line 19* of the ***my-first-askui-test-suite.test.ts*** file

Execute the test by running:

```bash
npm test
```

## Breaking Down the AskUI Code

We start by importing the UiControlClients for our browser and our Android device.

Then, we have the basic jest structure which describes a test suit, and then the test case.

```typescript
describe('Jest with AskUI', () => {
  it('should login to github', async () => {
    // Test code here
  });
});
```

### Fill Out the Initial Login Form

Line 1: The first instruction is to click on the browser again to get the focus when we start our automation.

Line 2: Then we want to click on **Sign In** to bring up the login form from GitHub.

Line 4-10: Next, we want to type in our username into the text field that is below the text field with the label "username or email address". Notice how we use { isSecret: true, secretMask: '**' } here, so no sensitive information is sent to the AskUI backend.

Line 12: Then press **ESC** to lose the focus of the text field and select the password field.

Line 14-20: We want to type in our password into the text field that is below the text field with the label **Password**.

Line 22-23: Then we want to **TAB** to get focus on our login button and press enter.

This is where the browser automation stops and we have to switch to our Android device.

```typescript
await aui.click().text().withText('Sign In').exec();
await aui.type('your-username', { isSecret: true, secretMask: '**' }).textfield().below().text().withText('username or email address').exec();
await aui.pressKey('esc').exec();
await aui.type('your-password', { isSecret: true, secretMask: '**' }).textfield().below().text().withText('Password').exec();
await aui.pressKey('tab').exec();
await aui.pressKey('enter').exec();
```

### Get a Token from LastPass Authenticator App

Line 1: We use our Android key here to wake up the tablet if it has gone to sleep.

Line 4: Then we want to start the LastPass Authenticator App. Starting it over the UI is not too intuitive to automate. For the sake of brevity, we use ***execOnShell()*** with the ADB. That's a little bit of a trick here 😉.

Line 6-15: The text that displays our token is the first element below the **GitHub** text. We want to copy it and then paste it into the input field that comes up when we do the browser automation.

Line 18-24: To get the element, we're going to sort the elements based on the bounding box's *ymin*-coordinate. This should give us the token as the first element. We can take the first element and get its text, replacing all the new lines or spaces we find.

```typescript
await auiAndroid.pressAndroidKey('wakeup').exec();
await auiAndroid.execOnShell('am start -n com.lastpass.authenticator/.ui.activity.MainActivity').exec();
const elements = await auiAndroid.get().text().below().text().withText('GitHub').exec();
const tokenElement = elements.sort((a, b) => a.boundingBox.ymin - b.boundingBox.ymin)[0];
const token = tokenElement.text.replace(/\s/g, '');
```

### Type the Token Into the Authentication Form

We then type the token into the input field which contains the text **XXXXXX**.  
If the token is correct this should bring us to our personal page on GitHub 💃🏻.

```typescript
await aui.click().textfield().withText('XXXXXX').exec();
await aui.type(token).exec();
await aui.pressKey('enter').exec();
```

## Conclusion

In this tutorial, you learned how to instrument two different devices on two different platforms with AskUI in one automation case.

With this knowledge, you can now start to write your own cross-platform automation 😎.
