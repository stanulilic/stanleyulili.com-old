## This in a nutshell
## why objects method need this
## why  constructors

## This a global context
  - explain what this points to without fuctions - talk about console or just <>
## This in a function scope(global)
- talk about where this points in a global scope:
## This in a function a method
## This in a constructor functions
## a function method
## call() or apply() method
## bind() method
## deferences between call and bind()


Understanding this in javascript

## Introduction
One of the most important and confusing concept in JavaScript is the `this` keyword. In this article you will learn how `this` works in JavaScript. You also learn how to explicily determine the value of `this` by using `bind`, `call` and `apply` methods.

`this` is a pre-defined special variable in Javascript. The value of `this` is determined by how a function is called. 

The key to undestanding `this` is to understand how functions are called in JavaScript.

Functions in JavaScript are called in different ways:
- As a method on an object: `object.sayName()`
- As a global function: `sayName()`
- As a constructor method: `new Person('stanley')`
- As a callback function. A callback function is a function that is passed into another function. In example below, an anonymous function is passed into the `click` event listener method:
   ```javascript
   btn.click(function() {
     console(this);
   })
   ```

We will look at each scenario in great detail to understand  how the value of `this` is determined.

## `this` in a object a method

A method is a function that is a property of an object.

`this`  in a method always refers to the  object calling the method.


Open a new empty tab and then press `CTRL+Shift+J` on Windows or `CTRL+Option+J` on Mac to open the browser console. Paste the following code:

```javascript
var person = {
    name: 'stanley',
    sayName: function () {
      console.log(this);
    }
}

person.sayName() // {name: "stanley", sayName: ƒ} 
```

As you can see on the output, `this`  refers to the `person` object. 

Now that we know that `this` refers to the object calling the method. We can use it gain access to the object's properties and method as demonstrated in the example below:

```javascript
var person = {
    name: 'stanley',
    sayName: function () {
      console.log(this.name);
    }
}

person.sayName() // stanley
```
Every time you are in doubt of where  `this` is pointing to, always look to the left side of the dot when a method is being called. It will tell you where `this` refers to.

For example, `person.sayName()`. The value of `this` will be the `person` object because on the left side of the dot, there is the `person` object.



##  `this` in Global Context
`this` in a regular function and outside of any function refers to the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object). In the browser, it is the `window` object. In Node.js it is `global`.

Try to log `this` in your  browser console. 
```javascript
console.log(this) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```
As you can see, `this` refers to the `window` object.

We can confirm this by checking if `this` equals to `window`:
```javascript
this === window // true
```
`this` in a global function also refers to the `window` object.
```javascript
function sayName() {
    console.log(this);
}

sayName(); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```
You might wonder, "why does this refer to the `window` inside a a regular function"?

Here's the thing, when you create a a regular function, it becomes a method of the `window` object.

So `this` in the global function refers to the window object because it is called by the `window` object. 

The same function can be called as:
```javascript
window.sayName();
```
When it comes to `window` methods, you can call the  method by explicitly stating the `window` keyword when calling the method `window.functionName()` or omitting the `window` keyword `functionName()`. Either way, the function will still be called by the `window` object.
```javascript
window.sayName() === sayName();
```
The same thing is true for variables declared with `var`. They also become properties of the `window`.

```javascript
var name = "Stanley"
console.log(name) // stanley
console.log(window.name) // stanley
console.log(name === window.name) //
```

Remember `this` outside functions refers to the `window` object. We can also access the variable `name` using `this`.

```javascript
console.log(this.name) // stanley
```
**Note**: Only variables declared with `var` become properties of the `window`. The variables declared with `let` or `const` do not become properties of the window.
{: .notice--warning} 

Let's modify our previous function to print the name of the person from a global variable:

```javascript
var name = 'Stanley';

function sayName() {
    console.log('My name is ' + this.name);
}

sayName(); // My name is Stanley
window.sayName(); // My name is Stanley
```

Since `this` refers to the `window` object, we are able to access the value of the `name` variable since it is a `window` property.

If  by any chance you are having trouble picturing global variables and functions being properties/methods of the `window`. 

Type the following code in the console.

```javascript
var myVariable = 'Stanley';

function showThis() {
    console.log(this);
}

showThis(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …} 
```
Expand the `window` object by clicking on the the right-pointing arrowhead.

![expand window](/assets/images/posts/2019-11-12-this-in-javascript/expand-window.jpg)

All the `window` properties and methods are in alphabetic order.

You can find the `myVariable` property on properties starting with **m**.
![window variable](/assets/images/posts/2019-11-12-this-in-javascript/window-variable.jpg)

You can find the `sayThis()` method on properties/methods starting with **s**.

![window method](/assets/images/posts/2019-11-12-this-in-javascript/window-method.jpg)

I hope you can now clearly see that global varibles become `window` property and a global function becomes the `window` method.

The biggest takeaway from this is that `this` in a regular function refers to `window` object because when the function is called by the `window` object.

`this` also refers to the `window` inside built in window methods like `setTimeout()`, etc.


https://www.reddit.com/r/javascript/comments/7yki4d/explain_like_im_5_this/
https://javascript.info/global-object
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
https://gist.github.com/jim-clark/b9084dac07f48382703c5bf04a70f80e
https://flaviocopes.com/javascript-this/