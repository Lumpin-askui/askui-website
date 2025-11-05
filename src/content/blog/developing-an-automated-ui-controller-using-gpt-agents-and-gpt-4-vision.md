## 1. Introduction

The emergence of Large Language Models (LLMs) like ChatGPT has ushered in a new era in text generation and AI advancements. While tools such as AutoGPT have aimed at task automation, their reliance on underlying DOM/HTML code poses challenges for desktop applications built on .NET/.SAP. The GPT-4 Vision (GPT-4v) API addresses this limitation by focusing on visual inputs, eliminating the need for HTML code.

[See the original post here](https://medium.com/@gitlostmurali/creating-an-automated-ui-controller-with-gpt-agents-35340759d08b)

### 1.1 The Challenge of Grounding

Although GPT-4v excels in image analysis, accurately identifying UI element locations remains a challenge. In response, a solution called "Grounding" has been introduced, involving pre-annotating images with tools like Segment-Anything (SAM) to simplify object identification for GPT-4v.

![GPT-4 Vision model struggling to locate people correctly. (Source: https://huyenchip.com/2023/10/10/multimodal.html)](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b8c39f787e903e8604_6591831a7b1ba38a57bb1984_1*qhmIt7p1x188riqcwN6X9Q.png)

GPT-4 Vision model struggling to locate people correctly. (Source: [https://huyenchip.com/2023/10/10/multimodal.html](https://huyenchip.com/2023/10/10/multimodal.html))

![Set of Mark example](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b8c39f787e903e8601_6591838fd0f6576232e6ee9e_1*gOuWsXp3t9g0KI35XLNsrQ.png)

Set of Mark example

### 1.2 Adapting to the Usecase

UI elements can be numbered for reference, streamlining the interaction process. For example, the "Start for Free" button might be associated with the number "34," enabling GPT-4v to provide instructions that can be translated into corresponding coordinates for controller actions.

![Object Detection on a UI screen](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b8c39f787e903e85f8_659183a516ca683d432ef143_1*00p-__SbrNDQPl8-RSSMqQ.png)

Object Detection on a UI screen

## 2. Building Agents

The envisioned product/tool aims to enter a goal/task and receive a set of actions to achieve it. The system operates in three sequential capabilities: goal breakdown, vision (image understanding), and system control. A GPT-4 text model acts as the orchestrator, interfacing with both GPT-4v and the device controller.

![UI controller agent which can plan and analyze images](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b8c39f787e903e85f5_659183ee7b71a007811ecad1_1*xTwwxGj_denY38sYfKoTNw.jpeg)

UI controller agent which can plan and analyze images

## 3. GPT-4V Integration: Visionary Function

GPT-4v serves as the visual interpreter, analyzing UI screenshots and identifying elements for interaction. An example function is provided to showcase how UI element identification is requested:

```python
def visionary_function(screenshot_path):
    """
    Analyzes a UI screenshot using GPT-4v and identifies
    interactive elements for automation.
    """
    # Implementation for GPT-4v vision analysis
    pass
```

## 4. Device Controller: The Interactive Core

The Controller class is pivotal, executing UI actions based on GPT-4v's guidance. Functions include moving the mouse, double-clicking, entering text, and capturing annotated screenshots, ensuring seamless interaction with the system:

- **move_mouse():** Moves the cursor and performs clicks.
- **double_click_at_location():** Executes double clicks at specified locations.
- **enter_text_at_location():** Inputs text at a given location.
- **take_screenshot():** Captures and annotates the current UI state.

The below class ensures seamless interaction with the system, acting based on GPT-4v's guidance.

```python
class DeviceController:
    """
    Controller class for executing UI actions based on GPT-4v guidance.
    """
    
    def move_mouse(self, x, y):
        """Move mouse cursor and perform click."""
        pass
    
    def double_click_at_location(self, x, y):
        """Execute double click at specified location."""
        pass
    
    def enter_text_at_location(self, x, y, text):
        """Input text at given location."""
        pass
    
    def take_screenshot(self):
        """Capture and annotate current UI state."""
        pass
```

## 5. Orchestrator: The Strategic Planner

The Orchestrator, a GPT-4 text model, plans and executes tasks by leveraging the capabilities of the Device Controller and GPT-4v. Key components include the Planner (goal breakdown and action strategy), UserProxyAgent (communication facilitator), and Controller (UI action execution).

### Key Components

- **Planner:** Breaks down goals and strategizes actions.
- **UserProxyAgent:** Facilitates communication between the planner and the controller.
- **Controller:** Executes actions within the UI.

### Workflow Example

1. **Initialization:** The Orchestrator receives a task.
2. **Planning:** It outlines the necessary steps.
3. **Execution:** The Controller interacts with the UI, guided by the Orchestrator's strategy.
4. **Verification:** The Orchestrator checks the outcomes and adjusts actions if needed.

We use [**AutoGen**](https://github.com/microsoft/autogen), an open source library that lets GPTs talk to each other, to implement the Automated UI controller. After giving each GPT its system message (or identity), we register the functions so that the GPT is aware of them and can call them when needed.

```python
from autogen import ConversableAgent

# Initialize agents with their roles
planner = ConversableAgent(
    name="planner",
    system_message="You are a task planner..."
)

controller = ConversableAgent(
    name="controller",
    system_message="You are a UI controller..."
)

# Register functions for GPT awareness
# Implementation details...
```

## 6. Workflow on a Sample Task

The workflow involves the Orchestrator receiving a task, planning the necessary steps, executing actions through the Controller, and verifying outcomes. The article demonstrates a sample task—"click on the GitHub icon and click on the 'blogs' repository"—with a log history showcasing various executed functions.

<iframe allowfullscreen="true" frameborder="0" scrolling="no" src="https://www.youtube.com/embed/-9adrW2FKac" title="AutoGPT with GPT-4 Vision"></iframe>

Attached below is a log history, performing various actions. We can see that various functions are called and executed accordingly.

![Log history showing executed functions](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b8c39f787e903e85fc_659185f323cc8cfff0acfa34_1*JuTTwFN4iue0A78cCxC-kQ.png)

This article provides insight into the evolving automation landscape, anticipating remarkable developments built upon these technologies.
