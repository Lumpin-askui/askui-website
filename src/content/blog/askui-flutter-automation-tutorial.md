Updated: June 2025

## Introduction

This tutorial shows how to use AskUI to automate an Android app built with Flutter. We provide the source code for the Flutter demo app used in this tutorial. You can find the source code on our [GitHub repository](https://github.com/askui/flutter-example-automation).

This tutorial assumes that you already have your Android device or emulator prepared. If not, follow this post to set up your device.

## Live Demo in Action (Playback Speed x3)

![Flutter Automation Demo](https://github.com/askui/flutter-example-automation/raw/main/images/inaction-fast.gif)

## Setup

The source code for the Flutter demo app used in this tutorial is provided in this [repository](https://github.com/askui/flutter-example-automation).

### 1. Build and Run Flutter Demo App

#### 1) Install Flutter

First, ensure Flutter is installed.

#### 2) Clone repository and create Flutter demo app:

```bash
git clone https://github.com/askui/flutter-example-automation.git
cd flutter-example-automation
```

#### 3) Install dependencies for the Flutter demo app:

```bash
flutter pub get
```

#### 4) Update `minSdkVersion` in `android/app/build.gradle`:

```gradle
android {
    defaultConfig {
        minSdkVersion 21
    }
}
```

#### 5) (Optional) Clear deprecation warnings (see this issue):

Modify `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
```

#### 6) Run the Android Emulator.

#### 7) Run the demo app:

```bash
flutter run
```

Now you should see the demo app running on your Android device.

### 2. Setup ADBKeyboard

In this example, AskUI automates typing on the Android device using ADBKeyboard—a virtual keyboard that handles input via ADB:

[ADBKeyboard.apk](https://github.com/senzhk/ADBKeyBoard)

#### 1) Download the ADBKeyboard package (Version 2.0):

👉 [ADBKeyboard GitHub Releases](https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0)

#### 2) Unzip it.

#### 3) Find your device:

```bash
adb devices
```

#### 4) Install ADBKeyboard on the device:

```bash
adb install -r ADBKeyboard.apk
```

#### 5) Configure ADBKeyboard:

```bash
adb shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME
```

#### 6) Enable ADBKeyboard:

```bash
adb shell ime enable com.android.adbkeyboard/.AdbIME
```

#### 7) Verify:

When clicking any text field, you should see **ADB Keyboard {ON}** notification at the bottom of the screen.

### 3. Setup AskUI

#### 1) Install AskUI by following the guide for your OS (Windows, Linux, macOS):

[AskUI Installation Guide](https://docs.askui.com/introduction/01-introduction/01-overview)

#### 2) Run the UiController manually with Android runtime mode:

```bash
npx askui
```

On macOS:

```bash
./node_modules/.bin/askui
```

If you can't find the binary, run:

```bash
npx askui --help
```

#### 3) Disable UiController code inside `test/helper/jest.setup.ts` (since it's already running manually):

```typescript
// Comment out or remove the UiController initialization
// await aui.start();
```

## Breaking Down the AskUI Test Code

The full test automates all three app tabs:

- Outline (form fill)
- Datepicker (calendar interaction)
- Camera (take picture)

### General Tips for Using AskUI:

1. Use annotate() or annotateInteractively() to visualize how AskUI sees UI elements.
2. Know your screen size — swipe coordinates may vary depending on device size.
3. Use .withText() targeting whenever possible.

## 1. Click and Type (Outline Tab)

We start by filling out the form fields on the first screen.

**App Screen:**

![First tap of demo app](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/68512e6d4eebd0a46e0783ea_photo1.jpeg)

### Test Code:

```typescript
// Fill form fields
await aui.click().textfield().withText('Name').exec();
await aui.type('John Doe').exec();
await aui.click().textfield().withText('Email').exec();
await aui.type('john@example.com').exec();
```

## 2. Datepicker Tab

We continue by filling out text fields and selecting dates using the date pickers.

**App Screen:**

![Datepicker tab of the demo app](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/68513601b81010826a4c3c84_photo2.jpeg)

### Test Code:

#### Fill Title & Description:

```typescript
await aui.click().textfield().withText('Title').exec();
await aui.type('Summer Vacation').exec();
await aui.click().textfield().withText('Description').exec();
await aui.type('Planning a trip to Europe').exec();
```

#### Select Departure Date:

```typescript
await aui.click().text().withText('Departure Date').exec();
await aui.click().text().withText('15').exec(); // Select day 15
await aui.click().button().withText('OK').exec();
```

#### Select Return Date:

```typescript
await aui.click().text().withText('Return Date').exec();
await aui.click().text().withText('30').exec(); // Select day 30
await aui.click().button().withText('OK').exec();
```

#### Interact with Checkbox and Switch:

```typescript
await aui.click().checkbox().withText('I agree to terms').exec();
await aui.click().switch().withText('Enable notifications').exec();
```

## 3. Camera Tab

Finally, we switch to the Camera tab and trigger the camera interaction.

**App Screen:**

![Camera tab of the demo app](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/68513702339db0a7f3ad0ab5_photo3.jpeg)

### Test Code:

```typescript
// Navigate to Camera tab
await aui.click().text().withText('Camera').exec();
// Take a picture
await aui.click().button().withText('Take Picture').exec();
```

## 4. Complete Test Code

This full code block integrates all above steps for a complete end-to-end automation.

```typescript
import { aui } from './helper/jest.setup';

describe('Flutter App Automation', () => {
  it('should complete full workflow', async () => {
    // 1. Outline Tab - Fill form
    await aui.click().textfield().withText('Name').exec();
    await aui.type('John Doe').exec();
    await aui.click().textfield().withText('Email').exec();
    await aui.type('john@example.com').exec();

    // 2. Datepicker Tab - Fill dates
    await aui.click().text().withText('Datepicker').exec();
    await aui.click().textfield().withText('Title').exec();
    await aui.type('Summer Vacation').exec();
    await aui.click().text().withText('Departure Date').exec();
    await aui.click().text().withText('15').exec();
    await aui.click().button().withText('OK').exec();
    await aui.click().text().withText('Return Date').exec();
    await aui.click().text().withText('30').exec();
    await aui.click().button().withText('OK').exec();

    // 3. Camera Tab - Take picture
    await aui.click().text().withText('Camera').exec();
    await aui.click().button().withText('Take Picture').exec();
  });
});
```

## Conclusion

After following this tutorial, you can fully automate Flutter mobile apps with AskUI. While this demo uses Flutter, the approach works for any Android app. AskUI's visual automation removes fragile selectors, making mobile UI automation stable, adaptive, and AI-powered.

[👉 **Join AskUI Community to share your cases or get help.**](https://www.askui.com/)
