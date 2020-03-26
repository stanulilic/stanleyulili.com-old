---
header:
 teaser: /assets/images/posts/node-featured-image/featured-image.jpg
feature_image: /assets/images/posts/node-featured-image/featured-image.jpg
featured_image_alt: featured-image
categories:
 - node
tags:
 - node.js
 - javascript
excerpt: In this tutorial, you will learn how to create Node.js modules. You will learn how to include functions defined in one file and use them in another file.
title: "Node.js Modules: Learn how to Import and use Functions from Another File"
---

### introduction

In Nodie.js, any file that consists of JavaScript code in a file ending with `.js` is a module. A module can contain definitions of functions, classes, objects, or variables that can be referenced or used in another Javascript file.

When your application starts getting larger, maintaining a single file becomes a difficult task.  it is easy to get lost in the codebase and lose track of what a particular piece of code is doing. The problem get's worse when you are debugging code.

To make it easier to maintain, reuse and organize code, you need to split the code into multiple files. This process is called modularization. Each module contains functions or classes that handle a specific functionality. 

Functions in one module can be imported and called in other modules saving you from having to copy function definitions into the other files. A module can be edited or debugged separately making it easier for you to add or remove new features.

In this tutorial, you will learn how to create Node.js modules. You will learn how to include functions defined in one file and use them in another file. Some of the topics we will explore are:

- Creating and Exporting a module
- Importing a Module
- Exporting multiple functions and values from a module
- Importing a module from a directory
- Types of modules

To follow this tutorial, create a `nodejs` directory in your home directory or anywhere you want.

```bash
mkdir nodejs
```
Get into the `nodejs` directory.

```bash
cd nodejs
```

Now you are all set to follow the tutorial and practice the code.


## Creating and Exporting a Module
### Creating a Module
Modules are created in Node.js by creating a JavaScript file. Every time you create a new file with `.js` extension, it becomes a module. 

Let's write our first module. We will start by creating two functions to do simple calculations. 

Type the following code and save it as `lib.js` inside your `nodejs` directory.

**lib.js**
```javascript
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
```

The file `lib.js` is now a module. The two functions `add()` and `subtract` are only available in our file. They encapsulated, meaning they can not be accessed outside the file. if you try to call them in another file, you will get an error.

Inside the `node.js` folder. Create another file `main.js`. Let's try to call the function `add()` in our file.

**main.js**
```javascript
const result = add(4, 4);
console.log(result);
```

Run the file with node.js.

```
node main.js
```

You will get an error.
```
ReferenceError: add is not defined
```

### Exporting a module

As we have learned in the previous example, we can't access the functions defined in one module in another module by default. To access the module functions, we have to export the functions and import them in the file we want to call the functions.

Lets export the `add()` function in the `lib.js` file.

Go to the end of the file `lib.js` and add `module.exports = { add }`.

**lib.js**
```javascript
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// add the code below
module.exports = { add }
```

What's happening now in our `lib.js` file is that we have added the `add()` function to `module.exports` object. Adding the function to `module.exports` will make it available in any file that imports the`lib.js` module.

You are not limited to exporting functions. You can export variables,  objects, and classes, etc.

## Importing a module in Node.js
To include functions defined in another file in Node.js, we need to import the module. we will use the `require` keyword at the top of the file.

 The result of `require`  is then stored in a variable which is used to invoke the functions using the dot notation.

To see that in action, let's import the `lib.js` module by requiring it inside the  `main.js` file and invoke the `add()` function with dot notation.

**main.js**
```javascript
const lib = require('./lib.js');

const result = lib.add(4, 4);
console.log(`The result is: ${result}`);
```

If we run our code now, we should  get the following output:

```
The result is: 8
```

What's happening in the code above is that we are importing the `lib.js` module. 
```javascript
const lib = require('./lib.js');
```
When importing the file `lib.js`, it is important to prefix it with `./` inside `require`. This tells Node.js  that we are importing a local module(a  module created by yourself such as the `lib.js` module)

When `require` imports the module, it returns an object with `add()` as it's a method and stores it in the `lib` variable.

```javascript
const lib = require('./lib.js');
console.log(lib);
```
Output:
```
{ add: [Function: add] }
```
The object returned by `require` is the  `module.exports` object from the module `lib.js` were we exported only one method `add()`. 

Since an object is what is returned by `require`, to access the `add()` function, we used dot notation by prefixing the object name(`lib`) to call the `add(4, 4)` function and then store the result of the function in the `result` variable. 

```javascript
const result = lib.add(4, 4);
```


## Exporting Multiple Functions and Values

There are a couple of ways to export multiple functions and values with `module.exports`.


**lib.js**
```javascript
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const num = 33;

module.exports = { add, subtract, num };

```

In `main.js` file.
```javascript
const lib = require('./lib.js');

console.log(lib.add(4, 4)); // 8
console.log(lib.subtract(8, 4)); // 4
console.log(lib.num);
```

You can also use the [destructuring syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to unpack the properties of the object returned by `require` and store them in variables.

```javascript
const { add, subtract, num } = require('./lib.js');

console.log(add(4, 4)); // 8
console.log(subtract(8, 4)); // 4
console.log(num); // 33

```

Another way to export multiple functions is to define the functions inside  `module.exports` object. 

**lib.js**
```javascript
module.exports = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },
  num: 33,
};
```
You can also define each function indepedently as a method of `module.exports`.

**lib.js**
```javascript
module.exports.add = function (x, y) {
  return x + y;
};

module.exports.subtract = function (x, y) {
  return x - y;
};

module.exports.num = 33;
```

## Import a module from a directory

Inside the project directory, create a directory `maths` and move the `lib.js` file into it.
```
├── main.js
└── maths
    └── lib.js

```

To import `lib.js` file inside the directory, require `lib.js` by prefixing it with the directory name.

In `main.js` file.
```javascript
const lib = require('./maths/lib.js');

console.log(lib.add(4, 4)); // 8
console.log(lib.subtract(8, 4)); // 4
console.log(lib.num);  // 33
```


## Types of modules in Node.js
- Local Modules
- Core Modules
- Third-Party Modules.

### Local Modules
These are modules that you can create yourself and use them in your application. A good example of a local module is the module `lib.js` we created and imported in the `main.js` file in this tutorial.

**importing Local modules**

To recap, to import a local module, you have to `require('./filename.js')` or `require('./path/filename.js')`.

```
const moduleName = require('./filename.js');
```

You don't have to add the ".js" extension, Node.js can still load your local module without it.

```
const moduleName = require('./filename');
```

### Core Modules
These are modules that come with Node.js by default. You do not have to download them in your project.

Some of the most popular and frequently used core modules are `fs`, `os`, `path`, etc.


**Importing core modules**

To import a core module, you have to use the `require()` method with the core module's name passed as the argument.

```javascript
const fileSystem = require('fs');
```

### Third-Party Modules
Third-party modules are modules that are downloaded with a package manager such as npm. These modules are usually stored in the `node_modules` folder. 

You can install third-party modules globally or locally in your project. 

Examples of third party modules are `express`, `mongoose`, `react`, etc.

**Importing Third-Party Modules**

To import a third-party module, you have to use the `require()` method that takes the third-party module's name as an argument.

```javascript
const fileSystem = require('express');
```
## Conclusion
In this tutorial, we covered how to create and export a module, import a module and went over different ways to export multiple functions and values, and also different types of modules in Node.js.

If you have any insights or suggestions, feel free to leave a comment.