title: An indepth look into node modules
### introduction
Prior to [ES 6], JavaScript did not have modules. When 
When an application starts getting bigger and complex. The need to organize the code 

## Prerequites
- basic knownlegdeg of JavScript
- have node installed
To follow this tutorial, create a `nodejs` directory in your home directory.

```
mkdir nodejs
```
Get into the `nodejs` directory.

```
cd nodejs
```

Now you are all set to follow the tutorial and practice the code.
### why do we need modules

- Code reusability. Modules can be imported into any module that needs it.
- composability - search this
- organizing codebase
- isolation



## Creating modules in Node.js
Everytime you create a new, it becomes a module. You don't have to do anything.

Let's try to create a module. Type the following code and save it as `lib.js` in your `nodejs` directory.
```javascript
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }
  ```

The file `lib.js` is now a module. The two functions `add()` and `subtract` are only available in our file. They encapsulated, meaning they can not be accessed outside the file. if you try to call them in another file, you will get an error.

Inside our `node.js` folder, let's create another file `main.js`. Let's try to call the function `add()` in our file.

```javascript
const result = add(4, 4);
console.log(result)
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

As we have learned, we can't access the code from another module. In order to access it, we need to import in our file `main.js`.

Before our file `lib.js` can be imported, we need to export the function we want to be use in the `main.js`. Failure to do so, wiil result in us in still getting an error. 

Let's now export our `add()` to make in available anywhere the file `lib.js` is exported.

Go to the end of the file `lib.js` and add the following code.

```
module.exports = add
```

When exporting, you need to attach whatever you are exporting to the `module.exports`. This is **important**.

You are not limited to exporting functions. You can export variables,  objects and classes, etc.

You can also do multiple exports. To do that, you need to put whatever your exporting inside `{}`. For example, if you wanted to export all the two functions in our `lib.js` file. You would do the following: `module.exports = {add, subtract}`.

In our case, we only want to use the `add()` function, so we need to export only the function we want to use.

Now that we exported our `add` function, in the next section, we will learn how to import modules in another file..


## Importing Modules in Node.js
To import a module you just created, you need to require it at the top of the file you wanna use.


```
const moduleName = require('./filename.js');
```

It is **important** to put the `./` at the beggining of filename. without it, it won't work.

Continuing with our previous example, let's import the `lib.js` file in our `main.js` file.

```
const lib = require('./lib.js');

const result = lib.add(4, 4);
console.log(The result is: ${result});
```

Notice when calling the `add(4, 4)` function, we have to prefix it with the variable that imports the `lib.js` module.

If we run our code now, we should now get the output:

```
The result is: 8
```


Now that we have learned how to create and import modules.

Let's learn about the types of modules available in Node.js

## Types of modules in Node.js
- Local Modules
- Core Modules
- Third Party Modules.

### Local Modules
These are modules that you can create yourself to use in your application. A good example of a local module is the module `lib.js` we created and imported in this tutorial.

**importing Local modules**

To recap, to import a local module, you have to `require('./filename.js')`.

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

To import a local module, you have to use the `require()` method with the core module's name passed as the argument.

```javascript
const fileSystem = require('fs');
```

### Third Party Modules
Third party modules are modules that can be dowloaded with a package manager such as npm. These modules are usually donwoaded to the `node_modules` folder. 

You can install third party modules globally or local in  a project. 

Examples of third party modules are `express`, `mongoose`, `react`, etc.

**Importing Third Party Modules**

To import a third party module, you have to use the `require()` method that takes the third party module's name as n argument.

```javascript
const fileSystem = require('express');
```
references:

https://www.nodebeginner.org/blog/post/nodejs-tutorial-what-are-node.js-modules/
https://www.freecodecamp.org/news/require-module-in-node-js-everything-about-module-require-ccccd3ad383/
https://medium.com/better-programming/node-js-modules-basics-to-advanced-2464001229b6

https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a
https://medium.com/dev-bits/everything-i-know-about-writing-modular-javascript-applications-37c125d8eddf
