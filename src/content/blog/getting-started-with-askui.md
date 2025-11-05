Test automation is still considered a bottleneck in modern software development. Especially User Interface (UI) automation can be quite challenging in certain cases. Despite countless frameworks and tools, it is very difficult to automate applications across operating systems, although cross-platform workflows play an increasingly important role. For example, testing a 2-factor authentication of a web application via smartphone is almost impossible to automate as an end-to-end process.

AskUI closes this gap by rethinking UI automation.

## About AskUI

AskUI is a platform-independent, visual selector based UI automation framework. Instead of controlling elements via selectors such as *XPath* or *CSS* selectors and thus being limited to web applications, AskUI controls the UI at the operating system level while also detecting elements with AI vision models.

For making this possible, a neural network was trained on the appearance of UI elements in order to localize UI elements based on screenshots. These are then matched with an instruction that is unique for the respective element. The final execution of the instruction happens via mouse and keyboard control on the operating system. Such an instruction could be for example:

```
click().button().below().text("Password")
```

If we take a look at the corresponding UI, it becomes clear which action is to be executed:

![Example Login page](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b9c39f787e903e86af_631f00a03e31e3e9503a3a5f_2jhpm80ee9urmzzwocq8.png)

*Example Login page*

The instruction describes a click on a button below a certain text, in this case *Password*. Visually, there is only one button here, so when the action is executed, a click on the blue *Login* button is performed.

## Why AskUI

In principle, one can of course ask whether another test automation tool is needed after Selenium, Playwright and co. If you look at the development of the last few years, you will notice that websites and apps are using more and more new technologies, e.g. [iFrame](https://www.w3schools.com/tags/tag_iframe.asp) or [ShadowDOM](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/), and third-party systems, which make it more difficult to automate them. Instead of developing a separate automation solution for each new technology, AskUI acts independently of these developments and acts as a future-proof framework for UI automation of any operating system. The following advantages result from the approach:

- Test instructions are written in *UI language* and are thus easy to understand.
- No access to code selectors is needed. Thus the tests are independent of changes in the program code and run very stable.
- Elements are found visually by an AI vision model and not by pixel-matching. This makes the automation completely independent of the resolution and design of the UI elements.

In the following, we will take a look at the first steps in AskUI.

## Setting up AskUI

AskUI is an [open source framework](https://github.com/askui/askui) with a public [documentation](https://docs.askui.com/). You need to [create an account](http://app.askui.com/selfserve-signup-form) and get 500 Steps per month free for our AskUI inference backend. That is enough to get a feel for AskUI and automate a small test or workflow.

### Download and Run The Installer

The first thing you have to do is to download the installer which will install the following main components:

- AskUI Development Environment (ADE) - Manages you AskUI Installation and Settings as well as the...
- AskUI Controller - Service that executes user actions on your behalf like mousemovement/-clicks and keyboard presses.

#### Windows

Download the installer from this link and run it:

- [AMD64 architecture](https://files.askui.com/releases/Installer/24.9.1/AskUI-Suite-24.9.1-Installer-Win-AMD64-Full.exe)
- [ARM64 architecture](https://files.askui.com/releases/Installer/24.9.1/AskUI-Suite-24.9.1-Installer-Win-ARM64-Full.exe)

#### macOS

Run the following command in a terminal:

```bash
curl -fsSL https://files.askui.com/releases/Installer/24.9.1/install.sh | bash
```

#### Linux

Download the correct installer for your architecture:

```bash
curl -fsSL https://files.askui.com/releases/Installer/24.9.1/install.sh | bash
```

Now, we are ready to create our first AskUI project with the AskUI Development Environment (ADE)

## Create an AskUI Project with the ADE

Open a terminal of your choosing -we recommend the one inside Visual Studio Code- and activate the ADE by running the following command:

```bash
source ~/.askui/askui-ade/activate
```

Before you can create a new project, please set your AskUI Credentials:

```bash
AskUI-SetCredentials
```

Then you can create your first project by running the following command:

```bash
AskUI-CreateProject
```

Open the project you just created with a code editor/IDE like Visual Studio code. It should look like this:

![Visual Studio code opened with freshly setup AskUI project.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/66fbdcf975ba856290cf8c11_66fbda2747def3302a85c34d_Screenshot%25202024-10-01%2520at%252013.15.51.png)

## Running Your First Test

We will just focus on the file *askui_example/my-first-askui-test-suite.test.ts* for now. This file includes your first example test which should look like this:

```typescript
await aui.annotateInteractively()
```

This test is going to create an annotation of your **main** screen after executing in the folder. But before we execute it, we want to make sure it will do something trivial on your screen: *Clicking a random text*. Change it to the following:

```typescript
await aui.click().text().exec()
```

We are nearly there. One last thing is left to check: Is the AskUI Controller running on your **main** display? Check it by running the following command:

```bash
AskUI-StatusController
```

If you get the message ***No AskUI Controller was started with the help of the AskUI-StartController command during this session.*** You can start it with the following command:

```bash
AskUI-StartController
```

Now we are ready to execute our first test. Therefore, we type the following command in the terminal:

```bash
AskUI-RunProject
```

You should now see the test suite being executed inside the shell and, actually, your cursor should move to some text shown on your screen and click on that text. 🎉 Congratulations! You just executed your first test suite using askui.

> **Tip:** If you want to see what the AI model detects on your screen, use the *annotateInteractively* (see [here](https://docs.askui.com/docs/0.7.2/general/Tooling/annotation)) command. It will create an overlay where you can check all detected UI elements and their classification.

## A More Detailed Getting Started

[Check out our Getting Started in the Docs for a more extensive example](https://docs.askui.com/docs/general/Getting%20Started/write-your-first-instruction) and pointers to what you can do with AskUI.
