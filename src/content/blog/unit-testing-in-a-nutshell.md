Let’s start with a quote by Martin Fowler:

> Analogous, good Unit Tests are comprehensible to other people, not just machines. Making code and in this case Unit Tests comprehensible to everyone is what we want to call the
> ***Keep code working
Find bugs before production
Humans do mistakes

**There are various different definitions of Unit Tests, so let’s stick to Martin Fowler one more time, who identified[Elliotte Rusty Harold stripped the definition of Unit Tests down to: “verifying that a known fixed input produces a known fixed output”.
But first step back. What is a unit in general? A unit is normally a method, constructor or deconstructor.
Call dependencies between units

The test calls the unit and it will call our mocks. At the end, we verify that the mocks are called with the expected parameters. (See image below)
*What Is the FIRST-Principle?

FIRST Principle**:**I**ndependent,**S**elf-Checking and**Your Unit Test has to be**An******self-validating**means that a test can automatically detect if it was passed or failed. There is no additional instance needed to confirm or validate the result.

Tests**are written at the right time, immediately before the code that makes the tests pass. Writing the test first makes a difference, don’t write them after you write your code.

## Let’s talk about **Test Coverage**as some like to call it. Coverage shows you which lines and branches of the code were (or were not) covered by the tests. It is also a metric which helps you to find out the percentage of your covered (executed) code by the tests. E.g.: It tells you that your codebase consists of 10 lines, 8 lines were being covered by your tests, so your coverage is 80%. While this gives you no information about the quality of your software or how good your tests really are. The coverage of the complete code base should be higher than 80%.

What Is the Best Way to Write Unit Tests?

clean code*. The term deviates from the Clean Code book by Robert Cecil Martin. In a nutshell, clean code is any code that can be understood intuitively – by others, not just by yourself. Next up is Dependency Injection (DI) – it’s not necessary but highly recommended to isolate your dependencies in the code. This allows you to easily inject your mocks to your class and only test the unit.

Share setup and fixture
Avoid these Don’ts:
Generate random input

- Names constants from model code.

- Using description annotations

Second code example: Never ever (!) use conditions or loops in test methods. Each test method should only test one test case. Split them in multiple test methods.

```

```

Have You Already Thought About Naming Your Test Methods?

Test name could include the expected input or state and the expected result for that input or state
Test name could include the name of the tested method or class

Cons:**
Renaming of method name is necessary, when renaming the origin method
‍
Cons:**
Renaming of method name is necessary, when renaming the origin method
‍
Cons:**
test-prefix is duplicated information in combination of an @Test-annotation
‍
Cons:**
Expected result is not defined
‍
Cons:**
Long name through should and when
Cons:**
Long name through should and expect
‍
Cons:**
Given, When and then are duplicated

Do You Know These Test Doubles?

Dummy

Fake

Stub

**Compared to a stub, allow mocks to verifying method invocation of the unit. An example is the service method invoking the repository method.

```

```

### A Spy uses the original implementation and is the most complex version of a test double. It is a wrapper of the original implementation, so it records the number of calls and not the input. For example:

```

```

## There are two common practices to structure your test method. First the AAA-Pattern and the BDD-Pattern. The BDD-Pattern is not covered here.

The AAA-Pattern is commonly used in unit tests. This Acronym stands for *Now let’s come to a conclusion. Unit Testing is an art that is easy to learn (and not too hard to master) if you follow the instructions given in this overview. Now that you know about all the characteristics, basic coding examples and patterns, we suggest you to always question your code (as Fowler would say): is my code comprehensible to everyone?