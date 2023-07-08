//# 13 complete web development course project

/*
nodejsYoutube> mkdir expressWeb
cd expressWeb> src > type nul > app.js
   expressWeb> npm init                   // for package.json file      > author:dharm technical
   expressWeb> npm i express
*/

/*
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//public static path

//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname,"../public")

app.use(express.static(static_path));

// routing      app.get(route,callback)
app.get("", (req, res) => {
    res.send("welcome to dharm technical channel");
});

app.get("/about", (req, res) => {
    res.send("welcome to dharm technical About channel");
});

app.get("/weather", (req, res) => {
    res.send("welcome to dharm technical weather channel");
});

app.get("*", (req, res) => {
    res.send("404 error page opps");
});

app.listen(port, () => {
console.log(`listening to the port at ${port}`);
});
*/
//npm install hbs            mkdir views    cd views   index.hbs about.hbs weather.hbs 404error.hbs            
//expressWeb>nodemon src/app.js
//hbs file edit krne per nodemonka use krne ke liye  nodemon src/app.js -e js,hbs
const express = require("express");
const path = require("path");
const hbs = require("hbs");                 // for partial file ke liye
const app = express();
const port = process.env.PORT || 8000;

//public static path
//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing  for hbs use render in place send
app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Opps! Page Not Found , Click Here to go"
    });
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});

//#14
/* by cmd ya gitbase
 SSH secure shell or ssh is used to create a secure channel between a local and remote computer.while ssh is commonly used for secure terminal access and
 file tranfers, it can also be used to create a secure tunnel between computers for forwarding other network connections that are not normally encrypted
expressWeb>git status              //initialize hai ki nhi check           fatal error aaye to git init
          >git init
          >git status                                            // red dikhege
          >git add .                                             // for single git add public
          >git commit -m "nodejs project first commit"
          >git status                                            // on branch master

          github
          create new repo   webproject
          git remote add origin https://github.com/dharmendravlog/webproject.git                           //        remote-version            origin- alisename

          >git remote                                            //none
          >git remote add origin https://github.com/dharmendravlog/webproject.git
          >git remote                                            //origin


          for ssh key use gitbase
          >ls ~/.ssh                                            // error

          >ssh-keygen -t rsa -b 4096 -C "dharmendra.developers@gmail.com"
          //path           enter
          //password       enter enter
          >ctrl+c
          >ls ~/.ssh       id_rsa id_rsa.pub

          private key rsa ko sys me add krne ke liye agent chahiye ssh ka live hona chahiye

          >eval ${ssh-agent -s}        Agent pid 1394  //make sure live hoga to agent pid aaygi milegi

          >ssh-add -K /Users/Dell/.ssh/id_rsa or ssh-add -K ~/.ssh/id_rsa

          >cat ~/.ssh/id_rsa.pub

          jo bhi code aaye use copy krke github me profilesetting me ssh key me new key generate krke title name de and key me code paste kare

          sys or github me proper secure connection estabilish ho gya hai ki nhi check

          in cmd
          >ssh -T git@github.com                                   //  first bar yes

          >git remote                                              //origin
          >git branch                                              * master
          >git push -u origin master

          //in future hmne apne project me kuch kuch edit kiya to

          >git status                                     file red
          >git add.
          >git status                                     file grren
          >git commit -m "adding back button"
          >git push
          */
         
//#15 3 proper way to share codes of nodejs
/*
#1 only share 
sender side
expressWeb  folder me all files are copy(node_modules ko chodke)
nodejsYoutube me new folder nodeProjfinal paste all files               and compress to zip file this folder nodeProjfinal.zip
 
copy nodeProjfinal.zip folder and share by watsp, email etc.
 
reciever side
open file in vscode
nodeProjfinal > node src / app.js                               // can not find module "express"      node_modules folder nhi  hone per 
nodeProjfinal > npm install                                   // npm krne per jo bhi dependency chahiye apne aap aa jaygi

    > git status
nodeProjFinal - me.gitignore file delete krege kyuki git se initialize nhi hai
    > git init
        > git status
            > cls
            > type nul > .gitignore                                add file in .gitignore    node_modules
                > git status                 red files
                    > cls
                    > git add.
> git status                 green files
    > cls
    > git commit - m "demo hoe to share project"
        > git status                                            on branch master
            > git branch * master

github new repo             npmProject                          git remote add origin https://github.com/dharmendravlog/npmProject.git

> git remote add origin https://github.com/dharmendravlog/npmProject.git

> git remote                origin
    > git push - u origin master

#2 share code https copy in github          yha se zip file bhi dounload kr skte hai
copy code  and send

receiver

#3 share clone code
receiver git clone
nodeProjfinal > mkdir demoPro
    > cd demoPro
demoPro > git clone https://github.com/dharmendravlog/npmProject.git

      hamare file me node_modules share nhi kr rhe hai isliye use npm install
demoPro > npm install

*/

//#16 Host Websites For Free on HeroKu
/*
heroku in google

click on nodejs         i am ready to start                 install heroku cli 64-bit installer

>heroku -v       version    cli proper installed            and must have ssh key

in git base
>ls -al ~/.ssh         id_rsa id_rsa.pub       

public file ko heroku se add






*/