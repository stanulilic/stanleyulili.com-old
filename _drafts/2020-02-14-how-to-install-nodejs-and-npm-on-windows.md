---
header:
 teaser: /assets/images/posts/node-featured-image/featured-image.jpg
feature_image: /assets/images/posts/node-featured-image/featured-image.jpg
featured_image_alt: featured-image
categories:
 - node
tags:
 - node.js
 - javascript
excerpt: In this article, you will learn how to install Node.js and NPM on Windows and verifying the installation. 
title: "How to Install Nodejs and Npm on Windows"
---

### Introduction

Node.js is a run-time environment that allows the execution of Javascript outside the browser. It allows you to build automation scripts, full-stack web applications,  APIs, etc., with Javascript. 

NPM is a JavaScript package manager commonly used for installing packages for Node.js.

In this article, you will learn how to install Node.js and NPM on Windows and verifying the installation.  You will then proceed to learn how to run Node.js code, update Node.js and also, how to uninstall Node.js on Windows.

When you're finished, you'll be able to create and run Node.js code on your computer.



## Prerequisites

To follow this tutorial successfully, you'll need the following:

- Internet access to download Node.js.
- A user with admin privileges to install software on Windows. 


## Step 1 — Download Node.js
Open your web browser and visit the [Node installation page](https://nodejs.org/en/download/]). Click on the **Windows Installer** button to download the latest version of Node.js. The installer comes with NPM and it is in 64 bit.

![node.js download page](/assets/images/posts/2020-02-08-install-node-windows/download-nodejs.jpg)

Next, we are going run the Node.js installer

## Step 2 — Install Node.js and NPM
Once the installer has been download. Click on the file to run the installer.

### Node.js Setup Wizard
When the setup wizard dialog opens, click **Next**.

![node.js setup wizard](/assets/images/posts/2020-02-08-install-node-windows/node-setup.jpg)

### License Agreement
Review the license and then check on the "I accept the terms in the License Agreement" option and then click **Next**.

![license agreement](/assets/images/posts/2020-02-08-install-node-windows/license-agreement.jpg)

### Choose the Destination Folder

You will be prompted to choose the destination folder to install Node.js. It is best to just leave the default location and click **Next**. 

![destination folder](/assets/images/posts/2020-02-08-install-node-windows/destination-folder.jpg)

### Custom Setup
Proceed with the default option and click "Next". 


![Custom Setup](/assets/images/posts/2020-02-08-install-node-windows/custom-setup.jpg)

### Tools for Native Modules
In this step, you can check the option if you need the tools.  I don't need them yet, so I will just proceed with the default option and click **Next** without modifying anything. 

![Tools for native modules option](/assets/images/posts/2020-02-08-install-node-windows/native-tools.jpg)

### Begin Installation
The Node.js Setup Wizard is now ready to install Node.js and NPM. Click **Install** to begin the installation.

![Begin Installation](/assets/images/posts/2020-02-08-install-node-windows/begin-installation.jpg)

When the User Account Control security prompt pops up, make sure you click **Yes**.


### Finish Installation
After the installation is finished, click **Finish**.
![Finish installation](/assets/images/posts/2020-02-08-install-node-windows/finish-installation.jpg)


##  Step 2 — Verify Node.js and NPM installation
Let's verify if the Node.js and NPM were successfully installed.

Open **Powershell** or *Windows Command Prompt* depending on your preferences. It's recommended to use Powershell since it has more features than the Windows Command Prompt. So that's what we will use in this guide. 

![Open Powershell](/assets/images/posts/2020-02-08-install-node-windows/search-powershell.jpg)

Once *Powershell* is opened, Enter the following:

```powershell
node -v
```
This command tells you the current version of Node installed.

We can also check the version of NPM installed.

```powershell
npm -v
```

If Node and NPM were installed successfully, you might get output similar to the screenshot.

![Node works](/assets/images/posts/2020-02-08-install-node-windows/node-works.jpg)

**Note**: Your version numbers don't need to match with the ones in the screenshot since you might be reading this article when a newer version of Node or NPM was released.
{: .notice--warning}

## Running Node.js Code on Windows
There are two ways to run Node.Js code:
- Node.js REPL  
- Executing Node.js scripts on Powershell or Command Prompt

### Node.js REPL
REPL stands for Read-Evaluate-Print-Loops. It is a console that allows you to experiment with JavaScript code.  It works the same way as the browser console.

To access the REPL, type `node` in Powershell.

```powershell
node
````
It will open a console where you can try your JavaScript code.

```javascript
PS C:\Users\<your username> node
Welcome to Node.js v12.15.0.
Type ".help" for more information.
> var name = "stanley";
undefined
> name
'stanley'
> console.log(name);
stanley
undefined
>
```

To exit out of the REPL, type `.exit` or press `CTRL+D` once. You can also exit out by pressing `CTRL+C` twice.

### Executing Node.js Scripts on Powershell or Command Prompt
This method is the one that is most commonly used to run Node scripts. It involves writing JavaScript code in a file with an extension of `.js` and running it against the `node` command.

We can see this process by writing our first Node.js program.

Let's start by creating a folder in the home directory to store our program.

```powershell
mkdir nodejs
```
`mkdir` is a command used for creating directories/folders.

Your output should be similar to the one below if you are using Powershell.
```powershell
PS C:\Users\<your username> mkdir nodejs


    Directory: C:\Users\<your username>


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----         2/7/2020   3:12 AM                nodejs
```

Let's now get into the `nodejs` directory.
```powershell
cd nodejs
```
Your prompt should now look like the following:
```powershell
PS C:\Users\<your username>\nodejs>
```
This shows that you are in the `nodejs` directory.

Create a file `first-program.js` in the editor of your choice, and save it in the directory `nodejs`.

If you have Visual Studio code, you can easily create the file by typing `code first-program.js` in PowerShell. The command  will open Visual Studio Code with the file 'first-program.js' opened:
```powershell
code first-program.js
```
Regardless of the option you chose, make sure you enter the type the following code into the `first-program.js` file.

```javascript
var name = 'Stanley';

function sayHello(){
    console.log('hello', name);
}

sayHello();
```

Type the following to run the code in `first-program.js`:

```powershell
node first-program.js
```

Your output should look like below.
```powershell
PS C:\Users\<your username>\nodejs> node first-program.js
hello Stanley
```

I hope now you are confident to run Node.js code on your system.

We are not finished yet, let's look at how to update  Node.js and NPM.

## How to Update Node.js and NPM on Windows
To update Node.js and NPM, download the latest version of the Node.js installer on the [Node installation page](https://nodejs.org/en/download/] just like we did in step 1 of this tutorial. The Node.js website always displays the latest version when it has been released. 

To update, download the latest installer and run it. It will replace your current Node.js and NPM.

## How to Uninstall Node.js and NPM on Windows
The process of uninstalling Node.js and NPM is the same as how you uninstall any other software in Windows.

On Windows 10, search `apps` and click **Apps & features**. 

![start menu](/assets/images/posts/2020-02-08-install-node-windows/start-menu.jpg)

When the **Apps & features** window open, search for Node and click it. When the popup dialog opens, click "Uninstall". This will start the **uninstall** wizard.

![start menu](/assets/images/posts/2020-02-08-install-node-windows/uninstall.jpg)
.

## Conclusion

In this article, you learned how to install and update Node.js and NPM on Windows.  We also looked at different ways on how to run Node.js code. I hope you are now confident to run Node.js scripts on your computer.

If you have any insights or suggestions, feel free to leave a comment. I would love to hear from you.

