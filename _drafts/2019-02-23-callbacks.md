## Introduction

A callback function is a function that is passed as an argument into another function, and it is invoked when the function that takes the callback finishes executing.

A function that accepts or take a callback as an argurment is called a **higher-order function**. This function is the one that calls the callback after it finishes executing. 

We are going to take in depth look of how callbacks work and why they are in needed.

By the end, we wil understand
- syncronous and syncronous behavior in Javascript
- Why and when callbacks are need
- how to create callbacks.

In the following sections, we are going to learn how understand about why we need callbacks, and most importantly, how to create callbacks.



## Functions Are Objects
Functions in JavaScript are first-class objects. This means functions can be treated the same way objects are treated in JavaScript.

- They can be stored in a variable, array or an object. 
- They can be passed as argument of another function.
- A function can be returned as a result of another function.

It important to understand this behaviour, as it will help in understanding callbacks work.

## syncrnous vs asysncrounos 
To understand why we need callbacks, we need to first Understand JavaScript syncronoous and asynconous behaviiour as this is key to understanding the essense of callbacks.

### Asyncronous
JavaScript is **synchronous** and single threaded. Single threaded means it can only do one task at a time. Syncnrous means code is executed one ater the other in a sequence . If there is a piece of code that might take a long time to execute, everythign stops and the remaining code must wait for that piece of code to finish.

We can  see  this synchronous behaviour with the example given below. I have modified the example from [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts),. you don't have to worry about what the function `first()` is doing, the main focus should be the executition. 

Open your browser console by pressing Control + Shift + I on chrome and Control + Shift + J on Firefox.

Paste the following code in console
```javascript

function first() {
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
    myDate = date;
  }

  console.log(myDate);
}

// execution starts here
first();
console.log('second');
console.log('third');
```

When you paste in the console, you will notice that it takes a while to get an output when you call the `first()` function.

```javascript
first(); // Sun Feb 23 2020 12:47:47 GMT+0200
```

 This is because the function does a time consuming task of calculating over 10 millions dates and then displaying an output.

 Everything is halted, and the lines below it must wait for the function to finish

When it finishes, the line after `first()` executes.

```javascript
console.log('second'); // second
```
Finally, the last line executes. 

```javascript
console.log('third'); // third
```

This behaviour  can be problematic since not all the code not all the code in an application depends on each other.

 Imagine if `console.log('second')` and `console.log('third')` were function blocks hanlding different parts of a user interface unrelated to the `first` function. With syncronous execution, the whole UI will come to a halt until the function `first` finishes. As you can imagine, this would give a horrible and a frustrasting experience for users of the application.

 ### Asynccronous

Another example where Syncronous execution model is can be problematic, is when there are functions that depends on data supplied external sources:
- Retrieving data from an API or the database
- Reading files

Retrieving data from an API since the code has to wait for response from a server. The wait time can be acouple of seconds and might vary depending on the internet speed. If there are functions, that are depending on the data to be returned from an API, in Syncronous code, they will have to wait for the response from the server before they can run, halting execution.

Let's do an example, let's take some part of the code of the previous code to simulate the delay behavior of asking data from the server thorough an API:

```javascript

function getData() {
  // ignore the data calculations, it's just there to simulate
  // an api request since retrieving data from api can take a couple of seconds
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
    myDate = date;
  }
  // pretend this is the data returned from an api 
  browsers = ['firefox', 'chrome', 'edge', 'opera'];
  return browsers;
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData();
displayData(response);


// code that has nothing to with data returned from the api
console.log('show navigation');
console.log('create div elements');
```
The `getData()` fuction executes first and returns API response
```
const response = getData(); 
```
In will return array of browsers `["firefox", "chrome", "edge", "opera"]`.

When the `getData()` finish, remember an API might take a couple of seconds,

```javascript
displayData(response);
```
`displayData()` takes the reponse(the array) as an argument and display it. It real world scenario, the function can creating HTML lists and appending them into the DOM. For simplicity sake, the function is wiill  displaing the data as is.


Finally the other other code that has nothing to do with the API reponse will then execute 

As you can see, this ansycnronous behaviour in this scenario is also not desirable. but what if there is a way to get around it? What if there is a way to put the `getData()` in the background when accessing the Api and continue with execution of the other code and run `displayData` only when `getData()` finishes executing.

Yes, there is a way. JavaScript callback can make the code asynconous.

There is a way, that **asyncronous code**. In ascyrnous code, 

But what if they
Most applications today
 don't stop there.

Most applications being built now adays 



















Now

Nowa
 To get around this problem, **asynchronous programming** 


## why do we callbacks need?
## Creating callbacks



if you don' know an api or what setimeout does, doon't worry. but just know you
## examples of functions using callbacks

## references
http://callbackhell.com/
https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous
https://guide.freecodecamp.org/javascript/callback-functions/