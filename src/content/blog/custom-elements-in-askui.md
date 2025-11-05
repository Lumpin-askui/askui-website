## Overview

[**We highly recommend to use our AI Element instead of the Custom Element!**](https://www.askui.com/blog-posts/get-started-with-the-ai-element)

**Custom Element Selection** is a feature in askui that enables you to create custom selectors for elements on the screen, instead of relying on the standard selectors provided such as *Button, Textfield, etc.*

With this feature, you can define a custom selector based on how the element is displayed on the screen. This can be particularly useful in situations where standard selectors are unreliable due to the non-standard properties of the element. It provides greater flexibility and control, allowing you to tailor the automation to meet the specific needs of your application.

Here we will demonstrate how to use a custom element to explore Google Street View.

## Demonstration

<div class="cookieconsent-optout-marketing">
  Please <a href="javascript:Cookiebot.renew()">accept marketing-cookies</a> to watch this video.
</div>

<iframe width="560" height="315" data-cookieblock-src="https://www.youtube-nocookie.com/embed/M00BCweamDc" data-cookieconsent="marketing" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- **AskUI installed** - ([Windows](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started), [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux), [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos))
- **Web Browser** - We use Safari in this demonstration, but you can use any web browser you have.

## Understanding the customElement() in askui

*customElement()* is an element to look for on the screen that is defined by the user with a given image.

```typescript
aui.customElement()
  .customImage('path/to/image.png')
  .name('my-custom-element')
  .threshold(0.9)
  .exec();
```

### Arguments

- **customImage** (*string, required*): A cropped image in the form of a base64 string or file path.
- **name** (*string, optional*): A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR.
- **threshold** (*number, optional*): A threshold for how much an UI element needs to be similar to the custom element as defined. Takes values between 0.0 (== all elements are recognized as the custom element which is probably not what you want) and 1.0 (== elements need to look exactly like defined by *the customImage given above* which is unlikely to be achieved as even minor differences count). Defaults to 0.9.
- **rotationDegreePerStep** (*number, optional*): Step size in rotation degree. Rotates the custom image by this step size until 360° is exceeded. The range is from 0 to 360. Defaults to 0.
- **imageCompareFormat** ('RGB' | 'grayscale', optional): The color compare style. 'greyscale' compares the brightness of each pixel whereas 'RGB' compares all three color. Defaults to 'grayscale'.

### Two Things to be Aware of When Using customElement()

**1) Create the Custom Image by Cropping it From The Actual Screen**

To find a matching element from the screen, the custom image **must be the same as it is displayed on the screen.** *Same* in this sense includes the **size, rotation,** and **overlapping object** if there are any.

![Matching illustration showing how custom images need to match screen elements](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b79cefb8a0923e20e0_63dbf1d3ce1ef677709b20d5_heart-match.jpeg)

Note the **left-bottom case** of the illustration. A rotated element can be also matched, but **only if** everything else except the rotation are staying the same as it is displayed on the screen. If you can assure that your custom image is exactly the same as it is displayed on the screen + if you know the degree of the rotation, then you could consider using the **rotationDegreePerStep** parameter. And because askui will try to rotate the custom element for the whole revolution, a divisor of the rotated degree could be also used, e.g in the illustrated case, we can use not only 90 but also 45, 30, 15, etc. But since smaller degrees will require more iteration steps, it will increase the runtime by a notable amount.

**The simplest way** to accomplish it might be **to directly capture and crop the desired image from your screen.** In Windows and macOS, you can use the built-in screen capture tool:

- **Windows:** Press *windows* + *shift* + *s* (Windows 10 or higher)
- **macOS:** Press *cmd* + *shift* + *4*

In both cases, you will be asked to select a certain portion of the screen. On Windows, the captured image will be stored in the clipboard, so you will need to save it to an image file. The image will be saved on the *~/Desktop* by default on macOS.

**2) The Time of the Execution will Increase by a Notable Amount**

To examine whether the custom image matches the given screen, askui iterates through the whole pixels of the screen and the custom image. So it is likely to increase the runtime by a notable amount. Therefore, if the task could be accomplished with other filters such as *button()* or *text()*, then it's maybe better to avoid using the *customElement()*

## Capture the Custom Element

In this demonstration, we will search for a certain area in **Google Street View**. This can be enabled by pressing a button **at the right corner of** [**Google Maps**](https://maps.google.com/):

![Google Maps UI showing the yellow human figure icon](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b79cefb8a0923e20e5_63dbf20c32f87e2644e9f2f5_google-ui.png)

Can you see the yellow tiny human in the corner? We need an image of this human figure to interact with it.

Let's make a screen capture of it. It shall look like this:

![Cropped human figure icon](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b79cefb8a0923e20ea_63dbf22ac633fb125f3ced9d_human.png)

Then save the image in your project's root directory with the name *human-figure.png*. The file tree of your project's root directory will be like this:

```
project-root/
├── human-figure.png
├── src/
│   └── test.ts
└── package.json
```

## Write the AskUI Code

If you are prepared with the image above, let's jump into our code:

```typescript
import { aui } from './helper/jest.setup';

describe('Google Street View with Custom Element', () => {
  it('should navigate to Machu Picchu in Street View', async () => {
    // Open browser and navigate to Google Maps
    await aui.pressKey('cmd').exec(); // or 'windows' on Windows
    await aui.waitFor(2000).exec();
    await aui.type('Safari').exec(); // or 'Chrome', 'Firefox', etc.
    await aui.waitFor(1000).exec();
    await aui.pressKey('enter').exec();
    await aui.waitFor(3000).exec();
    
    // Navigate to Google Maps
    await aui.type('https://maps.google.com').exec();
    await aui.pressKey('enter').exec();
    await aui.waitFor(5000).exec();
    
    // Search for Machu Picchu
    await aui.type('Machu Picchu').exec();
    await aui.pressKey('enter').exec();
    await aui.waitFor(3000).exec();
    
    // Press comma to hide side panel
    await aui.pressKey(',').exec();
    await aui.waitFor(1000).exec();
    
    // Drag the human icon to activate Street View
    await aui.moveMouseTo()
      .customElement()
      .customImage('./human-figure.png')
      .threshold(0.9)
      .exec();
    
    await aui.mouseToggleDown().exec();
    await aui.waitFor(500).exec();
    
    await aui.moveMouseRelativelyTo(-10, -20).exec();
    await aui.waitFor(500).exec();
    
    await aui.mouseToggleUp().exec();
    await aui.waitFor(3000).exec();
  });
});
```

After successfully running the code, you will be able to see the landscape of **Machu Picchu**, the most iconic citadel of the lost empire Inca.

It is possible that you end up with a plain **Google Map** without having **Street View** enabled. It might be caused by various reasons, but the most likely scenario is due to the different resolutions of the screen (your display can have a different resolution than mine). You could try to **adjust the amount of the pixel offset** that is given to the **moveMouseRelativelyTo()**, for example, try with **moveMouseRelativelyTo(-5, -15)**.

## Breaking Down the Code

### 1) Open the Web Browser and Go To the Desired Website

One notable part of this procedure is the **waitFor()** after each execution. We have used it in three different lines of this code block.

Check out the respective parts and adjust the amount of time to wait until the process is finished. It may take more or less time depending on the condition of your device and internet connection:

```typescript
await aui.pressKey('cmd').exec();
await aui.waitFor(2000).exec(); // Wait for system search to appear
await aui.type('Safari').exec();
await aui.waitFor(1000).exec(); // Wait for browser to launch
await aui.pressKey('enter').exec();
await aui.waitFor(3000).exec(); // Wait for browser to fully load
```

Also, don't forget to change the key to press and the name of the web browser based on your condition.

### 2) Search for the Location

Here we type our desired keyword into the textfield of Google Maps. As the textfield gets focused automatically, we can directly type in the keyword to the textfield:

```typescript
await aui.type('Machu Picchu').exec();
await aui.pressKey('enter').exec();
await aui.waitFor(3000).exec();
```

Note that we also press the ***,***(comma) key to hide the side panel of Google Maps. This is for hiding unnecessary information from the screen.

## Drag the Human Icon to the Desired Location

- Finally, we drag our human, which we defined as our *Custom Element*, to the desired location.
- Firstly, we move the mouse cursor to our custom element.
- For dragging the mouse, we use the **mouseToggleDown()** to *press-and-hold* the mouse left button.
- After that, we move the mouse to the desired location.
- Thereafter, we use **mouseToggleUp()** to *release* the mouse button.

```typescript
await aui.moveMouseTo()
  .customElement()
  .customImage('./human-figure.png')
  .threshold(0.9)
  .exec();

await aui.mouseToggleDown().exec();
await aui.waitFor(500).exec();

await aui.moveMouseRelativelyTo(-10, -20).exec();
await aui.waitFor(500).exec();

await aui.mouseToggleUp().exec();
await aui.waitFor(3000).exec();
```

Note the optional parameters for the **customElement()**, especially the threshold that is set to **0.9**.

- This parameter can be set from **0.0** up to **1.0**.
- **0.0** will consider every element on the screen as matched with the given image.
- **1.0** will examine the given elements as strictly as possible, so you might end up without any matching element found.

So, the best scenario to set the threshold might be:

- Make the custom image to be as precise as possible (cropping from the screen).
- Keep the threshold relatively high, but below 1.0

## Conclusion

If you plan to program an automation where you have elements with non-standard properties, you might want to consider using the custom element feature of askui. But as mentioned above, keep in mind that, as a trade-off, it consumes more time than other features. Using a custom element to interact with the given UI can be a huge help, especially if the element lacks standard properties such as tag or appearance.

If you got any issues while following this article, don't hesitate to ask for help in our [Community!](https://askui.circle.so/getting-started) We are more than glad to hear about your experience and help!
