
title" How modules work in Node.js"
:w

## Introduction
When you create a file in Node.js,it becomes a module. You can export the functions, classes, objects and they can imported and usec in other modules.

In this tutorial, we are going to take a deeper look of how modules work in Node.js. You are going to learn how modularization was achieved in JavaScript with IIFE. You will also learn how and  why when you create a file in Node.js, it becomes a module. We also look at what happens when you export and import a module in great detail.

When you're finished, you will a full grasp on how modules work in Node.js


## Prerequites
- basic understanding of how to create and import modules(link to tutorial)
- basic knowledge of html, css and JavaScript

## Goals
- Learn how modules are created in JavaScript
- Learn what happens when functions/ are exported
- Learn what happens whe requiring

## History of Creating Modules in JavaScript
In order to fully understand how modules work in Node.js. We need to go back to  how JavaScript in the browser work without modules and learn how developers achieved modularity in there projects. I believe this knowledge is key to understanding Node.js modules.

Prior to ES6 Modules and Node.js, Creating multiple javascript file and then link it in an html file does not create a module. Instead,  all the functions, objects or variables are added to the global namespace.

 Since they are global,  they can be accessed anywhere.

```html
  <script src="file1.js"></script>
  <script src="file2.js"></script>
  <script src="file3.js"></script>
```

Having seperate files like that in the browser does not create modules. The functions, objects or variables defined in `file1.js` are accessible in both `file2.js`, and `file.js`.

We understand this well following a practical example.


Create a directory `my_module` folder in your home directory or anywhere you want to put it.

Inside the `my_module` folder, create 
a  `lib.js` file and then type the following code:

```javascript
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

```

Let's now link the `lib.js` file in the html file.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Node Modules</title>

</head>
<body>
    
    <script src="lib.js"></script>
</body>
</html>
```
To prove that we we will be able to  access the functions defined in the `lib.js` file, create another file `main.js` and link it after the `lib.js` file in the html code.

```html
    <script src="lib.js"></script>
    <script src="main.js"></script>
```

When you link it an html file, the functions `add()` and `subtract` will added to the global scope. Since they global, we can access them  when you create another file.

Inside `main.js` file, lets try to  call the function `add()` defined in `lib.js`.

```javascript
const result = add(4, 4);
console.log(`The result is ${result}`);
```

Open `index.html` in your favourite browser and **open the browser console**. You can open the browser console on Chrome with `CTRL + Shift + I` and `Shift + CTRL + J` firefox(substitute CTRL with Command if you are on Mac)

output:
```
The result is 8
```

The console will print the result of calling `add(4, 4)`  successfully  even though the function `add()` was defined in a separate file `lib.js`. Remember the functions defined in `lib.js` were added to the global scope and that's why can access them. 

### Creating Modules with Immediately-Invoked Function Expression(IIFE)
To get around the problem of polluting the global namespace with functions. The solution was to use Immediately-Invoked Function Expression(IIFE) to encapsulate code. 

An Immediately-Invoked Function Expression is a an anomynous function.

```
(function() {
  /* */
})()
```
Inside the parentheses it has a normal function, the function is  called is called immediately with the `()` at the end: (/* function */)().
 
Let's wrap the code in the `lib.js` will with an IIFE. 

The two functions definised in the file will no longer be added to the global namespace and the code in the `main.js` will break.

```
(function () {
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
})();
```
If you refresh the `index.html` page in your browser and look into the console you should see an error.

```
main.js:1 Uncaught ReferenceError: add is not defined
    at main.js:1
(anonymous) @ main.js:1
```

This is because the IIFE prevents the functions from being added into the global namespace.  No other file or code outside the IIFE can access the two functions in the file.

We have now made `lib.js` a module. We are still not finished, we need a way to access the `add()` function in `lib.js` in the `main.js` file.

To access the `add` outside the IIFE , we will need to create an  object **outside the IIFE**. We will name it `exports` . Inside the IIFE, we will assign the `add` function a property of the object.

```javascript
const exports = {};

(function () {
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
  
  // set the function expression "add" as a property of "exports"
  exports.add = add;
  })();
```

So now, the `exports` object will be the only thing added to global namespace and it will have the `add()` function as it's property.

Let's go back to the `main.js` and modify the code. The `add()` is now a method of `exports`.
We will need to be explicit when calling the method.

```javascript
const result = exports.add(4, 4);
console.log(`The result is ${result}`);
```

Output:
```
The result is 8
```

Our now works, we have achieved modularization in our code.

With this understanding, let's now learn how to modules work in Node.js


## How modules work in Node.js
In Node.js, when you create a file, it becomes a  module. We can create modules in Node.js without having to do anything or using IIFES. 

The file `lib.js` we created it is already a module. We don't need the IIFE anymore, so let's remove it.

```javascript
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
```
It might interest you know that Node.js achieves modularity the same we did with the IIFE. In node, you don't have to create the wrapper function. Node.js adds it automatically in every file.

Our file `lib.js` will be automatically wrapped in Node.

```javascript
(function (exports, require, module, __filename, __dirname) {

   function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

});
```

The wrapper function created by Node, its similar to the IIFE and it also achieve the same thing as the IIFe(encapsulation). The only difference is that the wrapper function takes the following arguments:
 - exports
 - require
 - module
 - __filename
 - __dirname

The end goal is still the same that is to keep variables, function declarations, objects etc. private. 

Let's now look at the arguments one by one. We are going to look what at the them in the order that will make the most sense  as I don't want to be jumping all over the place when explaining:
- __filename
- __dirname
- module
- require
- exports

### __filename
This is a variable that stores the full path or the absolute path of the current module.

Given we have two modules `foo.js` and `bar.js` in the following respective locations:
- /home/stanley/Documents/foo.js
- /home/stanley/Desktop/bar.js

If we `console.log(__filename)` inside foo.js file, we get:
```
/home/stanley/Documents/foo.js
```
`console.log(__filename)` inside bar.js file, we get:
```
/home/stanley/Desktop/bar.js
```

We can see a practical example with our `lib.js` file inside the `my_module` folder.
**lib.js**
```javascript
   function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
  console.log(__filename);
```
Run the `lib.js` file with node.

```
node lib.js
```
**output**:
```
/home/stanley/my_module/lib.js
```

As we have already learned, Node.js automatically wrap the `lib.js` module with an anonymous function.

When Node is invoking the anonmymous function in `lib.js`, where it passes the absolute path of the module `lib.js` as the **fourth argument**.

**lib.js**
```javascript
(function (exports, require, module, __filename, __dirname) {
  ...
  ...
})(exports, require, module, "/home/stanley/my_module/lib.js", __dirname);

```

### __dirname
This variable stores the absolute path of the directory that contains the current module.

So if you have two modules `foo.js` and `bar.js` in the following respective locations:
- /home/stanley/Documents/foo.js
- /home/stanley/Desktop/bar.js

`console.log(__dirname)` inside `foo.js` results in:
```
/home/stanley/Documents
```

`console.log(__dirname)` inside `bar.js` results in:
```
/home/stanley/Desktop
```

So continuing with our example with  `lib.js`.

**lib.js**
```javascript
   function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
  console.log(__dirname);
```
Run the `lib.js` file with node.

```
node lib.js
```
**output**:
```
/home/stanley/my_module
```

Since we have already covered what is passed on `__filename`. When Node is invoking the anonmymous function in `lib.js` behind the scenes,  it passes the absolute path of the directory that contains `lib.js` as the **firth argument**.

**lib.js**
```javascript
(function (exports, require, module, __filename, __dirname) {
  ...
  ...
})(exports, require, module, "/home/stanley/my_module/lib.js", "/home/stanley/my_module");

```

So far, we have now covered two arguments `__filename` and `__dirname`. We are remaining with 3 of arguments, in the next section will take a look at the `module` argument.

### module

The  `module` varable is a reference is to an object that contains information about the current module. It has uselful properties that come in handy when the module is being imported in another module with `require`. 

Let's `console.log(module)` in `lib.js` module.

```
 function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

console.log(module);
```

Run `lib.js` with node.

```
node lib.js
```

Output:
```javascript
Module {
  id: '.',
  path: '/home/stanley/my_module',
  exports: {},
  parent: null,
  filename: '/home/stanley/my_module/lib.js',
  loaded: false,
  children: [],
  paths: [
    '/home/stanley/my_module/node_modules',
    '/home/stanley/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
```

We will at what some of the properties of the `module` object are doing later in the article, but for now, let's focus on the most important property that is the `exports` object. 

`module.exports` is used expose a module functinatily such as variables, objects, functions, classes, etc., to another module.

When a module requires another module, `module.exports` is returned and the module can access all the exported functiality in the imported module.

As we have seen in the previous example, `module.exports` is empty. Let's try to export the function `add` in the `lib.js` file and see what happens.

**lib.js**
```javascript
 function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
  
  module.exports = add

console.log(module);
```

output:

```
Module {
  ....
  exports: [Function: add],
  .....
```

As you can see in the output,  we have added the `add` function to `module.exports`. When lib is imported(required) in another module, `module.exports` object is what is returned and we can access the `add` function using dot notation.

In the next section, we will explore `require` which is a  second argument of the Node.js wrapper function  

### require
This is a function used to import exported functiaalities such as objects, variables, functions, etc., from another module. 


Create another file `main.js` inside  `my_module` and require the `lib.js` module.

```javascript
const lib = require('./lib');

console.log(`result is: ${lib.add(2, 3)}`);
```
Comment out or remove `console.log(module)` line in `lib.js` to avoid seeing it's output.

Run the `node main.js`.

output.
 ```
 result is: 5
```
Let's now look into detail of what happens when we require a module.

When we require a module
const lib = require('./lib');

When the `lib.js` module is required, the `module.exports` oject is returned

```
const lib = require('./lib');
console.log(lib) // { add: [Function: add] }
```
When the `module.exports` object is returned, we can then access the `add` function using dot notation.

```
lib.add(2, 3)
```



Let's take a look at some of the properties of the `module` object.
- `module.id` - it is used to identify a module. Most of the times it fully resolves to the filename absolute path. `module.id` is '`.`' when the module is the main module.  A main module is a file run directly by Node.js, e.g `node lib.js`, since we run `lib.js` file using `node` directly, as you can see on the output above, it's module.id property is '`.`'. 

`node file`:
output of lib.js on id

`node main`:
output of .id


- `module.path` resolves to the absolute path of  directory containing the module.
- `module.filename` resolves to the absolute path of filename of the module.
- `module.parent`  contains the module object of the  module that  requires another  module.
- `module.children` is an array of module objects the current executing module module has required.
- `module.loaded` is a boolean property that tells us if the module is node loading, or is in the process of loading. 
- `module.paths` is an array made up of all the paths that Node will look up to resolve a required module.

module.exports vs exports

go to the browser console

let's create module.exports:

module = {exports: {}}

exports = module.exports
exports.sayhello = func(){}

now check module.exports

https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

https://medium.com/better-programming/node-js-modules-basics-to-advanced-2464001229b6

https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it
