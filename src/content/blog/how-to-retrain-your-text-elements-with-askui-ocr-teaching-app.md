AskUI is no stranger to this challenge. While our base-vision-model works great for most of the texts you want to target. It suffers from flakiness with specific fonts sometimes, too.

AskUI Teaching App**where you upload a screenshot that gets analyzed. Then you can check each text element that has been detected and correct falsy recognition.

Prerequisites
Installed AskUI Suite with the installer in version >=24.9.1: [Create a Screenshot with the Flaky Text Elements

Start the AskUI OCR Teaching Application

AskUI OCR Teaching Application**has to be started from the**ADE*in a terminal:

askui-shell
`

`Now start the OCR Teaching Application:

Start-AskUIOCRTeaching
`

Create Credentials in AskUI Studio

We recommend to create a new access token in[Enter the workspace id and the access token into the fields in the **Upload the Screenshot

Retrain the Model

Trained Model**switch, so you can start training for correction.

Train Correction**. It may take a few seconds to complete. Once it completes it will redo the detection and you can check again if the recognition is correct.

Copy the New Model Configuration to Your AskUI Project

Copy Model**to copy the configuration to your clipboard.

helpers/askui-helper.ts`and find the the line with`Conclusion

Also check the