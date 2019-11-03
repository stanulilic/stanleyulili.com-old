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

To remove all of its children nodes(`li` elements). You need to first access the parent element.

```javascript
const ul = document.querySelector('ul');
```

You then create a loop that will check if the parent element has children elements. 

The loop will take a condition which will check if the first child (`parent.firstChild`) of the parent element exists. 

The first child will be removed if it's found, and the loop will stop only when the `parent.firstChild` is null(meaning it has no children).

```javascript
const ul = document.querySelector('ul');

while (ul.firstChild) {
 ul.removeChild(ul.firstChild)
}
```