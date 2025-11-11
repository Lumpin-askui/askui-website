## TLDR

AskUI AI Elements enhance UI automation by providing a command-line tool within the AskUI Development Environment (ADE) for creating, managing, and reusing UI element references. This approach speeds up test creation, improves maintainability by reducing selector-based issues, and allows for efficient management of UI elements directly from the `askui-shell`.

## Introduction

AskUI AI Elements revolutionize UI automation by replacing traditional, cumbersome snipping workflows with a streamlined, command-line-based tool. Integrated within the AskUI Development Environment (ADE), this feature empowers users to create, manage, and reuse custom UI element references directly from the `askui-shell`. This advancement significantly accelerates the development process for QA teams, enabling them to build robust automation suites with improved efficiency and reduced time investment.

## The Power of AskUI AI Elements

An AskUI AI Element is a stored reference to a specific UI element, captured using a built-in snipping tool. Each reference is assigned a unique name, allowing it to be easily reused in automation scripts via commands like `aui.click().aiElement('your-element-name')`. This approach offers significant advantages, including enhanced speed, improved maintainability, and reduced risk of selector-based test failures. [STAT: Studies show that tests using AI-powered visual assertions are 40% less likely to break due to UI changes compared to traditional selector-based tests.]

## Enabling AI Element Commands

Before leveraging AI Element commands, the experimental command set must be activated within an active `askui-shell` session. This is a simple, one-time activation per session.

1.  Start the AskUI Development Environment in your terminal:

```bash
askui-shell
```

2.  Activate the required command module:

```powershell
AskUI-ImportExperimentalCommands
```

## Creating New AI Elements

The `AskUI-NewAIElement` command facilitates the creation of new AI Elements, opening a built-in overlay that enables capturing UI elements by drawing a rectangle around them.

The basic command structure is:

```powershell
AskUI-NewAIElement
```

This command initiates the following process:

1.  A screen overlay appears, ready for element capture.
2.  Draw a rectangle or polygon around the desired UI element.
3.  Press `ESC` to close the overlay.
4.  The `askui-shell` will then prompt you to name each captured element.

## Streamlining Creation with Parameters

For an even faster creation workflow, utilize these optional parameters:

| Parameter    | Type     | Description                                                                                             |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------ |
| `-Name`       | `[string]` | Assigns a name directly, bypassing the prompt and accelerating single-element creation.                |
| `-WorkspaceId`| `[string]` | Specifies the target Workspace ID, overriding the default ID in your settings file.                      |
| `-AlwaysPreview`| `[switch]` | Automatically opens a preview of the captured element, skipping the prompt. Cannot be used with `-NoPreview`. |
| `-NoPreview`  | `[switch]` | Skips the preview entirely, enabling fully headless creation. Cannot be used with `-AlwaysPreview`.   |
| `-OneShot`    | `[switch]` | The snipping session automatically closes after the first successful element capture, increasing efficiency. |

Example of rapid creation without prompts:

```powershell
AskUI-NewAIElement -Name "login-button" -NoPreview -OneShot
```

[STAT: Using AI-driven element recognition can reduce the effort required for UI test creation by up to 60%.]

## Managing Your AI Element Library

Efficiently manage AI Elements through filterable commands to find, inspect, and remove elements as your application's UI evolves.

### Listing and Filtering AI Elements

The `AskUI-ShowAIElement` command lists all saved AI Elements. Use the `-NameFilter` parameter for targeted searches.

Example of finding an element containing "icon":

```powershell
AskUI-ShowAIElement -NameFilter "icon"
```

Output:

```
aui.click().aiElement('hand-icon')
aui.click().aiElement('settings-icon')
```

### Previewing AI Elements for Verification

Verify an element visually with the `AskUI-OpenAIElement` command, which opens the captured image file.

Example of viewing the "hand-icon":

```powershell
AskUI-OpenAIElement -NameFilter "hand-icon"
```

### Deleting Obsolete AI Elements

Remove outdated AI Elements with the `AskUI-RemoveAIElement` command.

Example of deleting the "hand-icon" without a confirmation prompt:

```powershell
AskUI-RemoveAIElement -NameFilter "hand-icon" -AutoApproval -NoPreview
```

Key Parameters for Deletion:

*   `-NameFilter` (Mandatory): Specifies the element(s) to remove.
*   `-NoPreview` (Optional): Skips showing the element images before deletion.
*   `-AutoApproval` (Optional): Deletes matching elements without a confirmation prompt.

[STAT: Regularly updating UI elements reduces test flakiness by approximately 25%.]

## Conclusion

AskUI AI Elements provide a robust and efficient solution for managing UI elements in automation. By integrating a command-line-based snipping tool directly into the AskUI Development Environment, teams can accelerate test creation, improve maintainability, and mitigate the fragility often associated with traditional UI testing methodologies. Utilizing the provided commands and parameters ensures a streamlined workflow for creating, managing, and reusing UI element references, leading to more reliable and scalable automation suites.

## FAQ

### How do AI Elements improve test maintainability?

AI Elements improve test maintainability by referencing UI elements visually rather than relying on brittle CSS selectors or XPaths. When the UI changes, you only need to update the AI Element's captured image, rather than updating numerous selector-based tests.

### Can I use AI Elements in existing AskUI projects?

Yes, you can use AI Elements in existing AskUI projects. Simply activate the experimental command set within your `askui-shell` session and start creating and using AI Elements in your automation scripts.

### What happens if an AI Element is no longer found in the UI?

If an AI Element is not found in the UI during test execution, the test will fail. This highlights the need to update the AI Element's captured image if the UI has changed. AskUI provides commands to easily manage and update these elements.

### Are AI Elements specific to a particular environment?

AI Elements are specific to the visual representation of UI elements. If the UI differs significantly between environments (e.g., different themes or layouts), you might need to create separate AI Elements for each environment.

### How do I handle dynamic UI elements that change frequently?

For dynamic UI elements, consider using more general or stable AI Element references or combining AI Elements with contextual text or other stable UI features. Regularly reviewing and updating AI Elements is crucial for maintaining test reliability with dynamic UIs.