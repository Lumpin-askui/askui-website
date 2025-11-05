Have you ever tried to extract data out of your User Interface (UI) and use it in your UI-Automations? If you did, then you found out that this seemingly innocent task can become quite complex.

You have to deal with contextual data that is only accessible in relation to other elements. Or dynamic data like tables that make it hard to write reliable extraction code.

Wouldn't it be easier to just **ask** what you want to know and getting it delivered in a structured format like JSON?

AskUI's `ask()` command does that and also lets you specify the targeted output format with JSON Schema. In this blog we walk you through the basic usage of `ask()` step-by-step and also show you more complex examples where `ask()` can make your AskUI workflows more efficient.

## Prerequisites

- Installed AskUI with the installer in version >=24.7.1: [Windows](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started), [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos), [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux)
- IMPORTANT: The `ask()` command is currently disabled by default. [Please request the activation for your account](mailto:info@askui.com).

*NOTE: For the following examples we use the website [https://coreui.io/demos/bootstrap/5.0/free/?theme=light](https://coreui.io/demos/bootstrap/5.0/free/?theme=light)*

## How to Use the ask() Command

The `ask()` command in its simplest form takes a single prompt as argument. Usually you want to ask a question on the state of your UI or extract a single number. Here are a two example prompts and their outputs:

```typescript
// Example 1
await aui.ask("Please list the social media searches.");
# Output
[ 'Organic Search', 'Facebook', 'Twitter', 'LinkedIn' ]

// Example 2
await aui.ask("How many new clients?");
# Returned data
9.123
```

### Specify Output Format with JSON Schema

In the examples above you may have noticed that the output in the first one is an `array` and in the second one it is a `number`. The `ask()` command returns valid JSON and tries to put the information in a suitable format. But you can also specify a format with [JSON Schema](https://json-schema.org/) for more control and reliability in your AskUI Workflows.

Here is social media example from above that enforces `Array<string>` as the return type:

```typescript
await aui.ask("Please list the social media searches.", {
  json_schema: {
    "type": "array",
    "items": {
      "type": "string"
    }
  }
});
```

## Examples

Now that we covered the basics. Let us look at two more common examples `ask()` can help you with.

### Extracting Contextual Data

Contextual data is usually hard to extract. It depends on *where* something is in your UI in relation to something else. Some common examples are:

- Notification counters
- Numbers on the side of labels or icons
- Getting the status of an element

Let us do a simple example. When we want to check if the `Widgets` element in the sidebar has a `NEW` tag we can do exactly that:

```typescript
await aui.ask(
  "Does the sidebar element 'Widgets' have a 'NEW' tag?",
  {
    json_schema: {
      "type": "boolean"
    }
  }
);
# Returned data
true
```

### Extracting Data from a Table

Tables are a tricky thing to extract data from because targeting specific cells needs you to write complex instructions. With the `ask()` command you can specify a complex sounding task in simple language. For example, if you want to extract the users from the table at the bottom **and** only want the `username` and the `usage` columns, you can write an instruction like this:

```typescript
await aui.ask(
  "Extract the users from the table.",
  {
    json_schema: {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "usage": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "required": ["name", "usage"]
      },
    },
  }
);
# Returned data
[
  { name: 'Yiorgos Avraamu', usage: 50 },
  { name: 'Avram Tarasios', usage: 10 },
  { name: 'Quintin Ed', usage: 74 },
  { name: 'Eneás Kwadwo', usage: 98 },
  { name: 'Agapetus Tadeáš', usage: 22 },
  { name: 'Friderik Dâvid', usage: 43 }
]
```

## Conclusion

AskUI's `ask()` command makes it easier to extract data from your UI. It takes a `prompt` which specifies what to extract and outputs structured JSON data. You can also specify the JSON Schema the returned data shall have.

AskUI bytes episode about the `ask()` command:
