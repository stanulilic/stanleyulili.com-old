### Introduction
Node.js is a run-time enviroment used for  execution JavaScript outside the browser. npm is a JavaScript package manager commonly used for installing packages for Node.js.

In this article, you will learn how to install Node.js and npm on Mac or Linux. You will also learn how to verifying the installation, run Node.js code, and finally, how to update Node.js and npm

When you're finished, you'll be able to run Node.js code on  Mac or Linux computer.



## Prerequisites

To follow this tutorial successfully, you'll need the following:

- Internet access to download Node.js.
- Basic knowledge of how to use terminal.

## Step 1 — Install Node.js and npm on Mac or Linux
There are a couple of ways to install Node.js on Mac or Linux. The most recommended method and also my favourite method to install Node.js and npm is to use [Node Version Manager(nvm)](https://github.com/creationix/nvm).

Using nvm has the following benefits:
- Allows you to install multiple versions of Node.js.
- Makes it easy to switch between the versions.
- Updating node.js is a breeze with nvm.


So let's now install nvm. Copy and paste the command below into your terminal.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

```

If your on Mac, open your `~/.bash_profile` or create a new one if the `~/.bash_profile` file does not exist.

Make sure you add the following command in the file and save. 

```
source ~/.bashrc
``` 

Now let's now verify if `nvm` was installed successfully.

```
nvm --version
```
Your terminal should display the current version of nvm. At the time of writing, the current version is **0.35.2**.  So this is the output I got.

```
stanley@hostname:~$ nvm --version
0.35.2
```

Lets now install Node using nvm's install command.

```
nvm install node
```

Let's now set the  installed version as the  default.

```
nvm alias default node
```

**info:** You need to set the default version because nvm forgets the node version in a new terminal session. You can learn more about the issue[here](https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session)

##  Step 2 — Verify Node.js and npm installation
Let's verifying if Node.js and npm were successfully installed.

Type `node -v`. It will display's Node.js current version.

```
node -v
```

Type `npm -v` to display the current npm version.
```
npm -v
```

You output should similar to mine. Note that the versions will be different since you might be reading this tutorial when new versions came out.
```
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
REPL stands for Read-Evaluate-Print-Loops. It is an interactive shell that allows experimentation of JavaScript code. It works works the same as the a web browser console.

To access Node REPL, type `node` in the terminal.

```
node
````

The  REPL prompt will be opened where you can enter the JavaScript code. 

```
Welcome to Node.js v13.8.0.
Type ".help" for more information.
> 
```

The `>` sign is there to let you know that the code entered will be immediately evaluated when you press enter.

```
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

```
mkdir nodejs
```

`mkdir` is a command used for creating directories

Let's go into the `nodejs` directory.

```
cd nodejs
```

Your terminal should now show you are in the `node.js` directory.

```
<your username>@hostname:~/nodejs$ 
```

Create a file `first-program.js`. For simplicity sake, we will use Nano which is a terminal text editor.
```
nano first-program.js
```
Enter following code in `first-program.js` in the Nano editor.

```
var name = 'Stanley';

function sayHello(){
    console.log('hello', name);
}

sayHello();
```

Hold `CTRL+O` and then press `enter` to save the file.

Exit out of the editor by holding `CTRL+X`.

Let's now run the code in `first-program.js`:

```
node first-program.js
```

Your output should look like below.
```
<your username>@hostname:~/node$ node first-program.js 
hello Stanley
```
I hope you have understood how to run Node.js code on your Mac or Linux system.

Next, we are going to learn how to update Node.js and npm using nvm.

## How to Update Node.js and npm with nvm
To update to the latest version Node.js and npm. Type the following:

```
nvm install node --latest-npm --reinstall-packages-from=node
```

To update to latest LTS(Long Term Support)  version. Type the following:

```
lts version
nvm install --lts --latest-npm --reinstall-packages-from='lts/*'
```

uninstall node with nvm


https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session