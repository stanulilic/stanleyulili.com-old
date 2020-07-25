Rules from Google techincal writing course

## 1. Use terms consistently
The moral: apply the same unambiguous word or term consistently throughout your document.

Don't do this:
>**Protocol Buffers** provide their own definition language. Blah, blah, blah. And that's why **protobufs** have won so many county fairs.

Do this:
introduce a long-winded concept name or product name, you may also specify a shortened version of that name. Then, you may use that shortened name throughout the document.

>Protocol Buffers (or protobufs for short) provide their own definition language. Blah, blah, blah. And that's why protobufs have won so many county fairs.

## 2.Use acronyms properly
On the initial use of an unfamiliar acronym within a document or a section, spell out the full term, and then put the acronym in parentheses. Put both the spelled-out version and the acronym in boldface. For

>This document is for engineers who are new to the **Telekinetic Tactile Network (TTN)** or need to understand how to order TTN replacement parts through finger motions.

Note: Do not cycle back-and-forth between the acronym and the expanded version in the same document.

## 3. Disambiguate pronouns
Consider the following pronoun guidelines:

- Only use a pronoun after you've introduced the noun; never use the pronoun before you've introduced the noun.
- Place the pronoun as close as possible to the referring noun. In general, if more than five words separate your noun from your pronoun, consider repeating the noun instead of using the pronoun.
- If you introduce a second noun between your noun and your pronoun, reuse your noun instead of using a pronoun.

## 4. Choose strong verbs

To engage and educate readers, choose precise, strong, specific verbs. Reduce imprecise, weak, or generic verbs, such as the following:

- forms of be: is, are, am, was, were, etc.
- occur
- happen

examples of weak to strong verbs:
| Weak Verb                                        | Strong Verb                                     |
|--------------------------------------------------|-------------------------------------------------|
| The error occurs when clicking the Submit button | Clicking the Submit button triggers the error   |
| This error message happens when...               | The system generates this error message when... |
| We are very careful to ensure...                 | We carefully ensure...                          |
|                                                  |                                                 |

Execice:
Clarify the following sentences by picking more specific verbs. Along the way, feel free to rearrange the sentences and to add, modify, or delete words:

- When a variable declaration doesn't have a datatype, a compiler error happens.
- Compiler errors occur when you leave off a semicolon at the end of a statement.

A few possible answers:

- When a variable declaration doesn't **specify** a datatype, the compiler **generates** an error message.

- If you declare a variable but don't specify a datatype, the compiler generates an error message.

A few possible answers:

- Compilers issue errors when you omit a semicolon at the end of a statement.
- A missing semicolon at the end of a statement triggers compiler errors.

### Reduce there is/there are
In the best case scenario, you may simply delete There is or There are (and possibly another word or two later in the sentence). For example, consider the following sentence:

> There is a variable called met_trick that stores the current accuracy.

Removing There is replaces the generic subject with a better subject. For example, either of the following sentences is clearer than the original:

> A variable named met_trick stores the current accuracy. The met_trick variable stores the current accuracy.

You can sometimes repair a **There is** or **There are** sentence by moving the true subject and true verb from the end of the sentence to the beginning. For example, notice that the pronoun you appears towards the end of the following sentence:

> There are two disturbing facts about Perl you should know.

Replacing There are with You strengthens the sentence:

> You should know two disturbing facts about Perl.

Exercies:
Clarify the following sentences by removing There is, and possibly rearranging, adding, modifying, or deleting other words:

- There is a lot of overlap between X and Y.
- There is no creator stack for the main thread.
- There is a low-level, TensorFlow, Python interface to load a saved model.
- There is a sharding function named distribute that assigns keys.

Answers:

- X and Y overlap a lot.
- The main thread does not provide a creator stack.
- TensorFlow provides a low-level Python interface to load a saved model.
- The distribute sharding function assigns keys.

### Minimize certain adjectives and adverb
adjectives and adverbs can make technical documentation sound dangerously like marketing material. For example, consider the following passage from a technical document:

> Setting this flag makes the application run screamingly fast.

Granted, screamingly fast gets readers attention but not necessarily in a good way. Feed your technical readers factual data instead of marketing speak. Refactor amorphous adverbs and adjectives into objective numerical information. For example:

> Setting this flag makes the application run 225-250% faster.

Does the preceding change strip the sentence of some of its charm? Yes, a little, but the revamped sentence gains accuracy and believability.

## 5. Focus each sentence on a single idea
Focus each sentence on a single idea, thought, or concept. Just as statements in a program execute a single task, sentences should execute a single idea. For example, the following very long sentence contains multiple thoughts:

> The late 1950s was a key era for programming languages because IBM introduced Fortran in 1957 and John McCarthy introduced Lisp the following year, which gave programmers both an iterative way of solving problems and a recursive way.

Breaking the long sentence into a succession of single-idea sentences yields the following result:

> The late 1950s was a key era for programming languages. IBM introduced Fortran in 1957. John McCarthy invented Lisp the following year. Consequently, by the late 1950s, programmers could solve problems iteratively or recursively.


### Convert some long sentences to lists
Inside many long technical sentences is a list yearning to break free. For example, consider the following sentence:

> To alter the usual flow of a loop, you may use either a break statement (which hops you out of the current loop) or a continue statement (which skips past the remainder of the current iteration of the current loop).

When you see the conjunction or in a long sentence, consider refactoring that sentence into a bulleted list. When you see an embedded list of items or tasks within a long sentence, consider refactoring that sentence into a bulleted or numbered list. For example, the preceding example contains the conjunction or, so let's convert that long sentence to the following bulleted list:

> To alter the usual flow of a loop, call one of the following statements:

- `break`, which hops you out of the current loop.
- `continue`, which skips past the remainder of the current iteration of the current loop.

**Exercise**
Refactor the following sentences into something shorter and clearer. Make sure that your answer contains a list:

> 1. To get started with the Frambus app, you must first find the app at a suitable store, pay for it using a valid credit or debit card, download it, configure it by assigning a value for the Foo variable in the /etc/Frambus file, and then run it by saying the magic word twice.

>2. KornShell was invented by David Korn in 1983, then a computer scientist at Bell Labs, as a superset of features, enhancements, and improvements over the Bourne Shell (which it was backwards compatible with), which was invented by Stephen Bourne in 1977 who was also a computer scientist at Bell Labs.

**Answer**:

answer 1:

Take the following steps to get started with the Frambus app:

- Find the app at a suitable store.
- Pay for the app using a valid credit or debit card.
- Download the app.
- Configure the app by assigning a value for the Foo variable in the /etc/Frambus file.
- Run the app by saying the magic word twice.

Answer 2:

The following two Bell Labs computer scientists invented popular shells:
- Stephen Bourne invented the Bourne Shell in 1977.
- David Korn invented the KornShell in 1983.

The KornShell's features are a backwards-compatible superset of the Bourne Shell's.

### Eliminate or reduce extraneous words
Many sentences contain filler—textual junk food that consumes space without nourishing the reader. For example, see if you can spot the unnecessary words in the following sentence:

> An input value greater than 100 causes the triggering of logging.

Replacing **causes the triggering of** with the much shorter verb **triggers** yields a shorter sentence:

>An input value greater than 100 triggers logging.

With practice, you'll spot the extraneous words and take inordinate glee in removing or reducing them. For example, consider the following sentence:

> This design document provides a detailed description of Project Frambus.

The phrase **provides a detailed description of** reduces to the verb **details**, so the resulting sentence becomes:

> This design document details Project Frambus.

The following table suggests replacements for a few common bloated phrases:

| WordyConcise                   | Concise |
|--------------------------------|---------|
| at this point in time now      | now     |
| determine the location of find | find    |
| is able to                     | can     |
| a very large change           | drastic |
| provides a detailed description of| details |
| During the course of       | During    |
| causes the production of   | produces  |
| enhances the clarification | clarifies |
| In spite of the fact       | Although  |
| In the form of             | As        |
| In many cases              | often     |
| In the event of            | if        |
| Exhibits the ability to    | can       |

### Exercise
Shorten the following sentences without changing their meaning:

- In spite of the fact that Arnold writes buggy code, he writes error-free documentation.
- Changing the sentence from passive voice to active voice enhances the clarification of the key points.
- Determine whether Rikona is able to write code in COBOL.
- Frambus causes the production of bugs, which will be chronicled in logs by the LogGenerator method.

Click the icon to see the answer.

Here are some possible solutions:

1. Although Arnold writes buggy code, he writes error-free documentation.
Alternative answer: Arnold writes buggy code. However, he writes error-free documentation.
2. Changing the sentence from passive voice to active voice clarifies the key points.
3. Determine whether Rikona can code in COBOL.
4. Frambus produces bugs, which the LogGenerator method logs.

### Distinguish that from which

In the United States, reserve which for nonessential subordinate clauses, and use that for an essential subordinate clause that the sentence can't live without. For example, the key message in the following sentence is that Python is an interpreted language; the sentence can survive without Guido van Rossum invented:

> Python is an interpreted language, **which** Guido van Rossum invented.

By contrast, the following sentence requires don't involve linear algebra:

> Fortran is perfect for mathematical calculations **that** don't involve linear algebra.

If you read a sentence aloud and hear a pause just before the subordinate clause, then use which. If you don't hear a pause, use that. Go back and read the preceding two example sentences. Do you hear the pause in the first sentence?

Place a comma before **which**; do not place a comma before **that**.

## 6. Lists and Tables
Use a bulleted list for unordered items; use a numbered list for ordered items. In other words:

- If you rearrange the items in a bulleted list, the list's meaning does not change.
- If you rearrange the items in a numbered list, the list's meaning changes.

###  Keep list items parallel
What separates effective lists from defective lists? Effective lists are parallel; defective lists tend to be nonparallel. All items in a parallel list look like they "belong" together. That is, all items in a parallel list match along the following parameters:

- grammar
- logical category
- capitalization
- punctuation

Example:
The following list is parallel because all the items are complete sentences with complete sentence capitalization and punctuation:

- Carrots contain lots of Vitamin A.
- Potatoes taste delicious.
- Cabbages provide oodles of Vitamin K.

### Start numbered list items with imperative verbs
Consider starting all items in a numbered list with an imperative verb. An imperative verb is a command, such as open or start. For example, notice how all of the items in the following parallel numbered list begin with an imperative verb:

1. Download the Frambus app from Google Play or iTunes.
2. Configure the Frambus app's settings.
3. Start the Frambus app.


### Exercise - practice shortening sentences
Make the following list parallel. Ensure that each element in the result list begins with an imperative verb:

1. Stop Früvous
2. The key configuration file is /moxy/fruvous. Open this file with an ASCII text editor.
3. In this file, you will see a parameter named Carambola, which is currently set to the default value (32). Change this value to 64.
4. When you are finished setting this parameter, save and close the configuration file
5. now, start Früvous again.

Click the icon to see the answer.
The following is one possible answer:

1. Stop Früvous.
2. Open the key configuration file, /moxy/fruvous, with an ASCII text editor.
3. Change the Carambola parameter from its default value (32) to 64.
4. Save and close the configuration file.
5. Restart Früvous.

### Punctuate items appropriately
If the list item is a sentence, use sentence capitalization and punctuation. Otherwise, do not use sentence capitalization and punctuation. For example, the following list item is a sentence, so we capitalized the **M** in **Most** and put a period at the end of the sentence:

- Most carambolas have five ridges.

However, the following list item is not a sentence, so we left the **t** in **the** in lowercase and omitted a period:

- the color of lemons


### Introduce each list and table(important)
We recommend introducing each list and table with a sentence that tells readers what the list or table represents. In other words, give the list or table context. Terminate the introductory sentence with a colon rather than a period.

Although not a requirement, we recommend putting the word **following** into the introductory sentence. For example, consider the following introductory sentences:

```
The following list identifies key performance parameters:

Take the following steps to install the Frambus package:

The following table summarizes our product's features against our key competitors' features:
```

Here are a couple of possible introductory sentences for the a table:

```
The following table contains a few key facts about some popular programming languages:
```
```
The following table identifies the inventor, year of invention, and key feature of three popular programming languages:
```


Words to use and avoid.
| Words to avoid                | Concise, active |
|--------------------------------|---------|
|  For example, let's say you wrote                  | For example, suppose you wrote   |
| To evaluate a million input lines, lets create a loop| To evaluate a million input lines, create a loop
| therefore, you must write abundant unit tests|therefore, write abundant unit tests.| 

