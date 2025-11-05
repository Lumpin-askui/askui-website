When you automate workflows you can **NOT** focus solely on the *happy path* where everything works as expected. The real world is way more complicated.

Especially when you automate User Interfaces (UI) you have to deal with elements that only sometimes appear in special cases, pop-ups that jump in your face and block access to other elements. Or the workflow has some inherent variance you need to account for.

In AskUI you can deal with all of these things by checking for conditions and choosing a different path through your workflow!

This blog post explains how to implement preconditions, so your workflows become managable and stable.

## The Example

To illustrate the approach we will automate the ***Dark/Light***-theme-switcher on the [AskUI Practice Page](https://askui.github.io/askui-practice-page/) in the top right corner.

![AskUI Practice Page start in light theme.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6717c2c46b1795d1fed93b98_6657204b10d142af7f6ab428_askui-practice-page-start.png)

AskUI Practice Page start in light theme.

Depending on the theme that is currently active the text of the button changes between **Switch to Dark** and **Switch to Light**.

## Step 1: Check for an Element to Exist

To illustrate the mechanics we first want to check if we are currently in the *Light*-theme by trying to ***get()*** the text-element ***Switch to Dark***. ***get()*** will always return an array. And if the element was found it will have at least one element in it, if not the array is empty ([Check the API docs](https://docs.askui.com/docs/api/Getters/get)).

```typescript
const switchToDarkButton = await aui.get().text('Switch to Dark').exec();
```

Now we can check if we can safely click the switch button by verifying the array is not empty:

```typescript
if (switchToDarkButton.length > 0) {
  await aui.click().text('Switch to Dark').exec();
}
```

## Step 2: Also Check for Other Variant

Let us now make our workflow adjust to the reality that the practice page can be either in dark or in light mode. In dark mode the button has the label ***Switch to Light***. We try to ***get()*** this text first:

```typescript
const switchToLightButton = await aui.get().text('Switch to Light').exec();
```

Then we add an ***else if*** to the check for the light theme. So depending on the existence of **Switch to Dark** or **Switch to Light** the button is clicked and the theme is switched in any case:

```typescript
if (switchToDarkButton.length > 0) {
  await aui.click().text('Switch to Dark').exec();
} else if (switchToLightButton.length > 0) {
  await aui.click().text('Switch to Light').exec();
}
```

## Step 3: Encapsulate Code into a Function

Putting all this code in your workflow may be maintainable for a small workflow. But once you have a lot of code you want to move it into a separate function and call it. This also makes it more maintainable and reusable by different workflows.

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

![Running the workflow two times in a row, so it clicks on the switch theme button twice.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6717c2c46b1795d1fed93b94_66572164ac5d1a8170cd600a_askui_practice_page.gif)

Running the workflow two times in a row, so it clicks on the switch theme button twice.

## Conclusion

By using conditions in your workflow your workflow will become more stable as it can recover from deviations from the *happy path*. You can use this technique to automate preconditions that need to be fulfilled for a workflow to run successfully.

For example making sure that a user is logged in, or that the UI is in a desired state.
