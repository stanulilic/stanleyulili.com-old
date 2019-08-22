---
header:
 teaser: /assets/images/posts/2019-08-21-launch-powershell-on-windows/featured-image.jpg
feature_image: /assets/images/posts/2019-08-21-launch-powershell-on-windows/featured-image.jpg
featured_image_alt: featured-image
excerpt: In this article, I will share quick ways on how you can easily open Powershell on Windows 10.

categories:
 - Powershell
tags:
 - powershell
 - windows
 - python
title: Solution to "Running Scripts Is Disabled On This System" Error On Powershell
---

I run into this error **"running scripts is disabled on this system"**  as I was trying to activate  Python virtualenv on Powershell.

 ![running scripts disabled](/assets/images/posts/2019-08-22-running-scripts-is-disabled-on-this-system-powershell/error.jpg)

This error happens because the `venv\Scripts\activate` command tries to run the **Activate.ps1** Powershell script to activate the virtual environment. 

**Note**: *.ps1* is an extension for powershell scripts.
{: .notice--info}

It turns out on my Windows 10 system, the **Execution Policy** is set to **restricted** by default. This means that Powershell cannot execute any script. 

 ![get execution policy](/assets/images/posts/2019-08-22-running-scripts-is-disabled-on-this-system-powershell/get-execution-policy.jpg)

Here is how I fixed the error:

**Step 1**: **Open Windows Powershell as Admin**

Open Windows start menu and search for **powershell** and right-click on it and then click **"run as administrator"**.

 You **don't need to closethe Powershell window** with the error.

 ![get execution policy](/assets/images/posts/2019-08-22-running-scripts-is-disabled-on-this-system-powershell/powershell-admin.jpg)

**Step 2**: Type the following command:

```
PS C:\Windows\system32> set-executionpolicy remotesigned
```

This command will allow you to run scripts that are on your local computer(unsigned) and remote scripts(from the internet) which have been signed.

**Step 3**: You will be prompted to run accept the change, type **A**(Yes to Allow)  and press **enter** on your keyboard to allow the change.

 ![execution policy change](/assets/images/posts/2019-08-22-running-scripts-is-disabled-on-this-system-powershell/execution-policy-change.jpg)


**Step 4**: Close the Powershell admin window and  go back to your Powershell Window where you got the error and **run the commmand again**.

 ![virtualenv works](/assets/images/posts/2019-08-22-running-scripts-is-disabled-on-this-system-powershell/virtualenv-works.jpg)


The command has worked and virtualenv has been activated.
```
(venv) PS C:\Users\Stanley\Projects\django_project>
```