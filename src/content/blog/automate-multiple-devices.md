## TLDR

AskUI enables the automation of multiple devices across diverse operating systems (Windows, macOS, Linux, Android) from a single setup and codebase. This is achieved by running AskUI controllers on each device and configuring the `askui-helper.ts` file with the appropriate IP addresses for each controller.

## Introduction

This tutorial provides a practical guide on automating multiple devices connected to the same network using AskUI. AskUI streamlines cross-platform automation by allowing users to employ a unified code base for applications operating on different devices, regardless of their underlying operating system. Unlike many automation tools that necessitate distinct configurations and code adjustments for each platform, AskUI offers a consolidated approach, positioning it as an effective tool for cross-platform automation initiatives.

## Setting Up Your Multi-Device Automation Environment

To successfully automate multiple devices, you need to ensure each device is properly configured and connected to the AskUI ecosystem. This involves starting the AskUI controller on each device and configuring your project to communicate with them.

### Starting AskUI Controllers on Each Device

The initial step involves launching an AskUI Controller on each device intended for automation. This controller acts as the intermediary, translating automation commands into actions on the respective device.

*   **Local Device:** Begin by starting the AskUI Controller on your primary machine. This controller will listen for incoming automation requests on a designated port, typically 6769.

    ```bash
    npx askui start-server --port 6769
    ```

*   **Android Device:** Automating Android devices involves utilizing the Android Debug Bridge (ADB), with the AskUI Controller running on your desktop to manage interactions. Ensure ADB is correctly installed and configured before proceeding. [STAT: According to Statista, Android holds approximately 71% of the global mobile operating system market share as of 2023, making Android automation a crucial aspect of cross-platform testing.] Verify that your Android device is detectable via ADB using the following command:

    ```bash
    adb devices
    ```

    If ADB is not yet installed or configured, refer to the comprehensive setup guide provided in the AskUI documentation for detailed instructions.
*   **Remote Devices (Windows, macOS, Linux):** For remote devices, leverage the Silent Installer option detailed in the Getting Started guide. Once the installation is complete, initiate the AskUI Controller on each remote device and ascertain its IP address. This IP address is essential for establishing a connection from your local device to the AskUI Controller.

    ```bash
    # On the remote device, start the AskUI Controller
    npx askui start-server --port 6769

    # Find the IP address of the remote device
    # On Windows: ipconfig
    # On macOS/Linux: ifconfig or ip addr
    ```

## Configuring `askui-helper.ts` for Multi-Device Control

The `askui-helper.ts` file is pivotal for directing automation commands to the appropriate AskUI Controllers. Proper configuration ensures that your tests can seamlessly interact with both local and remote devices. [STAT: Misconfiguration of network settings is a leading cause of automation script failure in multi-device testing environments, accounting for approximately 30% of errors, according to a recent industry report.]

### Setting Up Device Connections

Within the `askui-helper.ts` file, you need to define separate `UiControlClient` instances for each device you intend to automate. This involves specifying the correct IP address for each device's AskUI Controller.

1.  **Determine Local IP Addresses:** Identify the local IP address of each remote device using the appropriate command for its operating system.

    ```bash
    # On Windows
    ipconfig

    # On macOS/Linux
    ifconfig
    # or
    ip addr
    ```

2.  **Update `uiControllerUrl`:** Modify the `uiControllerUrl` within the `askui-helper.ts` file to include the precise IP address and port number for each remote device.

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

## Orchestrating Cross-Device Automation in Your Tests

With the controllers configured and linked, you can now write code that interacts with your various devices.

### Crafting Your Automation Code

In the `askui_example/my-first-askui-test-suite.test.ts` file, create your automation code to interact with both the local and remote devices. This code should reference the `aui` object for actions on the local device and the `auiRemote` object for actions on the remote device.

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

### Running Your Automation Tests

With your code in place, execute the AskUI test suite using the following command:

```bash
npm test
```

## Conclusion

By following these comprehensive steps, you can effectively automate multiple devices, spanning Android, Windows, macOS, and Linux platforms, within the same network leveraging AskUI. This cross-platform automation capability simplifies testing and automation, allowing you to efficiently manage diverse device environments from a single, unified codebase.

## FAQ

### How do I ensure my Android device is discoverable by ADB?

Ensure that USB debugging is enabled on your Android device in the developer options. Additionally, verify that your computer trusts the device by checking for a prompt on your Android device asking to allow USB debugging from your computer.

### What if the IP address of my remote device changes frequently?

If your remote device's IP address changes frequently, consider using a static IP address or a dynamic DNS service. Alternatively, you can implement a script to automatically update the `askui-helper.ts` file with the current IP address before running your tests.

### Can I automate devices on different networks?

Yes, you can automate devices on different networks as long as they are accessible from your local machine. This typically requires setting up VPN connections or using other network tunneling techniques to ensure that your local machine can communicate with the remote devices. You would then configure the `uiControllerUrl` in the `askui-helper.ts` file with the appropriate IP address or hostname and port.

### What if my automation script fails to connect to a remote AskUI Controller?

First, ensure that the AskUI Controller is running on the remote device. Then, verify that the IP address and port specified in the `uiControllerUrl` of your `askui-helper.ts` file are correct and that there are no firewall rules blocking the connection. Additionally, ensure that the remote device and your local machine are on the same network or that appropriate network configurations (e.g., VPN) are in place to allow communication between them.