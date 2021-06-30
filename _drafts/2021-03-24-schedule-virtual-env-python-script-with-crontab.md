Title "Schedule virtualenv python script with cron"

Research Notes:

Talk about modules in a virtualenv(python environemtn). Tell the reader they can access the `python` executable by running `which python` when they activate virtualenv. He then tells the reader to run `cron -e` if the script does not require root permissions, run `sudo cron -e` if it requires root permissions.

Execute python scripts:
The user talks about using shebang. A [shebang line](https://docs.python.org/3/using/windows.html#shebang-lines). A shebang line starts with `#!`

# How to deploy Python Code to a Linux server

## create python Code

https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform

## Push Code to Github

- Git push

## Pull Code to Server

- clone the repo from github
-

## Run the Script

https://realpython.com/run-python-scripts/

- talk about how run scrip with shebang
- run script anywhere
- Run with python command

- Run with python -m

## Update changes to a python script

# refecnces:

https://www.reddit.com/r/learnpython/comments/abxu08/run_python_script_from_cron_using_virtual_env/
https://betterprogramming.pub/scheduling-python-scripts-on-linux-fa0d28a8f915
https://www.reddit.com/r/linuxquestions/comments/k6wxve/how_to_make_cron_for_script_in_pythonpoetry/

https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804

PyFiglet module

### Introuduction

Python scripts do a lot of tasks, such as sending emails, updating the database, maintaining systems and backing up data, to mention a few. These tasks need to be run at specific times which would be cumbersome for someone to be keep up. The good news is that Linux comes with tools that cron which automate the process for you. cron can let you schedule your script to run at time or date you specify.

In this tutorial, you will learn how how to use cron to schedule python scripts in global or virtual environments.

## preresequites

To keep this tutorial short, I have made a few assumptiosn

- Access to a linux server
- installed cron, in you don't have cron, see [link comes here]
- Installed Python3 and you are familiar with virtual environments
- Familiaty with a terminal text editor
- Basic terminal usage

# goals

Get acquaintated with cron syntax
Schedule a python script in virtual envorment to run every 5 minutes

## Setting up the Python Script

This tutorial will make use of a small hello world python script that uses third-party python package [pyfiglet]().

First, Create the directory for the script and then move into the directory.

```
$ mkdir hello_world && cd hello_world
```

Create the Python script into the directory.

`nano main.py`

Add the following code into the `main.py` file and close the editor after your finished.

```python
from pyfiglet import Figlet
figlet = Figlet()
message = figlet.renderText('hello world')
print(message)
```

Still inside `hello_world` directory, create the virtual environment for the script.

```
$ python -m venv venv
```

Activate the virtual enviroment

```
$ source venv/bin/activate
```

Install the `pyfiglet` dependency with `pip`.

```
$ pip install pyfiglet
```

Run the script

```
$ python main.py
```

You should see output similar to this to this.

`output shown here`

Now that we have our script ready, in the next section you learn more about cron

### What is cron?

https://towardsdatascience.com/how-to-schedule-python-scripts-with-cron-the-only-guide-youll-ever-need-deea2df63b4e

cron is a background process on \*nix system that executes commands periodically based on the time or date specified in cron table. A cron table (crontab) is a configuration file which every user on Linux can edit. The user can scedule the commands or scripts to run periodically based on the schedule they have set crontab. Each task in crontab is called a job.

### Editing crontab

To add your own jobs, you need to edit the crontab file.

```
$ crontab -e
```

When running `cron` for the first time on a Linux , it will prompt you to choose an editor. We will choose `nano` in this tutorial because it is approchable people new to editing files in terminal.

Enter **1** and a terminal editor should open.

```
Select an editor.  To change later, run 'select-editor'.
  1. /bin/nano        <---- easiest
  2. /usr/bin/vim.basic
  3. /usr/bin/vim.tiny
  4. /bin/ed

Choose 1-4 [1]: 1
```

To add a job, you must use cron expressions

```
* * * * * <command-to-execute>
```

The cron expression has 6 fields organized into two parts:

1. Scheduling information, which contains the first 5 fields `* * * * *`
2. Command field, which is the command or script to execute.

### Scheduling Information

To set the time or date you want your script to run,

you must edit the first 5 fields `* * * * *` which each field corresponds to the follwoing:

1. first field `*` -> minute (0 - 59)
2. second field `*` -> hour (0 - 23)
3. third field `*` -> day of the month ( 1 - 31)
4. fourth field `*` -> month ( 1 - 12 )
5. firth field `*` -> jday of the week (0 - 6) (sunday= 0 or 7)

We can interpret `* * * * *` like this.

| minute | hour | day_of_month | month | day_of_week |
| ------ | ---- | ------------ | ----- | ----------- |
| \*     | \*   | \*           | \*    | \*          |

Or like this to add meaning to the cron expression `* * * * * <command-to-execute>`

```
minute hour  day_of_month month  day_of_week <command-to-execute>
```

### Scheduling Information

Here is the definition for the `* * * * *`

```
 Example of job definition:
 .---------------- minute (0 - 59)
 |  .------------- hour (0 - 23)
 |  |  .---------- day of the month (1 - 31)
 |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
 |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7)
 |  |  |  |  |
 *  *  *  *  *   command to be executed
```

So when you see a cron like this.

```
* * * * *  script-name.py
```

It means run the `script-name.py` every minute of every day of every week of every month.

You do have control of what time or how often you want to run the script.

If you wanted a script to run for every five minutes, it would be like this.

```
*/5 * * * * script-name.py
```

I know it can be difficult to understand but I will make it easy for you.

Say you want to run a script at every hour. Search "cron every hour" or if you want to run a script every day at midnight, search "cron everyday at 12am".

On the search results, go to the website — https://cron.guru/.

For example, searching "cron every hour", choose "https://cron.guru/every-1-hour" on the results.

Searching "cron everyday at 12am", choose "https://cron.guru/every-day-at-midnight"

Alternatively, you can also get the scheduling information from stackoverflow.com results.

The focus here is just for the scheduling information "\* \* \* \* \*", how to run the command/script is a separate task I will tackle soon.

For example, when automating a script that uses virtualenv, you need to make sure you have activated the virtualenv in cron.

cron is a tool for scheduling repetitive tasks on Linux system.

on a handsight, cron follows the following format to schedule tasks/scripts

```
* * * * * <command-to-execute>
```

`* * * * *` is the scheduling information. We will go into details of what \* means and how specify your preerred date or time soon.

`<command-to-execute>` is the command or script that you want cron to schedule. When scheduling a script, you must supply it the full path of the script.

```
* * * * *  /home/username/project_name/script-name.py
```

For example, to schedule the `hello_word` script, you would give it full path.

```
* * * * *  /home/your_username/hello_world/main.py
```

It means run the `script-name.py` every minute of every day of every week of every month.

This would have worked great if our script had no virtual environment, but our project has virtual enviroment, so we need to fine a way to let cron active the virtualenv before running the script.

## Choosing a Python interpreter

When a python script is in virtual enviroment, the only way to run it to avoid breaking the script is to activate the virtual enviroment and then run the script afterwards. This is because when a script with virtualenv deactivate, the global Python interpreter is used which will not have access to the packages installed in your virtual enviroment. So when you activate the virtual enviroment, you are able to your virtualenv python interpret which has access to all packages in the enviroment.

This poses a problem when sheduling because you want to make sure that the virtualenv is activated before the script is run. to get around this problem, there are two solutions we can use:

- Give cron the absolute path of your virtual env interpret
- use [Shebang lines](https://docs.python.org/3/using/windows.html#shebang-lines)

We will look at both ways, it will be up to you to choose the method that suits your needs. There have different methods but they all have one thing is common: the full path of your python interpreter in the virtual enviorment.

So first, find the full path of our project's python interpreter using the `which` command.

```
$ which python

```

It will print the full path.

```
/home/your_home_directory/hello_world/venv/bin/python
```

This is the interpret path to the virtualenv interpreter.

## Scheduling the script

With that lets look a[kk]

Python offers a good solution to bypass the activation of virtualenv with the use of [Shebang lines](https://docs.python.org/3/using/windows.html#shebang-lines) which lets you choose the interpreter you want to use.

Since when we activate, we us

## cron Usage

### cron Expressions

## Scheduling with cron

## Test the Cron Job

## Test
