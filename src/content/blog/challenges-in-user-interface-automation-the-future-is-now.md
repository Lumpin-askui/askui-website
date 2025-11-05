In the previous two installments ([link to Part 1](https://www.askui.com/blog-posts/challenges-in-user-interface-automation-current-state), [link to Part 2](https://www.askui.com/blog-posts/challenges-in-user-interface-automation-new-approaches)) of the series, we discussed how the state-of-the-art selector-based approaches to User Interface (UI) Automation can be enhanced with *Smart Selectors*. They remedy the flakiness of tests by working on relations of UI Elements, finding UI Elements with Optical Character Recognition, or Picture-in-Picture search.

In this last blog, we look at cutting-edge and future technologies that promise to solve UI Automation for user interfaces that are currently hard to test without a special setup.

## The Problem with 2D Planes

There is a whole class of applications selector-based tools are unable to test: 2D planes!

In HTML for example you can define a canvas where selector-based tools can not get any of the elements drawn into them.

```html
<canvas id="myCanvas"></canvas>
```

## Adoption of Cross-Platform Development

Native apps for Android and iOS are the preferred way to deliver a product to end users as they can efficiently leverage all the platform-specific APIs. The downside is, that you need specialized development teams to develop the apps. Development on each platform is completely different. This leads to additional costs!

A solution to this problem is cross-platform development, where only one codebase is maintained that compiles to every platform. In fact, cross-platform development is picking up momentum currently with Flutter leading the way.

Flutters claim on its webpage promises nothing less than

> [...] to build apps for mobile, web, desktop, and embedded devices — all from a single codebase.

With a single codebase for every platform, the need for multiple development teams is not given anymore.

But how do you test on Android, iOS, and embedded Devices where selector-based approaches fall short?

👁 Let us look at what cutting-edge tools are out there already. 👁

## Visual (Regression) Testing aided by Machine Learning/Artificial Intelligence

Visual Testing uses screenshots to compare the current state of an app to the specified one. The goal is to find differences in the User Interface like wrong layouts or different colors of elements. Changes like a wrong color of a button can be detected with this technique:

![Visual Regression Testing notices the change in color of the Login button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bf4_6346b2e9c3a3b99b48cf3b85_visual_regression_testing_login_form.png)

Visual Regression Testing notices the change in color of the Login button.

The problem with classic visual (regression) testing tools is that they are very rigid and react to tiny pixel changes. This makes them hard to use in real-world settings as the tests become flaky.

With the help of Machine Learning and AI, tools like *Applitools* are trying to get rid of that problem. Applitools trained their model *Applitools Eyes* to not match pixel-perfect but based on an understanding of the layout. It recognizes differences in the layout like missing elements.

With its *Visual Selectors* you can also add custom elements you have in your layout like icons.

## Real Visual Testing with Machine Learning

*Real* Visual Testing takes this concept one step further by automating the User Interface as a real human user would. It uses Machine Learning to detect elements on a *visual basis*. Also, the user input happens on an operating system basis allowing for real mouse movement, clicks/taps, and keystrokes.

That enables testing all applications on all platforms and across all user interfaces. Furthermore, a test can easily detect bugs for example that stem from modal dialogs or banners that cover other elements.

What would a model interfere from our rudimentary example page? Let us find out with [askui](https://www.askui.com/):

![Annotated webpage showing textfield with label Username and Login button.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bfe_6346b335da853a3de554d4af_askui_login_form_annotation.png)

Now we will try to write something into the text field:

```typescript
await aui.type('askui').textfield().below().text().withText('Username').exec();
```

When you run the code above you will see the mouse moving to the text field and type in *askui*.

![Gif showing how the mouse moves to the textfield and typing in askui when the test gets executed.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5bfb_6346b371ba19716b0cdb5f8a_Kapture%25202022-10-11%2520at%252016.06.59.gif)

If you want to try it out for yourself feel free to clone the [Git repository](https://github.com/JohannesDienst-askui/challenges-in-ui-automation-article) and check the [askui docs](https://docs.askui.com/docs/general/Introduction/why-askui) for a complete introduction.

## Outlook

Using Artificial Intelligence to detect elements will only be the beginning. We already see a rise in applications for advanced use cases. Two of which we want to discuss here.

### Visual Question Answering

A human brain is a pattern-matching machine and can detect the slight difference in the following two pictures easily:

![Girl walking and a bike nearby vs a girl walking a bike.](https://cdn.prod.website-files.com/6630f90ff7431b0c5b1bb0e7/6634d1b6c4a7de9e545d5c04_6346b38d8bc48d1fadba308f_visual_question_answering_only_pictures.png)

Machine Learning models usually can detect the triple _&lt; girl, walking, bike &gt;_ but are not able to distinguish between a girl walking a bike and a girl walking with a bike in the same picture.

But they get better and better and when they can do it reliably even more powerful selectors can be used in UI automation.

### Natural Language Processing

This development is already at the breakthrough point with models able to generate beautiful art from prompts and systems like GitHub Copilot suggesting code on the fly.

For UI Automation it will mean a shift away from creating workflows and code execution to writing down what should be done. The tools will figure out a way to do it!

## Conclusion

In this series, we showed the current state of User Interface automation. We discussed its shortcomings and how to mitigate them.

Then we went on to advanced techniques like Self-healing Tests which often use Smart Selectors in form of OCR, Picture-in-Picture search, and relational selectors. Especially relational selectors remedy the structural coupling of automation code to the code under test.

The future of UI Testing is looking bright with emerging tools tackling the problems of current selector-based tools. Bringing Machine Learning and Artificial Intelligence to Visual (Regression) Testing becomes feasible with tools like *Applitools Eyes*.

*Real* Visual Testing solely relies on Machine Learning to detect elements as a human would. It also combines interacting with the UI like a real user, simulating mouse movement and keystrokes. We showed how [askui](https://www.askui.com/) can do exactly that!

[Do you want to know more about UI automation's future with askui? Join our community!](https://askui.circle.so/getting-started)
