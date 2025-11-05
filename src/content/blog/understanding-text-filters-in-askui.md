withExactText()
withTextRegex()

## For a convenient demonstration, we will use a[Basic Text Matching

withText()**. Go to the demo app page and run the code below:

```

```

**Fuzzy Matching**and tolerates misspelled text.**Note that the above example code has two typos.*The text**matrial***doesn't match the text in the demo app, which is**Material***, although askui will find the text element that roughly matches the text on the screen.

## Even though the method **containsText()**is the method you want to use:

```

```

Be aware that even if the method**Fuzzy Matching**, it won't match the whole sequence by just a few characters. Try to use this code with the given demo app:

```

```

Bottm**, whereas this code will work:

```

```

withText()**and**containsText()**.

Match the Exact Text

withExactText()**.

Material->Data****Let's say we want to click on the items with exactly**Doughnut**is the matching item. Run this code and see how**You will see that AskUI clicks not only the**26.0**due to the**It will give you a clear idea of where you will need to use the method**withText()**. Try to run the same code after replacing the**withExactText()**:

```

```

Match Text with Regular Expression

withTextRegex()**supports**On the same page of the demo app, let's say that we want to click on the items whose Calorie is between 300 and 500*The regular expression**[3-4]**: Match one character between 3 and 4.
[0-9]**: Match one character between 0 and 9.
{2}**: Repeat the previous expression ([0-9]) two times.

Conclusion

If you got any issues by following this tutorial, or if you want to share your askui use case, you are welcome to[join our community!](https://askui.circle.so/getting-started)