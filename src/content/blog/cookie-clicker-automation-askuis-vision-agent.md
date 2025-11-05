Cookie Clicker, as the name suggests, is a very click-heavy game that requires a lot of attention and can not be played on the side.

Why not try automating it with AskUI's Vision Agent to gain an edge while you go to the bathroom or get another cup of coffee?

## 1. Step: Install AskUI

Follow the [installation guide in the README of our GitHub project](https://github.com/askui/vision-agent).

After the installation, create a `cookieclicker.py` inside your project with the following skeleton code:

```python
from askui import UiController
from askui import AskUI

# Initialize AskUI
controller = UiController()
agent = AskUI(controller)

# Your automation code will go here
```

## 2. Step: Make Sure to Have Focus

When you start the Vision Agent from your IDE or terminal the browser window on a second display where the cookie clicker resides in does **NOT** have focus and may fail to automate because of it. So we move the mouse cursor there and trigger a left-click:

```python
# Move mouse to the browser window and click to focus
await controller.move_mouse_to(1000, 500)
await controller.click()
```

## 3. Step: Start with the Big Cookie

We are going for a very simple automation with a single prompt here, just to get some cookies when we are getting a new cup of coffee. Therefore we use the `agent.act(<prompt>)` method to specify a prompt with our automation needs:

```python
# Click the big cookie 20 times
await agent.act("Click the big cookie on the left 20 times. Repeat this step 20 times.")
```

This clicks the big cookie on the left 20 times and repeats the step 20 times. Run it by running in your terminal:

```bash
python cookieclicker.py
```

## 4. Step: Expand the Prompt

For the sake of demonstration - and more cookies - let us add two more steps to the prompt which increase our cookie output by buying grandmas or cursors if possible:

```python
await agent.act("""
1. Click the big cookie on the left 20 times
2. If you can afford it, buy a grandma or cursor
3. Repeat steps 1 and 2, 20 times
""")
```

## 5. Step: Expand with your Ideas

This is just the beginning. You can add even more steps and gain more cookies without risking RSI. Start building your own [Cookie Clicker Vision Agent with AskUI](https://github.com/askui/vision-agent).
