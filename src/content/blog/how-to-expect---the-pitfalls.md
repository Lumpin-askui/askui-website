You also need:
Checking if elements are actually there

- Check if either a element is there or another one is there

***But they are not always as intuitive to use as one might think.

**The usage of**expect()***seems "***Correct usage of**expect()***needs you to use**exists()***or**notExists()***and also conclude your instruction with**exec()***like this:

```

```

**But even if you do add an**exists()|notExists()***it still does not lead to an execution as the**exec()***is missing:

```

```

ESLint*rule to check for the correct usage of**expect()***, so you do not have to search for this two subtle bugs any more! The******Intuitively you would think you can check if multiple elements exist with one instruction by using**and()***:

```

```

Log in**and the element to**Sign Up**which can never be true.

***Checking if*****Sometimes you want to continue your workflow or do something if an element is not there. But when an**expect()***fails it fails the whole workflow run by throwing an exception. You can work around this by using a**try/catch***. In the**catch***-block you define your recovery or alternative:

```

```

## Conclusion **

We hope you learned some of those regarding the**expect()***command with this blog post. If not, we are more than happy to help you out in[our Community](https://community.askui.com/).