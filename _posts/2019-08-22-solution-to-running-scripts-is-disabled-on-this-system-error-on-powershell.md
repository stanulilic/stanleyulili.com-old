---
header:
  teaser: /assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/featured-image.jpg
feature_image: /assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/featured-image.jpg
featured_image_alt: featured-image
excerpt: I run into this error **"running scripts is disabled on this system"**  as I was trying to activate

categories:
  - Powershell
tags:
  - powershell
  - windows
  - python
title: Solution to "Running Scripts Is Disabled On This System" Error On Powershell
---

I run into this error **"running scripts is disabled on this system"** as I was trying to activate Python's virtualenv on Powershell.

![running scripts disabled](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/error.jpg)

This error happens because the `venv\Scripts\activate` command tries to run the `Activate.ps1` Powershell script to activate the virtual environment.

**Note**: _.ps1_ is an extension for powershell scripts.
{: .notice--info}

It turns out on my Windows 10 system, the **Execution Policy** is set to **restricted** by default. This means that Powershell cannot execute any script.

![get execution policy](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/get-execution-policy.jpg)

Here is how I fixed the error:

**Step 1**: **Open Windows Powershell as Admin**

Open the **Start menu** on Windows and search for **powershell** and right-click on it. Click on **"run as administrator"**.

**Note**: You don't need to close the Powershell window where you got the error.
{: .notice--warning}

![get execution policy](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/powershell-admin.jpg)

**Step 2**: Type the following command the new Powershell window:

```
> set-executionpolicy remotesigned
```

This command will allow you to run scripts that are on your local computer(unsigned) and remote scripts(from the internet) which have been signed.

**Step 3**: You will be prompted to run accept the change, type **Y**(Yes) and press **enter** on your keyboard to allow the change.

![execution policy change](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/execution-policy-change.jpg)

**Step 4**: Close the Powershell admin window, and then go back to the Powershell Window(where you got the error) and **run the command again**.

![virtualenv works](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/virtualenv-works.jpg)

The command has worked! virtualenv has been activated.

```
(venv) PS C:\Users\Stanley\django_project>
```
