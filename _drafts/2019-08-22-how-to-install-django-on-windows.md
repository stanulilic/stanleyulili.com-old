---
header:
  teaser: /assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg
feature_image: /assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this tutorial, we are going to learn how to install Git Bash on Windows. Git Bash for Windows is a package that comprises of `git` and `bash`.

categories:
 - Django
tags:
 - python
 - windows
 - django
toc: true;
toc_sticky: true
toc_label: "Table of Contents"
---


This tutorial focuses on Installing Django on Windows 7,8,10. It comes in two parts, the first part focuses on installing Django on windows Command Prompt and Powershell. The second half focuses on installing Django on Windows Git bash terminal.

## Install Python
Before you install Django, you must make sure that you have installed Python. You can checkout this guide: [how to install python on windows]() to learn how to install Python on Windows.

Note: make sure you check the "Add Python 3.7 to PATH " checkbox" checkbox when installing Python(it is explained in the article I have linked)

## Install Django on Windows

The commands that we will run in this tutorial will work on both Windows Command Prompt(CMD) and Powershell. In this tutorial, we are going to use Powershell but you are free to use CMD if that's what you like.

### Step 1 - Open Powershell

 You can can search for Powershell in the Windows search box or you can open the **Run** dialog box by holding **Windows logo key**  and **R**(Win+R) and type powershell and then click **ok**.

You should now have Powershell window opened.

[]IMAGE COMEs HERE

Now that we have opened Powershell, Let's verify that Python has been installed.

### Step 2 - Verify Python Installation

Type **python** on the prompt to verify that Python has been successfully installed, you should see a prompt similar to the one below:

```
PS C:\Users\Stanley> python
Python 3.7.4 (tags/v3.7.4:e09359112e, Jul  8 2019, 20:34:20) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Type **exit()** to exit out of the Python prompt:

![]IMAGE OF exiting out of prompt


### Step 3 - Upgrade Pip

Python now comes with **pip** by default. But most of the times, it comes with an old version. it is always a good practice to upgrade pip to  the latest version

```
> py -m pip install --upgrade pip
```
You should see something like the screenshot below showing that the upgrade was a success

![]SCREENSHOT of pip downloding and finishing downloading

**Step 5 - Create Project Directory

let's create a project directory. We will name it **django_project** since this tutorial is just a demo but in real world, the project directory's  name would be forum, blog, etc.

To create the directory:

```
> mkdir django_project
```

Change into `django_project` directory:

```
> cd django_project
````

Your prompt should now look like:

```
PS C:\Users\Username\django_project>
```
~![] screenshot showing you are in django_project


### Step 6 - Create Virtual Environment


To create a virtual environment, type `python -m venv venv` and wait for a few seconds:
```
> python -m venv venv
```

### Step 7 - Activate Virtual Environment
Run the following command to activate the virtualenv.

```
> venv\Scripts\activate
```
When virtual env is activated, you will see
a **(venv)** at the beggining of the prompt.

```
(venv) PS C:\Users\Stanley\Projects\django_project>
```

If you run into an error like the one below on Pwershell, for the sake of brevity sake, I wrote the solution(it's simple) on a seperate post(link here).:

```
PS C:\Users\Stanley\Projects\django_project> .\venv\Scripts\activate
.\venv\Scripts\activate : File C:\Users\Stanley\Projects\django_project\venv\Scripts\Activate.ps1 cannot be loaded
because running scripts is disabled on this system. For more information, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ .\venv\Scripts\activate
+ ~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\Stanley\Projects\django_project>
```

Now that virtual environment is activated, let's install Django.

### Step 8 - Install Django
```
Run the following command: 

(venv)> pip install django
````
The command will install the latest version of Django. You shoud see something the screenshot below showing Django being downloaded:

![]SCREENSHOT comes here

If you want to install a different django version, you can specify the version:

```
(venv)> pip install django==2.1
````

### Step 9 - Start a New Project

We will use ``django-admin startproject`` to create our Django project structure called "testsite".

Run the following command:

```
>django-admin startproject testsite
```

Navigate into the **testsite** directory by running the following command:

```
>cd testsite
```

### Step 10 - Run the Server
Let's now run the development server using the **manage.py runserver**:

>python manage.py runserver

Your are now ready to start developing your project