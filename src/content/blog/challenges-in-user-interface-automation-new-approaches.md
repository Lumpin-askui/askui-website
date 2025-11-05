In the [previous blog](https://www.askui.com/blog-posts/challenges-in-user-interface-automation-current-state) we saw, that automation with selector-based approaches is a proven way to automate UIs that are based on a structure like HTML. If you played around with our [Git repository](https://bit.ly/3rDP9PC) you noticed how fast the test execution runs.

In this blog, we will discuss the problems that come with selector-based approaches and how current tools try to remedy them with Smart Selectors and Self-healing Tests.

## Problems With Selector-Based Approaches

When you look closely at the structure of the code under test and the test code you notice, that these two are intertwined. That leads to problems with large test suites.

> Every change in the code under test can lead to changes in the structure (HTML) under test causing tests to fail. That is why large UI test suites usually become flaky.

You can combat this problem with a strong engineering culture that puts constraints on how the resulting HTML is structured. Putting ids in every element is also a valid solution. But the main issue remains: You are coupling the code under test with your test code!

## Smart Selectors

Smart Selectors promise a solution to the tight coupling of test code with the code under test.

They help to implement Self-healing tests that can succeed, even when the element can not be detected due to wrong labeling like in the picture below (The button should have the id *signIn* but it changed to *anmelden*):

![The id-selector signIn does not find the element, because it was accidentally renamed to anmelden](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351e9_6346af513e71cb800c0e35e7_self_healing_test_card_slide.png)

The id-selector *signIn* does not find the element, because it was accidentally renamed to *anmelden*.

The following three approaches are followed, which often are then combined with classic selectors in practice to reliably recognize elements.

## Optical Character Recognition (OCR)

OCR is the recognition of text from images. The technology has been used for a long time for various use cases and has now also established itself in UI automation tools.

![Different wrong spellings of Apple get recognized.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351fb_6346afbbb5069eaa663272af_ocr_card_slide.png)

Different wrong spellings of *Apple* get recognized.

## Picture in Picture Search

Picture-in-Picture search refers to the search of cut-out elements on the UI by pixel matching. The element is usually cut out and stored as an image. If you want to select this element in a test, the picture runs over the entire UI and tests for a match between the cut-out picture and the actual UI.

![Detect Login button with a cut-out picture of it.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351f7_6346afe1b178d5c81eab73bf_picture_in_picture_slide.png)

Detect Login button with a cut-out picture of it.

## Relations

A new approach is relative locators, which were also introduced in Selenium 4. The functionality is simple: Instead of selecting an element directly, it is addressed via the relation to other elements.

![Type test in textfield below email.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351f2_634d0db6a542557830af3bde_relations_card_slide_new.png)

For example, a text field for *Username* can be found by its relation to the *Login*-Button as in the following example:

![Login form with label username, right of it a text field and a button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6181cd696ee4351ef_6346b07cb178d50b72ac3479_Login_Form_With_Textfield_Label.png)

The Open Source library [Taiko](https://taiko.dev/) can detect elements based on relation.

```typescript
textField(toRightOf('Username'))
```

You can find the full example in our [Git Repository](https://bit.ly/3rDP9PC).

### Are Self-healing Tests a Good Idea?

Self-healing Tests sound great in theory. However, it is a two-edged sword in our opinion. They will ease the pain of flaky tests, but come with two caveats:

- You need to implement and maintain the backup steps
- A test that might fail remains green and can mask a real error

💡 So be conscious and deliberate about deploying this technique. 💡

## Conclusion

Smart Selectors can help you write more robust tests by employing techniques that do not rely solely on the structure of the code (HTML) under test.

OCR, Picture-in-Picture search, and relational selectors are available in tools today and in recent years get combined with Machine Learning/AI to ease the pain of maintaining large test suites.

In the last installment of the series, we will look at currently *untestable* User Interfaces like 2D Planes and canvases and show how cutting-edge and future products will enable UI automation for these use cases.

[Do you want to know more about UI automation's future with askui? Join our community!](https://askui.circle.so/getting-started)
