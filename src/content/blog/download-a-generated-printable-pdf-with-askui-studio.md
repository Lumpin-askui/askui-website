> **ATTENTION:** We sunsetted AskUI Studio Workflows for our new Agent Hub. [**Please check our Getting Started blogpost!**](https://www.askui.com/blog-posts/getting-started-vision-agents)

This guide is designed to assist you in leveraging our web-based automation environment, AskUI Studio. In particular, we will focus on generating a printable calendar and downloading it as a PDF from a dedicated website. By the end of this tutorial, you will be equipped with the basic knowledge to utilize AskUI Studio to interact with a website and handle pop-up dialogs for printing and downloading files.

## Table of Contents

1. Visit the Target Website
2. Create a Workflow
3. Automation Instructions
4. Conclusion

## Visit the Target Website

First, let's examine the website we'll be automating. Having a good understanding of the UI elements of the target website is a good starting point for automation.

- [https://print-a-calendar.com](https://print-a-calendar.com/)

## Create a Workflow

You will need an AskUI account for this step. [Create one](https://xa5a040gvfz.typeform.com/to/IHdr0qY5) if you haven't done so yet.

After logging in, navigate to AskUI Studio and create a new Workflow.

![Creating a new workflow in AskUI Studio](https://haramchoi-askui.github.io/blogpost_media/download_pdf/create_workflow.gif)

## Automation Instructions

Let's start by examining the starting condition:

![Initial screen showing Chrome Webdriver](https://haramchoi-askui.github.io/blogpost_media/download_pdf/initial_screen.png)

### 1. Visit the Website

As shown above, we start from the initial page of the Chrome Webdriver. We'll begin by visiting the target website:

![First instructions for visiting the website](https://haramchoi-askui.github.io/blogpost_media/download_pdf/first_instructions.gif)

Here are the instructions used above:

1. Click the address bar of the web browser. (**Click** + **Textfield**)
2. Type the address of the website. (**Type** + **https://print-a-calendar.com**)
3. Press the `enter` key. (**Press key** + **enter**)
4. Wait for 2 seconds until the website loads. (**Wait for** + **2000**)

### 2. Clear the Cookie Consent Pop-up

![Cookie consent pop-up](https://haramchoi-askui.github.io/blogpost_media/download_pdf/cookie.png)

Since the target website uses cookies, we'll encounter a pop-up that asks for consent to use cookies. Let's clear this cookie pop-up by clicking the **Consent** button:

![Clicking the consent button](https://haramchoi-askui.github.io/blogpost_media/download_pdf/click_consent.gif)

Here's the instruction we used:

1. Click the button with the text **Consent**. (**Click** + **Button** + **With text** + **consent**)

### 3. Click the Print Button and Save the Calendar

Although the target website offers additional options to customize the calendar, we'll use the plain calendar provided by default. Feel free to experiment with the website by interacting with the **"More..."** link if you'd like.

![Initial calendar view](https://haramchoi-askui.github.io/blogpost_media/download_pdf/calendar_init.png)

As shown in the screenshot above, the website displays some ads on the page. However, the red **Print** button is clearly visible for us to interact with. Let's click the button and save the calendar as a PDF file:

![Clicking the print button](https://haramchoi-askui.github.io/blogpost_media/download_pdf/click_print.gif)

Here's the instruction we used:

1. Click the button with the text **Print**. (**Click** + **Button** + **With text** + **Print**)

![Clicking the save button](https://haramchoi-askui.github.io/blogpost_media/download_pdf/click_save.gif)

The instruction we used here is:

1. Click the button with the text **save**. (**Click** + **Button** + **With text** + **save**)

After clicking the save button, we can safely press **enter** when the pop-up dialog appears:

![Pressing enter to save the file](https://haramchoi-askui.github.io/blogpost_media/download_pdf/press_enter.png)

Here's a video showing the complete automation process:

![Complete automation process](https://haramchoi-askui.github.io/blogpost_media/download_pdf/complete.gif)

## Conclusion

In this tutorial, we've utilized AskUI Studio to automate visiting a website, clicking buttons, and finally printing and downloading a PDF file. Next time, we'll explore another practical example with AskUI Studio.

If you have any questions or issues while following this tutorial, feel free to ask questions [by joining our community](https://askui.circle.so/getting-started)!
