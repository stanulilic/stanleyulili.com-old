Title: many to many relationships and why we need junctions tables.

Intro

When I was learning about the many to many relationships, I was suprised when I saw that it needs to a junction table. Of the the lrelationships, I found many to many the complex of them all, and I documented what helped me identify relationships between two tables.

You may be confused when you see the junction table, this article will explain why you need to have a junction table. We are going to take a table, split into two and create a relationship table. We will learn that it is possible to many to many without junction tables, finally we will learn why and what purpose the junection table serves in a many to many relationship. and mostly understand why many to many relationships need a junction tables. But for us to understand this, we must step back and see what happens when we don't have a conjuction table, it's with knowledge that we will understand why we need junction tables with many to many relationships

# preresuites

familarity with 3 relationships, many to one, one to one, many to many
Have Mysql or Postgres installed.

# Goals

implement a many to many relationship

# Identifying and verify a many to many relaship

First, we have the follwoing tables

Person
person_id name hobbies
1 "stnley" "moviess,music,songs
2

```
add code to create and update the rows
```

First, we will start by splitting the table into 1 normal form. I will not take about normalization in this article,(link to wikpedi), wikipedia covers it well but what you have to know is that when you create a table. each table field value must be atomic. That is only one value should exist in a column field.

So if we look at the table, hobbies is violating that. one option to conform to split the column into multiple columsn like so.

Person
person_id name hobbie1, hobbie2 hobbie3
1 stanley movies music camping
2 jane songs biking fishing

Now this option does' work well, what if a person want's to add 4 hobbies? we will be forced to alter the table and add another column, which is not practical.

Instead, what we can do is to remove the hobbies column into put it into a seperate table.

Person
person_id name
1 stanley
2 jane

The hobbies column has been removed.

Hobbies table
hobbies_id hobby
1 camping
2 fishing
3 cycling
4 gardening

Next, let's make sure we establish the right connection between these two tables.

Go to Person table.
Select first row, and look at the Hobbies table. Ask how many hobbies can "stanley" have? the answer is **many**. In our original example, "stanley" had 3 hobbies: hobbie 1, hobbie 2, hobbie 3.

Next, select the first role in the Hobbies ask which is camping, ask how many people in Person table can have camping as their hobby, if we look at the original table we will see that we have 2 who have cycling hobbies. so te answer to our question is **many**.

Now that we are sure that this is indeed a many to many relationship, lets go ahead and establish the connnection between the two tables.

# Connecting a many to many relationshp with foreign key

To establish the relationship between the two tables, we have to use a foreign key. A foreign Key(research definition) is a primary key inherited from a parent table that links two tables.

A foreign Key will help use identify the hobbies that belong to a person Stan or Jane.

We take the person_id from `Person` and put in the Hobbies table. Using the ID we will be able to see which hobbies belong to whom

Person
person_id name
1 stanley
2 jane

Hobbies table
hobbies_id hobby person_id
1 camping 2
2 fishing 1
3 cycling 1
4 gardening
2 fishing 2

As you can see, we have now establed a link, we now know what hobbies user with the person_id 1 has.

But notice we are duplicating a lot of data in teh Hobbies table,

For example.

Fishing appears 3 times
Garderning 2 times.

We are violating first normal form.

It would be more idea if we can establish the realtionship without having to make duplicates. The hobbies should only have only one Hobbie and that hobbie should not be repeated like so

hobbies_id hobby
1 camping
2 fishing

Do you have some ideas on how to do that? can you try to get what we whould do?j

That is where a junction table comes.

# Why do we need a junction table

That is where a junction table comes. A junction table will help us connnect Person and Hobbies without making duplicates in both of both tables.

We create foreign keys for the priamry key from one table and the other table.

Doing so gets rid of the duplicate as shown in the digaram below.

Notice now that we no longer have duplicate rows on Person Or Hobibes.

Instead the hobbies are only on the jounction table which createa one to many to many relationship for either of the tables as shown below.

#

# https://stackoverflow.com/search?q=many+to+relationship
