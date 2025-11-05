This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android, with a single setup with askui library.

In fact, there are many automation tools in the wild that you can use for testing and automating different devices, although most of them require different configurations and different code for different platforms. By using AskUI library, an automation tool that operates on the OS level, you can use the same code for any application running on different devices even without much change. And this makes AskUI a powerful Cross-platform automation tool.

Let's have a look at AskUI and see how we can accomplish a Cross-platform/-device automation test🔥

📌 *The following tutorial assumes that you have already installed and set up the AskUI on your local device. See the Getting started for more details:*

- [Windows](https://docs.askui.com/docs/general/Getting%20Started/getting-started)
- [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos)
- [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux)

## 1. Start the AskUI Controller for Each Device

### Local Device

Run the following command to start the AskUI Controller for your local device on Port *6769:*

```bash
npx askui start-server --port 6769
```

### Android Device

Android devices are controlled over the Android Debug Bridge (ADB) by the *AskUI Controller* running on your local device (desktop).

If you don't have the ***ADB*** installed on your local device, set it up by following [this tutorial](https://www.askui.com/blog-posts/tutorial-setting-up-android-devices-for-testing-mobile-apps).

Be sure that your Android device is discoverable by the ***ADB*** from your local device:

```bash
adb devices
```

### Remote Device: Windows, macOS, Linux

For a remote device please use the Silent Installer option of the installer linked in the **Getting Started** above. After the installation you have to first start the AskUI controller and then to find out the IP of the remote device. You need it for connecting to the AskUI Controller from your local device:

```bash
# On the remote device, start the AskUI Controller
npx askui start-server --port 6769

# Find the IP address of the remote device
# On Windows: ipconfig
# On macOS/Linux: ifconfig or ip addr
```

## 2. Configure the *helpers/askui-helper.ts*

### For Connecting Remote Devices: Windows, macOS, Linux

Figure out the local ip address of the remote device with the following command:

```bash
# On Windows
ipconfig

# On macOS/Linux
ifconfig
# or
ip addr
```

Change the IP address **<local-ip-address>** in the **askui_example/helpers/askui-helper.ts**:

```typescript
import { UiControlClient } from 'askui';

// For local device
export const aui = await UiControlClient.build({
  credentials: {
    workspaceId: process.env.ASKUI_WORKSPACE_ID!,
    token: process.env.ASKUI_TOKEN!,
  },
  uiControllerUrl: 'http://localhost:6769',
});

// For remote device
export const auiRemote = await UiControlClient.build({
  credentials: {
    workspaceId: process.env.ASKUI_WORKSPACE_ID!,
    token: process.env.ASKUI_TOKEN!,
  },
  uiControllerUrl: 'http://<local-ip-address>:6769',
});
```

## 3. Write the Automation Code

Write the test code in **askui_example/my-first-askui-test-suite.test.ts**:

```typescript
import { aui, auiRemote } from './helpers/askui-helper';

describe('Multi-device automation', () => {
  it('should automate local and remote devices', async () => {
    // Automate local device
    await aui.click().text().withText('Example').exec();
    
    // Automate remote device
    await auiRemote.click().text().withText('Example').exec();
  });
});
```

## 4. Run the Automation Code

Run the command below to run the AskUI test code:

```bash
npm test
```

## 5. Conclusion

Now you should be able to automate multiple devices, be it Android, Windows, macOS, Linux or remote devices, in the network.
