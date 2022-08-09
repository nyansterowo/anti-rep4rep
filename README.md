<div align="center" markdown=1>
	<p align="center"><img width=45% src="https://i.ibb.co/0rgFYG9/3.png"></p>
	<strong>An easy to use script that prevents *rep4rep* in the comment of your guides/groups. (Steam)</strong>
	<br>Check out the setup and start using<br>
	<p></p>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![node.js](https://img.shields.io/badge/node.js-v14-green?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Star](https://img.shields.io/badge/-Give%20this%20repo%20a%20star!-red?style=flat-square)](https://github.com/nevzorl/anti-rep4rep)
[![Donate](https://img.shields.io/badge/donate-%241-orange?style=flat-square)](https://www.donationalerts.com/r/reedi)
<p align="center">Click on a badge to learn more.</p>

<p align="center">
  <a href="#%EF%B8%8F-preparation">Preparation</a> •
  <a href="#-installation">Installation</a> •
  <a href="/archive/main.zip">Download</a> •
  <a href="#-how-to-use">How to use?</a>
</p>

<br><br><br>

## ♻️ Preparation:
<img align="right" width="200" height="200" src="https://i.ibb.co/sRrgzGD/image.png"> 

**And so, for a start we need several tools, here they are:** <br>
* [node.js](https://nodejs.org/en/download/) (v14.17.0 or higher) <br>
* You can use a regular notepad, but I would recommend downloading at least [SublimeText](https://www.sublimetext.com/3)
* And of course the code itself. [Download](https://github.com/nevzorl/anti-rep4rep/archive/main.zip)


Install the above software and proceed to the next step. If you have problems installing **node.js**, read [this article](https://htmlacademy.ru/blog/boost/tools/installing-nodejs)



## 🔌 Installation:
After we have downloaded the tools we need, we need to unzip the archive with the code to any place. Then we open the console command and go to our folder. <br>
To open the console open "Run" (`Win + R`) and write `cmd` and then press Enter.



We go into the folder, I have it on the desktop, so you may have a different path if you unpack the code on any disk.
```cmd
$ cd C:\Users\iredoff\Desktop\anti-rep4rep
```


Then we install the necessary packages using npm:
```cmd
$ npm i 
```

You can also use [yarn](https://yarnpkg.com/lang/en/docs/install/) `(additional installation is required if you want to use yarn)`:
```cmd
$ yarn add
```


❗ If you have any errors while installing packages, go back to the [first step](https://github.com/perssBest/readme-test/blob/master/README.md#%EF%B8%8F-preparation)!

## ⚙ Config file setup

Next, you need to open the code editor, and then open the `config.js` file. <br>

If we want the script to check old comments when enabled (which were left while the script was not included), then we need this line: `(optional)`
```js
5 | cheakWhenStart: true, // if you want to turn it off, set the value to 'false'.
```

<br>

If you want reports to be sent to users whose comments have been deleted, then this line is for you:
```js
6 | reportAfterDelete: true, // if you want to turn it off, set the value to 'false'.
````

<br><br>


What guides the script will follow: `(?)`
```js
8  | manuals: [ 
9  |	2537839098, 2541938934, // etc.
10 | ],
```

<br>

Unique ending of the group in which comments will be tracked: `(?)`
```js
12 | groups: [
13 |	// ...
14 |	"nevzorl",
15 | ]
```

<br>

**Where can I get the ID of your guide?**
- Go to your manual, and in the line where the link is located, you see the link itself, and at the end of it the numbers (this is the ID of the manual.) <br>
![?](https://i.ibb.co/BqPSKdm/Share-X-YP2mbxf-E7-D.png)

<br><br>

**Where can I find this group id?**
- Go to the very main page of your group, with in the search bar you see this: <br>
![?](https://i.ibb.co/G2tbtk9/msedge-gs0-RMr-L43-V.png)

<br><br><br>

**You can change the game that your account will play when the script is running:** `(Not necessarily a change.)`
```js
18 | statusSettings: { 
19 |   [...]
20 |   playingGame: "🤬 stop-rep4rep (by perssBest)" 
21 | },
```


<br><br><br>

**And the last step of configuring the config, you must specify your data to enter the steam.** `(necessarily)`
```js
24 | loginSettings: {
25 |   accountName: 'ur username', // replace this
26 |   password: 'ur pass', // replace this, too
27 |   [...]
29 | },
```

<br>

⁉ **Do not be afraid for your accounts, this is an official operation, because the source code is open, you can examine it yourself.**

<br>

## 🔹 Launch
**After we have configured our configuration file, we need to run the script.**
```cmd
$ node .
```
If you are asked for SteamGuard or another code from the mail, then enter it, so you will successfully log into your account. <br>
Here is an example of how to include the script correctly: <br>

![?](https://media.discordapp.net/attachments/857908308303937536/867339533128957962/P3SvCxNruu.gif?width=917&height=472)

<br>

💢 **If you see any error, then you did something wrong. If you need help, please post your problem under [this manual](https://steamcommunity.com/sharedfiles/filedetails/?id=2553235394).**

<br>

## ❔ How to use

This script works *in real time* so the script must always be included. You can also host this script. For example, [heroku](https://www.heroku.com/), [glitch](http://glitch.com/), or [repl.it](https://replit.com/) <br>
The script will watch your guidance in real time and delete comments like this:
```txt
RUS : Выберите что то одно из этого списка и напишите в моём профиле, отвечу тем же!
ENG: Choose the one that's on the list and write in my profile, I will answer the same!
-rep cheater
-rep softer
-rep fuck u
-rep defo cheaterman
-rep F*cking Cheater!!!
-rep noob with hacks omg
-rep this dude is literally aimbotting and not banned yet wtf?
-rep 100% hack 0% luck
-rep reported for cheating in CS:GO
-rep always headshots, f*cking cheater
-rep please report this guy lol
-rep so many hours and not banned yet wtf
-rep report this guy for cheatin in CS:GO please
-rep most blatant cheater I have seen
-rep please report this guy
-rep Cheater Profile, VAC incoming!!!
-rep EZ VAC GG!!!!!!!
-rep f*cking noob cheater in CS:GO ez reportbot
-rep reported for boosting!!! >:(
```

<br>

## 🎉 Conclusion
This concludes the documentation. I want to say a huge thank you to [Jmopel](https://github.com/Jmopel) for helping with the development of the code. <br>
In the future, it is possible that an auto-reporting system will be implemented and the checking of old messages will also be improved. <br>
If you have any **questions/problems** - post your problem under [this manual](https://steamcommunity.com/sharedfiles/filedetails/?id=2553235394). or you can open the issues
