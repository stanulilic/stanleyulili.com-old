https://www.reddit.com/r/javascript/comments/7yki4d/explain_like_im_5_this/
https://javascript.info/global-object
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
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

https://gist.github.com/jim-clark/b9084dac07f48382703c5bf04a70f80e

Understanding this in javascript

## `this` in a nutshell

`this` is a special variable in Javascript whose value is determined by how a function is called. In technical terms, `this` refers the execution context that calls a function.

incorporate this in the post:
"it's what's on the left of the . , if there is no dot it's the window/global object"

An execution context

`this` in the a nutshell, it always points to

## How `this` in a object a method
`this`  in a method always points to the  object calling the method.

We can clearly see where `this`  points to by logging `this` in the console.

To open the console. Open a new empty tab and then press `CTRL+Shift+J` on Windows or `CTRL+Option+J` on Mac:

```javascript
var person = {
    name: 'stanley',
     sayThis: function () {
      console.log(this);
    }
}

person.sayThis() // {name: "stanley", sayThis: ƒ} 
```

As you can see on the output, `this` is pointing the `person` object which calls the `sayThis()` method.

 Every time you are in doubt of where  `this` is pointing to, always look to the left side of the dot when a method is being called, i.e `person.sayThis()`. It will tell you where `this` is pointing to.



##  `this` in global functions.
`this` in a global function and outside of any function points to the `window` object also known as global object.

Let's type `this` in the console. 

- talk about where this points in a global scope:
```javascript
function hi() {
    console.log(this);
}
hi(); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```
questions:
why does it point to window?

This in a global function points to the window object. It does this because when a function is global, it called by window object.

So the same function can be called as:
```javascript
window.hi();
```

If that not a enough, everytime you create a function in the global scope it  is added as  a window method.

You can see by yourself by opening the browser console in a new empty tab and paste the following code: 
```javascript
function hi() {
    console.log(this);
}
hi(); 
```

When you get the output:
```
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

Expand it and you will find 'function name' as a window method there.

```
Expand the window method code and paste here. If it fails take a screensho


```

So `this ` in a global function always points to the window object. There reason is that every glboal function is a window method. so whether you specify 'window.functinname' or 'functionnae', the function will be called by the window.

This was honestly missing puzzle for me for a long time. I just understood that `this` in a global function points to the window object without really understanding why. I really hope it has cleared a few things up for you.

Next we gonna learn ...

**note: remober an object is made of methods.

Notes:
One of the most confused mechanisms in JavaScript is the this key‐
word. It’s a special identifier keyword that’s automatically defined in
the scope of every function, but what exactly it refers to bedevils even
seasoned JavaScript developers