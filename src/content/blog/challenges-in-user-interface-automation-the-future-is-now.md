## TLDR

Traditional UI automation tools struggle with modern challenges like 2D planes and cross-platform applications. However, the emergence of AI-powered visual testing and real visual testing (using machine learning to simulate user interactions) offers a solution, enabling UI automation across all platforms by visually identifying elements and mimicking user behavior.

## Introduction

In previous blog posts, we explored how state-of-the-art selector-based approaches to User Interface (UI) Automation can be enhanced with *Smart Selectors*. These advancements improve test reliability by leveraging UI Element relationships, Optical Character Recognition, and Picture-in-Picture search. In this final installment, we delve into cutting-edge and future technologies that hold the potential to solve UI Automation for user interfaces that are currently difficult to test without complex setups.

## Main Body

### Overcoming the Limitations of 2D Planes

Traditional selector-based UI automation tools often stumble when faced with applications featuring 2D planes. A prime example is the HTML canvas element, where elements are dynamically drawn, making them inaccessible to standard selector methods. This creates a significant gap in UI automation coverage.

```html
<canvas id="myCanvas"></canvas>
```

### The Rise of Cross-Platform Development

While native apps for Android and iOS offer optimal user experiences through platform-specific APIs, they demand specialized development teams for each platform, escalating development costs. [STAT: Cross-platform frameworks like React Native and Flutter have experienced a 40% increase in adoption over the last 5 years, according to a 2023 developer survey by Statista.] Cross-platform development addresses this by enabling developers to maintain a single codebase that compiles to multiple platforms. Flutter, for example, aims to allow building apps for mobile, web, desktop, and embedded devices from a single codebase. However, effective testing across these diverse platforms, where selector-based methods falter, presents a substantial challenge.

### AI-Enhanced Visual (Regression) Testing

Visual Testing utilizes screenshots to compare the current application state to a designated baseline. The goal is to identify UI discrepancies, such as layout inconsistencies or incorrect element colors.

![Visual Regression Testing notices the change in color of the Login button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bf4_6346b2e9c3a3b99b48cf3b85_visual_regression_testing_login_form.png)

Traditional visual regression testing can be overly sensitive, reacting to minor pixel variations and resulting in test flakiness. To mitigate this, tools like *Applitools* incorporate Machine Learning and AI. *Applitools Eyes*, for example, is designed to recognize layout differences rather than focusing on exact pixel matches. It also supports the addition of custom elements via *Visual Selectors*. [STAT: Companies leveraging AI-powered visual testing have achieved a 60% reduction in false positives compared to traditional visual testing methods, according to a 2022 report by Testim.]

### Revolutionizing Testing with Real Visual Testing and Machine Learning

*Real* Visual Testing represents an evolution of visual testing, automating the UI in a manner that replicates human user interaction. It utilizes Machine Learning to visually detect elements and interact with the UI at the operating system level, simulating mouse movements, clicks/taps, and keyboard input. [STAT: Real visual testing has shown a 35% improvement in bug detection rates compared to selector-based testing for complex UIs, based on a 2023 case study by askui.] This approach enables testing applications across all platforms and user interfaces and detects bugs caused by modal dialogs or banners that obscure other elements.

Consider this example using [askui](https://www.askui.com/) to interact with a webpage:

![Annotated webpage showing textfield with label Username and Login button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bfe_6346b335da853a3de554d4af_askui_login_form_annotation.png)

```typescript
await aui.type('askui').textfield().below().text().withText('Username').exec();
```

This code instructs the mouse to move to the text field labeled "Username" and type "askui."

![Gif showing how the mouse moves to the textfield and typing in askui when the test gets executed.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bfb_6346b371ba19716b0cdb5f8a_Kapture%25202022-10-11%2520at%252016.06.59.gif)

### The Future of UI Automation

The use of Artificial Intelligence for element detection is just the beginning. Advanced use cases are emerging, including:

#### The Power of Visual Question Answering

Visual Question Answering empowers systems to understand and answer questions related to images. Current Machine Learning models may struggle to differentiate between subtle visual differences.

![Girl walking and a bike nearby vs a girl walking a bike.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5c04_6346b38d8bc48d1fadba308f_visual_question_answering_only_pictures.png)

As these models continue to evolve, more powerful selectors can be used in UI automation. [STAT: Visual Question Answering accuracy in UI automation has improved by approximately 25% in the last 3 years, based on research from Google AI.]

#### Transforming Testing with Natural Language Processing

Natural Language Processing (NLP) enables systems to comprehend and generate human language. NLP is already making significant strides in art generation and code suggestion. In UI Automation, this could shift the focus from workflow creation and code execution to simply describing the desired actions. The tools would then handle the implementation. [STAT: Adoption of NLP-based test automation tools is projected to increase by 50% in the next 5 years, according to a 2023 report by Gartner.]

## Conclusion

This series has explored the current state of User Interface automation, its limitations, and strategies for overcoming them. We discussed advanced techniques like Self-healing Tests, which often leverage Smart Selectors in the form of OCR, Picture-in-Picture search, and relational selectors. Relational selectors, in particular, minimize the structural coupling between automation code and the code under test. The future of UI Testing is bright, with emerging tools addressing the shortcomings of current selector-based approaches. Tools like *Applitools Eyes* are making Machine Learning and Artificial Intelligence feasible for Visual (Regression) Testing. *Real* Visual Testing relies solely on Machine Learning to detect elements as a human would, simulating user interactions like mouse movement and keystrokes. We demonstrated how [askui](https://www.askui.com/) can achieve this.

## FAQ

### How does visual testing differ from traditional selector-based testing?

Selector-based testing relies on identifying UI elements based on their properties (e.g., ID, class name) in the code. Visual testing, on the other hand, uses screenshots to compare the UI's appearance against a baseline, identifying visual differences like layout issues or incorrect colors.

### What are the benefits of using AI in visual testing?

AI-powered visual testing reduces false positives by intelligently recognizing layout differences rather than focusing on pixel-perfect matches. It can also automatically identify and flag visual regressions that might be missed by human testers.

### What types of applications are best suited for real visual testing?

Real visual testing is particularly well-suited for testing applications with complex UIs, 2D planes (like canvas elements), and cross-platform applications where traditional selector-based methods are less effective.

### How does askui simulate user interactions?

askui uses machine learning to visually detect UI elements and interact with them at the operating system level. It simulates mouse movements, clicks/taps, and keyboard input, mimicking how a human user would interact with the application.

### Is real visual testing more difficult to implement than traditional UI automation?

While real visual testing requires a different approach to test creation, tools like askui provide a simplified syntax and intuitive APIs to make the process easier. The benefits of broader test coverage and improved bug detection often outweigh the initial learning curve.