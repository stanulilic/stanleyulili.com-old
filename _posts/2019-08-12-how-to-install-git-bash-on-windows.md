---
feature_image: /assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this tutorial, we are going to learn how to install Git Bash on Windows. Git Bash for windows is a package that comprises of `git` and `bash`.

categories:
 - Git
tags:
 - git
 - windows
 - bash
---
## Introduction
In this tutorial, we are going to learn how to install Git Bash on Windows.

 Git Bash for windows is a package that comprises of `git` and `bash`.

**Git** is an open-source version control system for tracking source code changes when developing software. It keeps a commit history which allows you to revert to a stable state in case you mess up your code. Git also allows multiple developers to collaborate on the same code base.

**Bash** is a Unix command-line shell. The name is an acronym for the 'Bourne-Again Shell'. It comes with useful Unix commands like cat, ssh, SCP, etc., which are not usually found on windows.

## Download Git Bash
**Step 1:**

Download the latest version of git bash from their official website: https://git-scm.com/

![git bash official page](/assets/images/posts/2019-08-13-install-git-bash/official-homepage.jpg)

**Step 2:**

Click "Download for windows". You will then be redirected to a page which lets you know that the download it's about to start. 

![git bash download page](/assets/images/posts/2019-08-13-install-git-bash/download-starting.jpg) 

If the download doesn't start, click on the "click here to download manually" link.

## Install Git Bash
**Step 3:**

Once you have downloaded the executable file. Click on the executable and run the installer. Click "Next" after you have read the license

![accept license](/assets/images/posts/2019-08-13-install-git-bash/accept-license.jpg)

**Step 4:**

Next, select the location you want to install git bash. I would recommend you just leave the default option as it is, and click "Next".

![choose default](/assets/images/posts/2019-08-13-install-git-bash/installation-directory.jpg)

**Step 5:**

Choose the components you want to install, or you can just proceed with the default options and click "Next". Personally, I prefer selecting the "Additional icons" component which creates a Git Bash shortcut on the desktop.

![select components](/assets/images/posts/2019-08-13-install-git-bash/select-components.jpg)

**Step 6:**

You can change the name of start menu folder here if you want, or just leave the default name and click "Next".

![select start menu folder](/assets/images/posts/2019-08-13-install-git-bash/select-start-menu-folder.jpg)

**Step 7:**

Next, select the default editor for Git to use. Choose the one you like and click "Next". I would recommend you proceed with **Nano** or **Notepad++**. Don't proceed with the default option "Vim" as it has a steep learning curve.

![Choose default editor](/assets/images/posts/2019-08-13-install-git-bash/choose-editor.jpg)
![Choose nano editor](/assets/images/posts/2019-08-13-install-git-bash/choose-nano.jpg)
![editor chosen](/assets/images/posts/2019-08-13-install-git-bash/editor-chosen.jpg)

**Step 8:**

Choose the option you want depending on where you want to use Git and click "Next".

![Adjust Path Environment](/assets/images/posts/2019-08-13-install-git-bash/path-environment.jpg)

Select **"Use Git from Git Bash only"** option if want to use Git and Unix commands from Git Bash only. This means that you won't be able to run Git commands such as `git status` on Windows Command Prompt or Powershell. They will only be found on Git Bash.

Select **"Git from the command line and also from 3rd-party software"** option if you want to use git on Windows Command Prompt or Powershell.

**Notice:**  Unix tools won't work on Command Prompt or Powershell with this option, but only Git commands will work.
{: .notice--warning}  

**Tip:** If you need
Unix tools, you will have to open the Git Bash. So go ahead with this option if that is what you want. 
{: .notice--info}

Select **"Use Git and optional Unix tools from the Command Prompt"** option if you want to use both Git and Unix commands that come with Git Bash on Windows Command Prompt or Powershell. This option will override some default Windows Command Prompt tools like find and sort. I don't use CMD or Powershell that much to worry about that. So I will go ahead with this option by clicking "Next".


**Step 9:**

Next, select "Use the OpenSSL library" and click "Next".

![choose https transport backend](/assets/images/posts/2019-08-13-install-git-bash/choosing-https-transport.jpg)

**Step 10:**

Select how Git should treat line endings in text files. It's probably safe to go with the default option "Checkout Windows-Style, commit Unix-style line endings". Click "Next" to proceed.

![configure line endings conversions](/assets/images/posts/2019-08-13-install-git-bash/configuring-the-line-endings.jpg)

**Step 11:**

Next, select the terminal emulator you want Git Bash to use. I will proceed with default option "Use MinTTY(the default terminal of MSYS2) and click "Next".

![choose terminal emulator](/assets/images/posts/2019-08-13-install-git-bash/terminal-emulator.jpg)

**Step 12:**

Select the features you want(the default options are fine) and click "Next". 

![enable features](/assets/images/posts/2019-08-13-install-git-bash/extra-options.jpg)

**Step 13:**

Enable experimental options if you want. Enabling them allows you to try out newer features that are still in development. I don't enable this, so I will just proceed by clicking "Install" to start the installation process.

![enable experimental options](/assets/images/posts/2019-08-13-install-git-bash/experimental-options.jpg)

**Step 14:**

Now, wait for a few minutes as the Setup wizard installs Git on your computer.

![Setup wizard](/assets/images/posts/2019-08-13-install-git-bash/installing.jpg)

**Step 15:**

After the installation has finished, check the "Launch Git Bash" and click "Finish" to launch Git Bash.

![finish installation](/assets/images/posts/2019-08-13-install-git-bash/completed-installation.jpg)

The Git Bash terminal will now open and you will be able to enter Git and Unix commands.

![git bash opened](/assets/images/posts/2019-08-13-install-git-bash/git-bash.jpg)

Congratulations on successfully installing Git Bash.

## Launching Git Bash
The following are just some tips on how you can easily launch Git Bash.

**1.** Right-click on any folder, anywhere and it will have the launch Git Bash option on the context menu.

![folder context](/assets/images/posts/2019-08-13-install-git-bash/folder-context.jpg)

**2.** If you enabled the "Additional icons" option on **Step 5**, you can easily launch Git Bash by clicking the Git Bash desktop icon.

![git bash shortcut](/assets/images/posts/2019-08-13-install-git-bash/git-bash-shortcut.jpg)

**3.** If you chose the **third option** "Use Git and optional Unix tools from the Command Prompt" on **Step 8**. You can run both Git and Bash commands by opening Windows Command Prompt or Powershell.

![git bash cmd](/assets/images/posts/2019-08-13-install-git-bash/bash-cmd.jpg)
![git bash cmd](/assets/images/posts/2019-08-13-install-git-bash/powershell-bash.jpg)

`git --version` tells you the Git version currently installed on a system. It is also a confirmation that Git is installed.

`which git` tells you where the Git executable is located. `which` command is part of Unix commands/bash, it is not available on Windows Command Prompt or Powershell by default. 