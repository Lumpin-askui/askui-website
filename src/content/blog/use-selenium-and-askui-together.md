However sometimes you need to leave the confines of your browser to interact with another application or your operating system. This is simply not possible with Selenium alone.

In this post you will learn to setup Selenium together with AskUI to define workflows that can leave the browser.

## Prerequisites **
AskUI installed and configured on your system ( [**The first thing you have to do is to install the****With Selenium ready to go, you have to head over to the file**Webdriver**there. Here is how the the content of the file should look like:

```

```

Import the necessary classes to initialize a **WebDriver`**for the Chrome browser

1. `Make sure the browser gets closed after execution

2. `**With the**my-first-askui-test-suite.test.ts**and import it there alongside a few more classes you need to write Selenium code. Add this to the start of the file:

```

```

3. Open the website[Dismiss the cookie popup by clicking the **Search for*Then with AskUI: Click on the button with text**Then refine your search by clicking on**Move your mouse to the image where a Chrome and a Firefox logo in it

```

```

## Testrun **

```

```

**Integrating AskUI with a framework like Selenium comes down to configuring Selenium**Combining Selenium with AskUI gives you all the options to automate workflows over multiple applications.