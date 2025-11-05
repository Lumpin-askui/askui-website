AskUI interacts with your operating system like a real human user. You write code that directly translates to user interactions such as keypresses and mouse clicks.

This directly leads to code that specifies **WHAT** you have to do in a specific sequence to achieve a workflow.

Unfortunately this also means a lot of repetitive code. For example, if you need to navigate a form with keypresses you have to press the key *TAB* often and sometimes repeatedly.

This is why we implemented some convenience methods to help you ease these pain points.

In this blog we introduce the currently implemented convenience methods and where to use them. Have fun!

*Note: Please send us a message if you have an idea for another useful convenience method!*

## clickButton()

**What it does:** Clicks a button that has a text on it.

**What does it solve:** More concise code for clicking a button.

Example code:

```typescript
await aui.clickButton('Submit').exec();
```

## clickIcon()

**What it does:** Clicks an icon that matches a description.

**What does it solve:** More concise code for clicking an icon matched by a description.

Example code:

```typescript
await aui.clickIcon('settings').exec();
```

## clickText()

**What it does:** Clicks a text.

**What does it solve:** More concise code for clicking a specific text.

Example code:

```typescript
await aui.clickText('Login').exec();
```

## clickTextField()

**What it does:** Clicks a textfield with a specific placeholder text.

**What does it solve:** More concise code for clicking a textfield identified with a placeholder text.

Example code:

```typescript
await aui.clickTextField('Enter your email').exec();
```

## clickTexts()

**What it does:** Searches for text elements and clicks them one after another when found.

**What does it solve:** Reduces the amount of repetitive code.

Example code:

```typescript
await aui.clickTexts(['Step 1', 'Step 2', 'Step 3']).exec();
```

## pressKeyNTimes()

**What it does:** Press a key multiple times. At least two times.

**What does it solve:** Reduces the amount of repetitive code. It lets you navigate by keyboard in a concise way.

Example code:

```typescript
await aui.pressKeyNTimes('tab', 5).exec();
```

## pressKeys()

**What it does:** Press an array of keys one after another.

**What does it solve:** Navigate by keypresses sequences instead of using `pressKey(...)` multiple times.

Example code:

```typescript
await aui.pressKeys(['command', 'c']).exec();
```

## waitUntil()

**What it does:** Wait until an AskUICommand does not fail.

**What does it solve:** Reduces boilerplate code you had to implement in order to wait for an element to become visible.

Example code:

```typescript
await aui.waitUntil(() => aui.click().text().withText('Submit').exec()).exec();
```

## Conclusion

The convenience methods presented here help you keep your AskUI workflows cleaner and more maintainable by reducing repetitive code.

They also make it easier to understand what is going on in your workflows.

Please let us know if you find them useful or if you need a convenience method for a specific purpose.
