---
header:
  teaser: /assets/images/posts/javascript-featured-image/featured-image.jpg
feature_image: /assets/images/posts/javascript-featured-image/featured-image.jpg
featured_image_alt: featured-image
excerpt: Here's what you need to do to remove all child elements of a DOM node in Javascript

categories:
  - Javascript
tags:
  - javascript
title: "How to Remove all Child Elements of a DOM node in JavaScript"
last_modified_at: 2020-12-02
---

Here's what you need to do to remove all child elements of a DOM node in Javascript.

Assuming you have a `ul` DOM element with list items:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

To remove all the children nodes(`li`) for the `ul` element(parent element). First, grab the parent element.

```javascript
const ul = document.querySelector("ul");
```

Next, create a loop that checks if the parent node still has children nodes and removes them until there's no children left.

```javascript
const ul = document.querySelector("ul");

while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}
```

Now Let's break it down.

The loop takes a condition (`parent.firstChild`) that checks if the first child exists.

```
while (ul.firstChild)
```

On each iteration, the loop removes the first child if the condition is true.

```
  ul.removeChild(ul.firstChild);
```

The loop stops once it cannot find the first child anymore, and that is when the ` ul.removeChild` has removed all the children nodes.

I hope you find this post helpful. If you have any tips or questions, leave a comment below.

Thanks for reading.
