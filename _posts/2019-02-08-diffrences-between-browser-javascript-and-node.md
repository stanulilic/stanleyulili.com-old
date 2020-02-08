With the coming in of Node.js JavaScript exploded as it could give developers the convinience of  creating full stack web applications with the same language.


Though JavaScript and Node.js use JavaScript. Building web applications meant for the browser  is very diffent from build Node.js applications.


In this article, we will take a look at the  some of differences between JavaScript and Node.js.


## Utility
JavaScript is mostly used to client interactive client-side applications. For example, it can create apps validate forms, make dynamic changes on an app without needing to refresh the page.

Node.js on the other hand is used mostly to build applications or scripts that run in the backend and they can access tools like  databases.

## Browser and Web APIs.
JavaScript in a browser environment can access browser and web APIs such as the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), Window, Geolocation, History, XMLHttpRequest, etc.

Node.js does not have access to the browser and web APIs such as the DOM, Window. However, it does have [global](https://nodejs.org/api/globals.html#globals_global) which is  like `window` object that you can attach global things to it.


## Fragmentation
In JavaScript, you lose control of the environments since a web app in the browser can be access by different web browser, some modern and some old. Making sure that the app works on all the browsers can be a difficut tasks. In addition  JavaScript is constantly elvolving fast and browsers adapt slow. To ensure cross browser support, you have to transpile newer versions of JavaScript such ECMAScript 6,7,8,9 to older JavaScript.

In Node.js you have control of the environment. You decide to use version of Node you want  use newer JavaScript features in ECMAScript without worrying about browser support or needing to transpile back the code to previous version of JavaScript.


### Modules
JavaSript uses [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) which still being implemented. It uses the `import` syntax for the time being.

Node.js uses [CommonJs module System](https://nodejs.org/docs/latest/api/modules.html). It uses the `require` syntax.

### File System
JavaScript in the browser can not access the file system. 

Node.js can access the file system and it able to read and write files. Node is able  access the file system through using the [fs](https://nodejs.org/api/fs.html) module.