---
header:
  teaser: /assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg
feature_image: /assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this tutorial, we are going to learn how to install Git Bash on Windows. Git Bash for Windows is a package that comprises of `git` and `bash`.

categories:
 - Git
tags:
 - git
 - windows
 - bash
toc: true;
toc_sticky: true
toc_label: "Installing Django on Windows"
---

The ultimate to installing Django on windows

This tutorial focuses on Installing Django on Windows 7,8,10. It comes in two parts, the first part focuses on installing Django on windows Command Prompt and Powershell. The second half focuses on installing Django on Windows Git bash terminal.

## Install Python
Before you install Django, you must make sure that you have installed Python. You can checkout this guide: [how to install python on windows]() to learn how to install Python on Windows.

Note: make sure you check the "Add Python 3.7 to PATH " checkbox" checkbox when installing Python(it is explained in the article I have linked)

## Install Django on Windows(works with Command line and Powershell)

This first half of the tutorial we will focus on installing Django on Windows. The commands that we will run should work on both Windows Command Prompt prompt and Powershell.In this tutorial, we are going to use Powershell
because it comes with useful commands which are not usually found on Windows Command Prompt.

### 1\. Open Powershell

 You can just search for Powershell or you can open the **Run** dialog box by pressing Windows key together with R and type powershell and then click **ok**.

You should now have Powershell window opened.

[]IMAGE COMEs HERE

### 2\. Verify Python Installation

Type **python** on the prompt to verify that Python has been successfully installed

```
PS C:\Users\Stanley> python
Python 3.7.4 (tags/v3.7.4:e09359112e, Jul  8 2019, 20:34:20) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

![]iMAGE OF Prompt with python

Type **exit()** to exit out of the Python prompt:

![]IMAGE OF exiting out of prompt

### 3\. Upgrade Pip

Python now comes with **pip** by default. But most of the times, it comes with an old version. it is always a good practice to upgrade pip to  the latest version

```
PS C:\Users\Stanley> python -m upgrade pip
```
You should see something like the screenshot below showing that the upgrade was a success

![]SCREENSHOT of pip downloding and finishing downloading

**Step 4**:

This step is optional. 
I like to create a directory to contain all my projects. I usually call this directory "Projects", others call it **Dev, Development** etc,. The choice is up to you.

```
PS C:\Users\Stanley> mkdir Projects
```

[]Show screenshot of what powershell shows after running the mkdir command.

`mkdir` command is used to create directories. `Projects` is the directory name.

Go into the **Projects** directory
```
PS C:\Users\Stanley> cd Projects
```
The prompt should change from `PS C:\Users\Stanley>` to `PS C:\Users\Stanley\Projects>` to let you know that you are in the **Projects** directory.

![]SCREENSHOT showing you are in the project directory

**Step 5**:

let's create a project directory. The directory will be inside the **Projects** directory and we will name it **django_project** since this tutorial is just a demo. 

But in real world, the project directories name would be forum, blog or anything representing the project you are planning on building.

To create the directory:

```
PS C:\Users\Stanley\Projects> mkdir django_project
```

Go into the directory:

```
PS C:\Users\Stanley\Projects> cd django_project
````

Your prompt should now look like:

```
PS C:\Users\Stanley\Projects\django_project>
```
~![] screenshot showing you are in django_project

** Step 6**:

### Create Virtual Environment

virtual environment explaination comes here(virtual env comes with python blah blah blash)

To create a virtual environment, type `python -m venv venv` and wait for a few seconds:
```
PS C:\Users\Stanley\Projects\django_project> python -m venv venv
```
The `venv` commands create a directory venv(Creates virtual Python environments in one or more target directories.) will contains scripts on how to activate the virtual environment(NEEDS GOOGLING)

if you type `ls` on Powershell or `dir` on windows command prompt,  you will see it.

```
PS C:\Users\Stanley\Projects\django_project> ls


    Directory: C:\Users\Stanley\Projects\django_project


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        8/20/2019   2:19 AM                venv

```

** Step 7**:

### Activate the virtual environment/virtual env
```
PS C:\Users\Stanley\Projects\django_project> venv\Scripts\activate
```
When virtual env is activated, you will see
a **(venv)** at the begging of the prompt.

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

**Step 8**:

### install Django
Now that virtual environment is activated, let's install Django.
```
(venv) PS C:\Users\Stanley\Projects\django_project> pip install django
````
The command will install the latest version of Django. You shoud see something the screenshot below showing Django being downloaded:

![]SCREENSHOT comes here

If you want to install a different django version, you can specify the version:

```
(venv) PS C:\Users\Stanley\Projects\django_project> pip install django==1.11
````

**Step 9**:
### verify Django has been installed
```
python.getdjangoversion()
```