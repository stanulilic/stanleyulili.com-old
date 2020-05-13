---
header:
 teaser: /assets/images/posts/javascript-featured-image/featured-image.jpg
feature_image: /assets/images/posts/javascript-featured-image/featured-image.jpg
featured_image_alt: featured-image
categories:
 - Javascript
tags:
 - javascript
title: "Asynchronous Programming with Callbacks in JavaScript"
excerpt: In this article, We are going to take a look at the difference between synchronous and asynchronous programming in JavaScript. We will then proceed to learn about the importance of callbacks, creating callbacks, and finally, we will cover about callback hell. 
toc: true
---

## Introduction

Javascript callbacks are one of the most important concepts to understand. I never knew the importance of understanding them until I started trying to learn [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) which aim to replace and solve problems with callbacks.

I had trouble understanding promises, I kept asking myself, "Where and why would I use this?". I would read an article talking about using Promises with [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) I would get it in that context but I kept wondering about the situation I would create a Promise for my code.

I must mention I also had a very poor understanding of asynchronous programming in JavaScript, so I was set up to fail. Learning more about asynchronous programming lead me to callbacks which gave me an aha moment, the light bulb went on. I finally understood the hype about Promises and Async/Await. 

In this article, We are going to take a look at the difference between synchronous and asynchronous programming in JavaScript. We will then proceed to learn about the importance of callbacks, creating callbacks, and finally, we will cover about callback hell. 

By the end of this tutorial, you will understand:
- Synchronous and asynchronous behavior in JavaScript
- Why and when callbacks are needed
- How to create callbacks.
- Callback hell

I believe the knowledge you will gain from reading this tutorial will be an invaluable prerequisite to learning Promises and Async/Await.

## Synchronous vs Asynchronous Programming in JavaScript
To understand why we need callbacks, we need to first understand JavaScript synchronous and asynchronous behavior as this is key to understanding the importance of using callbacks.

### Synchronous JavaScript
JavaScript is **synchronous** and single-threaded. Single-threaded means it can only do one task at a time. When JavaScript code is being executed, only one piece of code is executed.

Let's pretend you have 4 functions in the following order in your code: 
```
function A(){}
function B(){}
function C(){}
function D(){}
A()
B()
C()
D()
```
When Javascript is executing the code, all the function calls are put on a single call stack. Only one function can execute at a given time in a thread. After one function executes, another one gets executed. This goes on until all the code is executed.

```
Thread: A() -> B() -> C() -> D()
```
You cannot have two different functions executing at the same time like it would happen in a multi-threaded language. 

```
Thread 1: A() -> B()
Thread 2: C() -> D()
```

Synchronous means code is executed one after the other in a sequence.  

Let's say you have 3 lines:
```
1 console.log('line one');
2 console.log('line two');
3 console.log('line three')
```

One line of code will execute at a time and when it's finished, it moves on to the next line in the order it appears in the code. So in the example above, line 1 executes first, then line 2 and finally line 3.

In synchronous execution, if there is a piece of code that might take a long time to execute, everything stops and the remaining code must wait for that piece of code to finish.

We can see this synchronous behavior with the example given below. I have modified the example from [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts), you don't have to worry about what the function `getData()` is doing, It's just there to simulate a delay as the task of calculating is time-consuming. Your main focus should be the execution.

Open your browser console by pressing Control + Shift + I on Chrome or Control + Shift + J on Firefox.

Paste the following code in the console.

**Example 1**
```javascript

function getData() {
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
    myDate = date;
  }

  console.log(myDate);
}

// execution starts here
getData(); // Mon May 11 2020 11:45:06 GMT+0200 (Central Africa Time)
console.log('second'); // second
console.log('third');  // third
```

When you paste in the console, you will notice that it takes a while to get an output when you call the `getData()` function.

```javascript
getData(); // Mon May 11 2020 11:45:06 GMT+0200 (Central Africa Time) 
```

This is because the function does a time-consuming task of calculating over 10 million dates and then, it displays the current date as the output.

Everything is halted, and the lines below the function call must wait for the function to finish executing.

When it finishes, the line after `getData()` function call executes.

```javascript
console.log('second'); // second
```
Finally, the last line executes. 

```javascript
console.log('third'); // third
```

While this behavior can be good sometimes, there are circumstances such as the previous code where this behavior is not ideal. 

Imagine if `console.log('second')` and `console.log('third')` were function blocks handling different parts of a user interface unrelated to the `getData` function. With synchronous execution and javascript being single-threaded, the whole UI will come to a halt until the function `getData` finishes. As you can imagine, this would give a horrible and frustrating experience for users of the application.

Another example where the synchronous execution model is not ideal is when there are functions that depend on data supplied  by external sources:
- Retrieving data from an API or the database.
- Reading files.

Retrieving data from an API usually involves sending a request to the server and waiting for the response. This means the code has to wait for a response from a server. The wait time can be a couple of seconds and might vary depending on the internet speed. If there are functions that are depending on the data to be returned from an API, in synchronous execution, they will have to wait for the response from the server before they can run, halting execution.

Let's do another example, let's take some part of the code of the previous example to simulate the delay behavior of asking data from the server thorough an API:

**Example 2:**
```javascript
function getData() {
  // remember the date calculations are just there to simulate an API request delay 
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
    myDate = date;
  }
  // pretend this is the data returned from an API 
  const browsers = ['firefox', 'chrome', 'edge', 'opera'];
  console.log('data from API received');
  // return the "browsers" array
  return browsers;
}

// function that logs the response in the console.
function displayData(response) {
  console.log('Popular browsers are:', response);
}

// call getData() and store the returned value in the response variable
const response = getData();
// takes the returned array from getData() as an argument
displayData(response);
// code that has nothing to with data returned from the API
console.log('second');
console.log('third');
```

The output:
```javascript
data from API received
Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
second
third
```
The `getData()` fuction executes first, and logs a message "data from API received"  before it returns the API response which in our case is an array.
```
const response = getData(); 
```
When the `getData()` function finish after executing for a couple of seconds, `displayData()` takes the response(the array) as an argument and logs it in the console.

```javascript
displayData(response);
// Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
```
In a real-world scenario, the function would be creating HTML lists and appending them into the DOM. For simplicity's sake, the function will just display the array in the console.

Finally, the other code that has nothing to do with the API response will execute.
```
second
third
```
As you can see, this synchronous behavior in this scenario is not desirable.

```
console.log('second');
console.log('third');
```
The two console logs are not related nor do they depend on the functions `getData()` or `displayData` to run. Think of it in a real-world scenario, the code usually contains functions handling different parts of the UI of the application. In synchronous execution, everything will freeze until a time-consuming function such as getData or an API request finishes. As you can imagine, the user experience would be horrible.

What if there is a way to get around it? What if there is a way to put the `getData()` in the background when accessing an API and continue executing the rest of the code and then run `displayData` only when `getData()` finishes executing?  


To answer the questions, "yes, there is a way". And this is the basis of *asynchronous programming*.

### Asynchronous JavaScript
In asynchronous code, instead of waiting for a time-consuming task to finish executing, the task is put in the background and all the other code executes.

Let's modify our previous example and make it asynchronous. Before ES6, a popular way to make code asynchronous was by putting the time-consuming code inside a  `setTimeout()`  function. A `setTimeout()` is a method of the Window object that executes a function after a specified amount of time(milliseconds). 

```javascript
setTimeout(function(){ // code comes here }, 0);
```

Even if you set the specified time to be 0 milliseconds, `setTimeout()` will make the code behave asynchronously.

`setTimeout` is not part of javascript. It is part of the browser, it is exposed to javascript as a window method.

We won't get into the details of how it works behind the scenes as it is a different topic of its own. The focus in this tutorial is just to show you how code behaves asynchronously in Javascript.

Continuing with **example 2**, let's wrap our code in `getData()` function inside a `setTimeout` function.

**Example 3**:
```javascript
function getData() {
  // put the setTimeout here
  setTimeout(() => {
    let myDate;
    for (let i = 0; i < 10000000; i++) {
      const date = new Date();
      myDate = date;
    }
    // pretend this is the data returned from an API
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from API received');
    return browsers;
  }, 0); // end of setTimeout function call
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
data from API received
```

Have you noticed the output? look closely. Do you see that "data from API received" has been logged last even though the function `getData()` was called first?

Recap of how the functions were called.
```javascript
// getData function gets called first
const response = getData();
// displayData is called second
displayData(response);
// code that has nothing to with data returned from the API
console.log('second');
console.log('third');
```

Our code as shown in the output, it is now behaving asynchronously, it is no longer waiting for the time consuming `getData()` function to finish. This is a big step, but there is room for improvement. 

We also have a second challenge, the `getData()` function has lost the ability to return values. So even if `getData()` was first to run, the variable response would have still been `undefined`. 

You can see this behavior with simplified code.

**Example 4:**
```javascript
function getData() {
  setTimeout(() => {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from API received');
    return browsers;
  }, 0);
}


const response = getData();
console.log(response);
```

When we run the function, we get:

```
undefined
data from API received
```

If you `console.log(response)`, you will always get `undefined`.

The function `getData()` run as evidenced by the logging of 'data from API received'. However, even though in the function we returned the `browsers` array when it runs, it never returns the array.

Compare the code with the one without `setTimeout`.

**Example 5:**
```javascript
function getData() {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from API received');
    return browsers;
}


const response = getData();
console.log(response);
```
Output:
```
data from api received
(4) ["firefox", "chrome", "edge", "opera"]
```

As you can see from the examples, though we now have the ability for our function to be asynchronous, we have also lost the ability to return the values.

So if this was an API that was getting data from an external server or manipulating data in a time-consuming task, we wouldn't be able to return it and use it in another function.

In this scenario, if we want to do anything with the `browsers` array, we will need to do it inside the `getData` function only.

## Why do we Need Callbacks?
Though our code(*example 3*) is working asynchronously,  there is still a problem. `displayData()` executes without waiting for `getData()` to finish.

 Remember, `displayData()` displays the response(a browsers array) from the fake API call in `getData()`. So having the `displayData()` executing before we receive data is not what we want.

You can even see from the output that `displayData()` logs `undefined`.

**Example 3 output:**
```
Popular browsers are: undefined  // displayData(response)
second
third
data from API received
```

What would be desirable in our case is executing `displayData()` only when `getData()` has finished executing. But how do we do that? How do we know that `getData()` has finished executing?

The answer is **JavaScript callbacks**. A callback is a function that is passed as an argument into another function, and it is invoked or called when the function that takes the callback finishes executing.

A function that accepts or takes a callback as an argument is known as a **higher-order function**. This function is the one that calls the callback after it finishes executing. 

So if we want `displayData()` to execute only when `getData()` finish, we need to pass it as a callback. When `getData()` finish, we will execute

Before we proceed to create callback functions, we need to understand that functions are objects in JavaScript.

## Functions Are Objects
Functions in JavaScript are first-class objects. This means functions can be treated the same way objects are treated in JavaScript.

- They can be stored in a variable, array, or object. 
- They can be passed as an argument of another function.
- A function can be returned as a result of another function.


It is important to understand this behavior as it will help in understanding how and why callbacks work.

It is this behavior that allows us to pass a function as an argument of another function.

## Creating Callbacks

Before we make `displayData()` function, let's look at the basics of creating a callback with simplified code. After that, we will proceed to turn `displayData()` into a callback.

Let's create a  function.

**Example 6:**
```javascript
function greeting(name) {
  console.log('Hello', name);
}

greeting('Stanley'); // Hello Stanley
```

Our `greeting()` function takes a `name` variable as an argument and logs a greeting in the console.

Let's now add a callback, remember a callback is a function passed as an argument in another function. So after the `name` argument, we will create our callback that will be called after `greeting()` finishes executing.

**Example 7:**
```javascript
function greeting(name, callback) {
  console.log('Hello', name);
  callback();  // calling the callback
}

// we are calling the greeting function and passing it an anonymous function
greeting('Stanley', function() {
  console.log('am a callback function');
})
```

If you enter the code into the browser console, you will get the output.

```
Hello Stanley
 am a callback function
```
As you can see, we pass the callback as the second argument when calling the `greetings()` function.

```javascript
greeting('Stanley', function() {
  console.log('am a callback function');
})
```
Inside the `greeting` function, **we call the callback after the code in the greeting function**. Remember, the goal is to make sure that the callback run after the higher order function(a function that takes a callback as argument) has finished executing.

You are not limited to creating callbacks by defining them in a function call. You can also define a callback outside the function call and pass it as an argument as demonstrated below.

**Example 8:**
```javascript
function greeting(name, callback) {
  console.log('Hello', name);
  callback();  // calling the callback
}

function sayMessage() {
  console.log('am a callback function');
}

// pass sayMessage function definition as second argument
greeting('Stanley', sayMessage);
```
You will get the same output.

```
Hello Stanley
am a callback function
```

When passing a function definition variable as an argument,  make sure you don't call the function.

```javascript
greeting('stanley', sayMessage()); // wrong
greeting('stanley', sayMessage); // right

```

Now that we have gotten the basics of creating a callback, let's go back to our main example(**example 3**) and make `displayData()` a callback.

**Example 9**:
```javascript
function getData(displayData) {
  setTimeout(() => {
    let myDate;
    for (let i = 0; i < 10000000; i++) {
      const date = new Date();
      myDate = date;
    }

    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from API received');
    displayData(browsers)  // calling the callback
  }, 0);
}

function displayData(response) {
  console.log('Popular browsers are:', response);
}

// pass the displayData function as a callback
const response = getData(displayData);
console.log('second');
console.log('third');
```

When you paste the code in the console, we will get the correct output and the function `displayData()` will display the data from the fake API since it will be called immediately after the response is returned.

```
second
third
data from API received
Popular browsers are: (4) ["firefox", "chrome", "edge", "opera"]
```

To recap, we passed `displayData` function as an argument of `getData()` function.
```
const response = getData(displayData);
```
Inside the `getData` function, we call the `displayData()` function immediately after we the receive the response. We pass the response(browsers array) as an argument of `displayData`.

```javascript
const browsers = ['firefox', 'chrome', 'edge', 'opera'];
console.log('data from API received');
displayData(browsers)  // calling the callback
```

If you are confused, you can check out the simplified version of the example where I have removed the `setTimeout` and the date calculations. Hopefully, you might understand what's happening.

**Example 10:**
```javascript
// simplifed version
function getData(displayData) {
    const browsers = ['firefox', 'chrome', 'edge', 'opera'];
    console.log('data from api received');
    displayData(browsers)  // calling the callback
}

// the callback function
function displayData(response) {
  console.log('Popular browsers are:', response);
}

// passing displayData function as a callback inside getData fuction call
const response = getData(displayData);
console.log('second');
console.log('third');
```

As you can see, the `DisplayData` callback is called immediately and given an argument of `browsers` after `getData` logs *data from API received* to the console.


## Callback hell

So in Javascript, as we have learned if we have a time-consuming task or an API request. If there are functions that depend on the output of the time-consuming task, you need to create them as callbacks so that they can be called the moment the task is done.

So let's say you have over 5 functions that need to work on the data returned by a time-consuming task. You need to nest the callbacks in a style known as a continuous passing style where one callback passes a value to the nested callback and so on.

This may sound good in theory but in practice, things can get complex fast as we will learn with the example below.

**Example:**

In our new example, we are going to pretend as if the income $650 is being returned from the server after an API request(I want to keep the code as simple as possible). We will have callbacks that subtract the expenses such as rent, utility bills, internet, etc from the income. Our goal is to get the discretionary income(income remaining after deducting basic living costs).

 The following are the functions that will be doing the calculations:
 - getIncome:  Income = 650
 - payRent - Subtract $200 from income (650 - 200 = 450)
 - payUtilityBills - Subtract $87 from current income (450 - 87 = $363)
 - payInternetBill - Subtract $50 from current income(363 - 50 = $313)
 - payPhoneCharges - Subtract $75 from income(313 - 75 = $238)
 - payForRepairs - Subtract $66 from income(238 - 66 = 172)
 
We will find that our discretionary income is $172.

 So let's first start with our function where `getIncome` function pretends to get the income data($650) from the server. Our goal is to simulate a situation where different functions need to work on the data returned by a server.

 ```javascript
function getIncome(callback) { 
  callback(650);
}

// call getIncome function with a callback as an argument
getIncome(function(income) { 
  console.log(income);
});
```
output:
```
650
```

Here is that what happens during execution. When `getIncome` is called, we pass it a callback `function(income) { console.log(income)}`. Remember a callback is a function passed as an argument in another function.

As the `getIncome` function executes, the `callback` parameter of the getIncome function is set to the anonymous function(callback) `function(income) { console.log(income)}`

```javascript
function getIncome(callback) { 

  // the callback is then called with 650 as it's argument
  callback(650) 
  }
```
Execution then switches back to the callback inside the `getIncome` function call.

```javascript
getIncome(function(income) { 
  // income is set to 650
  console.log(income) // 650
  });
```
The execution finishes.

So now, let us create a function `payRent` that will subtract $200 rent from the income $650. it will take a callback(we will define it shortly).

```javascript
 function getIncome(callback) { 
   callback(650);
   }
 // add the function here
 function payRent(income, callback) {
    callback(income - 200);
  }
 ```
 To give the ability for the `PayRent` callback function to access the `income`(650) parameter from the `getIncome` callback `function(income) { console.log(income)}`. We will need to nest the  `payRent()` function call inside the `getIncome` callback and pass the  `income`(650) as the first argument  when invoking `payRent`. 

```javascript
getIncome(function(income) { 
  // call payRent inside "getIncome" callback
  payRent(income, function(incomeAfterRent) {
    console.log(incomeAfterRent) ;
  });
});
```

Here is the full code.

**Example 11:**
```javascript
function getIncome(callback) { 
  callback(650);
 }

function payRent(income, callback) {
  // income = 650
  callback(income - 200); // 650 - 200 = 450, so 450 is passed as the argument
}

getIncome(function(income) { 
  // income = 650
  payRent(income, function(incomeAfterRent) {
    //  IncomeAfterRent = 450
    console.log(incomeAfterRent) // 450

  });
});
```
After the code executes, it finishes with `discretionIncome` set to 450 inside the anonymous function in the `payRent` function call.

We are now entering the gates of hell, continuing with our previous example, let's create a function that pays the utility bills by subtracting  $87 from the `discretionIncome` variable which has $450:

 - payUtilityBills - Subtract $87 from current income(450 - 87 = $363

To access the 450, we will need to call the function `payUtilityBills` inside the  `payRent` callback.

Before we do that, define the `payUtilityBills` function under the `function payRent(income, callback){}`, 


```javascript
 function payUtilityBills(income, callback) {
   callback(income - 87);
 }
 ```

 Let's call the `payUtilityBills` function inside the `payRent` callback to access the income after paying rent which is 450. 

```javascript
getIncome(function(income) { 
  // income = 650
  payRent(income, function(incomeAfterRent) {
    //  IncomeAfterRent = 450
    payUtilityBills(incomeAfterRent, function(incomeAfterUtility){
     // incomeAfterUtility =  363;
     console.log(incomeAfterUtility); // 363
    });
  });
});
```

Here is the full code:

**Example 12:**
```javascript
function getIncome(callback) { 
  callback(650);
}

function payRent(income, callback) { 
  callback(income - 200);
}

function payUtilityBills(income, callback) {
  callback(income - 87);
}

getIncome(function(income) { 
  // income = 650
  payRent(income, function(incomeAfterRent) {
    //  IncomeAfterRent = 450
    payUtilityBills(incomeAfterRent, function(incomeAfterUtility){
     // incomeAfterUtility =  363;
     console.log(incomeAfterUtility); // 363
    });
  });
});
```

As you can see our code is becoming harder to comprehend. When using callbacks, it's very common to see callbacks being nested more than 8 or 10 levels deep.  I am sure you can imagine the horror of seeing many callbacks being nested that deep. 

We are now remaining with 3 callbacks.
 - payInternetBill - subtract $50 from current income(363 - 50 = $313)
 - payPhoneCharges - subtract $75 from income(313 - 75 = $238)
 - payForRepairs - subtract $66 from income(238 - 66 = 172)

We will just write the 3 functions in one go, we will call them by nesting them as we have done with the other functions in the earlier example. Spoiler alert,  we are going to depths of hell.

```javascript
function getIncome(callback) { callback(650); }
function payRent(income, callback) { callback(income - 200);}
function payUtilityBills(income, callback) {
  callback(income - 87);
}
function payInternetBill(income, callback) { callback(income - 50);}
function payPhoneCharges(income, callback) { callback(income - 75);}
function payForRepairs(income, callback) { callback(income - 66);}

getIncome(function(income) { 
  // income = 650
  payRent(income, function(incomeAfterRent) {
    //  IncomeAfterRent = 450
    payUtilityBills(incomeAfterRent, function(incomeAfterUtility){
     // incomeAfterUtility =  363;
        payInternetBill(incomeAfterUtility, function(incomeAfterInternetBill){
            // incomeAfterInternetBill = 313
            payPhoneCharges(incomeAfterInternetBill, function(incomeAfterPhoneCharges){
                // incomeAfterPhoneCharges = 238
                payForRepairs(incomeAfterPhoneCharges, function(incomeAfterRepairs){
                    // incomeAfterRepairs = 172
                    console.log(`discretionary income is ${incomeAfterRepairs}`);
                });
            });
        });
    });
  });
});
```
Output: 
```
discretionary income is 172
```

I think now, we have seen it for ourselves as to why this is called a *callback hell*. Just imagine trying to read the code. It's so hard to see what's happening with the code and not to mention it's very ugly.

## Conclusion
Wow, I think we have covered a lot in this article. We have learned the difference between synchronous and asynchronous programming in Javascript. We also took a deeper look at creating and using callbacks. Finally, we went to depths of hell with callback hell.

From here, you might want to look into [Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) and then [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await), I will write the articles about Promises and Async/Await very soon. So please subscribe to make sure you don't miss them.

I have put a lot of effort into creating the examples and the tutorial. If you enjoyed it, please share it with anyone who might find it useful.

If you have insights or ideas or if you noticed a mistake, please let me know in the comments.

Thank you for reading this article.