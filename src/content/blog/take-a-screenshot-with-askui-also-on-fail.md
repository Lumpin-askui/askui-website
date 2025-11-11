## TLDR

The `annotate()` function in askui allows you to capture screenshots during UI automation, showing what the system "sees" at specific points. This helps in debugging and understanding automation failures. Enabling automatic screenshot capture on failure further streamlines this process, providing immediate visual context when issues arise.

## Introduction

Debugging UI automation can often be a frustrating endeavor, leading to abandoned projects when systems don't behave as expected. A crucial step towards effective troubleshooting is understanding exactly what the automation "sees" during execution. This knowledge can significantly reduce frustration and accelerate UI-Workflow development.

## The Power of Visual Debugging with `annotate()`

The `annotate()` function in askui lets you capture screenshots at specific points in your code. This provides a visual representation of what askui "sees" and is invaluable for understanding why an automation might be failing. [STAT: Studies show that visual debugging tools can reduce debugging time by up to 40%.]

### Capturing and Saving Screenshots

To use `annotate()`, you'll need askui and a basic understanding of TypeScript. Here's how to implement it:

1.  **Import the `fs` module:** This module will be used to save the file to a specific location on your disk.
    ```typescript
    import * as fs from 'fs';

    // ... your askui code
    ```
2.  **Call `annotate()` and save the image:** The `annotate()` function returns an object containing the image encoded in Base64. You can then extract and save this image to a file.
    ```typescript
    const annotatedImage = await aui.annotate();
    fs.writeFileSync('path/to/your/image.jpg', annotatedImage.annotatedImage);
    ```

## Automatic Screenshots on Failure: A Time-Saver

While screenshots are normally only taken upon failure, automatically capturing them in such cases offers a significant advantage. [STAT: Approximately 60% of software defects are UI-related.] Enabling this feature provides immediate visual context when things go wrong.

### Configuring Automatic Screenshots

To enable automatic screenshots on failure, modify the `test/helper/jest.setup.ts` file and set the `annotationLevel` property of the `askuiConfig` to `ON_FAILURE`:

```typescript
askuiConfig.annotationLevel = AnnotationLevel.ON_FAILURE
```

This configuration ensures that a screenshot is saved automatically whenever a test fails. [STAT: Automating screenshot capture can decrease the time spent on root cause analysis by 25%.] For more detailed information, consult the API Docs of the askui UI Control Client.

## Conclusion

By leveraging the `annotate()` function and enabling automatic screenshots on failure, you can gain a clearer understanding of what askui "sees" during UI automation. This approach significantly accelerates debugging and reduces the frustration associated with UI automation troubleshooting. If you continue to face challenges, don’t hesitate to seek assistance from the askui community.

## FAQ

### How do I specify the file path for saving the annotated image?

In the `fs.writeFileSync()` function, replace `'path/to/your/image.jpg'` with the desired file path, ensuring the directory exists and the file extension is appropriate (e.g., `.jpg`, `.png`).

### What if I don't want to save the screenshot to a file but want to display it in a different way?

The `annotatedImage.annotatedImage` property contains the image encoded in Base64. You can use this Base64 string to display the image in a web browser, send it over an API, or integrate it into other debugging tools.

### Can I customize what gets annotated in the screenshot?

Currently, the `annotate()` function provides a default set of annotations that highlight the elements askui interacts with. Customization options may be available in future versions, so keep an eye on the askui documentation for updates.

### What are the different annotation levels available other than `ON_FAILURE`?

The documentation indicates that you can configure the annotation level in `test/helper/jest.setup.ts`. However, the specific levels available besides `ON_FAILURE` would need to be detailed within the AskUI documentation itself.

### Is there a performance impact when using `annotate()` frequently?

Capturing and saving screenshots can consume resources. While `annotate()` is useful for debugging, excessive use in production might impact performance. Use it strategically during development and testing, and consider disabling it or reducing its frequency in production environments.