## TLDR

`withExactText()` in AskUI finds elements with text that matches exactly, `withText()` uses fuzzy matching to allow for slight variations, and `withTextRegex()` matches elements based on a regular expression pattern. Use `withExactText()` when precision is key, `withText()` for flexibility in case of minor errors, and `withTextRegex()` for dynamic or pattern-based text matching.

## Introduction

This guide explores the nuances of text matching in AskUI using `withExactText()`, `withText()`, and `withTextRegex()`. Through practical examples using the AskUI demo app, we'll illustrate how each method functions, highlighting their differences and optimal use cases for various testing scenarios. Understanding these distinctions is crucial for building robust and reliable UI automation scripts.

## Basic Text Matching with `withText()`

The `withText()` method employs fuzzy matching, which means it can tolerate minor misspellings or variations in the text. This is particularly beneficial when you're unsure about the exact text displayed on the screen or if it might have slight discrepancies. For example, if you are searching for an element labeled as "Button" but the application renders it as "Buton," `withText()` can still identify it. To demonstrate this, navigate to the AskUI demo app and use the following code:

```javascript
// Example code for withText()
```

However, it's important to note that fuzzy matching has its limits. [STAT: Fuzzy matching algorithms typically have a tolerance threshold of around 1-2 character differences.] The `withText()` method won't match a sequence if the differences are too significant. Consider this example:

```javascript
// Example code for withText() that will NOT work
```

In this case, the element labeled "Bottm" will not be identified. A more accurate approach would be:

```javascript
// Example code for withText() that WILL work
```

## Matching the Exact Text with `withExactText()`

When precise text matching is paramount, `withExactText()` is the ideal choice. This method only identifies elements where the text is an exact match to the specified string. This is crucial in scenarios where you need to avoid accidentally selecting elements with similar but distinct text.

For example, suppose you want to interact with an element that contains the exact text "Doughnut." Using `withExactText()` ensures that only the intended element is targeted, preventing unintended actions on elements with similar names.

```javascript
// Example code for withExactText()
```

However, you might encounter situations where `withText()` returns more matches that what you expected, like in the example above where AskUI clicks both "Doughnut" and "Doughnut Chart". In such cases, replacing `withText()` with `withExactText()` ensures precise targeting and prevents unintended interactions.

```javascript
// Example code for withExactText() ensuring precise matches
```

## Matching Text with Regular Expressions using `withTextRegex()`

`withTextRegex()` enables text matching based on patterns defined using regular expressions. This is particularly valuable when dealing with dynamic content or when you need to target elements based on specific criteria rather than fixed text. [STAT: Using regular expressions can reduce code complexity by up to 30% in pattern matching tasks.]

For instance, to click on items with calorie counts ranging from 300 to 499 on the demo app page, you can use the following regular expression:

```javascript
// Example code for withTextRegex()
```

Let's break down this regular expression:

*   `[3-4]`: Matches one character between 3 and 4, ensuring the number starts with either 3 or 4.
*   `[0-9]`: Matches one character between 0 and 9, representing any digit.
*   `{2}`: Repeats the previous expression (`[0-9]`) two times, ensuring we have two more digits after the initial 3 or 4.

This allows you to dynamically target elements based on a numeric range rather than hardcoding specific values.

## Conclusion

In summary, `withExactText()`, `withText()`, and `withTextRegex()` each offer distinct approaches to text matching within AskUI. `withExactText()` guarantees precise matches, `withText()` provides flexibility through fuzzy matching, and `withTextRegex()` empowers pattern-based matching using regular expressions. Selecting the appropriate method depends on the specific requirements of your test case, balancing the need for precision and adaptability. Consider using `withExactText` for critical elements requiring exact matches, `withText` for user-input fields where typos are common, and `withTextRegex` for dynamic content or complex pattern matching scenarios.

## FAQ

### How does `withText()` handle minor misspellings?

`withText()` uses fuzzy matching, which can tolerate slight variations or misspellings in the text. It attempts to find the closest match within a certain tolerance threshold. However, if the misspelling is too significant, it may not find a match.

### When should I use `withExactText()` instead of `withText()`?

Use `withExactText()` when you need to ensure a precise match with the text on the screen. This is important when you want to avoid accidentally selecting elements with similar but distinct text or when the text is critical for identifying the correct element.

### Can I use regular expressions with `withText()` and `withExactText()`?

No, regular expressions can only be used with `withTextRegex()`. `withText()` and `withExactText()` accept plain text strings as arguments. If you need to use a regular expression, you must use `withTextRegex()`.

### How do I create a regular expression for a range of numbers?

To create a regular expression for a range of numbers, you can use character classes and quantifiers. For example, to match numbers between 100 and 200, you can use the following regex: `1[0-9]{2}|200`. This regex matches either a number starting with 1 followed by two digits, or the number 200.

### What are some common use cases for `withTextRegex()`?

`withTextRegex()` is useful for matching dynamic content, such as dates, times, or IDs that follow a specific pattern. It's also helpful for targeting elements based on specific criteria, like numbers within a certain range or text that contains specific characters.