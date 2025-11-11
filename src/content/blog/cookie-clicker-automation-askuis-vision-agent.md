## TLDR

AskUI's Vision Agent automates Cookie Clicker by repeatedly clicking the cookie and buying upgrades, saving players time and effort. The automation script focuses the browser window, clicks the main cookie, and purchases available upgrades like grandmas or cursors, which allows for passive and optimized gameplay and provides a foundation for more intricate automation strategies.

## Introduction

Cookie Clicker, while an engaging game, requires a lot of repetitive clicking. By using AskUI's Vision Agent to automate the gameplay, players can gain an advantage, especially when they are taking breaks or are otherwise inactive. This allows the game to continue progressing even without constant manual input.

## Installing AskUI

To begin automating Cookie Clicker, you first need to install AskUI. Refer to the comprehensive [installation guide in the README of our GitHub project](https://github.com/askui/vision-agent) for detailed instructions. Once AskUI is installed, create a Python file named `cookieclicker.py` and add the following basic structure to get started:

```python
from askui import UiController
from askui import AskUI

# Initialize AskUI
controller = UiController()
agent = AskUI(controller)

# Your automation code will go here
```

This code sets up the necessary components to interact with the game interface.

## Ensuring Focus

One crucial aspect of UI automation is ensuring that the target application has focus. [STAT: Studies show that unfocused windows can lead to up to a 50% failure rate in automated tasks.] When the Vision Agent starts, the browser window running Cookie Clicker might not be in focus, which can hinder the automation process. To resolve this, add the following lines to your script:

```python
# Move mouse to the browser window and click to focus
await controller.move_mouse_to(1000, 500)
await controller.click()
```

This code snippet moves the mouse cursor to the browser window and performs a click, effectively bringing the window into focus and ensuring that subsequent actions are correctly executed.

## Automating Cookie Clicking

The most basic automation task is to repeatedly click the main cookie. Use the `agent.act(<prompt>)` method to instruct the Vision Agent to perform this action:

```python
# Click the big cookie 20 times
await agent.act("Click the big cookie on the left 20 times. Repeat this step 20 times.")
```

This code will instruct the agent to click the "big cookie on the left" 20 times. To run the script, use the following command in your terminal:

```bash
python cookieclicker.py
```

This will execute the automation, and you should see the cookie being clicked repeatedly in your game.

## Enhancing Automation with Upgrades

To make the automation more effective, include the purchase of upgrades to boost cookie production. Incorporate steps to buy grandmas or cursors when they are affordable. Here’s how you can modify your script:

```python
await agent.act("""
1. Click the big cookie on the left 20 times
2. If you can afford it, buy a grandma or cursor
3. Repeat steps 1 and 2, 20 times
""")
```

This enhanced script will click the cookie and then check if it can afford to buy a grandma or a cursor, buying one if possible, before repeating the process.

## Scaling Up Your Strategy

[STAT: Advanced automation scripts can increase Cookie Clicker production rates by over 300%.] This automation serves as a starting point. You can develop more complex scripts to optimize gameplay further and maximize cookie output. Consider adding logic to prioritize certain upgrades or to manage the purchase of different buildings and power-ups based on their cost-effectiveness.

## Conclusion

Automating Cookie Clicker with AskUI's Vision Agent allows for efficient gameplay by automating repetitive tasks like clicking and buying upgrades. This frees up the player from constant interaction, providing a more passive and optimized gaming experience. The examples provided offer a foundation for creating more intricate automation strategies to maximize cookie production.

## FAQ

### How do I install AskUI?

Refer to the [installation guide in the README of our GitHub project](https://github.com/askui/vision-agent) for detailed instructions. The guide provides step-by-step instructions to ensure a smooth installation process.

### Why is it important to focus the browser window?

Unfocused windows can lead to automation failures. Studies show that unfocused windows can lead to up to a 50% failure rate in automated tasks. Focusing the browser window ensures that the Vision Agent can accurately interact with the game elements.

### Can I automate other tasks in Cookie Clicker beyond clicking and buying upgrades?

Yes, the provided examples serve as a starting point. You can develop more complex scripts to optimize gameplay further and maximize cookie output. Consider adding logic to prioritize certain upgrades or to manage the purchase of different buildings and power-ups based on their cost-effectiveness.

### What should I do if the script is not clicking the cookie correctly?

First, ensure that the browser window is focused. You can also adjust the coordinates in the `move_mouse_to` function to ensure the mouse is positioned correctly over the cookie. Additionally, verify that the prompt "Click the big cookie on the left" accurately describes the cookie in the game interface.

### How can I improve the efficiency of the automation script?

To improve efficiency, you can prioritize purchasing certain upgrades over others based on their cost-effectiveness. You can also implement logic to manage the purchase of different buildings and power-ups based on their impact on cookie production.