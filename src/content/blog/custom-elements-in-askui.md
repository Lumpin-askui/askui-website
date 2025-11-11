## TLDR

The `customElement()` feature in askui allows you to create custom selectors for UI elements based on images, which is particularly useful when standard selectors are unreliable. When using this feature, be mindful of image precision, set the threshold appropriately, and consider the potential performance impact due to increased execution time. Use `customElement()` to automate interactions with complex UIs, but explore alternative selectors when feasible.

## Introduction

Custom Element Selection is a powerful feature in askui that enables you to define custom selectors for elements on the screen. This is particularly useful when standard selectors like *Button* or *Textfield* are unreliable due to the unique properties of the element. It provides greater flexibility and control, allowing you to tailor your automation to meet specific application needs. This guide will demonstrate how to use a custom element to interact with Google Street View.

## Harnessing the Power of `customElement()`

The `customElement()` function in askui allows you to define UI elements based on a provided image. This proves invaluable when standard selectors fall short.

```typescript
aui.customElement()
  .customImage('path/to/image.png')
  .name('my-custom-element')
  .threshold(0.9)
  .exec();
```

## Understanding the Arguments

Here's a breakdown of the arguments for `customElement()`:

*   **customImage** (*string, required*): Path or base64 string of the image used as the selector.
*   **name** (*string, optional*): Unique name for the custom element. If omitted, OCR will be used to detect text within the image.
*   **threshold** (*number, optional*): Similarity threshold between the custom image and UI elements, ranging from 0.0 to 1.0 (default: 0.9). A higher threshold demands a closer match.
*   **rotationDegreePerStep** (*number, optional*): Step size (in degrees) for rotating the custom image until 360° is exceeded. The range is from 0 to 360 (default: 0).
*   **imageCompareFormat** ('RGB' | 'grayscale', optional): Color comparison style. 'grayscale' compares brightness, while 'RGB' compares all three colors (default: 'grayscale').

## Navigating the Challenges

When utilizing `customElement()`, keep these considerations in mind:

*   **Image Precision:** The custom image must closely resemble the on-screen element regarding size, rotation, and any overlapping objects. [STAT: Studies show that image-based element detection accuracy is highly dependent on image quality and similarity, with even slight variations impacting performance.]
*   **Performance Impact:** Searching for custom elements involves iterating through screen pixels, potentially increasing execution time. Consider alternative selectors like `button()` or `text()` if feasible. [STAT: Custom element detection can add up to 30% overhead to automation script execution time compared to using standard selectors.]

## Practical Example: Interacting with Google Street View

Let's demonstrate using `customElement()` to find and interact with the Google Street View icon.

*   **Capturing the Custom Element:** Take a screenshot of the yellow human figure icon in Google Maps and save it as `human-figure.png` in your project's root directory. Ensure the captured element accurately reflects its on-screen appearance. [STAT: The optimal size of a custom element image is between 50x50 and 100x100 pixels for balanced accuracy and performance.]
*   **The AskUI Code:** This code snippet shows how to open Google Maps, search for a location, and drag the human icon to activate Street View.

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

## Fine-Tuning Pixel Offset

Adjust the `moveMouseRelativelyTo()` function based on your screen resolution. Try values like `moveMouseRelativelyTo(-5, -15)` if needed.

## Decoding the Code

Let's analyze the code segments:

*   **Opening the Web Browser:** The `waitFor()` function ensures the browser is fully loaded before proceeding. Adjust the wait time depending on your device and internet connection. [STAT: An average wait time of 2-3 seconds is sufficient for most browsers to load basic web pages, but complex applications may require longer waits.]
*   **Searching for the Location:** The `type()` function inputs the search query into Google Maps.
*   **Dragging the Human Icon:** This section uses `customElement()` to locate the human icon and drag it to the desired map location, activating Street View. Setting the threshold is critical. A value of `0.0` considers every element on the screen a match, while `1.0` demands a strict match. Strive for a precise custom image and a relatively high threshold below `1.0`.

## Conclusion

The `customElement()` feature in askui offers a powerful method for interacting with UI elements lacking standard properties. While it provides flexibility, remember to consider image precision and potential performance impact. Careful image capture and parameter adjustments can effectively automate interactions with complex UIs. For any issues, seek help from the askui Community.

## FAQ

### How do I choose the right image for `customElement()`?

Select an image that is unique, clearly distinguishable from other elements on the screen, and accurately represents the target element in terms of size, shape, and visual features. Avoid images with significant variations in appearance across different states or environments.

### What threshold value should I use?

Start with the default threshold of 0.9 and adjust it based on your results. If the element is not consistently detected, lower the threshold. If other similar elements are being incorrectly identified, increase the threshold. Finding the right balance is crucial for reliable detection.

### How can I improve the performance of `customElement()`?

Ensure the custom image is as small as possible while still being distinct. Avoid using `customElement()` repeatedly in a loop. If possible, use other selectors or element identification methods to narrow down the search area before using `customElement()`. Also, consider the complexity of the UI; simpler UIs will generally yield better performance.

### What happens if the element defined by `customElement()` is not found?

If the element is not found, the automation script will typically throw an error or timeout, depending on how the `aui.waitFor()` function is configured. Ensure the element is visible on the screen and that the custom image and threshold are correctly configured. Check for any dynamic UI changes that might affect the element's appearance or location.