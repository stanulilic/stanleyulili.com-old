---
header:
 teaser: /assets/images/posts/2019-10-29-template-literals/featured-image.jpg
feature_image: /assets/images/posts/2019-10-29-template-literals/featured-image.jpg
featured_image_alt: featured-image
excerpt: Template Literals which were introduced in ECMA2015 also known as ES6, has changed the way we write Javascript 

categories:
 - Javascript
tags:
 - javascript
toc: true;
toc_sticky: true
toc_label: "Table of Contents"
title: "Template Literals in JavaScript: Explained like You're Twelve"
---

## Introduction

Template Literals which were introduced in ECMA2015 also known as ES6, has changed the way we write Javascript. 

They come with a lot of features such as:

- Multiline strings: A string can span more than one line 
- String interpolation: JavaScript variables and expressions can be passed directly into the string
- Easy creation of HTML fragments
- Nested template literals

Let's now look at template literals in detail.

## Syntax
Normal strings use a single quote(\') or a double quote(\"):

```javascript
const str = 'normal string';
```

**Template literals** use enclosing back-tick (\`) characters. 

The back-tick can be found on the top left corner of your keyboard. Usually below the `Esc` key, or above the `Tab` key.

```javascript
const str = `using back-ticks`;
```
## Multiline Strings
Before template literals, to create multi-line strings, we had to pass a new line character(`\n`).

Normal strings:
```javascript
const multiline = 'line one \n line two';

```

With template literals, we can write a new line by pressing the `enter` key without using any special characters like `\n`:

```javascript
const multiline = `line one
line two`;

```

### White Space in Template Literals
Template literals preserve leading white space. This means that white space inside a template literal will be display as-is.

```javascript
const multiline = `
line one
                   line two 
               line 3
            line 4`;
```
Here's the output: 

```

line one
                   line two 
               line 3
            line 4
```

As you can see white space is displayed the same way it was entered into the template literal.

To avoid awkward white spaces issues, always be mindful of white spaces when creating multi-line strings:

```javascript
const multiline = `
line one
line two 
line 3
line 4`;
```
Output:
```
line one
line two 
line 3
line 4
```

## String Interpolation
Before ES6, we could embed an expression with a string using the  `+` operator.

```javascript
const name = "stanley";
const myString = "My name is " + name;
```
This will output, `My name is stanley`.

With template literals, we can accomplish the same thing through **string interpolation**.

String interpolation is a process where you can pass a valid JavaScript expression such as a variable into a template literal. The expression inside `${}` is evaluated, and the result of the evaluation is embedded into the string as demonstrated in the example below:

```javascript
const name = "stanley";
const myString = `My name is ${name}`;
```
Output:
```
My name is stanley
```

We are not limited to only interpolating variables. We can pass any valid Javascript expression like in the following examples.

Example 1:
```javascript
const myString = `I am ${20 + 3} years old`;

console.log(myString) // I am 23 years old
```
Example 2:

```javascript
const num1 = 20;
const num2 = 3;
const myString = `I am ${num1 + num2} years old`;

console.log(myString) // I am 23 years old
```

We can also call a function inside `${}`:

```javascript
function capitalize(value) {
 return value.toUpperCase();
}
const name = 'stanley';
const myString = `my name is ${capitalize(name)}`; 
```

Output:
```
my name is STANLEY
```

## Html Fragments

Template literals allow us to create HTML fragments easily. This works well because of their good support for multi-line strings.

Before ES6, to generate multi-line HTML code, we had to jump through hoops by using string concatenation and passing in new line characters.

We can see how we used to do it with our example which displays a person's information:

```javascript
const person = {
 name: 'Stanley',
 age: 23
}
```

Accessing the data and displaying in HTML code with normal strings:
```javascript
const htmlMarkup =
 "<div class='person'>" +
 "<h2>Person Details</h2>" +
 "<p>My name is " + person.name + "</p>" +
 "<p> I am " + person.age + " years old</p>" +
 "</div>";

element.innerHTML = htmlMarkup;

```

Template Literals:

```javascript
const htmlMarkup = `
 <div class='person'>
 <h2>Person Details</h2>
 <p>My name is ${person.name} </p> 
 <p>I am ${person.age} years old</p>
 </div>
 `;

element.innerHTML = htmlMarkup;
```

As you can see, the HTML markup with template literals is nice and clear. We can easily modify the code without worry about messing up concatenation.


## Nested Template Literals
One of the most interesting and useful features of template literals is **nesting**.

We can nest a template literal inside another template literal.

We will use a practical example where we will display a list of a person's favorite movies from an array.

```javascript
const person = {
 name: 'Stanley',
 age: 23,
 favoriteMovies: ['Terminator 2', 'Dunkirk', 'Thor 3', 'Jungle Book']
}
```

Nested Template Literal:

```javascript
const htmlMarkup = `
 <div class="person">
 <h2> ${person.name} favorite movies are: </h2>
 <ul>
 ${person.favoriteMovies
 .map(movie => `<li>${movie}</li>`).join("")
 }
 </ul>
`;

element.innerHTML = htmlMarkup;
```

In our example, we are nesting a template literal inside another one. 


 ![nested templae literals](/assets/images/posts/2019-10-29-template-literals/template-literals.jpg)

 By the way, if you are new to JavaScript and you were confused with this syntax:
 ```javascript
 ${person.favoriteMovies
 .map(movie => `<li>${movie}</li>`).join("")
 }
 ```
We are using the [map() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to loop though each element in the `person.favoriteMovies` array, and return an HTML list item of every element. 

The map() method takes an anonymous function. And we have passed it an anonymous arrow function. If you don't know about arrow functions, you can learn more about them here: [An introduction to Arrow Functions and Lexical ‘this’](https://www.stanleyulili.com/javascript/an-introduction-to-arrow-functions-and-lexical-this/)  


## Conclusion
Hopefully, this article has helped you understand the benefits of using template literals in ES6 and most importantly, how to write them.

If you have any questions or insights, feel free to leave a comment.



## Additional Resources

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

- [https://flaviocopes.com/javascript-template-literals/](https://flaviocopes.com/javascript-template-literals/)

- [https://developers.google.com/web/updates/2015/01/ES6-Template-Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)

- [https://css-tricks.com/template-literals/](https://css-tricks.com/template-literals/)
