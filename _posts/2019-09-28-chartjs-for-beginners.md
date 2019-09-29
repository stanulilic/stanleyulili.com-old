
# The Beginner's Guide to Chart.js


### Introduction

Chart.js is a popular open source library for visualizing data. It allows you to create different types of responsive charts from datasets, such as bar charts, pie, line, donut, scatter, and many more.

In this tutorial, we are going to learn how to draw charts with Chart.js and how to customize them to suit our needs.

When your done with tutorial, you will learn how to create a chart like the one shown below:

![](image link comes here)

You can checkout the live demo and source code in the links below:
- [Source code on Github]()
- [View Demo]()

## Prerequisites

In order for you to understand this tutorial, you need to know the following:

- Basic understanding of Html and Css
- Basic familiarity with JavaScript

## Step 1 - Installation

Before we begin using Chart.js, we need install first. You can install Chart.js in a couple of ways.

- Approach 1: Using a CDN

This is fastest and easiest way to include Chart.js in your project, and it is what we are going to use in this tutorial. Make sure you grab the latest CDN link from [https://cdnjs.com/libraries/Chart.js](https://cdnjs.com/libraries/Chart.js). Grab the url that has `Chart.min.js` at the end.

At the time of this writing, the latest the version is 2.8, so the following is the link I will use in this tutorial:

```
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
```


- Approch 2: Using NPM

You can also install Chart.js by using NPM by typing the command below:

```
npm install chart.js --save
```

- Approach 3: Download from Github

Another way to include Chart.Js is by downloading the latest version from Github.

You can following link to download it: https://github.com/chartjs/Chart.js/releases/latest


There are still some  other ways to install Chart.js, we not going to cover them all but you can visit [this link](https://www.chartjs.org/docs/latest/getting-started/installation.html) to learn about other the other ways.

Now that we have learn how to install Chart.js, let proceed to adding it in our project

## Step 2 - Setup Project with Chart.js
You can setup your project on [Codepen](https://codepen.io/) or you can use a text editor like VSCode or Atom or anything you prefer.

We are going to create a basic `index.html` file and then load the CDN into the  `body` section. We will also create the `script.js` file, which will later add the code to create the charts with Chart.js. 

You can download [starting point here](link Here) to follow this tutoral if you prefer.

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

Now that we have included Chart.js in our project, lets now proceed to creating charts.



## Step 3 - Create a Canvas to render the charts
Chart.js requires the presence of Html5 Canvas which it uses to draw the charts. The canvas is used to draw lines, circles, etc. You can lear more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

Create the `canvas` inside the `body` tag and give it a width and height:

```html
<canvas id="myChart"></canvas>
```
The ID is very important, and you can name it anything you like but it is recommended to use a descriptive name representing the kind of charts you want to render.

My body tag looks this the following now:
```html
<body>
<canvas id="myChart"></canvas>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="script.js"></script>
</body>

```
## Step 3 - Prepare the data 

I currently have the following table which contains popular Javascript frameworks based on the number of stars they have on Github


| Name of JavaScript Framework | Github Stars |
|------------------------------|--------------|
| React                        | 136,850      |
| Angular                      | 52,122       |
| Vue                          | 148,825      |
| Hyperapp                     | 16,939       |
| Omi                          | 9,763        |


We are going to represent the data in a bar chart. The x-axis(horizontal) will be used to plot the Javascript frameworks while the y-axis(cross axis) will be used to plot the number of Github stars.

We need to store the date in arrays, we are going to store the frameworks names in a `framework` variable and store the Github stars in a `stars` variable

So open the `script.js` file and write the following code:

```
var stars = [135,850, 52,122, 148,825, 16,939, 9,763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];
```

As you can see, each framework in the `frameworks` variable corresponds with the number of stars it has. This is crucial to protting accurate charts.


## Step 4 - Create a bar Chart
Write the following code at the top of the `script.js` file:
```
var ctx = document.getElementById('myChart');
```
The code grabs the canvas element from html using the ID **myChart** and store it in a variable `ctx`.

You can name the variable anything you want,`ctx` is just a convection most programmers like to use, and it's what we will be using.


Now, let's create a chart.


To create an instance, you need  call the `new Chart()`.

```
var myChart = new Chart(ctx, {
    {
        type: 'bar',
        data: {}
    }
    
})
```

The `new Chart` takes two following arguments:
- `ctx` which is the variable used for storing the canvas element.
- **configuration object** where you specify the chart type, data and options.

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

- `data`: It contains the data(labels, datasets) that will be used to plot the charts. Dont worry about this, we will get to it shortly

- `options`:  configuration options to customize the charts such changing the position of legend.



Our code does not render the charts yet,  in order for us to render the charts, We need to pass the our data(the ones we stored in the variables `frameworks` and `stars`) in the data object like this:

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

By the way, the following is how my whole `script.js` file looks: 
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
Open your `index.html` file with a browser and you should now  a see a beatiful bar chart.

[][image come here]

### understanding Data property

Lets explain what happend here
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

The 'labels' takes an array(frameworks) and displays each and every element as a label on the x-axis.

The `datasets` takes an array of objects which has the following  properties:
  - label 
  - data

`label' property, takes a string. It is usually displayed on top of the chart or when hovering the bars

[!image comes here]

 `data` takes an array of values **stars** and displays the data on the y-axis(vertically)

[!]IMAGE COMES HERE

## Step 5 - Style the Chart
While, our bar chart might look fine, we can do better.

Let's style the bar chart to make it look more appealing.

We will use the following properties:
 - `backgroundColor` - Takes an array of Hexadecimal or RGBA colour values which will be used to colour the bars in the chart.
 - `borderColor` - It takes an array with colour values the same as the backgroundColor property. It will colour the borders of the bars.
 - `borderWidth` - It takes an Integer or a float.

 If you don't understand the properties, we will add them one by one so that you really understand how and when to use them.

**backgroundColor**

Let us now colour our bars by adding the backgroundColor with an array containing rgba colour values into the object in datasets property:

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

Note: i have taken the colour values from the documentation.

Our array 6 colour values because we have 6 bars, if you have bar, let's say 10, if you want to style each an every bar, you will need to create an array of 10 colour values.

**borderColor**

Let's create borders for our bar using `borderColor` property by passing it an array of 6 rgba colour values strings. Put if after the `backgroundColor` property

In order for it to work, you must also put also add the `borderWidth`, otherwise you won't see the borders.

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
You should now see a beatiful bar chart with borders

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
Creating a line chart is very simple, all we will to change the type from `type: "bar"` to `type: "pie"`:
```
var myChart = new Chart(ctx, {
  type: "pie",
  ....
```

[IMAGe colors]

Hover on the pie sections to see the label and the values

As you can see, most properties that we used to create the bar chart, also works with creating a pie chart.

In the next step, we will turn the our pie chart into a line chart.

## Step 6 - Create a line Chart

Turning a chart from pie chart or bar chart into a line chart is not very hard.

There are only a few things we need to be aware of to succesfully create beatiful line charts:

- `backgroundColor` is used to colour the points.  We will just pass one colour value, instead of passing on aray of values to style the points.
- `borderColor` is used to color the line

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

While the line chart look greats, I believe there are a few things we can change, we will change remove the fill on the lines and reduce the line curviture.

To achieve that, we will use the following properties:

- `fill` is add or remove filling of line underneath, to remove the filling, use `fill: false`

- `lineIntensity` is used to make line curviture, to remove the line curviture, set lineIntensity to zero.

```
...
 fill: false,
 lineTension: 0,
...
```
[image comes here]






## Conclusion

In this article you [configured/set up/built/deployed] [something]. Now you can....