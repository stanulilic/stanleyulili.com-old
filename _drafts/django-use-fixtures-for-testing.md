# how to use Django fixtures for unit testing

### INtro

These past few days I have been learning how to start creating fixtures. It was hard for me to find a consise tutorial to help answer all the questions I had. So am documenting everything I learned that helped me successfully export and load fixtures in the database.

In this article you will learn how to create fixtures in Django, load the fixtures in Django unit tests and verify that they work. Last but not least, we will look into how to use fixtures in unit testing when you have multiple databases.

## prerequises

- Knowledge of how to create a CRUD app in Django
- Familiarity with `JSON` format.
- Basisc understanding of how to create tests, not too much.

# What is a fixture

## Creating a Fixture

There are two ways to create fixutres depending on your testing needs.

- dump data on the terminal
- create fitures with the serialization framwork

### Dump data on CMD

https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-dumpdata

For example, in my main project I was working on, I had 400000 rows. I wanted to use 1000 rows for testing. Using the `dumpdata` command didn't give me that flexibility.

Which brings me to the next way of creating fixtures.

### Create fixtures from querysets or limit created fixtures

this option is flexible especially if you want to limit the amount fixtures or you want to create the fixtures from querysets.

You create the fixtures using the seriazation ramework which gives you options to export django fixtures in different formats such `JSON`,`xml`, `YAML` or `JSONL` , Our scope in this tutorial is for 'JSON` fixtures.

https://docs.djangoproject.com/en/3.2/topics/serialization/

So to create the fixture do the following, You can do it in your code or in the database shell. For the purspose of this turial, I will create them in the shell:

```
>>> from django.core import serializers
>>> data = serializers.serialize("xml", SomeModel.objects.all())
```

Next, I will export them.

```
f = open('output.json', 'w')
f.write(data)
f.close()
```

## Load fixtures in Django Unit tests

Before we can load fixtures in Django, we must make sure that we move them to a location Django can find.

Django requires that you creates a `Fixtures` directory in one your app directory. so let's do that.

```
mkdir fixtures
mv fix.json fixtures
```

Next, we will create a simple test in our

```
from django import test

class Unit(testcas):
    fixtures = ['blog.json']

    test_fixture_works(self):
        self.assertEqul(2, 2)
```

Note you want ot use multiple fixtures, you can specify them as `fixtures = ['fixture_one', 'fixtures2', etc]

let tests if everthing works

```
python manage.py test
```

output.

```
...
```

## Veryfying the fixture works

To veryfyi we have the data, we need to import the model we export. we exported `Pet`

```
from django import test
from pet.models import Pet

class Unit(testcas):
    fixtures = ['blog.json']

    test_fixture_works(self):
        print(Pet.objets.all())
        self.assertEqul(2, 2)
```

output

`python manage.py test`

Great! our fixtures are loading successfull in projects

## Use fixtures with multiple database

For examle you have two databases one, `hon', 'hdkd'

When you load the fixtures you will see that fixtures you no longer have to specify the databaase.

So fo example, if you had a database John. to use it in your code you had to specify the database

```
pet.objects.using('database').all()
```

but in tests, they work without it

```
pet.objects..all()
```

Now this brings a problem when you want to test functions that that have queries specifying a database

For example.

```
def getNames():
  Return some.objects.using('')
```

to unit test this.

````
import method
class Unit(testcas):
    fixtures = ['blog.json']

    test_fixture_works(self):
        expted = Pet.objets.all()

        self.assertEqul(some_method(), expected)

When you run the test you get the following error.

```AssertionError: Database queries to 'default' are not allowed in SimpleTestCase subclasses. Either subclass TestCase or TransactionTestCase to ensure proper test isolation or add 'default' to home.tests.TestViews.databases to silence this failure.```


To get arond ttis error you need to flash all databases use.

You can specify them as
````

unit test():
databases = {'default', 'pets'}```

or you can use the \__alL_

```
unit test():
databases = __all__
```

You are free to use any option but I prever the former.

In conlusion,

We have learned how to export, load and use fixtues in dajgo unit tests
