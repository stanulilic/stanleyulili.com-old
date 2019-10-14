Outline:
### Introduction
## What are Arrow functions?
## Arrow function no Parameter
## Arrow function one Parameter
## Arrow functions with multiple parameter
## Returning Object literals
## `this` in arrow functions
 - enclosing scope
## When to use arrow functions
## When to avoid  arrow functions

### Introduction

Arrow functions are one of the most popular features that come with ES6(ECMAScript 2015). They have proved to be a fine alternative to regular functions expressions.

## What are Arrow functions?

Arrow functions also known as "Fat Arrows" are anonymous function expressions with a concise syntax than regular functions.

Let's take a look at regular function:
```javascript

const sayName = function(name) {
  console.log("Your name is " + name);
}
```

Now, compare that with an arrow function:
```javascript
const sayName = (name) => console.log("Your name is" + name);
```

As you can see, an arrow function is more concise and it allows us to write one liners.

They also come with a lot of benefits that we are going to look into in great detail such as:
- implicit return: they can return values without using the `return` keyword
- They do not rebind the value of `this`


## Arrow function syntax with no parameters
Lets convert the regular function that add two numbers without taking any parameter into an arrow function.


Regular function:
```javascript
const add = function() {
  return 2 + 3;
}

add() // 5 is the output
```
To turn it into an arrow function, remove the `function` keyword and add a fat arrow `=>` next to the parathesis:

```javascript
const add = () => {
  return 2 + 3;
}

```
### Implict Return
An implict return is when a value is returned without using the `return` statement.

An implicit return works only  when you have *one* statement inside the `{}`.

In our previous example, we only have one statement which makes our  function a good candidate for an implicit return. 

To do an  implicit return, removing the curly braces and the `return` keyword:

```javascript
const add = () => 2 + 3;
```

Just look at how concise the syntax is.

## Arrow function syntax with one parameter
Let's modify our previous example(regular function) and give it one parameter.

Regular function:
```javascript
const add = function(x) {
  return 2 + x;
}
```

Let convert it into an arrow function:
```javascript
const add = (x) => 2 + x;
```

When we have only one parameter, we can also omit the parenthesis:

```javascript
const add = x => 2 + x;
```

## Arrow functions with multiple parameters
Continuing with our previous example, let us give our regular function two parameters.

```javascript
const add = function(x, y) {
  return x + y;
}

add(2, 3)  // output 5
```

Turn it into an Arrow function:
```javascript
const add = (x, y) => x + y;
```

When you have multiple paramaters, you need to put the paranthesis, you can remove them only when you have one parameter.


##  Object literal
Arrow functions can also return object literals. You need to wrap them inside parathesis to avoid them being treated as block code.

Regular function:
```javascript
const person = function() {
  return {age: 23,
  name: 'stanley'
  }
} 

person()  //  { }
```

Arrow function:
```javascript
const person = () => ({age: 23, name: 'stanley'});

person() // output
```

When you omit the parathesis, it will throw an error since it is treated as block code.

```javascript
const person = () => {age: 23, name: 'stanley'};

person() //  Uncaught SyntaxError: Unexpected token :
```

## Arrow functions and `this`

`this` in arrow function works different from `this` in a regular functions

If you do not understand how  `this` works in a regular function, I would you recommend you learn more about it before proceeding since it is a very important topic in JavaScript. You can learn more about `this`: [The this keyword in JavaScript, demystified](https://itnext.io/the-this-keyword-in-javascript-demystified-c389c92de26d)

An arrow function does not define `this`, instead to it looks for `this` in the enclosing scope, the same that a variable is looked for when defined inside a function.

Let's recap on what happens when we define and use a variable inside a function:
```javascript
let x = 4;

function showNumber() {
  let x = 5;
  console.log(x);
}

showNumber() // 5
```
When you call the function, it will give 5 as output because it first check for the existece of the `x` variable inside the function scope. If is found, it is used. In our example, `x` is defined in the function scope, and it is the one that being used.

Now,Lets  remove the x variable inside the function and see what happens:
```javascript
let x = 4;

function showNumber() {
  console.log(x);
}

showNumber() // 4 
```
It gives an ouput of 4, when function is called, the variable `x` is checked if it has been defined in the current scope. In our case, it hasn't. So it will then look for the `x` variable definition in the enclosing scope(global scope). It will use the x variable defined in the global scope which encloses our function, hence why the function wll print 4.

`this` in arrow functions work exactly the same way in arrow funcions. We can understand this behaviour clearly by comparing `this` in a regular function and `this` in an arrow function.

`this` in a Regular function:
```javascript
const person = {
  name: 'stanley',
  sayName: function() 
    console.log(this.name)
}

person.sayName() // stanley
```
It prints `stnaley` because `this` points to the object calling the method 'sayName()`.

Let's compare `this` in an arrow function:
```javascript
const person = {
  name: 'stanley',
  sayName: ()=> { 
    console.log(this.name)
  }
}

person.sayName() // 
```

If you run the code, you will see that no output is shown. Let's check why by logging `this`:

```javascript
const person = {
  name: 'stanley',
  sayName: ()=> { 
    console.log(this)
  }
}

person.sayName() //  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

This is pointing to the `window`, "why could this be?", you might ask.

The answer is, when you create an object, `this` is automatically defined and it  points to the window object. You do not have to take my word it. Let's see it ourselves:

```javascript
const person = {
  whatIsThis: this 
}
person.whatIsThis; // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

So continuing previous example we
```javascript
const person = {
  name: 'stanley',
  sayName: ()=> { 
    console.log(this)
  }
}
```
we called the method `person.sayName()`, it looks in the sayName() method scope the definition of `this` but is doesn't find it. It then looks in the enclosing scope which in our case is `person = {}`. It find `this` in which points to the window object and uses it.

That's why we got that output.

Let's look at a second example, you can use Codepen or Your text editor to follow along.

Create an `index.html` file and paste the following code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <a id="btn">Button</a>
    <script src="main.js"></script>
</body>
</html>
```

Now, let us set up an event listener with a regular function first:

```javascript
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  console.log(this);
})
```
Open your `index.html` file in your browser and open the browser console, 'CTRL+SHIFT+I' and then click on the link:
```javascript
// output
<a id="btn" href="#">Button</a>
```

The ouput is no surpise since `this` in a regular function points to object calling the method.

Let's constast this with by passing an arrow function into the event listener function:

```javascript
btn.addEventListener('click', () => {
  console.log(this);
})
```
When you click the link and check in the console, y

You will get the following output:
```javascript
//Output

Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

We have output because `this` is looked up in the arrow function when the event is fired but is doesn't find it. It then looks in the enclosing scope which happens to be the global scope where it will find `this` which points to the window oobject..


Let's expand our example further
```javascript
btn.addEventListener('click', function() {
  console.log(this);
  setTimeOut()
})
```



explain about exclosing scope
https://stackoverflow.com/questions/42847683/really-confused-by-enclosing-scope-of-javascript-es6-arrow-function

As you probably know, when you define a function and use a variable inside of it, it checks if the variable has been defined in its scope. If it is, it uses it! If not, it checks the enclosing scope for that variable definition. It keeps checking enclosing scopes until it finds the variable or reaches global scope. Now, function definitions that are not arrow functions define this for you, implicitly. Thus, they will never check an enclosing scope when you try to use this in their scope (because they find it in their own scope!). Arrow functions do NOT define their own this, so they go to the enclosing scope and look for it just as they would with any variable you try to use in their scope.

## When to use  arrow functions
### Array methods
Arrow function come in handy most of the times when you are using Array methods like filter, forEach, Map, etc.

Array.Map() with a regular function:
```javascript
const numbers = [1, 2, 3, 4];

numbers.map(function(num){
return num * 2;
});

```

Array.Map() with a arrow function:
```javascript
const numbers = [1, 2, 3, 4];

numbers.map(num => num * 2);

```

With an arrow function, our code is much shorter and readable.


## common use cases
stackoverlfow: https://stackoverflow.com/questions/34696686/what-is-lexical-this
25

You seem to have the correct understanding of what happens with this in an arrow function. I will offer an explanation that I think adds to the conversation and hopefully solidifies your understanding.

