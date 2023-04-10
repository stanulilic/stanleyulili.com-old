---
header:
  teaser: /images/posts/javascript-featured-image/featured-image.jpg
feature_image: /images/posts/javascript-featured-image/featured-image.jpg
featured_image_alt: featured-image
categories:
  - Javascript
tags:
  - javascript
title: "Understanding Method Chaining in JavaScript"
date: "2019-11-14"
---

### introduction

Method chaining is a technique that involves calling multiple methods on the same object in a chain-like sequence. This is made possible by returning an instance of an object in each method.

When a method is invoked, it returns an object instance. Another method is called on the instance returned by the previous method. This behavior continues until the last method call.

Method chaining has the benefit of allowing us to write clean and concise code.

Take a look at the code below:

```javascript
const listItem = new DOMElement("li");

listItem.addText("item 1");
listItem.addId("0");
listItem.addClass("items");
listItem.appendElement(ul);
```

Now, compare this the code refactored with method chaining:

```javascript
const listItem = new DOMElement("li");

listItem.addText("item 1").addId("0").addClass("items").appendElement(ul);
```

Our code is much cleaner and less repetitive.

## Basics to Method Chaining

Let's first start by creating a constructor function with a few methods.

```javascript
// grab ul element from dom
const ul = document.querySelector("ul");

function DOMElement(element) {
  this.element = document.createElement(element);
}

DOMElement.prototype.addText = function (text) {
  this.element.textContent = text;
};

DOMElement.prototype.addId = function (id) {
  this.element.id = id;
};

DOMElement.prototype.addClass = function (className) {
  this.element.classList.add(className);
};

DOMElement.prototype.removeClass = function (className) {
  this.element.classList.remove(className);
};

DOMElement.prototype.appendElement = function (parent) {
  parent.appendChild(this.element);
};
```

In our example above, we have created a constructor `DOMElement` with an `element` property to create a DOM element dynamically.

The constructor has the following methods:

- `addText(text)`: sets the textContent property to the given argument.
- `addId(id)`: sets the element id to the given argument
- `addClass(className)`: sets the class attribute to the given argument
- `removeClass(className)`: removes the given class name from the element
- `appendElement(element)`: appends the dynamically created element to the given argument

Now, let's create an instance of the `DOMElement` and call its methods without method chaining.

```javascript
const listItem = new DOMElement("li");
listItem.addText("item 1");
listItem.addId("0");
listItem.addClass("items");
listItem.appendElement(ul);

// Output on the dom
// <li id="0" class="items">item 1</li>
```

Great, our code works fine. But do you notice how many times we are repeating `listItem` and the semicolons? With method chaining, we can get rid of the repetitions. So let's try that.

```javascript
const listItem = new DOMElement("li");

listItem.addText("item 1").addId("0").addClass("items").appendElement(ul);

// ERROR
// Uncaught TypeError: Cannot read property 'addId' of undefined
```

Our code is no longer working. Let's investigate further and see what is going on.

```javascript
const listItem = new DOMElement("li");

const returnedValue = listItem.addText("item 1");
console.log(returnedValue); // undefined
```

The method `addText()` does not return any thing. That is why we get the `undefined` output. This is also true for all the other methods in our constructor `DOMelement`.

For method chaining to work, a method must return an instance of the object, so that the next method is called by that instance.

Since our methods do not return an instance, it's impossible to chaining the method calls.

## Implementing Method Chaining

For method chaining to work, we must return `this` at the end of each method. The `this` keyword refers to the instance of the object `listItem`.

Let's modify our methods by adding `return this` to the end of each method.

```javascript
// get ul element from the dom
const ul = document.querySelector("ul");

function DOMElement(element) {
  this.element = document.createElement(element);
}

DOMElement.prototype.addText = function (text) {
  this.element.textContent = text;
  return this;
};

DOMElement.prototype.addId = function (id) {
  this.element.id = id;
  return this;
};

DOMElement.prototype.addClass = function (className) {
  this.element.classList.add(className);
  return this;
};

DOMElement.prototype.removeClass = function (className) {
  this.element.classList.remove(className);
  return this;
};

DOMElement.prototype.appendElement = function (parent) {
  parent.appendChild(this.element);
  // you do not need to return this since
  // this is the last method
};
```

Now, let's try to see what is returned when a method is called.

```javascript
const listItem = new DOMElement("li");

const returnedValue = listItem.addText("item 1");
console.log(returnedValue); // DOMElement {element: li}
```

As you can see, the `addText` method is now returning an instance of the object. Let's now try to chain the method calls again and see what happens.

```javascript
const listItem = new DOMElement("li");

listItem.addText("item 1").addId("0").addClass("items").appendElement(ul);

// Output on the dom
// <li id="0" class="items">item 1</li>
```

Now the code works, we can chain the methods successfully.

## Method Chaining in ECMAScript 2015(ES6)

We can rewrite our previous code by using ES6 classes instead of the constructor function.

```javascript
// grab ul element from dom
const ul = document.querySelector("ul");

class DOMElement {
  constructor(element) {
    this.element = document.createElement(element);
  }

  addText(text) {
    this.element.textContent = text;
    return this;
  }

  addId(id) {
    this.element.id = id;
    return this;
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }

  appendElement(parent) {
    parent.appendChild(this.element);
  }
}

const listItem = new DOMElement("li");

listItem.addText("item 1").addId("0").addClass("items").appendElement(ul);

// Output on the dom
// <li id="0" class="items">item 1</li>
```

## conclusion

In this article, we went over the basics of how to implement method chaining in JavaScript. I hope you have now understood what is needed to implement method chaining.

If you have any insights or questions, feel free to leave a comment.

### References

- [https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)

- [https://pawelgrzybek.com/fluent-interfaces-explained/](https://pawelgrzybek.com/fluent-interfaces-explained/)

- [https://medium.com/simply-web-development/how-to-create-fluent-interfaces-the-easy-way-with-vanilla-javascript-2a61b6558f01](https://medium.com/simply-web-development/how-to-create-fluent-interfaces-the-easy-way-with-vanilla-javascript-2a61b6558f01)
