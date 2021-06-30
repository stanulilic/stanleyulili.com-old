# tips on identifying database table relationships.

# intro

For long I was always confused with the identifying database relationships like many-to-one relationship, many-to-many was the one that confused me the most. It turns out, the thing that let to confusion was that I was asking the wrong questions when looking at the tables. It wasn't until I started asking the right questions that I finally began to understand the relationships between tables.I would sometimes confuse many to many and one to many classes. I was muddling through, there was a time I thought I would never understand many to many relationships.

Over the weeks, I have come up with a technique that helps me understand a relationships, using the technique has helped identify almost any relationship in the table without many problems. Am not trying to share a silver bullet but just something that I wish I was told when I was learning the relationships and something I find helpful when I am trying to identify a table relationship. that helps me visualize the relationsships.

Maybe it might connect with you

In this article we will learn how to identify table connections easily, you will also learn how to choose the right relationship and when to use the relationship in your table.

# intended audience

Someone who is confused with the database relationships such one-to-one, many to one or many-to-many. My goal is help clear the confusing by helping tehm ask the right questions to know the relationships.
soomeone who wants to learn relationship

# why write this

Most of the times when I was reading articles, they say something like one customer can have one order, an order can belong to one customer. Most of the times it got lost in tranlation. I wold confuse myself doing. so I found myself an easy techinqye to help me easily identify relations. IThe confusino would also come when am working with ORM(if you don't waht orms are, just prentend I didn'st say) and focus on the articles.

It wasn't until I started doing this that I understood, I even laughed at myself for being confused for so long

# goals

To help you you aks the right questsions when you are stuck and failing to nderstand a relationship

# the techiniue

The technique I use is simple.

1. I look at one parent table and select one row.
2. go to the other table and ask how many rows in the child table can belong to the selected row
3. I note the answer
4. I go select a row in the child table
5. go back to the parent table ansk how many rows can belong/relate to the slected row.

And whala! I always got the answer.

So I let's see the technque in action

## one to one relationship

First, llets start with one-to-one relationship.
one to one relationship means that one row in a table relates to only row in another table. Oh yes, I hear your confusion, i know you want to example.

If am struggling identityig a relations, I tend to draw the table and fill it with examples, it helps me visualize the relations properly and my process also depends on it. You can do in your head or write them out in a paper, you see what works best for you.

So lets' start with a student and a registration number

At school, you are given a a registration number that only you can have. that is one to one relationship. So let me show how you can identify a relations.

Say we have the following tow tabls.

A student table with the following fields

- student_id
- name
- reg_id
- age

Now lets say you want to remove red_ig into int's table.

There are benefits of doing so, such you can easily query all ids, you can restrict the table if you want to keep the registration ID prive.

So you might end up with the following tables

Student  
 student_id name age
1 stannley| 3
2 jon| 4

Student is now the parent table

reg
id  
 BDD333

reg is now the rchild table

We will connect the two tables soon with a foreign, but first we need to understand the relationship between two tables.

Can you take a memoment to try to guess wwhy and how this kind of relationship table it is a one to one

if you don't understand, do the following to understand

To easely understand the relation, go to the parent table first and select _only one row_.

student_id name age
1 stannley| 3
2 jon| 4

We will select stanley(make sure to mark in the diagram)

now look at the the Registration table

Now ask the following questions
how many registration id's can belong to stanley(the row we selected in the parent table)?

or how many registration IDs can the student stanley have?

In my experience, a stuent has only one registratoin id. No other student can share the id, so the answers to our quenstions is **one**.

reg
id  
 BDD333
BDD233
BDD233
(make only one id)

Let's mark it somewhere, still on registration table, slect only one row. I will choose BD333.

Now lfocus at the studnet table and ask, how many students can have the ID "BD333"? or ask how many students can the registration id "bd333" belong to? the answer is **one**. only one student can have ids.

So one student table we got the answer one, one registrationt able we found the answer one.

So it we have one-to-one relationship.

**draw a erd showing the relationship**

Using this will help

Other examples, user, and user profile. They have one to one. A user can have only one profile, one profile belong to one use.

NOw we understand one-to-one relastions, let's move on to our next relationship: one to many

# many to one relationship

one to many or many to one relations.

One to many relationship is where one record in a table can associate with multiple reords in another table.

We will see what we mean by this soon.

So let's look another example, we are going to example. We will look at t

Student
studend_id
name
age
phonenmbers

Show a table with 3 rows of data

like
id name age numbers
1 stanley 33 +33333333,4333
2 jon 33 +33383, 333

Heere we want ot split numbers and put it it's on table.

As we can see, stanley has two numbers, jon has 4 numbers

our student table will be now lik ttis
studnet_id name age
1 stanley 33
2 jon 33

our phone number tables

phone_id phonenumber
1 +33838383
2 +338383888
3 +88888686885

For us to link the each student to any of the phone numbers, we need to understnad the relationsip.

So first off, we will use the same method.

First, select first row from Student table. We get stanely

Next, we look at the telephoneNumber tables and ask the following.

- how many numbers can belong to the stanley?

The original table shows that we had 2 numbers for it, so since this table stores all numbers, we will answer:**_many_**. Note that

A student can have more that one phone number,

Next select the first row, +383838383 and look at the student table.

Ask how many student's can have the same number? is it one? or two? ithe nswer is one. Because one person can register and own phone number. two people cannot own the same number.

so we have one-to-many relationship. In other words a single student can have multiple phone numbers. So in technical terms we can say one record is associated with multiple records.

**draw a erd showing the relationship**

So now, lets try to esta

# many to many relationship

Last, but not least is the many to many relationship. This is the one I struggled with the most for a long time, and yu will be suprosed to see how aapproachable it is using the technique we have been using throught out the article.

Let's another example.

---

import tip
if am looking at tables that have been separated, merge them into one such students and interests. First merge interests into the students table and look at the rows.

---

We are still on students table.

user table
user_id
name
favourite_moves

rows
1 "stanley", "titanic, avatar, the avengers"
2 "john", "terminator 2, I.robot, 33"

So now we need to split into it's own table

favourite_moves
movie_id movie
1 titanic
2 avatar
3 the avengers.

Lets try to estblish the relationship between tese two tables.

Let's select one user from the User table. The first row.

"stanley", now look at the the favourite movess. Ask how favourite moves can "stanley" have? one or two or 3 etc. You will agree will me that a person can have multiple favourite moves.

So in will get the answer of **many**, we note that.

Still on Favourite_moves tabl,e

Select one row. in this case _Titanic_

Next, look at the users row.

Ask how many users can have Titanic as their favourite movies? The movie made $billion dollars, so many people love it, the answer weill be **many**

Os the relationsip between users and interests will be **many to many ** relationship.

**draw a erd showing the relationship**

### in conclusion,

I hope you have now understood the techniques you can use when your confused about the relationships

# references

https://code.tutsplus.com/articles/sql-for-beginners-part-3-database-relationships--net-8561

keywords
https://stackoverflow.com/search?q=many+to+relationship
