
This is the first draft. it has a lot of grammatical errors and it's not finished yet.

# Documention For Excelgurujim


This documentation contains all the steps I have taken to successfully deploy the  script to the server.

I have written in  a style of telling someone what to do. I originally wrote it by explaining what I was doing, but I later thought it would be much clear if I write it as a tutorial.

To avoid assumptions, I wrote this document as a beginner guide. So some parts might feel slow, let know which unecessary parts need to be edited out or need to be explained more incase I went too fast.


## Login  into the Droplet

First, SSH into the server using the username and ipaddress.

On linux, ssh is availabe by default. The system I used is Ubuntu 16 which is my main OS.
So I used the following command
```
   ssh root@134.209.180.188

```

## Set up the Directory
Now, we need to create a directory to store all the scripts for better organization.

Create a directory using `mkdir` command.
```
# mkdir calc_horses
```

Get into the directory
```
# cd calc_horses
```

## Uploading Files To the Server.

In this section, I will explain how I uploaded the files. Like I said before, I use Ubuntu Linux as my main OS, the commands will differ from Windows; however, I will try my best to give pointers.

I first  downloaded all the attached files from Fiverr to my computer. They were all `.txt` files.  

I moved all  the  script files I downloaded  into `excelgurujim` folder on my **local computer**.

So I got into the `excelgurujim` directory using my linux terminal.

```
# cd ~/excelgurujim
```

Inside the `excelgurujim` folder.

```
stanley@ulilic:~/excelgurujim$ 
```

I begun uploading the files using `scp`. 

```
stanley@ulilic:~/excelgurujim$ scp calc_horses.txt  root@134.209.180.188:/root/calc_horses
```

Here is the output after it was finished 
```
calc_horses.t 100%  727     0.7KB/ pls   00:00
```

Let me explain more about `scp`.

`scp` is used for uploading files to the server. It takes two arguments: 

- source - the file you want to upload
- destination -  the server's username and IP address, the directory you want to upload the files.

So here is the  break down of the command using the command I typed into my terminal.

```
scp calc_horses.txt  root@134.209.180.188:/root/calc_horses
```

 `scp` breakdown with an example. 

   source(local file) - calc_horses.txt  
   destination(remote server) - root@134.209.180.188:/root/calc_horses

`calc_horses.t 100%  727     0.7KB/ pls   00:00`  - shows that uploading of `calc_horses.txt` file was successful.

To use `scp` on Windows, you can refer to this guide, see [
How to use SCP command on Windows](https://success.tanaza.com/s/article/How-to-use-SCP-command-on-Windows) or [Copying a local file from Windows to a remote server using scp](https://stackoverflow.com/questions/8975798/copying-a-local-file-from-windows-to-a-remote-server-using-scp)

If you need further clarification, please let me know.

Since I had 5 files to upload, I countinued using `scp` to upload the rest as follows:

`GoogleAPI.txt` script:

```
$ scp GoogleAPI.txt   root@134.209.180.188:/root/calc_horses
```

`Oddschecker.txt` script:

```
$ scp Oddschecker.txt   root@134.209.180.188:/root/calc_horses
```
    
`UpdateGoogleSheets.txt` script

```
$ scp UpdateGoogleSheets.txt root@134.209.180.188:/root/calc_horses
```
 
`PlusEvBets.txt` file.
```
$ scp PlusEvBets.txt    root@134.209.180.188:/root/calc_horses
```



## Verify Uploaded files and Modify their Extensions

Am going to switch to tutorial style.

So at this point, all the files have been uploaded in the server.

So here, if you have the terminal you used to SSH opened, switch it to access the server.

Remember, the files hae been uploaded to the `calc_horses` directory we created earlier.

Going forward, on the terminal prompt I will put "hostname" instead of "root@django-s-1vcpu-1gb-lon1-01" for brevity sake.


Go into the `calc_horses` directory

```
hostname:~/calc_horses# 
```


Type `ls`  in terminal to verify if the files were indeed uploaded into the `calc_horses`. 

```
hostname:~/calc_horses#  ls
```

You will output similar to this.

```
hostname:~/calc_horses# ls
GoogleAPI.txt    PlusEvBets.txt          calc_horses.txt
Oddschecker.txt  UpdateGoogleSheets.txt
```

This proves all files have been uploaded. Since python requires `.py`  as file extension, we will change the extensions from ".txt" to ".py" by renaming the files.

The `mv` command  is used for renaming and moving files. It takes the source and the destination.

```
mv  current_file_name  new_file_name
```

To rename the files, use `mv` command as shown in the following commands. 

Rename `GoogleAPI.txt`.

```
hostname:~/calc_horses# mv GoogleAPI.txt GoogleAPI.json
```

Rename 'Oddschecker.txt'

```
hostname:~/calc_horses# mv Oddschecker.txt Oddschecker.py
```


Rename `calc_horses.txt`

```
hostname:~/calc_horses# mv calc_horses.txt  calc_horses.py
```

Rename `UpdateGoogleSheets.txt`
```
hostname:~/calc_horses# mv UpdateGoogleSheets.txt UpdateGoogleSheets.py
```

## Activate Virtual Environment 

Am hope you are aware that you need to use virtualenv in python to separate the python packages. This let's you  install  a project's dependencies  without affecting other projects on your Ubuntu server or PC for that matter.

Install `python3-venv` on the Ubuntu to allow the creation of virtual environments.

```
sudo apt-get install python3-venv

```

Create a virtual environment using python builtin `venv`.

```
python3 -m venv venv
```


Now,  activate the virtual environment.


```
source venv/bin/activate
```

You  should now notice that the environment has been created.

```
(venv) root@django-s-1vcpu-1gb-lon1-01:~/calc_horses# 
```

The `(venv) ` at the beginning of the terminal prompt shows that the virtualenv is active.


## Run the Python Script and Install Packages

Again, we are in the 'calc_horses` directory on the server and it's where we will be running the script.


I am going to write the next steps in the way I experienced them, maybe they can be helpful.


I tried to run the script.

```
python3 calc_horses.py 
```

I got the following exception.

```
Traceback (most recent call last):
  File "calc_horses.py", line 2, in <module>
    from selenium.common.exceptions import NoSuchElementException
ModuleNotFoundError: No module named 'selenium'
```

This shows that a `selenium` package is missing inside our virtualenv. So I installed `selenium`.

```
pip3 install selenium
```

After a few seconds, selenium was installed.

I tried to run the script again.

```
python3 calc_horses.py 
```


I got the following errors

```
Traceback (most recent call last):
  File "calc_horses.py", line 3, in <module>
    from UpdateGoogleSheets import update_gs
  File "/root/calc_horses/UpdateGoogleSheets.py", line 1, in <module>
    import gspread
ModuleNotFoundError: No module named 'gspread'
```

Since I was  also missing a `gspread` module, I installed that.

```
pip3 install gspread
```

I  tried to  run the script again.
```
 python3 calc_horses.py 
 ```

I get the following error.

```
Traceback (most recent call last):
  File "calc_horses.py", line 3, in <module>
    from UpdateGoogleSheets import update_gs
  File "/root/calc_horses/UpdateGoogleSheets.py", line 2, in <module>
    from oauth2client.service_account import ServiceAccountCredentials
ModuleNotFoundError: No module named 'oauth2client'

```

Again, I had to install `oauth2client`
```
pip3 install --upgrade oauth2client 
```

Next, I tried to run the script again.

```
python3 calc_horses.py 
```

I got the following error
```
Traceback (most recent call last):
  File "calc_horses.py", line 4, in <module>
    from Oddschecker import odds_checker
  File "/root/calc_horses/Oddschecker.py", line 3, in <module>
    import undetected_chromedriver as uc
ModuleNotFoundError: No module named 'undetected_chromedriver'
```

I then installed 'undetected_chromedriver' to get around the error.

```
pip install undetected-chromedriver
```


## Fixing Selenium Errors

In the last section, I downloaded all dependencies, I discovered them as I run the script. Continuing with the writing style I was using, I will now write how I got around the Selenium Errors.

I rerun the script again.
```
python3 calc_horses.py

```

This time, I got a long error message, I edited out some parts to keep this document shorter.

```
...
    raise exception_class(message, screen, stacktrace)
selenium.common.exceptions.WebDriverException: Message: unknown error: Chrome failed to start: exited abnormally.
  (unknown error: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
```


From what I discovered, in the file `Oddschecker.py`. On number 8 `driver = uc.Chrome(` when launching Chrome, It tries to open the Chrome browser UI like how you open Chrome on your computer.

```
driver = uc.Chrome() // problematic part
driver.execute_script('return navigator.webdriver')
driver.get(base_url
```

This part works locally because the PC has a browser UI. On the hand, on the server there is no browser UI or any UI. The browser on the server run in headless mode only.

So the code has to be modified to run chrome in headless mode.



So I had to edit  'Oddschecker.py' file to run Chrome in headless mode.

At the top of `Oddschecker.py`, import `Options`. it is used to pass settings for running headless Chrome.

```
...
# import Options from selenum
from selenium.webdriver.chrome.options import Options
```

Next, Configure `Options` to take arguments for Chrome headless. This must be added before running the webdriver.

```
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
  ```

So here is how they fit with the rest of the code in the `odds_checker` script.

```
def odds_checker():
    plus_ev_bets = open('PlusEvBets.txt', 'w')
    plus_ev_bets.write('Event,Horse,Bookie,Back Price,Places,Place Terms,Place Price\n')
    base_url = "https://www.oddschecker.com/horse-racing"
    # Enable chrome to run in headless mode since its
    # on the server
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')

    driver = uc.Chrome(chrome_options=chrome_options)
    ...
```


Adding the `chrome_options` fixes the error.



## Fixing GoogleAPI file not Found Issues

After fixing the Selenium errors, I run the script again hoping it would work.

```
 python calc_horses.py

```

I run into a problem.

```
  File "/root/calc_horses/venv/lib/python3.8/site-packages/oauth2client/service_account.py", line 219, in from_json_keyfile_name
    with open(filename, 'r') as file_obj:
FileNotFoundError: [Errno 2] No such file or directory: 'GoogleAPI'
```

Since I renamed  `GoogleAPI.txt` to `GoogleAPI.json`, it appears like the `UpdateGoogleSheets.py` couldn't find it anymore.

So  edited `UpdateGoogleSheets.py` by adding the `.json` extension


```
credentials = ServiceAccountCredentials.from_json_keyfile_name('GoogleAPI.json', scope)```

```

This fixes the error and the script run successfully

```
(venv) root@django-s-1vcpu-1gb-lon1-01:~/calc_horses# python calc_horses.py 
Updating Google Sheet...
(venv) root@django-s-1vcpu-1gb-lon1-01:~/calc_horses# 
```

Though on my end it shows that it is running successfully, I still need your confirmation that it works fine.

## Save all Dependences in a requirements.txt file.
To save time next time when deploying the script to another server, etc.

I decided to save all dependencies in the `requirements.txt` file.

I used `pip freeze` to do that.

```
 pip freeze > requirements.txt
 ```

Next time when deploying the scripts again, just run "pip install"  to download all dependences from `requirements.txt` file as follows:

```
pip install -r requirements.txt 
```



## Opening ports.

In this section, I use tutorial style on how to open ports.

To open ports. You must type the following command

```
 sudo ufw allow port_number
 ```

So to enable the port `5500`, type the following command

```
sudo ufw allow 5500
```


To verify that the port is open, type the following.

```
sudo ufw status
```

We get the following output.
```
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     LIMIT       Anywhere                  
Nginx Full                 ALLOW       Anywhere                  
5500                       ALLOW       Anywhere                  
22/tcp (v6)                LIMIT       Anywhere (v6)             
Nginx Full (v6)            ALLOW       Anywhere (v6)             
5500 (v6)     
```


As you can see, 5500 is open


It's important to open SSH port to allow other server user's to SSH especially when you don't want to login with root. 

To open ssh port

```
sudo ufw allow OpenSSH
```

Now the server will allow SSH connections.

```

Status: active

To                         Action      From
--                         ------      ----
22/tcp                     LIMIT       Anywhere                  
Nginx Full                 ALLOW       Anywhere                  
5500                       ALLOW       Anywhere                  
OpenSSH                    ALLOW       Anywhere                  
22/tcp (v6)                LIMIT       Anywhere (v6)             
Nginx Full (v6)            ALLOW       Anywhere (v6)             
5500 (v6)                  ALLOW       Anywhere (v6)             
OpenSSH (v6)               ALLOW       Anywhere (v6)

```


## Automation Scripts

Waiting for comfirmation that the script works, I will then go ahead and write this section.








References:

- https://stackoverflow.com/questions/53073411/selenium-webdriverexceptionchrome-failed-to-start-crashed-as-google-chrome-is
