### Introduction
Since node.js follows the modular approach. When variables, functions or objects are defined in a file. They are **local** to that file. The file is treated as a module. To use the variables defined in one file in another file. They need to be exported with the `module.exports` syntax and imported in the other file using `require(path_of_file)`.  This is  only how  you can use another module's variables, objects, .etc in another module. 

Global objects in Node.js work in a different way. They are global and avaible in all modules. You do not need to import them using `require`, you can use them directly anywhere in your application.


Node.js comes with global objects. The objects are global and are availalbe in all modules. In simple terms, you can use these objects anywhere in your application without having to including them.

In this article, you will learn how to use global objects in Node.js. You will also learn about variables that are not true globals but behaves like globals. These variables exist only in the scope of modules.

## Prerequites
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

To easily follow these tutorial, create a folder in your home directory named `nodejs`.

```
mkdir nodejs
```

Go into the directly `nodejs`.

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

Some of the uselful information it provides are architecuture, process id, the platform, uptime, the current working directory, environmental variables and many more.

Let's take a look at some of the most commonly used properites and functions in the process object:
- `process.arch`: the property returns the operating system CPU architecture. Some of the values it returns are 'x64', 'x32` and 'ia32'.
- `process.platform`: the returns the platform or the operating system the program is executing on. Some of the examples of strings it returns are 'linux', 'win32', 'freebsd', `openbsd`.

- `process.id`: returns process id(PID) of the node process.
- `process.cwd()`: the method returns the current working directory of the program executing
- `process.chdir(directory)`: the method is used to change the current working directory

The process object comes with a lot of properties, but for sake of brevity, let's just focus on the four and use them to create  a program.

Open your `main.js` and type the following.
```javascript
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
Ending directory: /home/stanley/Documents
```

## require()
`require` is a method used to load or import local files, `JSON` and modules. 

### Import a Local Module or JSON
To import a local module or JSON, you need to the use the relative path of file.

Local Module.
```
const localModule = require('.path/localModule');
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
`__dirname` returns the path of directory the script is executing in. It is not available in the Node.js REPL.

delete the code in `main.js` and add the following code:
```javascript
console.log(__dirname);
```
output:
```
/home/<your username>/nodejs
```

This can come handy when reading and writing files with Node.js.

## __filename
__filename returns the absolute path of the file being executed. It not availble in the Node.js REPL.

Delete the code in `main.js` and add the following code.
```javascript
console.log(__filename);
```
output.

```
/home/<your username>/nodejs/main.js
```

## module
----Needs more research --

This this is  reference to the current module. It contains information about the current module that CommonJs can use to figure out how to import it the module.

Everytime you create a file just we did when we created `main.js`, it becomes a module.

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

When commonjs is importing the `main.js` module, it looks for the `main.js` file in the paths provided by `Module.paths`.

### URL
[URL](https://nodejs.org/api/url.html#url_url) is a constructor method that is used to parse url. It returns an object containing the parsed data.

Clear everything in the `main.js` file. We are going to parse the following url: https://www.stanleyulili.com/articles/

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

colusuion

refrences:
https://blog.eduonix.com/web-programming-tutorials/learn-work-global-objects-nodejs/
https://www.javatpoint.com/nodejs-global-objects
https://www.w3resource.com/node.js/nodejs-global-object.php
https://nodejs.org/api/globals.html#globals_process
tutorialspoint.com/nodejs/nodejs_process.htm
https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm