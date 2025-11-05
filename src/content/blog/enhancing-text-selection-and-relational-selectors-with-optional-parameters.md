In the past, you had to write **text().withText(<your text>)** for text selection. This was tedious to write and additionally hard to read, too.

Now, we've implemented optional parameters, allowing you to simply use **text(<your text here>)** with your preferred parameter. This makes it easier to select text and improves readability.

And before introducing optional parameters for relational selectors like **above()**, **below()**, **leftOf()**, and **rightOf()**, you could only select the first element. Making it impossible to automate things where you wanted to target the **nth**-element.

You can now add an index, which starts at zero, to select other elements more conveniently like this:

> await au.click().text().below(2).textfield().exec()

In this blog post we show you how you can use the optional parameters to improve your automations 🥳

## Optional Parameters for `text()`

Targeting a **text**-element before optional parameters was done like this:

```typescript
await aui.click().text().withText('Your Text Here').exec()
```

This is unpleasant to write and also to read. Now you can shorten it by leaving out the **withText()** and supply your text directly to **text()** like this:

```typescript
await aui.click().text('Your Text Here').exec()
```

## Optional Parameters for Relational Selectors

Let us start with an example first. How would you select the text **WOOHOO** when you can only target the text **FIRST** reliably?

```
FIRST
SECOND
WOOHOO
```

Exactly. You would have to rely on **SECOND** which may clutter your code and blur your intentions like this!

> await aui.moveMouseTo().text().rightOf().text('SECOND').exec();

But you can now use an index for relational selectors like **above()**: For the first element, input nothing or zero; for the second, input one; for the third, input two, and so on.

This enables you to select the second element right of **FIRST** with ease.

```typescript
await aui.moveMouseTo().text().rightOf(1).text('FIRST').exec();
```

## Conclusion

With the new optional parameter for `text()` we simplified the targeting of text elements.

With the optional **index**-Parameter for relational selectors like **above()** it is now possible to select the **nth**-element and target elements in your AskUI automations that were hard to target before.

Also check out the docs:

- [text()](https://docs.askui.com/docs/api/Element-Descriptions/text)
- [Relational Selector above()](https://docs.askui.com/docs/api/Relations/above)
