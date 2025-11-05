**In this guide, we will walk you through the steps that you need for running an AskUI self-hosted runner on your local Windows machine. The AskUI self-hosted runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at. So this guide presumes that you already have an account for the AskUI Studio as well as know how to create a workflow in it. If you don't have an account yet, please first create one[Table of Content
Install the Remote Device Controller

1. Run AskUI Development Environment (ADE)

2. Run the Self-Hosted Runner

3. 1. Install the Remote Device Controller

Remote Device Controller**with the[It will install the following components:
[[AskUI Development Kit (SDK)

- Here is a more descriptive explanation of the installation process ([2. Create a Workflow in the AskUI Studio

First create a new workflow with the name**Code**view:

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/codeview.png)</div>

```

```

SAVE**button on the right top corner, you will have a workflow created in your**

Press the**windows**key.

- wordpad**in the search field of the start menu.

- enter**key to open the Wordpad app.

- It is a very simple workflow that automates the process of opening the Wordpad app on your local Windows machine and move the mouse cursor to a certain coordinate, yet good enough to ensure that the**3. Run AskUI Development Environment (ADE)
Open a terminal. We recommend using *Run the command**AskUI Development Environment**(short ADE) where you can configure your installation, start the AskUI Controller, create new AskUI-Projects and run workflows.

## Run the following command to authenticate and connect your ADE to your AskUI account. Replace the strings with your real credentials.

```

```

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/askui-shell.gif)</div>

5. Run the Self-Hosted Runner

First start the**This will start the**DisplayNum**option if you have only one display.

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/start-controller.gif)</div>

AskUI Controller**, open another*askui-shell**as same in the previous step:

```

```

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/start-runner.gif)</div>

Tags**option tells the runner which**6. Run the Workflow in the AskUI Studio

Go to the**Runs*tab on the side.

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/run_workflow.png)</div>

[+ New run]**and create a new run with the information below. It is important to give the exact same**PowerShell*in the previous step:

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/create_run.png)</div>

CREATE**button, the AskUI Runner will start to run the selected workflow on the local Windows machine. Here is the full video of the automation that we run:

<div data-rt-embed-type="true">![](https://haramchoi-askui.github.io/blogpost_media/windows_self_hosted/full.gif)</div>

## Following the steps outlined in this guide, you have successfully set up and run an AskUI self-hosted runner on your local Windows machine. This enables you to automate tasks using workflows created in the AskUI Studio directly on your device. If you need more informations of our ADE and self-hosted runner on Windows, please check out our official documentations listed below:
[[And if you face issues or get more questions about AskUI,