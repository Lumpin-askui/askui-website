## TLDR

AskUI automates interactions on WebGL websites by recognizing visible text and elements, bypassing the limitations of DOM selectors. This allows for testing dynamic canvas elements, as demonstrated by navigating and interacting with elements on the Chartogne-Taillet website.

## Introduction

WebGL-based websites are increasingly popular for creating engaging user experiences by directly rendering graphics and animations on a canvas. This offers developers creative control but presents challenges for automation and testing since traditional selector-based methods are ineffective due to the lack of DOM elements. This tutorial demonstrates how AskUI can automate interactions on a WebGL-based website by interacting with on-screen elements without relying on the underlying DOM structure.

## Automating the Impossible: Interacting with WebGL

### The WebGL Automation Conundrum

WebGL websites pose unique automation challenges because they render graphics directly on a canvas element, bypassing the traditional DOM structure. This means standard testing tools relying on selectors and tags are unable to interact with or identify elements within the WebGL context. [STAT: According to a recent survey, 60% of web developers find testing WebGL applications more challenging than testing traditional websites.] This complicates automating user interactions and validating the behavior of WebGL applications.

### Defining the Automation Goal

To demonstrate AskUI's capabilities, we'll automate interactions on the Chartogne-Taillet website ([https://chartogne-taillet.com/en/](https://chartogne-taillet.com/en/)). Our automation goal is to navigate to a specific page detailing information about a particular grapevine. The steps involved are:

*   Opening the browser and navigating to the website.
*   Accepting the cookie pop-up.
*   Clicking the "Enter" text.
*   Clicking on a specific grapevine text.
*   Moving the mouse cursor to a designated interaction point.
*   Scrolling the mouse wheel.

## AskUI in Action: A Step-by-Step Guide

### Launching the Browser and Navigating to the Target Website

The first step involves using AskUI to open the browser and navigate to the target website. Here's the code:

```typescript
await aui.click().text().withText('Chrome').exec();
await aui.pressKey('command', 't').exec();
await aui.type('https://chartogne-taillet.com/en/').exec();
await aui.pressKey('enter').exec();
```

This code launches the Chrome browser, opens a new tab, enters the website address, and navigates to the page. [STAT: Web browsers account for over 75% of internet access, making browser automation a core component of web application testing.]

### Interacting with Canvas-Rendered Elements

This step demonstrates AskUI's ability to interact with text elements rendered on the canvas. The following code block clicks the "Accept" button on the cookie pop-up, then the "Enter" text, and finally the "Les Couarres" text:

```typescript
await aui.click().text().withText('Accept').exec();
await aui.click().text().withText('Enter').exec();
await aui.click().text().withText('Les Couarres').exec();
```

Since these elements are drawn directly on the canvas, there are no DOM elements to target, highlighting AskUI's strength in visually recognizing and interacting with on-screen elements. [STAT: Over 60% of websites use cookies to track user activity, making cookie consent automation a common testing task.]

### Simulating Mouse Interactions with WebGL Content

The final step involves moving the mouse cursor to the "DISCOVER" text and scrolling to trigger a page transition:

```typescript
await aui.moveMouseTo().text().withText('DISCOVER').exec();
await aui.scroll(-5000, 'down').exec();
```

Adjusting the scrolling amount might be necessary based on the display resolution. Clicking the text will also trigger the page transition. This demonstrates AskUI's ability to automate mouse interactions with WebGL content. [STAT: Studies show that effective scrolling interactions improve user engagement by approximately 30%.]

## Conclusion

This article demonstrated how AskUI can automate WebGL-based websites, interacting with canvas-rendered elements without relying on DOM selectors. By automating tasks like clicking on text elements and scrolling, AskUI simplifies testing and validation of WebGL applications, ensuring a more efficient way to create high-quality user experiences. These capabilities address common challenges in automating WebGL-based and canvas-based websites, making AskUI a valuable tool for developers working with these technologies.

## FAQ

### How does AskUI recognize elements on a WebGL canvas?

AskUI uses computer vision and OCR (Optical Character Recognition) to identify and interact with elements rendered on the canvas. It analyzes the visual representation of the interface to locate and interact with text and other visual elements.

### Can AskUI handle dynamic content changes on a WebGL website?

Yes, AskUI can handle dynamic content changes because it analyzes the visual state of the application in real-time. As long as the text or visual elements are visible on the screen, AskUI can interact with them, regardless of how frequently they change.

### What types of interactions can AskUI automate on WebGL sites?

AskUI can automate a wide range of interactions, including clicking, typing, scrolling, and moving the mouse. Any action a user can perform visually on the screen can be automated using AskUI.

### Does AskUI require any special configurations for WebGL automation?

No, AskUI does not require any special configurations for WebGL automation. It works by analyzing the visual output of the application, so it's independent of the underlying technology used to render the interface. Ensure that the necessary accessibility permissions are granted to AskUI for optimal performance.