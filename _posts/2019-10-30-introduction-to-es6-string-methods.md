---
header:
 teaser: /assets/images/posts/2019-10-31-es6-string-methods/featured-image.jpg
feature_image: /assets/images/posts/2019-10-31-es6-string-methods/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this article, we are going to take an in-depth look at how to use the following ES6 string methods

categories:
 - Javascript
tags:
 - javascript
title: "Introduction to ES6+ String Methods"
---

## Introduction
ECMAScript 2015 also known as ES6 comes with exciting new string methods.

In this article, we are going to take an in-depth look at how to use the following ES6 string methods:
- startsWith() method
- endsWith() method
- includes() method
- repeat() method

## String Basics
Before we look at the new string methods. Let's recap about what happens when you create a new string.

When you create a string, every character in the string is assigned an index:

```javascript
const myString = 'String Methods';
```

 ![string method](/assets/images/posts/2019-10-30-es6-string-methods/string-diagram.jpg)

We can access any character from the string the same we access elements in an array:

```javascript
const myString = 'String Methods';
myString[0] // S
myString[6] // " " 
myString[9] // t
```

But this does not mean that strings are arrays. 

```javascript
Array.isArray(myString) // false
```
Now that we have understood the basics of strings, let us now take look at the ES6 string methods starting with the startsWith() method.

## The startsWith() Method

### Syntax
```
string.startsWith(str, index)
```

The startsWith() method checks if the given string exists at the beginning of the string calling the method.

It will return `true` if the string is found, and `false` if it's not found.

```javascript
const myString = 'String Methods';
myString.startsWith('String') // true
myString.startsWith('Str') // true
myString.startsWith('meth') // false
```

The `startsWith()` method is case-sensitive:

```javascript
const myString = 'String Methods';
myString.startsWith('string') // false
```

The `startsWith()` method also takes an optional `index` parameter.

```javascript
const myString = 'String Methods';
myString.startsWith('ng', 4) // true
```
The code checks if the string starts with "ng" at position 4.

 ![startsWith diagram](/assets/images/posts/2019-10-30-es6-string-methods/startswith-diagram.jpg)




## The endsWith() Method
### Syntax
```
string.endsWith(str, index)
```

The endsWith() method checks if the given string exists at the end of the string.

It will return `true` if the given string is found, and `false` if it's not found.

```javascript
const myString = 'String Methods';
myString.endsWith('Methods') // true
myString.endsWith('ods') // true
myString.endsWith('string') // false
```

The `endsWith()` method is also  case-sensitive:

```javascript
const myString = 'String Methods';
myString.endsWith('methods') // false
```
It also takes an optional `index` parameter.

```javascript
const myString = 'String Methods';
myString.endsWith('t', 10) // true
```
The endsWith() method checks if the string ends with "t" before the position 10.

 ![endsWith diagram](/assets/images/posts/2019-10-30-es6-string-methods/endswith-diagram.jpg)

## The includes() Method
### Syntax
```
string.includes(str, index)
```

The includes() method checks if the string contains the given string anywhere within the string.

It returns `true` if the given string is found, and `false` if it is not found.

```javascript
const myString = 'This is a string';
myString.includes('is'); // true
myString.includes('string'); // true
myString.includes('a'); // true
myString.includes('apples'); // false
```

Just like the startsWith() and endsWith methods, the `includes()` method is also case-sensitive:

```javascript
const myString = 'This is a string';
myString.endsWith('This') // false
```
It also takes an optional `index` parameter.

```javascript
const myString = 'This is a string';
myString.includes('is', 4) // true
```
It searches for the given text "is" starting at position 4. 

 ![includes diagram](/assets/images/posts/2019-10-30-es6-string-methods/includes.jpg)




## The repeat() method
### Syntax
```
string.repeat(count)
```
The repeat() method takes an argument that specifies the number of times a string should be repeated.

It returns a new string with the original string repeated the number of times specified.


```javascript
console.log("string".repeat(3)); // stringstringstring
console.log("abc".repeat(2)); // abcabc
console.log("s".repeat(4)); // ssss
```

We can do something useful with repeat() method by making our logs in the console beautiful. We are going to use [template literals](https://www.stanleyulili.com/javascript/template-literals-in-javascript-explained-like-your-twelve/) to help us log our output:
```javascript
console.log(`
${'-'.repeat(32)}
${' '.repeat(9)} Hello World
${'-'.repeat(32)}`);
```
Output:
```
--------------------------------
 Hello World
--------------------------------
```

Let's try another example and format a mini table of contents:
```javascript
console.log(`
the startsWith() method${'.'.repeat(33)}1
the endsWith() method${'.'.repeat(35)}2
the includes() method${'.'.repeat(35)}3
the repeat() method${'.'.repeat(37)}4
`)
```
Output:
```
the startsWith() method.......................1
the endsWith() method.........................2
the includes() method.........................3
the repeat() method...........................4
```

## Conclusion
In this article, we have demonstrated how to use the string methods that come with ES6. I hope you now have a better understanding of how to use them in your project.

If you have insights or questions, feel free to leave the comment.