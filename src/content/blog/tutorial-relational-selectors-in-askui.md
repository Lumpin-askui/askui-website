Relational selectors can be difficult and sometimes confusing to work with at first. Sometimes it is even not clear why a specific element will not be selected or why the selector does not seem to work.

In this article we’ll discuss the following relational selectors:
[[[[[[[Prerequisites
You have AskUI installed ( [
-

## When you want to click on a textfield and it is above an element, like for example a button with the text *above()**. The following code snippet moves the mouse to the textfield above the*

<div data-rt-embed-type="true">[]()

## When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text *

<div data-rt-embed-type="true">[]()

## For selecting an element, that contains another element, **If you have problems with selecting a specific element, always run**annotateInteractively()**to see if you need to use**The following snippet moves the mouse to a textfield based on its placeholder text*

<div data-rt-embed-type="true">[]()

## When you want to target an element that is **The following code snippet moves the mouse pointer to the text of the first textfield AskUI found:

```

```

<div data-rt-embed-type="true">[]()[]()

## If you want to select an element based on its location left or right of another element you have to use **rightOf()**respectively.

withText()**then you will get the nearest element. Otherwise, askui retrieves the nearest element that matches the filter!

```

```

```

```

<div data-rt-embed-type="true">[]()

## Filtering with the **leftOf()**and**

## The distance is not entirely based on physical distance. If you use an additional filter like **You can use**Conclusion

This tutorial equipped you with the knowledge to use their full power in your automation.

If you have a recurring or persisting issue, don’t hesitate to ask the community for help!