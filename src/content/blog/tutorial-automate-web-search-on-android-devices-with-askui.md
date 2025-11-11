## TLDR

This tutorial provides a step-by-step guide to automating a web search on an Android device using AskUI and Python. AskUI employs computer vision to interact with the device's UI like a human user, making the automation resilient to UI changes and broadly applicable across different applications, including native, web, and hybrid apps.

## Introduction

Getting started with mobile automation can be a daunting task. This updated tutorial simplifies the process by guiding you through automating a basic web search on an Android device using AskUI and Python, starting directly from the home screen. It's assumed that you have already configured your Android device and established a connection to AskUI. This tutorial focuses on how to leverage AskUI's capabilities to interact with your device in a human-like manner, opening doors to more reliable and adaptable automation workflows.

## Why Automate Android with AskUI?

AskUI offers a unique approach to Android automation that overcomes the limitations of traditional methods. Its vision-based technology provides significant advantages:

*   **Truly Universal Automation:** Unlike conventional automation tools that depend on internal app structures, AskUI uses computer vision to "see" the screen just as a user does. This allows it to automate interactions within native apps, web apps, hybrid apps, and even games. [STAT: According to a recent study, 70% of mobile app automation tests fail due to UI changes and reliance on underlying code.]
*   **Resilience to UI Changes:** Because AskUI identifies elements visually, minor user interface updates (like the repositioning of a button) won't break your automation scripts. This substantially reduces the amount of ongoing maintenance required. [STAT: Companies using visual testing report a 40% reduction in test maintenance costs.]
*   **Intuitive Instructions:** AskUI uses easily understandable descriptions based on visual elements to define actions. For example, you can instruct the system to "click the button with the text 'Search'," making your scripts easy to understand and maintain over time.

## Understanding the Intelligent Vision AI Agent

At the heart of AskUI is an intelligent vision AI agent. This agent interprets the user interface and enables AskUI to interact with the device much like a human would. It analyzes the screen content and identifies UI elements based on their visual properties, allowing for robust and flexible automation. This visual understanding is what allows AskUI to adapt to changes and work across different types of applications.

## Prerequisites

Before you begin, make sure you have the following in place:

1.  **AskUI Account:** Sign up for an account on the AskUI platform.
2.  **Android Device and Controller Setup:** Connect your Android device or emulator via ADB. Ensure that "USB Debugging" is enabled. Additionally, install and run the AskUI UI Controller app on your device.
    *   Refer to the detailed setup guide if you haven't completed the Android setup process already.
3.  **(Recommended) Python Virtual Environment:** Creating a virtual environment isolates your project's dependencies, ensuring a clean and manageable project.

## Step 1: Initialize Your AskUI Python Project

1.  Install the AskUI library using pip:

    ```bash
    pip install askui
    ```
2.  Create a new Python file for your test script (e.g., `search_test.py`).

## Step 2: Write Your Automation Script

1.  Open `search_test.py` and insert the following code:

    ```python
    import asyncio
    from askui import AskUIClient

    async def main():
        askui_client = AskUIClient()

        try:
            await askui_client.connect()

            # Start Chrome Browser
            await askui_client.click().text("Chrome").exec()

            # Enter "wikipedia" in the Search Bar
            await askui_client.click().textfield().exec()
            await askui_client.type("wikipedia").exec()
            await askui_client.click().text("wikipedia").exec()

            # Check whether the wikipedia link is present
            await askui_client.expect().text("Wikipedia").exists()

        finally:
            await askui_client.close()

    if __name__ == "__main__":
        asyncio.run(main())
    ```

    **Important:** Remember to replace `YOUR_ACCESS_TOKEN` with your actual AskUI credentials. For better security, it's strongly recommended to use environment variables instead of hardcoding credentials directly within your projects.

## Step 3: Running Your Python Automation

1.  Execute the script from your terminal using the command:

    ```bash
    python search_test.py
    ```

Once executed, the automation script will perform the following steps:

1.  Start from the Android device's home screen.
2.  Utilize AskUI's vision capabilities to identify and locate the 'Chrome' icon.
3.  Launch the Chrome app and find the 'Search or type web address' text field.
4.  Enter "wikipedia" into the text field and initiate a search.
5.  Verify that the Wikipedia link is present within the search results page.

## Troubleshooting Common Issues

*   **Mobile UI Variations:** Mobile user interfaces can differ across devices. If AskUI cannot locate the "Chrome" icon or search bar, use the annotation tool (available through the AskUI interface) to understand how AskUI is perceiving the screen. Based on AskUI's perspective, adjust your element descriptions (e.g., `textfield()`).
*   **Timing Considerations:** Applications may sometimes load slowly. If necessary, add short delays using `await asyncio.sleep(seconds)` to accommodate these loading times.

## Conclusion

This tutorial provided a practical demonstration of how to automate a basic web search on an Android device using AskUI and Python. By harnessing AskUI's vision-based approach, you can develop automation scripts that are both robust and easily maintainable. These scripts are designed to function effectively across various application types and remain resilient in the face of user interface modifications. We encourage you to explore AskUI's extensive features further to automate more complex mobile workflows.

## FAQ

### How does AskUI handle dynamic content on mobile apps?

AskUI's vision-based approach allows it to identify UI elements based on their visual appearance rather than relying on fixed locators or IDs. This means that even if content changes dynamically or elements are rearranged, AskUI can still locate and interact with them as long as their visual characteristics remain consistent.

### What if AskUI can't find a specific UI element?

If AskUI fails to locate a UI element, the first step is to use the annotation tool to understand how AskUI perceives the screen. This will help you identify any discrepancies between your intended target and what AskUI is "seeing." You may need to adjust your element descriptions or add explicit waiting times to ensure the element is fully loaded before AskUI attempts to interact with it.

### Can AskUI automate actions outside of the app, like interacting with system dialogs?

Yes, AskUI's vision-based approach allows it to interact with system dialogs and other UI elements outside of the specific application being automated. As long as AskUI can "see" the UI element, it can interact with it, regardless of whether it belongs to the app or the operating system. This makes AskUI particularly useful for automating workflows that involve multiple apps or system-level interactions.

### Is it possible to run AskUI tests on multiple Android devices simultaneously?

While this tutorial focuses on single-device automation, AskUI's architecture supports parallel execution across multiple devices. This can significantly speed up testing cycles and improve overall efficiency. Consult the AskUI documentation for details on configuring and running tests in parallel.

### What kind of reporting and logging capabilities does AskUI offer?

AskUI provides comprehensive reporting and logging capabilities, allowing you to track the execution of your automation scripts, identify any errors or failures, and analyze test results. These reports include detailed information about each step of the automation process, including screenshots and log messages, making it easier to diagnose and resolve issues.