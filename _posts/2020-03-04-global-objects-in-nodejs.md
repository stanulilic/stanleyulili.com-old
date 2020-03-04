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
excerpt: In this article, you will learn how to use some of the most common and important global objects in Node.js. 

title: "Global Objects in Node.js"
---

### Introduction
Since node.js follows the modular approach. When variables, functions or objects are defined in a file. They are **local** to that file. The file is treated as a module. To use the variables defined in one file in another file. They need to be exported with the `module.exports` syntax and imported in the other file using `require(path_of_file)`.  This is the only way you can use another module's variables, objects, .etc in another module. 

Global objects in Node.js work differently. They are global and available in all modules. You do not need to export nor import them. You can use them directly anywhere in your application.

In this article, you will learn how to use some of the most common and important global objects in Node.js. 

## Prerequisites
- You should have node.js installed on your computer
- Basic command line or terminal knowledge

## Goals
We will learn how to use the following Node.js global objects.

- process
- __dirname
- __filename
- require()
- module
- URL

To easily follow this tutorial, create a folder in your home directory named `nodejs`.

```
mkdir nodejs
```

Move into the `nodejs` folder.

```
cd nodejs
```

Inside the `nodejs` directory. Create a file named `main.js`.

```
touch main.js
```

Note: touch doesn't work on Windows. You can get around that by creating the file using a text editor and saving it in the `nodejs` directory.


## process
The [process object](https://nodejs.org/api/process.html) is a global object that provides you with information about the environment your program is executing.

Some of the useful information it provides are architecture, process id, the platform, uptime, the current working directory, environmental variables and many more.

Let's take a look at some of the most commonly used properties and functions in the process object:
- `process.arch`: the property returns the operating system CPU architecture. Some of the values it returns are 'x64', 'x32` and 'ia32'.
- `process.platform`: it returns the platform or the operating system the program is executing on. Some of the examples of strings it returns are 'linux', 'win32', 'freebsd', `openbsd`.

- `process.id`: returns process id(PID) of the node process.
- `process.cwd()`: the method returns the current working directory of the program executing
- `process.chdir(directory)`: the method is used to change the current working directory

The process object comes with a lot of properties, but for sake of brevity, let's just focus on the four and use them to create a program.

Open your `main.js` and type the following.
```javascript
// print current working directory
console.log(`Starting directory: ${process.cwd()}`);

console.log(`This platform is ${process.platform}`);
console.log(`Process PID: ${process.pid}`);  
console.log(`The CPU Architecture is: ${process.arch}`);  

// change working directory to Documents
process.chdir('../Documents');   
console.log(`Ending directory: ${process.cwd()}`);
```

Now run the program. Make sure you are in `nodejs` directory.

```
node main.js
```

Output:
```
Starting directory: /home/<your username>/nodejs
This platform is linux
Process PID: 19253
The CPU Architecture is: x64
Ending directory: /home/<your username>/Documents
```

## require()
`require` is a method used to load or import local files, `JSON` and modules. 

### Import a Local Module or JSON
To import a local module or JSON, you need to use the relative path of the file.

Local Module.
```
const localModule = require('.path/filename.js');
```
JSON file.
```
const jsonData = require('.path/filename.json');
```
### Importing Modules from node_modules
To import a module from `node_modules` directory or modules bullt-in in Node.js, you need to pass the module name to the require() method.

```
// fs is a built-in module
const fileSystem = require('fs');
```


## __dirname
`__dirname` returns the path of the directory the script is executing in. It is not available in the Node.js REPL.

Remove the code in `main.js` and add the following code:
```javascript
console.log(__dirname);
```
output:
```
/home/<your username>/nodejs
```

This can come handy when reading and writing files with Node.js.

## __filename
__filename returns the absolute path of the file being executed. It is not available in the Node.js REPL.

Delete the code in `main.js` and add the following code.
```javascript
console.log(__filename);
```
output.

```
/home/<your username>/nodejs/main.js
```

## module
This global object is a reference to the current module. It contains information about the current module that CommonJs can use to figure out how to import the module.

Every time you create a file just like we did when we created `main.js`, it becomes a module.

 We can get all the information about the  `main.js` module by logging the `module`.

 ```
 console.log(module);
 ```
 Logging the `module` returns an object which contain information about the `main.js` module:
 ```
 Module {
  id: '.',
  path: '/home/<your username>/nodejs',
  exports: {},
  parent: null,
  filename: '/home/<your username>/nodejs/main.js',
  loaded: false,
  children: [],
  paths: [
    '/home/<your username>/nodejs/node_modules',
    '/home/<your username>/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
```

When Commonjs is importing the `main.js` module in another file, it looks for the `main.js` file in the paths provided by `Module.paths`.

### URL
[URL](https://nodejs.org/api/url.html#url_url) is a constructor method that is used to parse URL. It returns an object containing the parsed data.

Clear everything in the `main.js` file. We are going to parse the following URL: https://www.stanleyulili.com/articles/

```javascript
const url = new URL('https://www.stanleyulili.com/articles/');

console.log(`The url protocol: ${url.protocol}`);
console.log(`The url path : ${url.pathname}`);  
console.log(`The url hostname: ${url.hostname}`);

```

Output:
```
The url protocol: https:
The url path : /articles/
The url hostname: www.stanleyulili.com
```

##  Conclusion
In this tutorial, you learned how to work some of the most common global objects in Node.js. I hope you have been inspired and will find practical uses cases of the objects in your applications.

If you have any suggestions or insights, feel free to leave a comment below.

