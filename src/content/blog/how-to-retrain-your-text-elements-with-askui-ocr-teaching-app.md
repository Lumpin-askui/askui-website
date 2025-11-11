## TLDR

To enhance AskUI's text recognition accuracy for specific fonts, use the AskUI OCR Teaching Application to correct any misidentified text in screenshots. By retraining the model with this corrected data, AskUI will learn to recognize those fonts more accurately. Once retrained, copy the new model configuration into your AskUI project to implement the improvements.

## Introduction

AskUI's vision-based model excels in identifying text, but occasionally struggles with specific fonts, leading to recognition inaccuracies. This guide demonstrates how to leverage the AskUI OCR Teaching Application to resolve these issues by correcting misidentified text and retraining the model, ultimately enhancing your test automation's reliability.

## The Foundation of Stability

Before diving into the specifics of correcting text recognition, it's crucial to ensure you have the necessary prerequisites in place. This involves having the AskUI Suite installed with the installer in version 24.9.1 or later. [STAT: A recent study showed that AI-powered test automation tools like AskUI are adopted by X% of software development teams to enhance test accuracy and efficiency.] This forms the foundation for effectively utilizing the OCR Teaching Application.

## Building Resilient Workflows

### Capturing the Problem: Creating a Screenshot

Begin by capturing a screenshot that contains the specific text elements AskUI is currently misidentifying. This screenshot will serve as the basis for your corrections and model retraining.

### Launching the OCR Teaching Application

To start the AskUI OCR Teaching Application, open the AskUI Development Environment (ADE) and then a terminal within the ADE. Execute the following commands:

```
askui-shell
Start-AskUIOCRTeaching
```

This sequence will launch the application, providing the interface for correcting and retraining. [STAT: OCR technology accuracy has improved by X% in the last five years, but challenges remain with stylized fonts and low-resolution images.]

### Authentication: Credentials in AskUI Studio

Within AskUI Studio, create a new access token. This token, along with your workspace ID, will authenticate your session within the OCR Teaching Application and allow you to upload and process screenshots securely. [STAT: Proper access control and credential management are essential for secure AI model training and deployment in test automation environments.]

## Correcting and Retraining

### Uploading and Correcting

In the AskUI OCR Teaching Application, enter your workspace ID and the newly created access token. Upload the screenshot you prepared earlier. The application will analyze the image and display the detected text elements. Carefully review each element and correct any inaccuracies in the recognition.

### Retraining for Accuracy

Activate the "Trained Model" switch and click the "Train Correction" button. The model will then retrain using your corrected data, a process that may take a few seconds. After retraining, the application will re-detect the text elements. Verify that the recognition is now accurate, reflecting the corrections you made. [STAT: Retraining models with corrected data can improve OCR accuracy by up to X% in specific scenarios.]

## Implementing the Improved Model

### Deploying the Configuration

Click the "Copy Model" button to copy the updated model configuration to your clipboard. Navigate to your AskUI project and open the file `helpers/askui-helper.ts`. Locate the line defining the model configuration and replace the existing configuration with the new one you copied. [STAT: Consistent model management and version control are crucial for maintaining accuracy and reproducibility in AI-powered test automation.] This step deploys the improved model to your AskUI project.

## Conclusion

By meticulously following these steps and utilizing the AskUI OCR Teaching Application, you can significantly enhance AskUI's text recognition accuracy for challenging fonts. Correcting misidentified text elements and retraining the model leads to more accurate and reliable test automation. Remember to always verify the updated configuration after implementation to ensure the changes are correctly applied.

## FAQ

### How do I know if I need to use the OCR Teaching Application?

If you notice that AskUI consistently misidentifies text in your application, especially with specific fonts, it's a good indication that you should use the OCR Teaching Application to correct the misidentifications and retrain the model.

### How long does it take to retrain the model?

The retraining process usually takes only a few seconds, but the exact duration can vary depending on the complexity of the screenshot and the amount of corrected data provided.

### Can I use this application to improve recognition of other languages?

The AskUI OCR Teaching Application is designed primarily to improve recognition of fonts and text styles. While it may help with some language-specific issues, it's not specifically designed for comprehensive multilingual support.

### What if the text is still not recognized correctly after retraining?

If the text recognition remains inaccurate after retraining, try capturing a higher-resolution screenshot or adjusting the image contrast. If problems persist, consider providing more corrected data during the retraining process.

### Where can I find my Workspace ID and Access Token?
Your Workspace ID and Access Token can be found in the AskUI Studio, within your account settings. You'll need these credentials to authenticate with the AskUI OCR Teaching Application.