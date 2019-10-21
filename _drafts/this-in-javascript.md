https://www.reddit.com/r/javascript/comments/7yki4d/explain_like_im_5_this/
https://javascript.info/global-object
## Why do we need this in javascript
## why objects method need this
## why  constructors

### where this comes in

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

## Why do we need this in javascript
For us to understand why we need `this`. We first need to learn what happens without it instead of just blindly accepting that we need `this`. 

Yes, we have heard `this` is important, But do we need it? let's first answer question as the answer might help use really understand how `this` works.

let's create a an object. It won't do much apart from just saying my name.

We won't use `this`, lets see how far we can get away without  it.

```javascript
var person = {
    name: 'stanley',
     sayName: function () {
      console.log(person.name);
    }
}

person.sayName() // stanley

```
As you can see we can value of the property name('stanley'), by typing the object name(`person`) followed by the property name(`name`), `person.name`

Great, it works. As a matter of fact, let's add another function that will print where I live:

```javascript
var person = {
    name: 'stanley',
     sayName: function () {
      console.log(person.name);
    },
    favoritePet: function () {
    console.log(person.name + ' loves dogs');
    }
}

person.sayLocation() // stanley
```

This is going very well. You know what I just had a thought, I think `user` might not be a good name after all. I think `person` would best represent the object.

I am going to rename  `user` to `person`. This means I have to rename all the references to name property from `user.name` to `person.name`. Imagine if I had more that 20 references to the name property? Imagive if I had more than one property in our project and we had hundreds of references.  It would be a very huge task renaming them all not to mention all the bugs we risk introducing.

There is a gotta be a better way. 
And there is, Come `this'. Instead of directly referencing to the property name our selfs, imagine if there was a property that could do t

###  Where this comes in
So far I like what my object is doing but I kinda feel like I should give object another name.

- explain what would have happened if this didn't exist.

## This in a function scope(global)
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