"understanding aysncronous programmming and callbaks in javascript"
"Introduction to asyncronous programming and callbacks in JavaScript"
## Introduction

Javascript callbacks are one of the most important concept to understand. I never knew the value of understanding them until I started trying to learn [promises] and [asyncs] which aim to replace callbacks. It wasn't until I learned callbacks that I was able to understand what promises were trying to solve. 

In this article I share everything I have learned about 

We understanding of callbacks,
We are going to take in depth look of how callbacks work and why they are in needed.

By the end, we wil understand
- syncronous and syncronous behavior in Javascript
- Why and when callbacks are need
- how to create callbacks.

In the following sections, we are going to learn how understand about why we need callbacks, and most importantly, how to create callbacks.




## syncrnous vs asysncrounos 
To understand why we need callbacks, we need to first Understand JavaScript syncronoous and asynconous behaviiour as this is key to understanding the essense of callbacks.

### Asyncronous
JavaScript is **synchronous** and single threaded. Single threaded means it can only do one task at a time. Syncnrous means code is executed one ater the other in a sequence . If there is a piece of code that might take a long time to execute, everythign stops and the remaining code must wait for that piece of code to finish.

We can  see  this synchronous behaviour with the example given below. I have modified the example from [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts),. you don't have to worry about what the function `first()` is doing, It's just there to simulate a delay as the task of calculating is time consuming.. the main focus should be the executition. 

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
first(); // Sun Feb 23 2020 12:47:47 GMT+0200
console.log('second'); // second
console.log('third');  // third
```

When you paste in the console, you will notice that it takes a while to get an output when you call the `first()` function.

```javascript
first(); // Sun Feb 23 2020 12:47:47 GMT+0200
```

 This is because the function does a time consuming task of calculating over 10 millions dates and then displaying the output.

 Everything is halted, and the lines below the function call  must wait for the function to finish

When it finishes, the line after `first()` executes.

```javascript
console.log('second'); // second
```
Finally, the last line executes. 

```javascript
console.log('third'); // third
```

This behaviour  can be problematic since not all the code not all the code in an application depends on each other.

 Imagine if `console.log('second')` and `console.log('third')` were function blocks hanlding different parts of a user interface unrelated to the `first` function. With syncronous execution and javascript being single threaded, the whole UI will come to a halt until the function `first` finishes. As you can imagine, this would give a horrible and a frustrasting experience for users of the application.


Another example where Syncronous execution model is can be problematic, is when there are functions that depends on data supplied external sources:
- Retrieving data from an API or the database
- Reading files

Retrieving data from an API since the code has to wait for response from a server. The wait time can be acouple of seconds and might vary depending on the internet speed. If there are functions, that are depending on the data to be returned from an API, in Syncronous code, they will have to wait for the response from the server before they can run, halting execution.

Let's do an example, let's take some part of the code of the previous code to simulate the delay behavior of asking data from the server thorough an API:

```javascript

function getData() {
  // remember the date calculations are just there to simulate an api request delay 
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
    myDate = date;
  }
  // pretend this is the data returned from an api 
  const browsers = ['firefox', 'chrome', 'edge', 'opera'];
  console.log('data from api received');
  return browsers;
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData();
displayData(response);
// code that has nothing to with data returned from the api
console.log('second');
console.log('third');
```

The output:
```javascript
data from api received
Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
second
third
```
The `getData()` fuction executes first, and logs a message "data from api received"  before it returns the API response which in our case is an array.
```
const response = getData(); 
```
When the `getData()` finish after executing a couple of seconds, displayData()` takes the reponse(the array) as an argument and display it.

```javascript
displayData(response);
// Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
```
In real world scenario, the function would be creating HTML lists and appending them into the DOM. For simplicity sake, the function will just display the array in the console.

Finally the other other code that has nothing to do with the API reponse will excute.
```
second
third
```
As you can see, this ansycnronous behaviour in this scenario is also not desirable.There is no good reason why the whole application should halt when the the other code have nothing to do with the API response.

What if there is a way to get around it? What if there is a way to put the `getData()` in the background when accessing an Api and continue with execution the rest of the  code and run `displayData` only when `getData()` finishes executing?  


To answer the questions, "yes, there is a way". And this is the basis of **asysncronous code**.

 ### Asynccronous
 In asyncronous code, Instead of waiting for time aconsuming tasks to finish executing, the task is put in background and all the code execute.

Lets modify our previous example and make it ascrononous. Prior to ES6, a popular way to make code ascyrnoous was by putting the time consuming code inside a  `setTimeout()`  function. A `setTimeout()` is a method of the Window object  that executes a function after a specified amount of time(milliseconds). 

```javascript
setTimeout(function(){ // code comes here }, 0);
```

Even if you set the specified time to be 0 milliseconds, `setTimeout()` will still be asyncronous.

`setTimeout` not part of javascript. It is part of the browser, It is exposed to javascript as a window method.

We won't get into details of how it works behind the scenes as it is a topic of it's own. However, the main take away

Let's wrap our code is `getData()` function inside the `setTimeout`.
```javascript

function getData() {
  // remember the data calculations are just there to simulate an api request delay
  setTimeout(() => {
    let myDate;
    for (let i = 0; i < 10000000; i++) {
      const date = new Date();
      myDate = date;
    }
    // pretend this is the data returned from an api
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    return browsers;
  }, 0);
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData();
displayData(response);
// code that has nothing to with data returned from the api
console.log('second');
console.log('third');
```

Output:

```
Popular browsers are: undefined
second
third
data from api received
```

Have you noticed the output? look closely, can see that "data from api received" has been logged last even though the function `getData()` was called first?

Recap of how the functions were called.
```javascript
const response = getData();
displayData(response);
// code that has nothing to with data returned from the api
console.log('second');
console.log('third');
```

Our code here is behaving asyncronous, it is no longer waiting for the time consuming `getData()` function to finish. This is big step, but there is room for improvement. 

We also have a second challege , the `getData()` function has lost the ability to return values. so even if `getData()` was first to run, the variable response would have still been `undefined`. 

You can see this behaviour with simplied code

```javascript
function getData() {
  setTimeout(() => {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    return browsers;
  }, 0);
}


const response = getData();
```

When we run the function, we get:

```
undefined
data from api received
```

If you `console.log(response)`, you will always get `undeinfied`

The function `getData()` run as evidenced by the logging of 'data from api received'. Hoever, even though in the function we returned the 'browsers` array, when it runs runs it never does.

Compare the code with the one without setTimeout.
```javascript
function getData() {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    return browsers;
}


const response = getData();
console.log(response);
```
Output:
data from api received
(4) ["firefox", "chrome", "edge", "opera"]
```

As you can see from the examples, though we now have the ability for our function to be asysncronous, we hve a lso lost the ability to return the values.

So if this was an api that was getting data from external service, we wound't be able to return it. 

In this scnearoi, if we want to do anything with the `browsers` array, we will need to do it inside the `getData` function only.
https://stackoverflow.com/questions/24928846/get-return-value-from-settimeout

## why do we callbacks need?
Though our code is working asyncrnous,  there is still a problem. `displayData()` executes without waiting for `getData()` to finish. Remember, `displayData()` displays the response(array) from the API call in `getData()`. So having the `displayData()` executing before we receive data is not what we want.

You can even see from the output that `displayData()` displays undefined.

```
Popular browsers are: undefined  // displayData(response)
second
third
data from api received
```

What would be desirable in our case is executing `displayData()` only when `getData()` has finished executing. But how do we do that? how do we know that `getData()` has finished executing?

The answer is **JavaScript callbacks**. A callback is a function that is passed as an argument into another function, and it is invoked or called when the function that takes the callback finishes executing.

A function that accepts or take a callback as an argurment is called a **higher-order function**. This function is the one that calls the callback after it finishes executing. 

So if we want `displayData()` to execute only when `getData()` finish, we need to pass it as a callback. When `getData()` finish, we will execute

Before we proceed to creating callbaks, we need to undertand that functions are objects in JavaScript.

## Functions Are Objects
Functions in JavaScript are first-class objects. This means functions can be treated the same way objects are treated in JavaScript.

- They can be stored in a variable, array or an object. 
- They can be passed as argument of another function.
- A function can be returned as a result of another function.


It important to understand this behaviour, as it will help in understanding callbacks work.

It is this behaviour that allows use to pass a function as an argument of another function.

## Creating Callbacks

Before we make `displayData()` function, let's just look at the basics of creating a callback with very simple code. After that, we will proceed to turn `displayData()` into a callback.

let's create a simple function.

```javscript
function greeting(name) {
  console.log("Hello", name);
}

greeting('stanley'); // Hello stanley
```

Our `greeting()` function takes a `name` variable as an argument and logs a greeting in the console.

Let's now add a callback, remember a callback is  a function passed as an argument in another function. So after the `name` argument, we will create our callback that will be created the moment `greeting()` finishes running.

```javascript
function greeting(name, callback) {
  console.log("Hello", name);
  callback();  // calling the callback
}

greeting("stanley", function() {
  console.log('am a callback function');
})
```

If you enter the code into the browser console, you will get the output.

```
Hello stanley
 am a callback function
```
As you can see, we pass the callback as the second argument when calling the `greetings()` function.

```javascript
greeting("stanley", function() {
  console.log('am a callback function');
})
```
Inside the `greeting` function, **we call the function after the code in the greeting function**. Remember, the goal is to make sure that the callback run after the higher order function(a function that takes a callback as argument) has finished executing.

You are not limited to creating callbacks by defining them in a function call. You can also define a callback outside the function call as pass is an argument as demonstrated below.


```javascript
function greeting(name, callback) {
  console.log("Hello", name);
  callback();  // calling the callback
}

function sayMessage() {
  console.log('am a callback function');
}

// pass sayMessage function definition as second argument
greeting("stanley", sayMessage);
```
You will get the same output.

```
Hello stanley
am a callback function
```

When passing the callback like have done, becareful not to call it when passing.

```
greeting("stanley", sayMessage()); // wrong
greeting("stanley", sayMessage); // right

```

Now that we have gotten the basics of creating a callback, let's go back to our main example and make `displayData()` a callback of `getData()`. 

```javascript
function getData(displayData) {
  setTimeout(() => {
    let myDate;
    for (let i = 0; i < 10000000; i++) {
      const date = new Date();
      myDate = date;
    }

    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    displayData(browsers)  // calling the callback
  }, 0);
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData(displayData);
console.log('second');
console.log('third');
```

When you paste the code in the console, we get correct output and function `displayData()` will display the data from an api properly since it will be called immediately after the response.

```
second
third
data from api received
Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
```

To recap, we passed `displayData` function as the second argument of `getData()` function.
```
const response = getData(displayData);
```
Inside the `getData` function, we call the `displayData()` function immediately after we the receive the response. We pass the response(array) as an argument of `displayData`.

```
const browsers = ['firefox', 'chrome', 'edge', 'opera'];
console.log('data from api received');
displayData(browsers)  // calling the callback
```

If you are still confused, you can checkout the simplifed version of the example where I have removed the `setTimeout` and the date calculations. Hopefull, you might understand what's happening.

```javascript
// simplifed version
function getData(displayData) {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    displayData(browsers)  // calling the callback
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData(displayData);
console.log('second');
console.log('third');
```

## Callback hell
https://stackoverflow.com/questions/52733239/is-this-the-right-way-to-do-callback-in-js

https://stackoverflow.com/questions/57001273/combine-two-callbacks-into-one-return/57001448
Let's continue with the code before our simplified version of code. :

We will remove the data calculations for the sake brevity but keep the `setTimeout()` to make the fake API request asyncronous.



```javascript
function getData(displayData) {
  setTimeout(() => {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    displayData(browsers)  // calling the callback
  }, 0);
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

const response = getData(displayData);
console.log('second');
console.log('third');
```

We are able to simulate an api request and we receive data. As you notice, we cant not return data out of the setTimeOut() instead we get the data `browsers` and it's only available inside our  `getData` function and we cannot return it out of the setTimeOut.

Due to this limitation, it's why are passing a callback to be use the data returned from our fake API request.


To understand callback hell, 
Let's create  a function `joinData` that creates a joined string from the array `browsers` returned from our fake api reponse first.

The function `displayData` will only display the manipulated output from `joinData`.

As we have learned, we can not returned the data from `getData` function, the only way is to nest the `joinData` function inside `getData`

 The `displayData` function will display data returned from 



## References
- [http://callbackhell.com/](http://callbackhell.com/)
- [https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

 - [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)

- [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing](
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

- [https://guide.freecodecamp.org/javascript/callback-functions/](https://guide.freecodecamp.org/javascript/callback-functions/)