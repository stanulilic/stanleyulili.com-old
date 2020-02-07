To install nodejs, you should run the Nvm install script.

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash


output:
```
 % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 13527  100 13527    0     0   4734      0  0:00:02  0:00:02 --:--:--  4736
=> Downloading nvm from git to '/home/stanley/.nvm'
=> Cloning into '/home/stanley/.nvm'...
remote: Enumerating objects: 288, done.
remote: Counting objects: 100% (288/288), done.
remote: Compressing objects: 100% (258/258), done.
remote: Total 288 (delta 35), reused 95 (delta 18), pack-reused 0
Receiving objects: 100% (288/288), 146.70 KiB | 131.00 KiB/s, done.
Resolving deltas: 100% (35/35), done.
Checking connectivity... done.
=> Compressing and cleaning up git repository

=> Appending nvm source string to /home/stanley/.bashrc
=> Appending bash_completion source string to /home/stanley/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
stanley@ulilic:~/Documents/Projects/stanleyulili.com$ 
```

I then verified if the following was on my `.bashrc` or `.bashrc`.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```


install node:
```
nvm install node
```

output:
```
Computing checksum with sha256sum
Checksums matched!
Now using node v13.8.0 (npm v6.13.6)
Creating default alias: default -> node (-> v13.8.0)

```

use node:

```
nvm use node
```

default node:

```
nvm alias default node
``



update node with nvm:
https://stackoverflow.com/questions/34810526/how-to-properly-upgrade-node-using-nvm
new version
nvm install node --latest-npm --reinstall-packages-from=node
lts version
nvm install --lts --latest-npm --reinstall-packages-from='lts/*'




uninstall node with nvm


https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session