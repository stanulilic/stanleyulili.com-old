---
header:
  teaser: /assets/images/posts/2019-10-17-introduction-to-arrow-functions/featured-image.jpg
feature_image: /assets/images/posts/2019-10-17-introduction-to-arrow-functions/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this tutorial, you will learn how to write arrow functions, how `this` works in arrow functions, and when to use or avoid arrow functions.

categories:
  - Javascript
tags:
  - javascript
toc: true;
toc_sticky: true
toc_label: "Table of Contents"
title: "An Introduction to Arrow Functions and Lexical 'this'"
---

## Introduction

When ECMAScript(ES6) was released, it introduced a lot of features that JavaScript developers loved. One of the most popular ES6 features is **Arrow functions**. Arrow functions provide an alternative concise syntax to the regular function expressions.

In this tutorial, you will learn how to write arrow functions, how `this` works in arrow functions, and when to use or avoid arrow functions.

## Prerequisites
To follow this tutorial, you will need:
Familiarity with JavaScript [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
Knowledge of how [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword works.
Familiarity with [object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).

## What are Arrow Functions?

Arrow functions - also known as "Fat Arrows" are anonymous functions with a concise syntax.

Let's take a look at a regular function:

```javascript
const sayName = function (name) {
  console.log("Your name is " + name);
};
```

Now, compare that with an arrow function:

```javascript
const sayName = (name) => console.log("Your name is" + name);
```

As you can see, an arrow function is more concise and it allows us to write readable one-liners.

They also come with a lot of benefits that we are going to look into in great detail such as:

- Implicit return - they can return values without using the `return` keyword.
- They do not rebind the value of `this.`

In the coming sections, we will learn how to write arrow functions. You can try the code samples in the Chrome browser console.

To open the console. Open a new empty tab and then press `CTRL+Shift+J` on Windows or `Command+Shift+J` on Mac.


## Arrow Function Syntax with no Parameters

In this section, you will learn how to define an arrow function that doesn't take parameters.

We will use an example of a regular function that returns the sum of two numbers.

Regular function:

```javascript
var add = function () {
  return 2 + 3;
};

add(); // 5
```

To turn it into an arrow function, remove the `function` keyword and add a fat arrow `=>` next to the _empty_ parentheses:

```javascript
var add = () => {
  return 2 + 3;
};

add(); // 5
```

### Implicit Return

An implicit return is when a function returns a value without using the `return` statement.

An implicit return works only when you have  **one statement** inside the curly braces.

Our function has only one statement which makes it a good candidate for an implicit return.

To do an implicit return, removing the curly braces and the `return` keyword:

```javascript
var add = () => 2 + 3;

add(); // 5
```

Look at how concise the syntax is! now that we know how to define a function without any parameters, in the next section you will learn how to define a parameter with one parameter.

## Arrow Function with One Parameter
We are going to define an arrow function that takes a parameter.

We will change our previous example(regular function), and pass it one parameter.

Regular function:

```javascript
var add = function (x) {
  return 2 + x;
};

add(3); // 5
```

The process of turning the regular function into an arrow function is similar to the arrow functions we defined earlier that take no parameters. The only difference is that it takes one parameter instead of having empty parentheses.

Arrow function with one parameter.
```javascript
var add = (x) => {
  return 2 + x;
};

add(3); // 5
```

Arrow function with an implicit return .
```javascript
var add = (x) => 2 + x;

add(3); // 5
```

When you have **only one** parameter, you can also omit the parentheses:

```javascript
var add = x => 2 + x;

add(3); // 5
```

## Arrow Functions with Multiple Parameters
Arrow functions can also take multiple parameters like regular functions.

Regular function two parameters.

Regular function:

```javascript
var add = function (x, y) {
  return x + y;
};

add(2, 3); // 5
```

Arrow function:

```javascript
var add = (x, y) => x + y;

add(2, 3); // 5
```

When a function has multiple parameters, you **must put the parentheses**. You can remove them only when you have one parameter.

## Object literal

Arrow functions can also return object literals.  The syntax is a bit different from what we have seen so far.   You return an object by wrapping it inside parentheses.

Regular function:

```javascript
var person = function () {
  return {
    age: 23,
    name: "stanley",
  };
};

person(); // {age: 23, name: "stanley"}
```

To turn it into an arrow function, remove the `function` keyword and add a fat arrow after `()` as we have done so far. Remove the `return` keyword and wrap the object inside the parentheses. 

```javascript
var person = () => ({ age: 23, name: "stanley" });

person(); // age: 23, name: "stanley"}
```

When you omit the parentheses, it will throw an error.

```javascript
var person = () => {age: 23, name: 'stanley'};

person() // Uncaught SyntaxError: Unexpected token :
```
This is because the interpreter thinks the curly braces are the function's body, and the code inside the curly braces are statements.


## Arrow functions and lexical `this`

Now we are going to learn how `this` works in an arrow function.

`this`  works differently in an arrow function from `this` in a regular function.

If you do not understand how `this` works in a regular function, I would recommend you learn more about it before proceeding since it is a very important topic in JavaScript.

You can learn more about `this` from MDN: [ this - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

A quick refresher:

- `this` outside any function points to the global object/window object. You can see that by typing `this` or `this === window` in the console.

- Regular functions in an object define their own `this`, and the value of `this' always points to the object calling the method.

Let me now explain how `this` works in arrow functions.

An arrow function does not define it's own `this`, but it looks for `this` in the current scope and the enclosing scopes the same way that a variable is looked up when it is being used inside a function.

Let's recap on what happens when we define and use a variable inside a function:

```javascript
var x = 4;

function showNumber() {
  var x = 5;
  console.log(x);
}

showNumber(); // 5
```

When you call the function, it will log 5 as the output because it first checks for the existence of the `x` variable inside the function scope. If the variable definition is found inside the function scope, it is used. In our example, `x` is defined in the function scope, and it is the one that is used.

Now let us remove the x variable inside the function and see what happens:

```javascript
var x = 4;

function showNumber() {
  console.log(x);
}

showNumber(); // 4
```

It shows 4 as the output. When the function is called, the variable `x` is checked if it has been defined in the function scope first. In our case, it hasn't. So it will then look for the `x` variable definition in the enclosing scope which turns out to be the global scope. It will use the `x` variable defined in the global scope which encloses our function, hence why the function logs 4.

What you should take away from these two examples is how the variable `x` is looked up.

With that knowledge, let's learn how `this` works in arrow functions. As I explained earlier, the arrow functions do not define `this`, it looks for `this`  in the current scope and the enclosing scopes until it is found. This happens the same way a variable is looked up.

We can see how this behavior properly by using practical examples. We will compare`this` in a regular function and `this` in an arrow function.

`this` in a Regular function:

```javascript
var person = {
  name: "stanley",
  sayName: function () {
    console.log(this.name);
  },
};

person.sayName(); // stanley
```

When the method `sayName()` is invoked, it logs `stanley` because `this` points to the object calling the method 'sayName()` which is`person`.

Compare `this` in an arrow function:

```javascript
var person = {
  name: "stanley",
  sayName: () => {
    console.log(this.name);
  },
};

person.sayName(); //
```

If you run the code, you will see that no output is shown. Let's check why by logging `this` into the console from the arrow function:

```javascript
var person = {
  name: "stanley",
  sayName: () => {
    console.log(this);
  },
};

person.sayName(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

This is pointing to the `window` object, "why could this be?", you might ask.

The answer is when you create an object, `this` is automatically defined and it points to the window object. You do not have to take my word. Let's see it ourselves:

```javascript
var person = {
  whatIsThis: this,
};
person.whatIsThis; // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

As you can see `this` inside the object is pointing to the global object/window object.

So continuing with the previous example:

```javascript
var person = {
  name: "stanley",
  sayName: () => {
    console.log(this);
  },
};
person.sayName();
```

When we called the method `sayName()`, it checks in the sayName() method scope if `this` has been defined but it doesn't find it(remember arrow functions do not define `this`).

It then looks in the enclosing scope which in our case is the `person` object. It finds `this` there which has been defined by the object and it points to the window object, and it uses it and stops looking.

That's why we got the output showing `this` points to the `window` object.

Let's look at a **second example**, you can use Codepen or your favorite text editor to follow along.

Create an `index.html` file and paste the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>this - javascript</title>
  </head>
  <body>
    <a id="btn" href="#">Click Me</a>
    <script src="main.js"></script>
  </body>
</html>
```

Now, let us set up an event listener with a regular function first.

Create 'main.js' and put the following code:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log(this);
});
```

Open your `index.html` file in your browser and open the browser console and then click on the link:

```javascript
// output
<a id="btn" href="#">
  Click Me
</a>
```

When the link has been clicked, the regular function is called and `this` points to the element the event listener is attached to.

**Info**: Remember the value of `this` in a **regular** function depends on how the function is called.
{: .notice--info}

Let's now see what happens we pass an arrow function into the event listener:

```javascript
btn.addEventListener("click", () => {
  console.log(this);
});
```

When you click on the link and check in the browser console, you will get the following output:

```javascript

Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

We have the `window` object as the output because `this` is looked in the arrow function when the event is fired but it is not found. It then looks in the enclosing scope which happens to be the global scope where it will find `this` which points to the window object.

Let's modify our previous regular function and add a setTimeout method inside.

A `setTimeout()` is a window method that calls a function once after a specified number of milliseconds.

```javascript
btn.addEventListener("click", function () {
  setTimeout(function () {
    console.log(this);
  }, 1000);
});
```

Can you guess what `this` going to be?

Well, here is output:

```
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

Remember, setTimeout is a window method. So `this` points to the window object since the `setTimeout` method is called by the window.

The previous example could also be rewritten like this and it will show the same output:

```javascript
btn.addEventListener("click", function () {
  window.setTimeout(function () {
    console.log(this);
  }, 1000);
});
```

Perhaps in this example, you can see why `this` is pointing to the window object. Notice how the `setTimeout` method is being called by the window object? Like I said before, `setTimeout` is a window object. So even when you omit `window` when calling the `setTimeout` method like in the previous example, it will still be called by the window object.

Lets now convert the `setTimeout` regular function into the an arrow function. We are going to leave the regular function in the event listener as is, so that `this` points to the element that was clicked:

```javascript
btn.addEventListener("click", function () {
  setTimeOut(() => {
    console.log(this);
  }, 1000);
});
```

Can you guess the output of `this` in the setTimeout method based on what we have learned? Think about it for a moment.

If you guessed it correctly, the output will be the element that was clicked.

```html
<a id="btn" href="#">Click Me</a>
```

When the `setTimeout()` method is called, the arrow function looks for `this` in its function scope but it doesn't find. It then look for `this` in the enclosing scope(the event listener) where it finds it and uses it.

The value of `this` is the element that was clicked, we already looked into why this was the case in the previous examples.

I hope you have now understood how `this` works in the arrow functions. Next, we will look at when to use arrow functions.

## When to use arrow functions

Arrow functions can be effectively used in callbacks(functions passed into other functions)

The following are some of the ways that arrow functions can come in handy.

### Array methods

Arrow functions are frequently used with Array methods like filter, forEach, Map, etc. because of their conciseness.

Array.Map() with a regular function:

```javascript
var numbers = [1, 2, 3, 4];

numbers.map(function (num) {
  return num * 2;
});

// [2, 4, 6, 8]
```

Array.Map() with a arrow function:

```javascript
var numbers = [1, 2, 3, 4];

numbers.map((num) => num * 2);

// [2, 4, 6, 8]
```

### Promises and Fetch API

[Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) which implements a promise takes callback functions which can greatly benefit from arrow function concise syntax.

Lets see the Fetch API with a regular function:

```javascript
const url = "url comes here";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (e) {
    console.log(error);
  });
```

Now, let's compare it with an arrow function:

```javascript
const url = "url comes here";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

With an arrow function, our code is much shorter and readable.

## When to avoid arrow functions

### When you need to use `this` in an event listener

We have already looked at what happens when you use an arrow function in an event listener, `this` points to the window object.

So in cases where you need to to use `this` in an event listener, it is best to use a regular function:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  this.innerHTML = "you clicked me";
});
```

On a side note, you can still access the element that an event listener is attached to when you pass an event object as a parameter. You can get the target element using `event.target`:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  target = event.target;
  target.innerHTML = "you clicked me";
});
```

### When creating a method for an object

We also looked at what happens when you create a method with an arrow function, `this` points to window object instead of the object calling the method.

So it's best to use a regular function when creating a method for an object.

```javascript
const person = {
 name: 'stanley',
 sayName: function()
 console.log(this.name)
}

person.sayName() // stanley
```

## Conclusion

In this article, you have learned how to write arrow functions. I hope you now have a firm grasp on how `this` works in the arrow function and when to use or avoid arrow functions.

Thanks for reading this article, if you have any feedback feel free to leave a comment.
