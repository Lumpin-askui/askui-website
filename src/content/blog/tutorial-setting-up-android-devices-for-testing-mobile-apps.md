If you rather want to see AskUI in action on Android with two use cases. Check out the following blog posts:*
[[Requirements
[(optional) Android device, if you want to run your app on a real device

### If you have the Android Studio installed, you have to verify if you have the **Android SDK Platform-Tools**installed. They both are packages containing several command line tools that are useful for developing apps for Android devices.

- More Actions**button, and then

- SDK Manager**

Android SDK**from the list on the left side of the window.
SDK Tools**tab, and check the**Android SDK Platform-Tools**. After clicking the OK button, it will start to install the tools we have selected.

SDK Tools**tab listing available development tools

### After installing the necessary tools in the Android Studio, we can start to set up the Android device that we want to use for the development.

#### This part is for setting up a real Android device. If you want to use the Android Emulator instead, then you can skip it and go directly to the next step.

Developer Options**within the device. To enable the**Build Number**option 7 times. You can find this option in one of the following locations, depending on your Android version:
Android 9 (API level 28) and higher: **About Phone**>**Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26):**System**>**Build Number**

- Settings**>**Build Number**

Developer Options**, we can enable the**Settings**>**Advanced**>**USB debugging**
Settings**>**Developer Options**>**Android 7.1 (API level 25) and lower:**Developer Options**>**Set up an Android Emulator

More Actions**button, and then
Virtual Device Manager**

Create device**button on the top left corner of the**You will now see the**Choose a system image

The hardware profile represents the specification of the hardware that will be used as a virtual device. Various presets of Android devices e.g. Pixel or Nexus are provided. But you can also create your own hardware profile, after which you will be customizing parameters in such:
Screen size

- Using Hardware buttons (Back, Home, Menu, Volume, etc.)

- After choosing a hardware profile, we will be choosing a system image for the Android device. Here we can choose one from a variety of Android images, from the latest Android 13 Tiramisu down to the Android 7 Nougat. If you have the Android studio freshly installed and haven't used it yet, then it will start to download the image after selecting one.

Device Manager**. Click the device's play button(▶️) to run it.
3. Set up the ADBKeyboard

[adb*command line tool.

To install the ADBKeyboard on your device,
Download the ADB-Keyboard package from [Unzip it.

1. # make sure that your Android device is connected.
# in case of using the emulator, it should be running
adb devices

# inside ADBKeyBoard-2.0/
adb -s <your device id> install ADBKeyboard.apk

adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME

adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME

*4. Done

If you have a recurring or persisting issue while following this tutorial, don’t hesitate to ask the