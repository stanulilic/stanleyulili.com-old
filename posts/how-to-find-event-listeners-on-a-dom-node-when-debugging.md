---
header:
  teaser: /images/posts/javascript-featured-image/featured-image.jpg
feature_image: /images/posts/javascript-featured-image/featured-image.jpg
featured_image_alt: featured-image
excerpt: Say you want to find all the event listeners attached to a DOM node. How do you go about it?

categories:
  - Javascript
tags:
  - javascript
title: "How to find Event Listeners on a DOM Node when Debugging"
date: "2019-11-10"
---

## Problem

Say you want to find all the event listeners attached to a DOM node. How do you go about it?

## Solution 1: Google Chrome

This solution will work only on Google Chrome or Chromium-based browsers.

We are going to use this website as an example.

Let's say you wanted to find all the event listeners attached to the search icon DOM element.

![search icon](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/search-icon.png)

Right-click on the **search icon** button and choose "inspect" to open the Chrome developer tools.

![context menu](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/context-menu.jpg)

Once the dev tools are open, switch to the "Event Listeners" tab and you will see all the event listeners bound to the element.

![event listeners tab](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/event-listeners-tab.jpg)

You can expand any event listener by clicking the right-pointing arrowhead.

When you expand an event listener and hover over the element, the "remove" button will appear. It can be used to delete the event listener.

![remove btn](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/remove-btn.jpg)

Clicking on the filename `main.min.js:6` takes you directly to the event listener callback function source by automatically switching you to the "sources" tab.

![filename](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/filename.jpg)

As you can see in the screenshot below, you have been taken to the exact location of the event listener callback function.

![unformatted code](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/unformatted-code.jpg)

We can't see the event listener code properly right now since the code is minified.

Click on the `{}` icon to format the code.

![formatted code](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/formatted-code.jpg)

## Solution 2: Firefox

Open Firefox.

Let's say you wanted to find all the event listeners attached to the search icon DOM element on this website.

![search icon](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/search-icon.png)

Right-click on the **search icon** button and choose "inspect" to open Firefox developer tools.

![context menu](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/context-menu-firefox.jpg)

The "search icon" button DOM node will be automatically highlighted in the Firefox "Inspector" tab.

![button node](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/button-node.jpg)

Click on the word "event" on the highlighted DOM node to see all the events bound to the element.

![event button](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/event-word.jpg)

Click on the right-pointing arrowhead to expand the event listener. You will be shown the source code for the event listener.

![source code firefox](/images/posts/2019-11-10-find-event-listeners-on-a-dom-node/source-code-firefox.jpg)
