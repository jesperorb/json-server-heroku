# Deploy `json-server` to _Heroku_

<img align="right" width="100px" height="auto" src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="Heroku">

Heroku is a free hosting service for hosting small projects. Easy setup and deploy from the command line via _git_. The cons are that your app will have to sleep a couple of hours every day on the free plan.

### Install Heroku

1. Create an account on <br/>[https://heroku.com](https://heroku.com)
2. Install the Heroku CLI on your computer: <br/>[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

3. Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:
```bash
heroku login
```


### Create the project

1 . Clone this repo

2 . Change `db.json` to your own content and then `commit` your changes to git.

3 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:
```bash
heroku create
```

4 . Push your app to __Heroku__ (you will see a wall of code)
```bash
git push heroku master
```

5 . Visit your newly create app by opening it via heroku:
```bash
heroku open
```

---

_`heroku create` and `git push heroku master`_
![https://i.imgur.com/hHvYFfX.png](https://i.imgur.com/hHvYFfX.png)