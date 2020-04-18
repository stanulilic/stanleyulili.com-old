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
excerpt: In this article, you will learn how to install Node.js and npm on Mac or Linux. You will also learn how to verify the installation, run Node.js code, and how to update Node.js and npm.
title: "How to Install Nodejs and npm on Mac or Linux"
---

## Introduction
Node.js is a run-time environment used for executing JavaScript outside the browser. Npm is a JavaScript package manager commonly used for installing packages for Node.js.

In this article, you will learn how to install Node.js and npm on Mac or Linux. You will also learn how to verify the installation, run Node.js code, and how to update Node.js and npm.

When you're finished, you'll be able to run Node.js code on  Mac or Linux computer.



## Prerequisites

To follow this tutorial successfully, you'll need the following:

- Internet access to download Node.js.
- Basic knowledge of how to use the terminal.

## Step 1 — Install Node.js and npm on Mac or Linux
There are a couple of ways to install Node.js on Mac or Linux. The most recommended method and also my favorite method to install Node.js and npm is to use [Node Version Manager(nvm)](https://github.com/creationix/nvm).

Using nvm has the following benefits:
- It allows you to install multiple versions of Node.js.
- It makes it easy to switch between the versions.
- Updating node.js is a breeze with nvm.


So let's now install nvm. Copy and paste the command below into your terminal.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

```

**Info**:
If your on Mac, open your `~/.bash_profile` or create a new one if the `~/.bash_profile` file does not exist. Make sure you add `source ~/.bashrc` in the file and save. 
{: .notice--info}

Now let's verify if `nvm` was installed successfully.

```bash
nvm --version
```
Your terminal should display the current version of nvm. At the time of writing, the current version is **0.35.2**.  So this is the output I got.

```bash
stanley@hostname:~$ nvm --version
0.35.2
```
**Note**: On  Linux, if you get `nvm: command not found` or no feedback, close your terminal and open a new terminal and enter the `nvm --version` again.
{: .notice--info}

**Tip**: On  Mac, if you are having any issues with the `nvm` command not working, check out this [link](https://github.com/nvm-sh/nvm#troubleshooting-on-linux)
{: .notice--info}

Lets now install Node using nvm's install command.

```bash
nvm install node
```

Once installed, set the installed version as the default.

```bash
nvm alias default node
```

**Info:** You need to set the default version because nvm forgets the node version in a new terminal session. You can learn more about the issue [here](https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session).
{: .notice--info}


##  Step 2 — Verify Node.js and npm installation
Verify if Node.js and npm were successfully installed.

Type `node -v`. It will display the current Node.js version.

```bash
node -v
```

Type `npm -v` to display the current npm version.
```bash
npm -v
```

Your output should look similar to mine. Note that the versions will be different since you might be reading this tutorial when new versions came out.
```bash
stanley@hostname:~$ node -v
v13.8.0
stanley@hostname:~$ npm -v
6.13.6
```

## Running Node.js Code on Mac or Linux
There are two ways to run Node.Js code:
- Node.js REPL  
- Running Node.js scripts on the terminal

### Node.js REPL
REPL stands for Read-Evaluate-Print-Loops. It is an interactive shell that allows experimentation of JavaScript code. It works the same way as the web browser console.

To access the  Node REPL, type `node` in the terminal.

```bash
node
````

The  REPL prompt will be opened where you can enter the JavaScript code. 

```bash
Welcome to Node.js v13.8.0.
Type ".help" for more information.
> 
```

The `>` sign is there to let you know that the code entered will be immediately evaluated when you press enter.

```javascript
stanley@hostname:~$ node 
Welcome to Node.js v13.8.0.
Type ".help" for more information.
> var name = "stanley";
undefined
> name
'stanley'
> var result = 3 + 8;
undefined
> console.log(result);
11
undefined
> 
```
To exit out of the REPL, type `.exit` or press `CTRL+D` once. You can also exit out by pressing `CTRL+C` twice.

### Running Node.js Scripts on the Terminal

This method is the one that is commonly used to run Node. You will write Node.js code in a file with an extension of `.js` and run it in the terminal using the `node` command.

Let's see this in action by creating a directory named `node.js` in our home directory.

```bash
mkdir nodejs
```

`mkdir` is a command used for creating directories

Let's go into the `nodejs` directory.

```bash
cd nodejs
```

Your terminal should now show you are in the `node.js` directory.

```bash
<your username>@hostname:~/nodejs$ 
```

Create a file `first-program.js`. For simplicity's sake, we will use Nano which is a terminal text editor.
```bash
nano first-program.js
```
Enter the following code in `first-program.js` in the Nano editor.

```javascript
var name = 'Stanley';

function sayHello(){
    console.log('hello', name);
}

sayHello();
```

Hold **CTRL+O** and then press `enter` to save the file.

Exit out of the editor by holding `CTRL+X`.

Let's now run the code in `first-program.js`:

```bash
node first-program.js
```

Your output should look like below.
```bash
<your username>@hostname:~/node$ node first-program.js 
hello Stanley
```
I hope you have understood how to run Node.js code on your Mac or Linux system.

Next, we are going to learn how to update Node.js and npm using nvm.

## How to Update Node.js and npm with nvm
To update to the latest version Node.js and npm. Type the following:

```bash
nvm install node --latest-npm --reinstall-packages-from=node
```

To update to the latest LTS(Long Term Support)  version. Type the following:

```bash
nvm install --lts --latest-npm --reinstall-packages-from='lts/*'
```

## Conclusion

In this article, you learned how to install and update Node.js and npm on Mac or Linux.  We also looked at different ways on how to run Node.js code. I hope you are now confident to run Node.js scripts on your computer on your Mac or Linux computer.

If you have any insights or suggestions, feel free to leave a comment. I would love to hear from you.


