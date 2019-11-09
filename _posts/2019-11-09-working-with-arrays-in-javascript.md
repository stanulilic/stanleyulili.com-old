---
header:
 teaser: /assets/images/posts/2019-11-09-working-with-arrays/featured-image.jpg
feature_image: /assets/images/posts/2019-11-09-working-with-arrays/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this article, we are going to learn how to create arrays, and how to access, delete, update or add elements in an array.

categories:
 - Javascript
tags:
 - javascript
toc: true;
toc_sticky: true
toc_label: "Table of Contents"
title: "Working with Arrays in JavaScript"
---



An array in JavaScript is an object used for storing ordered lists of data. Each element in an array is assigned an index. An index starts at `0` going up.

Arrays can contain elements of any data type such as numbers, strings, boolean, object, etc. They can also contain other arrays.

Arrays have proven to be useful for storing multiple values in a single variable. They also make it easy to access or modify the values stored.

In this article, we are going to learn how to create arrays, and how to access, delete, update or add elements in an array.

## Creating Arrays in JavaScript
### 1. Array Literal
The most popular and recommended method for creating arrays in JavaScript is using the *array literal* notation.

The array literal is written with square brackets which contains a list of items separated by commas as demonstrated in the example below:

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
```
This will create an array of 4 string values that are stored in the `countries` variable.

Other examples:

An empty array:
```javascript
let animals = []; 
```
An array of numbers
```javascript
let numbers = [1,2,3,4]; 
```

An array with mixed data types:
```javascript
let values = ['string', 3, true];
```

### 2. Array Constructor
An array can also be created with the `new Array()` constructor method.

```javascript
let countries = new Array('Germany', 'Russia', 'USA', 'UK');
console.log(countries) // ["Germany", "Russia", "USA", "UK"]
```

To create an empty array:
```javascript
let countries = new Array();
```
Other examples.

```javascript
let numbers = new Array(1,2,3,4); // 
let values = new Array('string', 3, true)// 
```

Note:
It is not recommended to use the array constructor when creating arrays as it can be inconsistent. 
{: .notice--warning} 

### 3. Array.of() Method
ES6 also known as ECMAScript 2015 comes with a new method for creating arrays. 

The Array.of() method is similar to the array constructor method but it is more consistent in comparison to the array constructor method.

```javascript
let countries = Array.of('Germany', 'Russia', 'USA', 'UK');
console.log(countries) // ["Germany", "Russia", "USA", "UK"]
```

Other examples:

An array of numbers
```javascript
let numbers = Array.of(1,2,3,4); // 
```
An empty array

```javascript
let countries = Array.of() 
```
An array of mixed data types

```javascript
let values = Array.of('string', 3, true)
```
## Array Indexes
Lets now look at what happens when we create an array in Javascript.

For example:
```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
```

When an array is created, every item in the array is assigned an index.

![array indexing](/assets/images/posts/2019-11-09-working-with-arrays/countries-array.jpg)

The first element in the array has an index of `0`. This is the case because computers start counting from `0` instead of `1`. 

 It might seem strange at first because we humans start counting from `1`, but with practice, you will get used to it.

## Get the Length of an Array
JavaScript arrays come with a `length` property that tells us the number of elements an array has.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.length // 4
```

`countries.length` tells us that the `countries` array has 4 elements.

Other examples:
```javascript
let myArray = []; 
let numbers = [1,2]; 
let values = ['string', 3, true] 
myArray.length // 0
numbers.length // 2
values.length // 3
```
## Accessing Elements in an Array
To access an element in an array. We need to pass the index of the element we want inside square brackets.

We can see that in the examples below:
```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];

countries[0] // 'Germany'
countries[1] // 'Russia'
countries[2] // 'USA'
countries[3] // 'UK'

// accessing an item that doesn't exist returns undefined

countries[4] // undefined
```

The first element 'Germany' has an index of `0`, the second element 'Russia' has an index of `1` and so on.

## Adding an Element to an Array
We can add an element into an array by using the `push` method.

The `push()` method will add a new element to the end of an array.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
countries.push('France');

console.log(countries) // ["Germany", "Russia", "USA", "UK", "France"]
```

To add an element to the beginning of the array, you use the `unshift()` method.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
countries.unshift('France');

console.log(countries) // ["France", "Germany", "Russia", "USA", "UK"]
```

Another way to add an element in an array is by assigning a value to a new index.

The array `countries` has four elements with indices starting from `0` to `3`. To add a new element, we must set a new value to an index after `3` which is `4`.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries[4] = 'France';
 console.log(countries) // ["Germany", "Russia", "USA", "UK", "France"]
```

Honestly speaking, adding elements in this way gives a huge room for error. Not to mention the difficult task of having to keep track of the array indices whenever you want to add a new item.

In my opinion, I find the `push()` method helpful in most cases.

## Update an Element Value in an Array
We can update any value in an array by assigning a new value to the index of the element that should be updated.

In our example below, we are going to update the first element which has an index of zero. We going to change the first element from 'Germany' to 'Australia'.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries[0] = 'Australia';
 console.log(countries) // ["Australia", "Russia", "USA", "UK"]
```
As we can see, the first item has been changed from 'Germany' to 'Australia`.

We can also use the `splice` method to update array elements.

The `splice` method takes the index of the element you want to change as the first parameter, the number of items you want to delete as the second parameter. Finally, the value of the element you want to add.


```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.splice(0, 1, 'Australia');
 console.log(countries) // ["Australia", "Russia", "USA", "UK"];
```
In our example, `countries.splice(0, 1, 'Australia')`, deletes the first element `Germany` and puts the `Australia` value at the index `0`.

## Removing an Element in an Array
We can remove an element from the end of the array by using the `pop()` method.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.pop();
 console.log(countries) // ["Germany", "Russia", "USA"]

```

It is also possible to remove an element at the beginning of an array by using the `shift()` method.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.shift();
 console.log(countries) // ["Russia", "USA", "UK"]
```

We can remove any specific element in an array using the `splice()` method.

As I explained earlier, the `splice` method takes the index of the element you want to remove as the first parameter, the number of items you want to delete as the second parameter. 

The third parameter takes a value you want to add which can be **omitted** when your *deleting elements* in the array as demonstrated in the examples below.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.splice(2, 1);
 console.log(countries) // ["Germany", "Russia", "UK"]
```

In the `countries.splice(2, 1)` method, `2` is the index of the element we want to delete. `1`is the count of how many elements we are going to remove which in our case is just one element.

Since we are not replacing any elements, we omitted the third parameter.

Other examples.

Delete the first element with an index of `0`.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.splice(0, 1);
 console.log(countries) // ["Russia", "USA", "UK"]
```

Delete the last element with an index of `3`.
```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.splice(3, 1);
 console.log(countries) // ["Germany", "Russia", "USA"]
```

We can also remove multiple items at a specified index by changing the second parameter from `1` to `3`. This means three items will be deleted.

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];
 countries.splice(0, 3);
 console.log(countries) // ["UK"]
```

## Looping Through an Array

We can loop through an array and display each item by using the `for` loop.

Instead of manually passing the number of elements the array has in the `for` loop condition. We can use the `array.length` property to pass array elements count. 

```javascript
let countries = ['Germany', 'Russia', 'USA', 'UK'];

for(let i = 0; i < countries.length; i++) {
 console.log(countries[i])
}

// output

Germany
Russia
USA
UK
```
The loop runs as long as the variable `i` is less than the length of the array `countries`. 

## Conclusion
In this article, we have learned how to create arrays and how elements in the arrays are indexed. We have also learned useful tasks when working with arrays, such as adding, updating and deleting elements in an array. 

If you have any insight or questions, feel free to leave a comment.
