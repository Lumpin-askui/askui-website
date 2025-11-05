Arrange**,**Assert-Pattern**(AAA). Here’s an example:

```

```

@Test*-Annotation in line 2 allows the JUnit-Runtime to find and execute the test case. The naming convention*JUnit Lifecycle

lifecycle**. What would you guess, how many instances of a test suite with two methods with a*@Test*-annotation method and its own instance. This behavior can be changed to one instance per class with the @TestInstance-Annotation.
Why is this important? You can clean up your test code and replace the*Assumptions, Conditions and Disabling

Assumptions**allow you to abort a test by a condition, instead of marking them as failed.  For example, when you have a case where a test should only be executed in the CI pipeline with some special credentials, then the following code snippet is the correct choice:

```

```

disabled**by the*condition**. Imagine you have a code which is only working for a minimum JRE version, then you can disable it with the following code snippet:

```

```

@EnableOnOS*,*@EnabledIfSystemProperty*,*@EnabledIfEnvironmentVariable*,*@EnabledIf*,*Test Order

order**of the executed tests are important. This is especially necessary for integration tests or functional tests. Therefore the*@DisplayName*,*@Random*or*@TestInstance*(Lifecycle.PER_CLASS)).Here is a small example:

```

```

## **@RepeatTest*-Annotation allows you to do just this. Can you think of a practical case where this is necessary?

@ParameterizedTest*-Annotation on the other hand is frequently used to check all boundary values of a method. For example, if you want to check if your constructor only accept values from 0 – 10, you can type:

```

```

@EnumSource*,*@MethodSource*are popular available argument sources. For more information have a look at[In my previous blog post I gave the advice to not access the file system during a test. There are certain cases though where this is inevitable. Especially if you want to test interactions with the **@TempDir*-Annotatoin injects a path to a temporary directory into a test method. It takes care of creation and deletion of the temporary directory, so you can focus on implementing the test.

```

```

## An exciting feature is the **I hope you enjoyed this article and learned some practical insights for your future tests.