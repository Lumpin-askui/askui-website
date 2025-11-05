As web developers increasingly seek to captivate users with immersive experiences, WebGL/Canvas-based websites have gained popularity, making automation and testing critical. By harnessing the power of canvas to draw graphics and animations directly, they offer unparalleled creative control and dynamism in crafting user interfaces. The result? A more flexible and engaging platform for stunning graphical compositions, delivering real-time interactions that captivate visitors.

Yet, automation and testing of WebGL canvas-based websites pose unique challenges, as they often lack the conventional DOM elements that traditional selector-based test frameworks depend on.

## This is the result of the Automation Example:

<iframe src="https://www.loom.com/embed/83eae555d8fe4a61ada28fd5b7ed4241?sid=7612e44b-e0fe-4183-88ca-5cbe59211f0a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>

## Overview of WebGL and Google Maps

### WebGL

WebGL-based websites are revolutionizing the digital landscape, helping web developers with their ability to craft captivating and interactive user experiences. By harnessing the power of WebGL, developers gain unprecedented creative control, enabling them to create visually stunning graphics and animations directly on the canvas. This cutting-edge technology provides a dynamic and flexible platform, elevating graphical compositions to new heights and offering users a truly immersive experience. However, automating WebGL-based websites has posed unique challenges due to the absence of traditional DOM elements that conventional test frameworks rely on.

In this tutorial, we delve into automation and testing of WebGL/Canvas-based websites, showcasing how to utilize AskUI to seamlessly automate a WebGL-based website. By leveraging AskUI's reliance on visible screen elements, you will discover the ease with which canvas-based websites can be automated without the need for any DOM element dependency. Empower yourself to unlock the full potential of WebGL and enhance user experiences like never before proving its stability and usability with [AskUI](https://app.askui.com/workspaces).

### Google Maps

Google Maps is a powerful and widely-used web mapping service provided by Google. It allows users to explore interactive maps, satellite imagery, and street views of locations all around the world. Whether you're searching for directions, locating nearby businesses, or planning a trip, Google Maps offers an extensive array of features to assist you.

The platform's intuitive interface allows users to zoom in and out, tilt, and rotate maps effortlessly, providing a seamless navigation experience. With Google Maps, users can access real-time traffic updates, and public transportation information, and even view 360-degree street panoramas for a comprehensive understanding of their surroundings.

One of the standout features of Google Maps is its integration with WebGL/Canvas technology, enabling the display of three-dimensional buildings and terrain, offering users a visually rich and immersive experience. Whether on desktop or mobile devices, Google Maps ensures that users can access vital geographic information anytime, anywhere.

## Now let's continue with the Automation example

In this automation scenario, we will demonstrate the power of automating a WebGL-based application using [AskUI](https://app.askui.com/workspaces) in the context of Google Maps. By showcasing how automation streamlines the process of exploring routes and navigating through the 3D terrain of Google Maps, we'll highlight the enhanced user experience and time-saving benefits that come with automation.

These are the Steps we are going through:

1. Open a new tab using a Keyboard Shortcut (CMND + T) and Open Google Maps
2. Scroll out of the Map, to get an entire World view
3. Pull the Map upwards, so we can start seeing Portugal, where Lisbon is located
4. Identifying Portugal, and Clicking to zoom in further
5. Identifying Lisbon on the Screen and Zooming into it
6. Move the Mouse to the Live view Character, and Put it on Lisbon
7. Turning around in the Live view

### 1. Open a new tab using a Keyboard Shortcut (CMND + T) and Open Google Maps

```typescript
await aui.pressKey('command', 't').exec();
await aui.type('google maps').exec();
await aui.pressKey('enter').exec();
```

**Opening a New Tab in my Browser here and searching for Google Maps**

### 2. Scroll out of the Map, to get an entire World view

```typescript
await aui.scroll(5, 'down').exec();
```

**Zooming out of the Map here, in theory you could find out where I live**

### 3. Pull the Map upwards, so we can start seeing Portugal, where Lisbon is located

```typescript
await aui.moveMouseRelativelyTo(0, -200).exec();
await aui.mouseToggleDown().exec();
await aui.moveMouseRelativelyTo(0, -300).exec();
await aui.mouseToggleUp().exec();
```

**Pulling the Map up, to put the view field more into the center of the world**

### 4. Identifying Portugal, and Clicking to zoom in further

```typescript
await aui.click().text().withText('Portugal').exec();
```

**Moving the Mouse to Portugal and Click it to Zoom in to it**

### 5. Identifying Lisbon on the Screen and Zooming into it

```typescript
await aui.click().text().withText('Lisbon').exec();
```

**Identifying Lisbon and Zooming into this beautiful place**

### 6. Move the Mouse to the Live view Character, and Put it on Lisbon

```typescript
await aui.moveMouseRelativelyTo(0, -100).exec();
await aui.mouseToggleDown().exec();
await aui.moveMouseRelativelyTo(0, 200).exec();
await aui.mouseToggleUp().exec();
```

**Moving the Mouse to the 3D mannequin to drop him over Lisbon to open the 3D View**

### 7. Turning around in the Live view

```typescript
await aui.moveMouseRelativelyTo(-200, 0).exec();
```

**Pulling the View to the left to see what is going on**

## Conclusion

This article showcases how AskUI streamlines the automation of WebGL/Canvas-based websites, emphasizing efficiency in testing and validating user experience in WebGL applications. Instead of relying on selectors or tags, [AskUI](https://app.askui.com/workspaces) solely operates based on visible selectors that work on the underlying structure. This enables seamless interaction with canvas-based websites, overcoming typical challenges like clicking on non-DOM text elements, navigating toward bitmap text, and scrolling on specific bitmap text. With AskUI, even complex canvas-based user interfaces can be automated with ease, ensuring a smooth and effective automation process for your WebGL/Canvas application testing and validation.
