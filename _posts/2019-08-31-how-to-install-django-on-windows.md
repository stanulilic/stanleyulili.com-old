---
header:
  teaser: /assets/images/posts/2019-08-31-how-to-install-django-on-windows/featured-image.jpg
feature_image: /assets/images/posts/2019-08-31-how-to-install-django-on-windows/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this tutorial, we are going to learn how to install Django on Windows. 

categories:
 - Django
tags:
 - python
 - windows
 - django
toc: true;
toc_sticky: true
toc_label: "Table of Contents"
title: "How to Install Django on Windows:  Step by Step Guide"
---

Django is one of the most popular web frameworks in Python. It is secure, robust and allows developers to rapidly develop projects and meet deadlines. It is free and open-source, it works both on Windows and *nix systems. 

In this tutorial, we are going to learn how to install Django on Windows. 

## Install Python
Before you install Django, you must make sure that you have  Python installed. You can check out this guide I wrote: [how to install python on windows](https://www.stanleyulili.com/python/how-to-install-python-on-windows/) to learn how to install Python on Windows.


## Install Django on Windows

The commands that we will run in this tutorial will work on both Windows Command Prompt(CMD) and Powershell. I will use Powershell but you can CMD if that's what you prefer.

### Step 1 - Open Powershell

 You can search for Powershell in the Windows search box or you can open the **Run** dialog box by holding **Windows logo key**  and **R**(Win+R) and type `powershell` and then click **ok**.

You should now have a Powershell window opened.

 ![powershell opened](/assets/images/posts/2019-08-31-how-to-install-django-on-windows/powershell-opened.jpg)

Now that we have opened Powershell, Let's verify that Python has been installed.

### Step 2 - Verify Python Installation

Type **python -V** on the prompt to verify that Python has been successfully installed

```
> python -V
```
you should see the  Python version installed, being printed like below:

```
PS C:\Users\Stanley> python -V
Python 3.7.4
```

### Step 3 - Upgrade Pip

Python now comes with **pip** by default. But most of the time, it comes with an old version. it is always a good practice to upgrade pip to  the latest version

```
> python -m pip install --upgrade pip
```
You should see something like the screenshot below showing that the upgrade was a success:

 ![upgrade pip](/assets/images/posts/2019-08-31-how-to-install-django-on-windows/pip-install.jpg)


### Step 4 - Create a Project Directory

let's create a project directory. We will name it **django_project** since this tutorial is just a demo but in the real world, the project directory's name would be forum, blog, etc.

To create the directory:

```
> mkdir django_project
```

Change into the `django_project` directory:

```
> cd django_project
````

Your prompt should now show you that you're in the **"django_project"** directory like below:

```
PS C:\Users\Username\django_project>
```

### Step 5 - Create Virtual Environment
A virtual environment(virtualenv) is an isolated Python environment where you can install packages and dependencies without affecting other Python projects. You can learn more about virtualenv [here.](https://realpython.com/python-virtual-environments-a-primer/)

To create a virtual environment, type `python -m venv venv` and wait for a few seconds:
```
> python -m venv venv
```
It will create a directory called `venv` in the project directory.

Next, we will activate the virtual environment.

### Step 6 - Activate Virtual Environment
Run the following command to activate the virtualenv.

```
> venv\Scripts\activate
```
When virtualenv is activated, you will see
a **(venv)** at the beginning of the prompt.

```
(venv) PS C:\Users\Stanley\django_project>
```

If you run into an error like the one below on Powershell when activating virtualenv, for the sake of brevity, I described the reason and the solution here: [https://www.stanleyulili.com/powershell/solution-to-running-scripts-is-disabled-on-this-system-error-on-powershell/](https://www.stanleyulili.com/powershell/solution-to-running-scripts-is-disabled-on-this-system-error-on-powershell/)

 ![activation error](/assets/images/posts/2019-08-31-how-to-install-django-on-windows/error-with-powershell.jpg)

Now that virtual environment is activated, let's install Django.

### Step 7 - Install Django
We are going to use `pip` to install Django. So run the following command to start the installation: 

```
(venv)> pip install django
````
The command will install the latest version of Django. You should see Django being downloaded just like the screenshot below:

 ![django installed](/assets/images/posts/2019-08-31-how-to-install-django-on-windows/django-installed.jpg)

If you want to install a different Django version, you can specify the version:

```
(venv)> pip install django==2.1
````

### Step 8 - Start a New Project

We will use ``django-admin startproject`` to create our Django project structure called "testsite".

Run the following command:

```
(venv)> django-admin startproject testsite
```

Navigate into the **testsite** directory by running the following command:

```
(venv)> cd testsite
```

### Step 9 - Run the Server
Let's now run the development server using the **manage.py runserver**:

```
(venv)> python manage.py runserver
```
![run server](/assets/images/posts/2019-08-31-how-to-install-django-on-windows/runserver.jpg)

Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your web browser.

**Tip**: if want to leave the virtualenv, you must type **deactivate** on the prompt. 

You are now ready to start developing your project