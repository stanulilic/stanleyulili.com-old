
## Introduction
When you create a file in Node.js,it becomes a module. You can export the functions, classes, objects and they can imported and usec in other modules.

In this tutorial, we are going to take a deeper look of how modules work in Node.js. You are going to learn how modularization was achieved in JavaScript with IIFE. You will also learn how and  why when you create a file in Node.js, it becomes a module. We also look at what happens when you export and import a module in great detail.

When you're finished, you will a full grasp on how modules work in Node.js


## Prerequites
- basic understanding of how to create and import modules(link to tutorial)
- basic knowledge of html, css and JavaScript

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


Create a directory `node.js` folder in your home directory or anywhere you want to put it.

Inside the `node.js` folder, create 
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

To access the `add` outside the IIFE , we will need to create an  object **outside the IIFE**. We will name it `exports` . Inside the IIFE, we will assign the `add` function as a property of the object we will create.

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
It might interest you know that Node.js achieves modularity the same we did with the IIFE. In node, you don't have to create the wrapper function yourself. Node.js adds it automatically in every file on run time.

For example, our file `lib.js` will be automatically wrapped in Node.

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

As you see, The wrapper function created by Node is similar to the IIFE.  The only difference is that the wrapper function takes the following parameters:
 - exports
 - require
 - module
 - __filename
 - __dirname

Let's take 
### Exports

This a

https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
### Exports
