---
header:
 teaser: /assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/featured-image.jpg
feature_image: /assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/featured-image.jpg
featured_image_alt: featured-image
excerpt: I run into this error **"running scripts is disabled on this system"**  as I was trying to activate

categories:
 - Python
tags:
 - python
title: Difference between \__init__ and \__call__ in python
---


Many people new to Python are always confused with magic method __init__ and self. 

In this article, I will explain in layman terms everything you need to know about `__init__` method and `self`  and provide examples that shows you how to use them.

We are going to see examples where without __init__ method and then introduce them later, doing it likes that, will help us see the benefits of __init__ method.

In order for you best understand where  __init__ method and self comes in.  it's will be best for us to  see what happens when you don't have an __init__ method in the class. it's very possible to create classes witohut the __init__ method. I have to admit, It took me a long time to realize that, I was under impression that all the time the class must have the __init__. 

This way, we will able to see the importance of it,

First off, lets' create an empty class that does nothing:
```
    class Person:
        pass
    person1 = Person()
```
we have created an instance **person**, the class will still do nothing

This class, doesn't do us any good, so lets try to something useful.

We can add attributes to our empty class

```
person1 = Person()
person1.name = 'stanley'
print(name)
```

let's create another instance:
j = H()
j.name = 'john'
print(l.name) // 'john'

As you can see, it is very much possible to set attributes to our empty class. You can add as many attributes as you like.

You can also create as many instances as you want.

https://stackoverflow.com/questions/2709821/what-is-the-purpose-of-the-word-self-in-python

# Use GreetPerson() method not sayname()

## What is self?
self is nothing special, it's just a connvection followed by Python programmers. You will understand this in a just  a monent.

To really understand self, we will need to look at from a different angle. 

Continuing with our previous example: 

let us create a function that print the instance name attribute.

for us to be able to print the instance attribute with our regular function, we will need to pass the instance into the function:

```
class H:
        pass

def sayPerson(obj) {
    print('hello' + obj.name)
}

l = H()
l.name = 'stanley'

sayPerson(l) # calls the sayPerson() function with the instance l as an argument.
```

When the function runs. we get the following output:

hello stanley

For the function to print the attribute name you must pass the instance as an argument like sayPerson(l) and the function must have a parameter which can have any name you want. We can rename the `obj` paramater to `self` or `someobj` or any name you want. 

Let us rename our parameter to from 'obj' to 'self'

class H:
        pass

def sayPerson(self) {
    print('hello' + self.name)
}

l = H()
l.name = 'stanley'
sayPerson(l)

`self` is just a name. It's nothing special. It does not do anything.

Let's go ahead and convert the  sayperson() function into an H() method:

class H:
   def sayname(self):
     print('hello' + self.name)
 
k = H() // creat an instance
k.name = 'stanley'
k.sayName()

'self' is not doing anything special, you are free to name it anything you want. If we wanted we could go back to the previous parameter name 'obj' if we wanted and Python won't complain:

class H:
   def sayname(obj):
     print('hello' + obj.name)
 
k = H() // creat an instance
k.name = 'stanley'
k.sayName()

output :

hello stanley

Python will complain only if you leave out the self or whatever you choose to call it. Even if what the method does is just say print "hello world" string:
  
  ```
    class H:
    def sayhellowrold():
        print('hello world')
        
   def sayname(obj):
     print('hello' + obj.name)
 
k = H() // creat an instance
k.sayHelo()// python will compain
k.name = 'stanley'
k.sayName()
  ```
error:
TypeError: he() takes 0 positional arguments but 1 was given

Why does this error happens? because the method sayNme() expects to recieve an instance it's called.

But where does the instance comes from? you might ask. It's good question, after all, when calling the method we are not passing anything.

```
k = H() // creat an instance
k.sayName()
```

So it's really strange that the method expects us to send something.

Here is the thing. 
when you call the method SayName()
``k.sayName``
Python sends the **K** instance automatically to the method. You do not need to put it there like this:

```
k.sayname(k)
```

Python behind the scenes sends the instace each and everytime **any method** is called.

So how come we a
continueing wth our example:

class H:
   def sayname(obj):
     print('hello' + obj.name)
 
k = H() // creat an instance
k.name = 'stanley'
k.sayName()

Do you notice that we are not passing the instance into the method call like we did before.
```
k.sayName()
```
The reason why we are not passing the instance, is because the instance is passed automatically as the first argument to the method is called.

You do not need to pass the instance when calling any method. Python does it automatically for you when it calls the method like this:

H.sayName(k/instance)

But what Python
I know your wondering why you can't  see self anywere?

Remember I said self is just a convection used, it can be named anything you like. In our case it has been name **obj**

   def sayname(obj):
     print('hello' + object.name)



So sayPerson is now a method in H


I don't about you, but setting attributes each everytime I create an instance gets tiring fast. Image if I have to set the attribute name, age, height for each instance? no, there is gotta be another way.

So instead of setting our attributes on the instances, how we set them in the class. How do we that? you might ask.

 - we can create a class with a method setMyAttributes to help us set the attribute for us.

 i.e class H:
         def setmyattributes(self, name):
           self.name = name

        def sayname(self):
            print('hello' + self.name)
  d = H()

  so now instead of doing this
   d = h()
   d.name = 'Stanley'
   d.sayname()

   we can now do this:

   d = h()
   d.setMyAttributes('stanley);
   d.setname("stnaley)

You may be like I don't see a huge difference? ou might say. It's all the same.

Well to see the benefits of our setting the attributes using a method(), let's make our sayname method a little more uselful that it is.

In our old way:
class H:
    def sayperson(self):
        print('Your name is' + self.name + 'you he live in' + self.location)
        print('You are ' + str(self.age) + 'year\'s old')


d = H()
d.name = 'hello'
d.location = 'blantyre'
d.age = 28
d.sayperson()

if you want set the attributes for another instance you have do that way multiple times

d = H()
d.name = 'john'
d.age = 23
d.sayperson()

##### output: Your name ishelloyou he live inblantyre
You are 28year's old

#### str(age) converts number to string. so 23 will be '23'

The code is more verbose, we can do better than this.

Let's do the same this with our setmyattributes method:


class H:
    def setmyattributes(self, name, location, age):
        self.name = name
        self.location = location
        self.age = age

    def sayperson(self):
        print('Your name is' + self.name + 'you he live in' + self.location)
        print('You are ' + str(self.age) + 'year\'s old')


to initialize our attributes, we only
do :
d = H()
d.setmyattributes('stanley', 'blantyre', 28)
d.sayperson()

if we create another instance:
h = H()
d.setmyattributes('john', 'bt', 30);

As you can see, this is much old method, no more typing 3 lines just to inilize our functions. we can do now initizize only one method.

With one line we can initialize our attributes


self- every method in a class recieves automatically special first argument which is called self by convection.

## __init__ method:
So far, we have been getting by using the setmyattributes methods. There is still a better way, Comes the __init__method. 

where the init method comes:
So instead of calling the setmyattributes method each and eveytime we create an instance, we can use the __init__ method which gets called automatically.

__init__ method is a special method that gets called automatically evertime when an instance is created.

Let's beck to our previous code using the setattributemethod,

class H:
    def setmyattributes(self, name, location, age):
        self.name = name
        self.location = location
        self.age = age
     ......

Instead of using the setattributes, we can use the __init__ method like this:

class H:
    def __init__(self, name, location, age):
        self.name = name
        self.location = location
        self.age = age

    def sayperson(self):
        print('Your name is' + self.name + 'you he live in' + self.location)
        print('You are ' + str(self.age) + 'year\'s old')

Now, here is where it get's interesting:

You might recall when we wanted to initalize the attributes we had to do this:

h = H()
d.setmyattributes('john', 'bt', 30);

when  Using the __init__ method, we pass the values like this follow

h = H('john', 'bt', 30)

What happens now is that Python automaticallly calls the __init__ method when we create the **h instance**.

It passes 'john', 'bt', 30 to the init method after the the first argument self, so it becomes like this:
 __init__(self, 'john', 'bt', 30):
    self.name = 'john'
    self.location = 'bt'
    self.age = 30

If it’s coded and inherited, Python automatically calls a method named __init__ each
time an instance is generated from a class. The new instance is passed in to the self
argument of __init__ as usual, and any values listed in parentheses in the class call go
to arguments two and beyond. The effect here is to initialize instances when they are
made, without requiring extra method calls

You do not need  to call it.

The arguments it is supposed to take are passed th
https://www.digitalocean.com/community/tutorials/how-to-construct-classes-and-define-objects-in-python-3

MUST read: https://www.reddit.com/r/learnpython/comments/2nesmi/can_somebody_eli5_how_init_works_with_classes_i/


https://www.reddit.com/r/learnpython/comments/1cpu7x/explain_classes_init_and_self_like_im_five/
https://stackoverflow.com/questions/111234/what-is-a-callable
https://www.reddit.com/r/Python/comments/3i47mh/practical_use_of_call/
https://stackoverflow.com/questions/9663562/what-is-the-difference-between-init-and-call
https://stackoverflow.com/questions/5824881/python-call-special-method-practical-example
https://stackoverflow.com/questions/625083/what-init-and-self-do-on-python

https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e


## Conclusion

In this article you [configured/set up/built/deployed] [something]. Now you can....

<!-- Speak  to reader benefits of this technique or procedure and optionally provide places for further exploration. -->