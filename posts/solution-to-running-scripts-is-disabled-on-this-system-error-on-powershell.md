---
header:
  teaser: /assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/featured-image.jpg
excerpt: I run into this error **"running scripts is disabled on this system"**  as I was trying to activate

categories:
  - powershell
tags:
  - powershell
  - windows
  - python
title: Solution to "Running Scripts Is Disabled On This System" Error On PowerShell
date: "2019-08-22"
last_modified_at: "2021-09-04"
---

I run into this error **"running scripts is disabled on this system"** as I was trying to activate the **virtual environment** on PowerShell.

![running scripts disabled](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/powershell-error.jpg)

This error happens because the `venv\Scripts\activate` command tries to run the `Activate.ps1` PowerShell script to activate the virtual environment on your system.

**Note**: _.ps1_ is an extension for PowerShell scripts.
{: .notice--info}

It turns out on my Windows 10 system, the [**Execution Policy**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1) is set to `restricted` by default. This means that PowerShell cannot execute any script.

![get execution policy](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/get-execution-policy.jpg)

The following steps show you how to fix the error.

## Open Windows PowerShell as Admin

Open the **Start Menu** on Windows and search for **powershell** and right-click on it. Click on **"run as administrator"**.

**Note**: You don't need to close the PowerShell window where you got the error.
{: .notice--warning}

![get execution policy](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/powershell-admin.jpg)

## Allow Windows PowerShell to Execute Scripts

To fix the error, you need to change the PowerShell execution policy to `remotesigned`. This will allow you to run scripts that are on your local computer unsigned, and also remote scripts(from the internet) which have been signed.

Type the following command in the PowerShell admin window to change the execution policy:

```
> set-executionpolicy remotesigned
```

You will be prompted to accept the change, type `A`(Yes to all), and press **ENTER** on your keyboard to allow the change.

![execution policy change](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/execution-policy-change.jpg)

Close the PowerShell admin window, and go back to the PowerShell Window where you got the error. Run the command that triggered the error again. Mine was `venv\Scripts\activate`.

If you look at the following screenshot, you will see that am not getting the error anymore and the virtual environment has been activated:

![virtualenv works](/assets/images/posts/2019-08-25-running-scripts-is-disabled-on-this-system-powershell/virtualenv-works.jpg)

I hope your error has been fixed too. Let me know in the comments if you have any questions. Thank you for reading.
