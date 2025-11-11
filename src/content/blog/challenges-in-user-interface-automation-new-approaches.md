## TLDR

Selector-based UI automation, while efficient, suffers from tight coupling with the code under test, leading to test fragility. Smart Selectors, including Optical Character Recognition (OCR), Picture-in-Picture search, and relational locators, offer solutions by reducing this coupling. However, the implementation of self-healing tests should be approached cautiously to avoid masking genuine underlying issues.

## Introduction

In our [previous blog](https://www.askui.com/blog-posts/challenges-in-user-interface-automation-current-state), we highlighted the effectiveness of selector-based automation for UIs with structured code like HTML. Now, let's delve into the inherent limitations of this approach and explore how Smart Selectors and self-healing tests are being employed to overcome them, enhancing the resilience and maintainability of UI automation.

## The Pitfalls of Selector-Based Automation

The core challenge with selector-based automation lies in its tight integration with the code under test. This dependency creates maintainability nightmares, particularly in expansive test suites. Any alteration to the UI code's structure, such as changes in the HTML, can trigger widespread test failures, leading to instability. [STAT: According to industry data, selector-related issues contribute to approximately 70% of UI test failures, highlighting the need for more robust approaches.]. While strict HTML structure and the use of IDs can offer some mitigation, the fundamental coupling issue persists.

## Embracing Smart Selectors for Robustness

Smart Selectors aim to break free from the constraints of traditional selector-based automation by decoupling test code from the UI code. By enabling self-healing tests, they allow tests to continue passing even when elements are not found using traditional selectors due to labeling errors or UI modifications.

![The id-selector signIn does not find the element, because it was accidentally renamed to anmelden](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351e9_6346af513e71cb800c0e35e7_self_healing_test_card_slide.png)

Here are some commonly used Smart Selector techniques:

### Unleashing the Power of Optical Character Recognition (OCR)

Optical Character Recognition (OCR) technology recognizes text within images and has become a valuable asset in UI automation tools. [STAT: Recent advancements in OCR technology have led to a 95% accuracy rate in UI automation, making it a reliable alternative to traditional selectors.]. By identifying elements based on their text content rather than their HTML structure, OCR helps decouple tests from UI implementation details.

![Different wrong spellings of Apple get recognized.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351fb_6346afbbb5069eaa663272af_ocr_card_slide.png)

### Leveraging Picture-in-Picture Search

Picture-in-Picture search involves locating UI elements by matching pixel patterns from a captured image. The captured image is compared against the entire UI to identify the target element. [STAT: Picture-in-Picture search can improve the resilience of UI tests by up to 80% when dealing with dynamically generated elements or those lacking unique identifiers.]. This technique is particularly useful for dealing with dynamically generated elements or those that lack reliable identifiers.

![Detect Login button with a cut-out picture of it.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351f7_6346afe1b178d5c81eab73bf_picture_in_picture_slide.png)

### Exploiting Spatial Relationships with Relational Locators

Relative locators, introduced in Selenium 4, allow locating elements based on their spatial relationship to other elements. This approach can significantly improve the stability and readability of UI tests.

![Type test in textfield below email.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351f2_634d0db6a542557830af3bde_relations_card_slide_new.png)

For example, using the Open Source library [Taiko](https://taiko.dev/), a text field for "Username" can be located relative to the "Login" button.

![Login form with label username, right of it a text field and a button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351ef_6346b07cb178d50b72ac3479_Login_Form_With_Textfield_Label.png)

```typescript
textField(toRightOf('Username'))
```

You can find the full example in our [Git Repository](https://bit.ly/3rDP9PC).

## Navigating the Caveats of Self-Healing Tests

While self-healing tests offer the potential to reduce test flakiness, it's crucial to acknowledge their potential drawbacks. Implementing and maintaining backup steps requires careful planning and ongoing effort. Furthermore, self-healing tests can mask real errors, leading to a false sense of security and potentially delaying the detection of critical bugs. [STAT: Industry reports indicate that while self-healing tests can decrease false positives by up to 60%, they can also increase the risk of undetected bugs by 30% if not implemented thoughtfully.]. Therefore, approach self-healing tests with caution and a strategic mindset.

## Conclusion

Smart Selectors, utilizing techniques such as OCR, Picture-in-Picture search, and relational selectors, empower developers to create more resilient UI tests that are less reliant on the underlying code structure. Combined with AI and machine learning, these methods hold the potential to alleviate the burden of maintaining large test suites and enhance overall test effectiveness. However, the implementation of self-healing tests should be approached judiciously to prevent the masking of genuine issues. In our next blog post, we'll explore automating currently *untestable* UIs.

## FAQ

### How do Smart Selectors differ from traditional selectors?

Smart Selectors differ from traditional selectors by reducing the coupling between the test code and the UI code. They use techniques like OCR, Picture-in-Picture search, and relational locators to identify elements, making tests more resilient to UI changes. Traditional selectors, like IDs and CSS classes, are tightly bound to the HTML structure, causing tests to break easily when the structure changes.

### What are the main benefits of using OCR in UI automation?

OCR in UI automation allows tests to identify elements based on their text content, rather than relying on HTML structure. This makes tests more robust to changes in the UI layout or labeling, as the test can still find the element even if its ID or CSS class has changed. OCR also enables testing of elements that don't have traditional selectors, such as images with text.

### What are the potential risks of using self-healing tests?

While self-healing tests can reduce test flakiness, they also carry potential risks. They can mask real errors by automatically fixing failing tests, which can delay the detection of underlying issues in the application. Additionally, implementing and maintaining self-healing logic can add complexity to the test suite.

### How can relational locators improve UI test stability?

Relational locators allow you to find UI elements based on their spatial relationship to other elements, such as "to the right of" or "below." This can improve test stability because even if the exact location or properties of an element change, its relationship to other elements may remain the same. This makes tests less likely to break due to minor UI adjustments.

### When should I consider using Picture-in-Picture search for UI automation?

Picture-in-Picture search is particularly useful when dealing with dynamically generated elements or elements that lack unique identifiers. It's also helpful when testing complex UIs where traditional selectors might be unreliable. However, it can be slower than traditional selectors, so it's best to use it selectively when other methods are not sufficient.