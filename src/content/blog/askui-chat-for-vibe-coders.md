## What is AskUI's new chat feature?

AskUI's new chat feature is an AI-powered UI automation system that executes workflows across multiple desktop applications.

Unlike tools that rely on API connections or DOM scripts, this system visually observes your screen—just like a human would—and interacts with windows, buttons, text areas, and scroll bars in real time.

It runs locally on Windows, macOS, or Linux. You install and launch it with:

```
npx askui
```

This runs a local server that waits for your natural language instructions and performs the matching UI actions.

**Note:** This feature is currently in **public beta**. You can [sign in here](https://hub.askui.com/) to activate your beta workspace.

## Who is this for?

This feature is designed for **Vibe Coders, AI-first teams, and fast-moving developers** who:

- Build or maintain products that involve juggling multiple local tools, such as notes, AI text generators, spreadsheets, wikis, or internal dashboards.
- Want to automate complex UI workflows across these tools without writing fragile scripts or depending on hotkey automation.
- Need developers and QA teams to stay focused on core engineering tasks by offloading repetitive desktop actions.

## What problem does it solve?

Modern software teams frequently switch between various desktop applications to complete typical daily tasks—like copying notes from one app, generating summaries in an AI editor, and pasting results into a project tracker.

This manual process:

- Breaks concentration due to constant context switching.
- Adds repetitive, low-value busywork that scales poorly as teams and release cadences grow.
- Increases the chance of mistakes, like pasting outdated or partial information.

AskUI's chat feature addresses these problems by:

- Visually inspecting your desktop screen—just as a person would—to detect UI elements like buttons, fields, or tables, and then interacting with them by clicking, typing, or scrolling.
- Executing multi-step workflows you describe in natural language, moving through different applications automatically.
- Eliminating the need for API hooks, browser selectors, or manual coordination between tools.

## How does it work?

### Natural language instructions

You simply tell it what you want done, such as:

```
"Copy the notes from Notion, summarize them in ChatGPT, and paste the result into Jira."
```

The AskUI agent then **watches your monitor, recognizes UI components, and carries out each step across your open apps**, just as a human would.

### Vision-based desktop automation

It continuously takes screenshots of your display, detects buttons, inputs, and scrollable regions, and determines where to click or type based on what it sees on screen at that exact moment.

### Works across your entire stack

Unlike browser-bound test tools, it operates across any native desktop apps on Windows, macOS, Linux, and also supports Android emulators—making it suitable for multi-platform workflows.

### Pipeline integration for QA

It can embed into Python-based test frameworks like PyTest, executing UI flows as part of automated tests and generating step-by-step logs, screenshots, and pass/fail assertions.

## What makes it different from typical scripts or macros?

| Traditional Automation & Macros | AskUI's New Chat Feature |
|---|---|
| Depends on HTML locators, hotkeys, or coordinate scripts | Observes the rendered UI visually on your screen |
| Easily breaks if UI changes | Re-evaluates each screen dynamically using computer vision |
| Often limited to browsers or single apps | Operates across multiple desktop applications and environments |
| Requires manual scripts for each tool and step | Executes from natural language instructions, with no custom scripts needed |

## FAQ for developers & QA teams

### Is this ready for production?

Not yet. This is currently in public beta—ideal for teams that want to experiment with advanced UI automation and provide early feedback.

### Do I need API keys or app-specific integrations?

No. It functions purely by analyzing your screen visually, without connecting to backend APIs or DOM elements.

### How can I access the beta?

You'll need to sign in here to enable your beta workspace.

🚀 **Want to try it yourself?** [Try our beta version here](https://hub.askui.com/workspaces/f2f0272d-06ba-4de9-9edd-fe4030f07d07/chat) | 🎥 [Watch the demo video](https://www.loom.com/share/aedf49ac96c34fe09265bb5c2646446e?sid=23395c33-a341-411c-a206-be62371a89dd)
