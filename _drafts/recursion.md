recursion is when a funciton calls it sell repetedley

For example

function run() {
ren()
}

run()

when run function is called, execution switche to run and it finds a function call to itself.

Again run functione xecutes and reaches run() and call it self again and again.

So running this fuction in the console
result into.

VM205:2 Uncaught RangeError: Maximum call stack size exceeded

We have stretched the browser limit stack limit, we have created an infity loop.

Another to recrite this kind is using a

function run() {

}
for (var i=0; i<Infinity; i++) {run()}

NOtes: explain about the call stack

## another explaination

say yuo have a function hello world function and you wanted to run it 5 times.

```
function hello() {
    print('hello`)
}
```

To run it five times, you would use a for loop to run.

```
for (i = 0 i < 5; i++>)
 run();
 }
```

and yes you would get that

Buy apart from loops, you can also give that function funcitonaltiy to loop ite.

Now let's go back to the explaining it self, we said recursion is functionc apability to call itself.

so you can any function can call itself

for example.

```
 function hello() {
     print('the function')
     calling the function
     hello();
 }
```

```oops we got an errror maxi
``

We have created an infinity recursion or in other words the function keeps calling itelf for ever and ever without stopp


This is a initfinity loop same as

```

for (i ; i < infitny> run()```

in anormal loop I tried, you have a condition that stops the loop.

like i < 5, runs the loop only when i is less than 5, the moment it passes 5, it stops executiong.

## Stop a recurion

So we noticed our function keeps executing multiple times to infinity, the stops the infity loop.

We will midfy it and give it a value

```
def print(a) {
    rpint(lleo world)
     print(a)
}
```

Like in a loop, we need to reduce create a condition, if we want to run it 5 times, we need to reduce 5 everytime the fuction runs it self.

look kind like this.

for(var i = 5; i > 0; i--) {
run('hello')}

    ## explain loops, deconstrct a loop and use recursion as ana exaple

HInt: if you sitll are getting lost with recursion.

viualize a for loop around
the function

## practical exampeles

generate list items

## when to use recursio

https://www.reddit.com/r/learnprogramming/comments/6gh0rk/recursion_in_javascript/
