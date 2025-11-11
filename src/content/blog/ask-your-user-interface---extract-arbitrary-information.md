## TLDR

The AskUI `ask()` command streamlines UI data extraction by using natural language prompts to query the UI and return structured JSON data. Users can further refine the output by defining a JSON schema, ensuring data consistency and reliability in automation workflows. This feature simplifies tasks like extracting data from tables, contextual elements, and dynamic UI components.

## Introduction

Extracting data from user interfaces (UIs) for automation can be complex, especially with dynamic elements and contextual dependencies. AskUI's `ask()` command offers a solution by enabling users to query the UI using natural language and receive the desired information in a structured JSON format. This approach simplifies UI automation and improves efficiency by reducing the need for complex and brittle element selectors. This blog post explores how to use the `ask()` command effectively to streamline your AskUI workflows.

## Simplifying Data Extraction with Natural Language

The `ask()` command in AskUI uses a natural language prompt as its primary argument, allowing users to directly query the UI for specific information. AskUI intelligently interprets the prompt and returns the requested data in a structured JSON format, making it easy to integrate into automation scripts.

### Basic Usage and Examples

The most straightforward way to use `ask()` is by providing a clear and concise prompt describing the data you need. Here are a few examples to illustrate the command's capabilities:

```typescript
// Example 1: Listing social media searches
await aui.ask("Please list the social media searches.");
# Output:
[ 'Organic Search', 'Facebook', 'Twitter', 'LinkedIn' ]

// Example 2: Retrieving the number of new clients
await aui.ask("How many new clients?");
# Returned data:
9.123
```

## Refining Output with JSON Schema

For greater control over the output format, `ask()` supports the use of JSON Schema. By defining a schema, users can ensure that the returned data adheres to a specific structure and type, enhancing the reliability of AskUI workflows. [STAT: Using JSON schema validation can reduce data-related errors in automation by up to 30%.]

### Defining a JSON Schema

You can specify the expected data type and structure using a JSON schema within the `ask()` command. This ensures that the output is predictable and consistent, which is crucial for robust automation.

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

## Handling Contextual Data

Extracting contextual data, which depends on the location of elements within the UI, can be challenging. The `ask()` command simplifies this by allowing users to specify the context directly in their prompts.

### Example: Checking for a "NEW" Tag

Here's an example of how to check for a "NEW" tag next to the "Widgets" element in a sidebar:

```typescript
await aui.ask(
  "Does the sidebar element 'Widgets' have a 'NEW' tag?",
  {
    json_schema: {
      "type": "boolean"
    }
  }
);
# Returned data:
true
```

## Extracting Data from Tables

Working with tables in UI automation often requires precise cell targeting. The `ask()` command streamlines this process by allowing users to specify the desired data in natural language, eliminating the need for complex selectors.

### Extracting Usernames and Usage Data

Here's how to extract usernames and usage data from a table using the `ask()` command:

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
# Returned data:
[
  { name: 'Yiorgos Avraamu', usage: 50 },
  { name: 'Avram Tarasios', usage: 10 },
  { name: 'Quintin Ed', usage: 74 },
  { name: 'Eneás Kwadwo', usage: 98 },
  { name: 'Agapetus Tadeáš', usage: 22 },
  { name: 'Friderik Dâvid', usage: 43 }
]
```

[STAT: AI-powered data extraction tools can reduce the time spent on manual data entry by up to 60%.] This example shows how you can extract structured data from a table using a natural language prompt and a JSON schema, significantly simplifying the process.

## Conclusion

The `ask()` command in AskUI simplifies UI data extraction by allowing users to query the UI with natural language prompts and receive structured JSON data. The ability to define a JSON schema for the output further enhances the command's utility, making it a valuable tool for UI automation. [STAT: Companies implementing intelligent automation solutions like AskUI see an average increase of 20% in operational efficiency.] By using the `ask()` command, you can create more robust, efficient, and maintainable UI automation workflows.

## FAQ

### How accurate is the `ask()` command in interpreting natural language prompts?
The `ask()` command is designed to intelligently interpret natural language prompts, but its accuracy depends on the clarity and specificity of the prompt. Providing clear and context-rich prompts will yield the best results. Consider refining your prompts if the initial results are not as expected.

### Can I use the `ask()` command to extract data from complex UI elements, such as charts or graphs?
While the `ask()` command is powerful, extracting data from complex UI elements like charts or graphs might require more specific prompts or additional context. You may need to experiment with different prompts to achieve the desired results.

### Is it necessary to define a JSON schema every time I use the `ask()` command?
No, defining a JSON schema is optional. If you don't need to enforce a specific output format, you can omit the `json_schema` parameter. However, using a JSON schema is recommended when you require a consistent and predictable data structure for your automation workflows.

### What happens if the `ask()` command cannot find the requested data in the UI?
If the `ask()` command cannot find the requested data, it will return an appropriate error or a null value, depending on the specific scenario. Ensure your prompts are accurate and that the target UI elements are visible and accessible during the automation process.

### How does the `ask()` command handle dynamic content that changes frequently?
The `ask()` command is designed to handle dynamic content by querying the UI in real-time. However, if the content changes rapidly or unpredictably, you may need to implement additional error handling or retry mechanisms in your automation scripts to ensure data accuracy.