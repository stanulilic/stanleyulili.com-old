
## Introduction
ECMASript 2015 also known as ES6 comes with exciting new string methods.

In this article, we are going to take an indepth look on how to use the ES6 string methods:
- startsWith() method
- endsWith() method
- includes() method
- repeat() method

## String Basics
Before we look at the new string methods. Let's recap on what happens when you create a new string.

when you create a string, every character in the string is assigned an index.

For example let' create a simple string:
```javascript
const myString = 'String Methods';
```

- Image of the that shows here

So you can access any character from the string like we can access elements in an array:

```javascript
const myString = 'String Methods';
myString[0] // S
myString[6] // " " 
myString[9] // t
```

This does not mean that strings are array. 

```javascript
Array.isArray(myString) // false
```

## The startsWith() Method

### Syntax
```
string.startsWith(str, index)
```

The startsWith() method checks if the given string exists at the beggining of the string calling the method.

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

-- an image here can help



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

The `endsWith()` method is case-sensitive:

```javascript
const myString = 'String Methods';
myString.endsWith('methods') // false
```

The `endsWith()` method also takes an optional `index` parameter.

```javascript
const myString = 'String Methods';
myString.endsWith('h', 10) // true
```
The code checks if the string ends with "h" at position 10.

-- an image here can help
## includes() Method
### Syntax
```
string.includes(str, index)
```

The includes() method checks if the string contains the given string anywhere within the string.

It returns `true` if the given string is found, and `false` it is not found.

```javascript
const myString = 'This is a string';
myString.includes('is'); // true
myString.includes('string'); // true
myString.includes('a'); // true
myString.includes('apples'); // false
```

The `includes()` method is case-sensitive:

```javascript
const myString = 'This is a string';
myString.endsWith('This') // false
```
The `includes()` method also takes an optional `index` parameter.

```javascript
const myString = 'This is a string';
myString.includes('is', 4) // true
```
It searches starting at position 4 for  the given text('is').

## repeat() method
## Conclusion