
# The Beginner's Guide to Chart.js


### Introduction

Chart.js is a popular open-source library for visualizing data. It allows you to create different types of charts from datasets such as bar charts, pie, line, donut, scatters, and many more.

In this tutorial, we are going to learn how to draw charts with Chart.js and how to customize them to suit our needs.

When you're done with the tutorial, you will learn how to create a chart like the one shown below:

![](image link comes here)

You can check out the live demo and source code in the links below:
- [Source code on Github]()
- [View Demo]()

## Prerequisites

For you to understand this tutorial, you need to know the following:

- Basic understanding of Html and CSS
- Basic familiarity with JavaScript(OOP, Arrays)

## Step 1 - Installation

Before we begin using Chart.js, we need to install it first. You can install Chart.js in a couple of ways.

- Approach 1: Using a CDN

This is the fastest and easiest way to include Chart.js in your project, and it is what we are going to use in this tutorial. Make sure you grab the latest CDN link from [https://cdnjs.com/libraries/Chart.js](https://cdnjs.com/libraries/Chart.js). Copy the URL that has `Chart.min.js` at the end.

At the time of this writing, the latest version is 2.8, so I will use the following link in this tutorial:

```
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
```


- Approach 2: Using NPM

You can also install Chart.js by using NPM 

Copy and paste the command below to download it in your project:

```
npm install chart.js --save
```

- Approach 3: Download from Github

Another way to include Chart.Js is to download the latest version from Github.

You can follow the link to download it: https://github.com/chartjs/Chart.js/releases/latest


There are still other ways to install Chart.js, we not going to cover them all but you can visit [this link](https://www.chartjs.org/docs/latest/getting-started/installation.html) to learn about more about installing Chart.js

Now that we have learned how to install Chart.js, let's add it to our project.

## Step 2 - Setup Project with Chart.js
You can set up your project on [Codepen](https://codepen.io/) or you can use a text editor like VSCode or Atom or anything you like.

We are going to create a basic `index.html` file and then load the CDN into the  `body` section. We will also create the `script.js` file, which will later add the code to create the charts with Chart.js. 

You can download [starter files](link Here) to use it with the tutorial.

It contains only three files: `index.html`, `main.css` and `script.js`.

The `script.js` and `main.css` are empty, the `index.html` file contains the following code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chart.js tutorial</title>
</head>
<body>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="script.js"></script>
</body>
</html>
```

If you downloaded Chart.js straight from Github or used NPM,
You need to include it as:
```
<script src="path/to/Chart.min.js"></script>
```

Now that we have included Chart.js in our project, lets now proceed to create a place to render the charts first.


## Step 3 - Create a Canvas to render the charts
Chart.js requires the presence of the Html5 Canvas tag which it uses to draw the charts. The canvas is used to draw lines, circles, etc. You can learn more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

Create the `canvas` tag inside the `body` tag:

```html
<canvas id="myChart"></canvas>
```
The ID is very important, and you can name it anything you like but it is recommended to use a descriptive name representing the kind of charts you want to render.

My body tag, now looks like the following:
```html
<body>
<canvas id="myChart"></canvas>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="script.js"></script>
</body>

```
## Step 3 - Prepare the data 

I currently have the following table which contains popular Javascript frameworks based on the number of stars they have on Github:


| Name of JavaScript Framework | Github Stars |
|------------------------------|--------------|
| React                        | 136,850      |
| Angular                      | 52,122       |
| Vue                          | 148,825      |
| Hyperapp                     | 16,939       |
| Omi                          | 9,763        |


We are going to represent the data in a bar chart. The x-axis(horizontal) will be used to plot the Javascript frameworks as labels while the y-axis(cross axis) will be used to plot the number of Github stars each framework has.

We need to store the data in arrays. We are going to store the names of the frameworks in a `frameworks` variable and store the Github stars in a `stars` variable.

So open the `script.js` file and type the following code:

```
var stars = [135,850, 52,122, 148,825, 16,939, 9,763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];
```

As you can see, each framework in the `frameworks` variable corresponds with the number of Github stars it has on the `stars` variable. This is crucial to plotting accurate charts.


## Step 4 - Create a bar Chart
Write the following code at the top of the `script.js` file:
```
var ctx = document.getElementById('myChart');
```
The code grabs the canvas element from html using the ID `myChart` and store it in a variable `ctx`.

You can name the variable anything you want,`ctx` is just a convection most programmers like to use, and it's what we will be using.


Now, let's create a chart. To create a chart, we first need to create an instance of the `Chart()`.

To create an instance, you need to call the `new Chart()`, so type the following code:

```javascript
var myChart = new Chart(ctx, {
    {
        type: 'bar',
        data: {}
    }
    
})
```

The `new Chart()` object takes the following arguments:
- `ctx` which is the variable used for storing the canvas element.
- **configuration object** which allows you specify the chart type, data and chart options.

The configuration object looks like this:
```javascript
{
    type: 'bar',
    data: {},
    options: {} // this is optional
}
```

The following is an explanation of the properties:

- `type: 'bar'`:  allows you to specify the chart you want to create. In our case, we are creating a bar chart. If you wanted a pie, or line chart, you could specify it as `type: 'pie'` or `type: 'line'`.

- `data`: It contains the data(labels, datasets) that will be used to plot the charts. Don't worry about this, we will get to it shortly.

- `options`:  configuration options to customize the charts such as changing the position of legend.



Our code does not render the charts yet, for us to render the charts, We need to pass  our data(the ones we stored in the variables `frameworks` and `stars`) in the data object like this:

```
var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Popular JavaScript Frameworks',
                data: stars
            }]
        },
});
```

By the way, my whole `script.js` file looks: 
```
var ctx = document.getElementById('myChart');

var stars = [135,850, 52,122, 148,825, 16,939, 9,763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Github Stars',
                data: stars
            }]
        },
})
```
Open your `index.html` file with a browser and you should now see a beautiful bar chart.

[][image come here]

### understanding the Data Property

Let me now explain what happened here:
```
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Github Stars',
                data: stars
            }]
        },
```

The data property object has two properties `labels` and `datasets`.

The 'labels' takes an array(frameworks) and displays every element as a label on the x-axis.

The `datasets` takes an array of objects which has the following  properties:
  - label 
  - data

`label' property, takes a string. It is usually displayed on top of the chart or when hovering the bars.

[!image comes here]

 `data` takes an array of values **stars** and displays the data on the y-axis(vertically).

[!]IMAGE COMES HERE

## Step 5 - Style the Chart
While our bar chart might look fine, we can do better.

Let's style the bar chart to make it look more appealing.

We will use the following properties:
 - `backgroundColor` - Takes an array of Hexadecimal or RGBA color values(strings) which will be used to color the bars in the chart.
 - `borderColor` - It takes an array of color values strings, the same as the backgroundColor property. It will color the borders of the bars.
 - `borderWidth` - It takes an Integer or a float value and it specifies how wide a border should be.

To understand the properties clearly, we will add them one by one so that you understand how and when to use them.

**backgroundColor**

Let us now color our bars by adding the backgroundColor with an array containing RGBA color values into the object in datasets property:

```
    ....
    data: stars,
    backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)"
    ]
    ....
```
[IMAGE coes here]

Note: I have taken the color values from the documentation.

Our array has 6 color values because we have 6 bars, so if you have, let's say... 10 bars. To style each bar, you will need to create an array of 10 color values.

**borderColor**

Let's create borders for our bar using `borderColor` property by passing it an array of 6 RGBA color values. Put it after the `backgroundColor` property.

For the borderColor property to work, you must also put add the `borderWidth`, otherwise, you won't see the borders.

```
        ....
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
        ....

```
You should now see a beautiful bar chart with borders

[IMAGE COMES HERE]

This is how my whole `script.js` file looks

```
var ctx = document.getElementById("myChart");

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  }
});
```
Now we have successfully created our bar chart, let's turn into a pie chart in the next step.

## Step 6 - Create a Pie Chart
Creating a line chart is very simple, all we need to do is to change the type from `type: "bar"` to `type: "pie"`:
```
var myChart = new Chart(ctx, {
  type: "pie",
  ....
```

[IMAGe colors]

Hover on the pie sections to see the label and the values.

As you can see, most properties that we used to create the bar chart, also works with creating a pie chart.

In the next step, we will turn our pie chart into a line chart.

## Step 6 - Create a Line Chart

Turning a chart from a pie chart or a bar chart into a line chart is not very hard.

There are only a few things we need to be aware of to successfully create a line chart:

- `backgroundColor` is used to color the line points.  We will just pass one color value, instead of passing on an array of values to style the points.
- `borderColor` is used to color the line.

```
...
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  }
});

```

[IMAGE COMES Here]

While the line chart looks good, I believe there are a few things we can change, we will remove the fill underneath the line and reduce the line curvature.

To achieve that, we will use the following properties:

- `fill`  is used to specify whether a line should have a fill underneath. If the property is not included, the line will have a fill by default, to remove the filling, you use `fill: false`.

- `lineIntensity` is used to increase or decrease the line curvature, to remove the line curvature, set `lineintensity` to zero.

```
...
 fill: false,
 lineTension: 0,
...
```
[image comes here]






## Conclusion

In this article you [configured/set up/built/deployed] [something]. Now you can....