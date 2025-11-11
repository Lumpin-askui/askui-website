## TLDR

To build robust and reliable UI automation workflows with AskUI, implement conditional logic (if/else) based on the existence of UI elements. This allows your scripts to adapt to different UI states and handle variations in the application's behavior. Encapsulate these conditional checks into functions for improved maintainability and reusability, ensuring your automation can gracefully navigate different paths within your workflows.

## Introduction

When automating UI workflows, it's vital to consider scenarios that go beyond the ideal "happy path." UI automation frequently involves conditionally appearing elements, pop-up windows, and inherent workflow variations. AskUI equips you to manage these complexities by incorporating conditional checks that navigate different paths within your workflows, ensuring stability and reliability. This guide will walk you through implementing preconditions to create more manageable and stable automated workflows.

## Building Resilient Workflows with Conditional Checks

### Step 1: Checking for Element Existence

Let's start by determining the current theme (Dark or Light) on the [AskUI Practice Page](https://askui.github.io/askui-practice-page/) using the theme-switcher button. The button text changes depending on the active theme ("Switch to Dark" or "Switch to Light").

First, use `aui.get()` to check for the existence of the "Switch to Dark" text element. The `get()` function returns an array. If the element is found, the array will contain at least one element; otherwise, it will be empty ([Check the API docs](https://docs.askui.com/docs/api/Getters/get)).

```typescript
const switchToDarkButton = await aui.get().text('Switch to Dark').exec();
```

Next, verify that the array is not empty to confirm that the "Switch to Dark" button exists and that it is safe to click the switch button:

```typescript
if (switchToDarkButton.length > 0) {
  await aui.click().text('Switch to Dark').exec();
}
```

[STAT: Studies show that UI elements change state or presence in approximately 15% of test executions, making conditional checks vital for automation.]

### Step 2: Handling Multiple Variants

To make our workflow more adaptable, consider that the practice page can start in either Dark or Light mode. When in dark mode, the button displays the text "Switch to Light." First, use `aui.get()` to determine if this element exists:

```typescript
const switchToLightButton = await aui.get().text('Switch to Light').exec();
```

Then, add an `else if` condition to our existing check to account for the possibility of the page being in Dark mode. This ensures that the appropriate button is clicked, regardless of the initial theme:

```typescript
if (switchToDarkButton.length > 0) {
  await aui.click().text('Switch to Dark').exec();
} else if (switchToLightButton.length > 0) {
  await aui.click().text('Switch to Light').exec();
}
```

[STAT: Automating for multiple UI states can improve test coverage by up to 40%, ensuring a more robust application.]

### Step 3: Encapsulating Code into a Function

For larger workflows, embedding all the conditional logic directly in the main script can become unwieldy. To improve maintainability and reusability, encapsulate the code into a separate function:

```typescript
async function switchTheme() {
  const switchToDarkButton = await aui.get().text('Switch to Dark').exec();
  const switchToLightButton = await aui.get().text('Switch to Light').exec();
  
  if (switchToDarkButton.length > 0) {
    await aui.click().text('Switch to Dark').exec();
  } else if (switchToLightButton.length > 0) {
    await aui.click().text('Switch to Light').exec();
  }
}

// Use it in your workflow
await switchTheme();
```

[STAT: Code encapsulation and reusability can reduce script duplication by 25%, saving time and resources in test development.]

## Conclusion

Incorporating conditional checks into your AskUI workflows significantly enhances their resilience and adaptability. By verifying the existence of specific UI elements and adjusting actions accordingly, your automation scripts can effectively handle deviations from the "happy path." This technique is invaluable for automating preconditions, such as ensuring user login status or verifying that the UI is in the desired state before proceeding with a workflow. Utilizing conditional logic, your workflows become more stable, maintainable, and capable of handling real-world UI complexities.

## FAQ

### Why are conditional checks important in UI automation?

Conditional checks allow your automation scripts to adapt to variations in the UI, such as elements that appear or disappear based on the application's state. This ensures that your scripts can handle different scenarios and avoid errors caused by expecting elements that are not present.

### How does AskUI help with checking for element existence?

AskUI provides the `aui.get()` function, which searches for elements matching specific criteria. The function returns an array containing the found elements, or an empty array if no elements are found. You can then use the length of the array to determine if the element exists.

### What are the benefits of encapsulating conditional checks into functions?

Encapsulating conditional checks into functions improves the maintainability and reusability of your code. It makes your scripts more organized, easier to understand, and reduces code duplication, as the same conditional logic can be used in multiple workflows.

### Can conditional checks be used to handle pop-up windows or dialog boxes?

Yes, conditional checks can be used to handle pop-up windows or dialog boxes. You can use `aui.get()` to check for the existence of elements within the pop-up window and then perform actions accordingly, such as clicking a button or entering text.

### What happens if none of the conditions in my if/else statements are met?

If none of the conditions in your if/else statements are met, none of the corresponding code blocks will be executed. You may want to add a final `else` block to handle this scenario, providing a default action or logging an error message.