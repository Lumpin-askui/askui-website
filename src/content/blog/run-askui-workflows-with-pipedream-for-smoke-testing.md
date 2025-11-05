> This is where I thought an AskUI integration into the Pipedream workflow could be useful. AskUI uses visual selectors instead of code selectors and can interact like a human with a form like that. Giving us a
> *In this blog, I will describe how I integrated AskUI into a Pipedream workflow to benefit for visual selection and user interaction.

# What Will We Build? Aka the Use Case

Please[accept marketing-cookies](javascript:Cookiebot.renew())to watch this video.

<iframe src="" frameborder="0" allowfullscreen></iframe>

## Dylans use case involved querying a Large Language/Multimodal Model to implement the smoke test. We will modify this a little bit to use the visual selectors from AskUI, which do not rely on the specific UI-technology but identify elements through their appearance with an AI vision model.

Perform the smoke test with AskUI on a remote system
1. Add a Trigger

Schedule**trigger that will run our Workflow everyday at 9:00 AM.
2. Prepare a Custom Code Action

Code*action. In this action we will fill out the simple authentication from[We have to do the following steps:
Add a property **uiControllerUrl`**, so we do not have to hardcode it into the code

- Import**UiControlClient`**from the AskUI node package

- ``The first thing we want to add to our custom code is the **Refresh fields**so the**Then head over to[workspaceId**and**UiControlClient**like this. Notice how easy it is to use arbitrary node-packages in Pipedream? I only needed to import***3. Write the AskUI Workflow

- `E-Mail Address**

- `Click the button **Log In`**

- The less inference we invoke the faster the AskUI workflow will execute. Everything that prompts AskUI to search for an element on the screen invokes inference. So let us try to invoke the inference only once by finding the first textfield for the E-Mail Address. Then we will use keypresses to navigate the form. This is the code to achieve this:

```

```

## Doing a smoke test without reporting about its success state would not help us. So we will just send us an email with the **As subject we choose**`Gitpod As Remote Machine

Open in Gitpod**-button and let it finish the predefined AskUI workflow. When it reached the AskUI Docs (docs.askui.com) maximize the browser window in the**Switch to the**Also make sure that you expose the port to the AskUI Controller (open lock icon). Head to the**`uiControllerUrl**in the Pipedream action.
Expose the AskUI Controller on port 6769.

## Building a smoke test with Pipedream and AskUI was a practical use case to see how both tools integrate. The simplicity of Pipedream and its ability to integrate JavaScript code and Node packages was helpful. With that AskUI could be setup seamlessly inside an action and connected to an external AskUI Controller.