Wouldn't it be nice to get a report of failed automation steps that include screenshot before and after an execution and also a video?

We also provide an interface you can implement so you can integrate it into your favorite reporting tool like for example Allure.

## Implementing A Reporter **

Implementing your own reporter involves two main steps:

1. Configuring the reporter within the**Depending on your chosen reporter framework, you may not need to implement every function in the interface.

```

```

onStepEnd()**functions.

```

```

__Jest__**to your reporter framework, tailoring the integration to your preferences.

askui-helper.ts**file within the**UIController**and add it to your reporter.

**Our Allure example repository also publishes its report to a website:[Allure dashboard starting page of allure-example-reporter repository](allure-report.png)
.

**We've created a community repository on our GitHub space where you can find and contribute implemented reporters. If you need inspiration or want to share your custom reporter with the community this is the right place to start!

**Incorporating screenshots and videos into your executed steps reports can significantly enhance your reports, as demonstrated in the provided example.

If you need help, please join our[Community](https://askui.circle.so/getting-started)where the AskUI staff and the community are ready to help you out!