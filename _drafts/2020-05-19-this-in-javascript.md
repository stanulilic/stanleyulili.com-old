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

`this` is a pre-defined special variable in Javascript. The value of `this` is determined by how a function is called. Not where it is defined. We will see what this means shortly in the article. 

The key to undestanding `this` is to understand how functions are called in JavaScript.

Functions in JavaScript are called in different ways:
- As a method on an object: `object.sayName()`
- As a global function: `sayName()`
- As a constructor method: `new Person('stanley')`
- As a callback function. A callback function is a function that is passed into another function. In example below, an anonymous function is passed into the `click` event listener method:
   ```javascript
   btn.addEventListener('click', function() {
     console(this);
   })
   ```

We will look at each scenario in great detail to understand  how the value of `this` is determined.

To follow this tutorial.  Open a new empty tab in Chrome and  press `CTRL+Shift+J` on Windows or `Command+Option+J` on Mac to open the browser console. 

Make sure you clear the console by holding `CTRL+L` on Windows or `Command+L` on Mac.

##  `this` in Global Context
In global context, the value of `this` is the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object). In the browser, the global object is the `window` object. In Node.js,  it is `global`.

Now Log the value of `this` in your console. 

```javascript
console.log(this) 
```
Output
```
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

As you can see, `this` refers to the `window` object, which is the global object in the browser.

We can confirm this further by checking if `this` equals to `window`, which ouputs `true`.
```javascript
this === window // true
```

https://developer.mozilla.org/en-US/docs/Glossary/Global_object

`this` in a global function also refers to the `window` object.
```javascript
function logThis() {
    console.log(this);
}

logThis(); 
```
Output
```
//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

You might wonder, "why does this refer to the `window` inside a global function?"

The answer to that question, you need to understand first what happens when you create a global function.

Here's the thing, when you create a global or top-level function, the function is stored as a method of the `window` object.

```javascript
Window {
  ...
  logThis: function () {
      console.log(this);
  }
...
}
```

To confirm  `logThis` is indeed a  method of `Window` object. 

Expand the `window` object in the output by clicking on the right-pointing arrowhead.

![expand window](/assets/images/posts/2020-07-10-this-in-javascript/expand-window.jpg)

All the `window` properties and methods are in alphabetic order.

You can find the `logThis()` method on properties/methods starting with the letter **l**.

![window method](/assets/images/posts/2020-07-10-this-in-javascript/window-method.jpg)

Since `logThis` is a window object. The same function can also be called as:
```javascript
window.logThis();
```
When it comes to `window` methods,they can be called  by  stating the `window` keyword or omitting the `window`. Whether you put the `window` keyword or not, the function will still be called by the `window` object.

```javascript
window.logThis === logThis
```

The same  is true for variables declared with `var`. They also become properties of the `window`.

```javascript
var name = "Stanley"
console.log(name) // stanley
console.log(window.name) // stanley
console.log(name === window.name) // true
```

Remember `this` outside functions refers to the `window` object. We can also access the variable `name` using `this`.

```javascript
console.log(this.name) // stanley
```
**Note**: Only variables declared with `var` become properties of the `window`. The variables declared with `let` or `const` do not become properties of the window.
{: .notice--warning} 

Now that we have looked at what really happens when we create variables and functions. I think it's a great time answer our question, why does this refer to the `window` inside a global function?"


The reason is that `this` refers to the current execution context. Currently we are in the global context `window`, so all the global functions will be called by `window` object and `this` will refer to `window`.


`logThis` is called by the window object, so the value of `this` is set the `Window` object.


Earlier in the article, I explained that the value of `this` depend on the how the function is called and not  where it is defined. You will understand I mean later in the article.

But for now, keep in mind that `this` in a global function refers to `window` object because when the `window` object calls the function. This happens whether the function call was implicit `logThis()` or explicit `window.logThis()`.

In strict mode, the value of `this` in a global function is `undefined`.

```javascript
'use strict'

function logThis() {
    console.log(this);
}

logThis(); 
```
`use strict` instructs browsers to execute Javascript in strict mode, you can learn more about [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) on MDN.

## `this` in a object a method

A method is a function that is a property of an object. `this`  in a method always refers to the  object calling the method.

```javascript
var person = {
    name: 'stanley',
    sayName: function () {
      console.log(this);
    }
}

person.sayName()  
```
Output:

```
// {name: "stanley", sayName: ƒ}
```

As you can see on the output, `this`  refers to the `person` object.  This is becaue the object `person` object is the one calling the method `sayMethod`.

Since `this` refers to the object calling the method. We can use it access an object's properties or methods as demonstrated in the example.

```javascript
var person = {
    name: 'stanley',
    sayName: function () {
      // this.name acesses the name property value
      console.log(this.name);
    }
}

person.sayName() // stanley
```
Every time you are in doubt of where  `this` is pointing to, always look to the left side of the dot when a method is being called. It will tell you where `this` refers to.

For example, `person.sayName()`. The value of `this` will be the `person` object because on the left side of the dot, there is the `person` object.

If there is no object at left side of the dot `sayName()`, then it must refer to `window` object.

## `this` in a function constructor
Before classes were added in JavaScript, [function constructors](https://css-tricks.com/understanding-javascript-constructors/)  were used to create multiple objects with similar properties and methods.

Function constructors are similar to regular functions but they have the  following important differences:
- The constructor's function name is  capitalized by convection to differentiate it from a regular function. 
- A counstructor function is called with the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword to create an instances of the object.

Here is an example:
```javascript
function Person(name, location) {
  this.name = name;
  this.location = location;
}

var person1 = new Person('John', 'Australia');
console.log(person1);
```
Output
```
Person {name: "John", location: "Australia"}
```
 when the `Person` constructor is called with the `new` keyword, a new instance  is created an assigned to the variable `person1`. `this` inside the `Person` consturctor is then refers to the `person1` instance.

 ```javascript
function Person(name, location) {
  person1.name = name;
  person1.location = location;
}
 ```

```
var person1 = new Person('John', 'Australia');
```
The arguments 'John' and 'Australia' are passed to the `Person` constructor behind the scenes.

```
function Person('John', 'Australia) {
  this.name = 'John';
  this.location = 'Australia;
}
```


tip: rought
Imagine it this way, when you create call the Person constructor,
imagine that this happens> inside Person during execution.
`
```
function Person(name, locaction) {
  // new person1 object is created
  const  person1 = {};
  // this 
  person1.name = name;
  person1.location = location;
  return person1
 ```

If you would imagegine object is created witht he instance name and then, where there is `this`, the newly crated object is substited there. You will be able to understand where this is pointing to.

https://www.reddit.com/r/javascript/comments/7yki4d/explain_like_im_5_this/
https://javascript.info/global-object
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
https://gist.github.com/jim-clark/b9084dac07f48382703c5bf04a70f80e
https://flaviocopes.com/javascript-this/