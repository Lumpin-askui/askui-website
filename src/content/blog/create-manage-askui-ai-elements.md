AskUI AI Elements replace tedious external snipping workflows by providing a fast, command-line-based tool to create, manage, and reuse custom UI element references directly within the AskUI Development Environment (ADE). This allows development and QA teams to rapidly build robust automation suites without leaving the `askui-shell`.

## What are AskUI AI Elements?

An AskUI AI Element is a reference to a specific UI element on the screen, captured via a built-in snipping tool. This reference is saved with a unique name, allowing you to reuse it in your automation scripts with a simple command like `aui.click().aiElement('your-element-name')`, improving both speed and maintainability.

## How Do I Enable AI Element Commands?

To enable the AI Element commands, you must first activate the experimental command set within an active `askui-shell` session. This is a one-time action per session.

1. Open your terminal and start the AskUI Development Environment:

```bash
askui-shell
```

2. Activate the necessary command module:

```powershell
AskUI-ImportExperimentalCommands
```

## How Do I Create a New AI Element?

You can create a new AI Element by running the `AskUI-NewAIElement` command. This command opens a built-in overlay, allowing you to capture one or more UI elements by drawing a rectangle around them.

The base command is:

```powershell
AskUI-NewAIElement
```

This triggers the following workflow:

1. A screen overlay appears for capturing elements.
2. Draw a rectangle or polygon around the desired UI element.
3. Press `ESC` to close the overlay.
4. The `askui-shell` will then prompt you to name each captured element.

### Creation Parameters for Faster Workflows

To accelerate the creation process, use these optional parameters directly in the command. This is ideal for CI/CD pipelines or scripted element creation.

| Parameter | Type | Description |
| --- | --- | --- |
| `-Name` | [string] | **Speeds up single-element creation.** Assigns a name directly, skipping the prompt. |
| `-WorkspaceId` | [string] | Specifies the target Workspace ID. Overrides the default ID in your settings file. |
| `-AlwaysPreview` | [switch] | **Skips the prompt.** Automatically opens a preview of the captured element. Cannot be used with `-NoPreview`. |
| `-NoPreview` | [switch] | **Fully headless.** Skips the preview entirely. Cannot be used with `-AlwaysPreview`. |
| `-OneShot` | [switch] | **Increases efficiency.** The snipping session automatically closes after the first successful element capture. |

Example (fast creation with no prompts):

```powershell
AskUI-NewAIElement -Name "login-button" -NoPreview -OneShot
```

## How Do I Manage Existing AI Elements?

Managing a large collection of AI Elements is done through simple, filterable commands. This ensures you can quickly find, inspect, and remove elements as your application UI evolves.

### How to List and Filter AI Elements

Use the `AskUI-ShowAIElement` command to get a complete list of all saved AI Elements. For targeted searches, use the `-NameFilter` parameter to find elements matching a specific string.

**Example (find an element containing "icon"):**

```powershell
AskUI-ShowAIElement -NameFilter "icon"
```

Output:

```
aui.click().aiElement('hand-icon')
aui.click().aiElement('settings-icon')
```

This output provides the exact code snippet for your test scripts. You can learn how to build complete test suites in the [official AskUI documentation](https://docs.askui.com/).

### How to Preview a Specific AI Element

To visually confirm an element, use the `AskUI-OpenAIElement` command. This opens the captured image file, helping you distinguish between similarly named elements.

**Example (view the "hand-icon"):**

```powershell
AskUI-OpenAIElement -NameFilter "hand-icon"
```

### How to Delete an AI Element

Remove unnecessary or outdated AI Elements with the `AskUI-RemoveAIElement` command. This is critical for maintaining a clean and relevant element repository.

**Example (delete the "hand-icon" without a confirmation prompt):**

```powershell
AskUI-RemoveAIElement -NameFilter "hand-icon" -AutoApproval -NoPreview
```

**Key Parameters for Deletion:**

- `-NameFilter` (Mandatory): Specifies which element(s) to remove.
- `-NoPreview` (Optional): Skips showing the element images before deletion.
- `-AutoApproval` (Optional): **For scripting.** Deletes the matching elements without a confirmation `[y/n]` prompt.

## FAQ: AskUI AI Elements

**Q1: What is the main advantage of AI Elements over traditional selectors?**

AI Elements combine the robustness of visual recognition with the convenience of a managed, reusable component. They are less brittle than DOM-based selectors (e.g., XPath, CSS selectors) which can break with minor UI code changes, making your tests more resilient.

**Q2: Can I create multiple AI Elements in a single command?**

Yes. Run `AskUI-NewAIElement` without the `-Name` or `-OneShot` parameters. The overlay will remain active, allowing you to snip multiple elements. You will then be prompted to name each one sequentially.

**Q3: Do I need to run `AskUI-ImportExperimentalCommands` every time I open the shell?**

Yes, for now. The AI Element commands are part of our experimental features, so they must be explicitly imported for each new `askui-shell` session.

**Q4: Where are the AI Element image files and metadata stored?**

They are stored locally in your AskUI user directory, typically under `~/.askui/SnippingTool/AIElement/`. This makes them portable and easy to back up.
