WebGL-based websites are becoming increasingly popular among web developers looking to create immersive and interactive user experiences. By drawing graphics and animations directly on the canvas, they offer developers a high degree of creative control over the user interface, providing a more flexible and dynamic platform for graphical compositions. They also offer a more interactive user experience, allowing users to interact with graphics and animations in real-time, making canvas automation and testing critical for ensuring the website's functionality.

However, WebGL-based websites also present a unique challenge for automation and testing, as they often lack DOM elements that conventional selector-based test frameworks rely on.

In this tutorial, we will demonstrate a canvas automation case using AskUI to automate a WebGL-based website. Since Ask relies solely on what is visible on the screen, you will discover how easy it is to automate even such a canvas-based website without relying on any DOM element.

## Visit the Target Website

For the demonstration, we will use the website below. First, visit this website. If you inspect the source of this website, you will discover that it consists of a single canvas element without giving any clue on how to programmatically automate user interaction.

- [https://chartogne-taillet.com/en/](https://chartogne-taillet.com/en/)

**Disclaimer**: We use this website merely for our demonstration purpose and don't intend to promote any product or brand from this website.

## Plan the Automation

Our final goal of this automation is to visit a page of this website that gives detailed information about a certain grapevine. Below are the steps we will automate:

1. Open the web browser and go to the website.
2. Click *Accept* for the cookie pop-up.
3. Click the text *Enter* on the first page.
4. Click the text that is a certain sort of grapevine.
5. Move the mouse cursor to the interaction point.
6. Scroll the mouse wheel.

## 1. Visiting the Website

The first step of the automation is to open the web browser and go to the website. Use the code below, and adjust the necessary part for your environment:

```typescript
await aui.click().text().withText('Chrome').exec();
await aui.pressKey('command', 't').exec();
await aui.type('https://chartogne-taillet.com/en/').exec();
await aui.pressKey('enter').exec();
```

After successfully running the code, we will see this page:

## 2. Click Enter and go to Les Couarres

Nextly, we will click the text *Enter* and the page will transit to the next page. After that, we press the text *Les Couarres* on the bottom right part of the page. Note that these texts are not DOM elements, but merely texts drawn on the canvas as a bitmap. So there is no clue how to interact with these text-buttons if you inspect the source HTML of the page. Add this code block to the end of the code:

```typescript
await aui.click().text().withText('Accept').exec();
await aui.click().text().withText('Enter').exec();
await aui.click().text().withText('Les Couarres').exec();
```

After running the code, we will be on this page:

## 3. Scroll on the Text

Now we want to move on to the page where we can get detailed information about Les Couarres. To do so, we have to interact with the text *DISCOVER* that is placed at the mid-bottom of the screen:

```typescript
await aui.moveMouseTo().text().withText('DISCOVER').exec();
await aui.scroll(-5000, 'down').exec();
```

Try to adjust the amount of scrolling that suits your condition, for example, decrease it to -3000 if you have a high-resolution display. When scrolling on the text, you will see a smooth transition to another page. Clicking the text also triggers the same result, so give it a try if you want to!

There will be an animation until the page transition gets done. And after the transition, we will be on a page about a certain vineyard and grapes.

Congratulations! You just successfully automated mouse interactions with WebGL contents!

## Conclusion

In this article, we demonstrated how to automate a WebGL-based website using AskUI. By relying solely on what is visible on the screen, AskUI can interact with canvas-based websites without requiring any selectors or tags. We walked through an automation/testing case to visit a certain page of a website, click on non-DOM text elements, move the mouse cursor toward a bitmap text, and scroll on a specific bitmap text, all of which are common challenges when automating WebGL-based and canvas-based websites. With AskUI, you can easily automate even the most complex canvas-based user interfaces, providing a more efficient way to test and validate the user experience of your WebGL applications.
