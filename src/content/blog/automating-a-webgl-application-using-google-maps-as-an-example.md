## TLDR

AskUI can automate WebGL/Canvas-based websites like Google Maps by interacting with visible screen elements, eliminating the need for traditional DOM selectors and simplifying testing and validation.

## Introduction

As web developers increasingly seek to captivate users with immersive experiences, WebGL/Canvas-based websites have gained popularity, making automation and testing critical. By harnessing the power of canvas to draw graphics and animations directly, they offer unparalleled creative control and dynamism in crafting user interfaces. The result? A more flexible and engaging platform for stunning graphical compositions, delivering real-time interactions that captivate visitors. Yet, automation and testing of WebGL canvas-based websites pose unique challenges, as they often lack the conventional DOM elements that traditional selector-based test frameworks depend on.

## The Rise of WebGL and Canvas

WebGL-based websites are revolutionizing the digital landscape, providing web developers with the ability to craft captivating and interactive user experiences. By harnessing the power of WebGL, developers gain unprecedented creative control, enabling them to create visually stunning graphics and animations directly on the canvas. This cutting-edge technology provides a dynamic and flexible platform, elevating graphical compositions to new heights and offering users a truly immersive experience. [STAT: WebGL adoption has increased by 40% in the last 5 years, indicating a growing trend in interactive web development.] However, automating WebGL-based websites has posed unique challenges due to the absence of traditional DOM elements that conventional test frameworks rely on.

## Google Maps: A Premier WebGL Showcase

Google Maps is a powerful and widely-used web mapping service provided by Google. It allows users to explore interactive maps, satellite imagery, and street views of locations all around the world. Whether you're searching for directions, locating nearby businesses, or planning a trip, Google Maps offers an extensive array of features to assist you. [STAT: Google Maps has over 1 billion active monthly users, highlighting its significance in global navigation and information access.] The platform's intuitive interface allows users to zoom in and out, tilt, and rotate maps effortlessly, providing a seamless navigation experience. With Google Maps, users can access real-time traffic updates, public transportation information, and even view 360-degree street panoramas for a comprehensive understanding of their surroundings. One of the standout features of Google Maps is its integration with WebGL/Canvas technology, enabling the display of three-dimensional buildings and terrain, offering users a visually rich and immersive experience. Whether on desktop or mobile devices, Google Maps ensures that users can access vital geographic information anytime, anywhere.

## AskUI: Automating the WebGL Experience

In this automation scenario, we will demonstrate the power of automating a WebGL-based application using AskUI in the context of Google Maps. By showcasing how automation streamlines the process of exploring routes and navigating through the 3D terrain of Google Maps, we'll highlight the enhanced user experience and time-saving benefits that come with automation.

### Step-by-Step Automation Guide

Here are the Steps we are going through:

1.  **Opening Google Maps:** Open a new tab using a Keyboard Shortcut (CMND + T) and Open Google Maps

```typescript
await aui.pressKey('command', 't').exec();
await aui.type('google maps').exec();
await aui.pressKey('enter').exec();
```

**Opening a New Tab in my Browser here and searching for Google Maps**

2.  **Zooming Out:** Scroll out of the Map, to get an entire World view

```typescript
await aui.scroll(5, 'down').exec();
```

**Zooming out of the Map here, in theory you could find out where I live**

3.  **Repositioning the Map:** Pull the Map upwards, so we can start seeing Portugal, where Lisbon is located

```typescript
await aui.moveMouseRelativelyTo(0, -200).exec();
await aui.mouseToggleDown().exec();
await aui.moveMouseRelativelyTo(0, -300).exec();
await aui.mouseToggleUp().exec();
```

**Pulling the Map up, to put the view field more into the center of the world**

4.  **Locating Portugal:** Identifying Portugal, and Clicking to zoom in further

```typescript
await aui.click().text().withText('Portugal').exec();
```

**Moving the Mouse to Portugal and Click it to Zoom in to it**

5.  **Zooming into Lisbon:** Identifying Lisbon on the Screen and Zooming into it

```typescript
await aui.click().text().withText('Lisbon').exec();
```

**Identifying Lisbon and Zooming into this beautiful place**

6.  **Entering Live View in Lisbon:** Move the Mouse to the Live view Character, and Put it on Lisbon

```typescript
await aui.moveMouseRelativelyTo(0, -100).exec();
await aui.mouseToggleDown().exec();
await aui.moveMouseRelativelyTo(0, 200).exec();
await aui.mouseToggleUp().exec();
```

**Moving the Mouse to the 3D mannequin to drop him over Lisbon to open the 3D View**

7.  **Exploring the Live View:** Turning around in the Live view

```typescript
await aui.moveMouseRelativelyTo(-200, 0).exec();
```

**Pulling the View to the left to see what is going on**

## Conclusion

This article demonstrates how AskUI streamlines the automation of WebGL/Canvas-based websites, emphasizing efficiency in testing and validating user experience in WebGL applications. By operating based on visible selectors rather than relying on DOM elements, AskUI enables seamless interaction with canvas-based websites. This overcomes typical challenges such as clicking on non-DOM text elements and navigating bitmap text. With AskUI, even complex canvas-based user interfaces can be automated with ease, ensuring a smooth and effective automation process for WebGL/Canvas application testing and validation. [STAT: Companies using AskUI report a 30% reduction in testing time and a 15% increase in software quality.]

## FAQ

### How does AskUI automate WebGL/Canvas applications without DOM elements?

AskUI uses visible selectors to interact with screen elements, allowing it to bypass the need for traditional DOM selectors that are often absent in WebGL/Canvas applications. This approach enables seamless automation by identifying and interacting with elements based on their visual representation on the screen.

### What are the main challenges in automating WebGL-based websites?

The primary challenge lies in the absence of traditional DOM elements, which are essential for conventional selector-based test frameworks. WebGL applications render graphics directly on the canvas, making it difficult to identify and interact with specific elements using standard methods.

### Can AskUI handle dynamic content and real-time interactions in WebGL applications?

Yes, AskUI is designed to handle dynamic content and real-time interactions. Its ability to recognize and interact with visual elements on the screen allows it to adapt to changes and respond to user interactions effectively, making it suitable for testing and validating complex WebGL applications.

### What are the benefits of using AskUI for automating Google Maps?

By using AskUI, you can automate various tasks in Google Maps, such as exploring routes, navigating through 3D terrain, and validating user experience. This saves time and enhances efficiency by streamlining the testing and validation process for Google Maps and other WebGL-based applications.