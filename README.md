# Deploy `json-server` to `{{ free hosting site }}`

> Instructions how to deploy the full fake REST API [json-server](https://github.com/typicode/json-server) to various free hosting sites. Should only be used in development purpose but can act as a simpler database for smaller applications.

* [**Create your database**](#create-your-database)
* [Deploy to **Heroku**](#deploy-to-heroku)
* [Deploy to **Azure**](#deploy-to-azure)


## Create your database

1. Press the green `Use this template`-button in the right corner
2. Give your new repo a name and press the green `Create repository from template`-button
3. Clone your newly created repository to your computer

4 . Change the contents of `db.json` to **your own content** according to the [`json-server example`](https://github.com/typicode/json-server#example) and then `commit` your changes to git locally.

_this example will create `/posts` route , each resource will have `id`, `title` and `content`. `id` will auto increment!_
```json
{
  "posts":[
    {
      "id" : 0,
      "title": "First post!",
      "content" : "My first content!"
    }
  ]
}
```

---

## Deploy to **Heroku**

<img align="right" width="100px" height="auto" src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="Heroku">

Heroku is a free hosting service for hosting small projects. Easy setup and deploy from the command line via _git_.

###### Pros

* Easy setup
* Free

###### Cons

* App has to sleep a couple of hours every day.
* "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds. Can maybe be solved with [**Kaffeine**](http://kaffeine.herokuapp.com/)

---

### Install Heroku

1 . [Create your database](#create-your-database)

2 . Create an account on <br/>[https://heroku.com](https://heroku.com)

3 . Install the Heroku CLI on your computer: <br/>[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

4 . Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:
```bash
heroku login
```

5 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:
```bash
heroku create my-cool-project
```

6 . Push your app to __Heroku__ (you will see a wall of code)
```bash
git push heroku master
```

7 . Visit your newly create app by opening it via heroku:
```bash
heroku open
```

8 . For debugging if something went wrong:
```bash
heroku logs --tail
```

---

#### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):
```json
 "scripts": {
    "start" : "node server.js"
 }
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port. So the code will have the following:
```js
const port = process.env.PORT || 4000;
```

## Deploy to **Azure**

<img align="right" width="100px" height="auto" src="https://docs.microsoft.com/en-us/azure/media/index/azure-germany.svg" alt="Azure">

You can also use _Microsoft Azure_ to deploy a smaller app for free to the Azure platform. The service is not as easy as _Heroku_ and you might go insane because the documentation is really really bad at some times and it's hard to troubleshoot.

The **pros** are that on _Azure_ the app **will not be forced to sleep**. It will sleep automatically on inactivity but you can just visit it and it will start up.

## Installation

1 . Create a Microsoft Account that you can use on Azure: </br>
https://azure.microsoft.com/

2 . Install the `azure-cli`: <br/>
https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
_This might cause some trouble, you will see. Remember to restart your terminal or maybe your computer if the commands after this does not work_

3 . Login to the service via the command line and follow the instructions: </br>
```bash
az login
```
_You will be prompted to visit a website and paste a confirmation code_


## Create the project

1 . [Create your database](#create-your-database)

2 . Create a resource group for your projects, replace the name to whatever you want just be sure to use the same group name in all commands to come. You only have to create the resource group and service plan once, then you can use the same group and plan for all other apps you create if you like.

```bash
az group create -n NameOfResourceGroup -l northeurope
```

3 . Create a service plan:

```
az appservice plan create -n NameOfServicePlan -g NameOfResourceGroup
```

4 . Create the actual app and supply the service plan and resource group
```bash
az webapp create -n NameOfApp -g NameOfResourceGroup --plan NameOfServicePlan
```

5 . Create deployment details. A git-repo is not created automatically so we have to create it with a command:

```bash
az webapp deployment source config-local-git -n NameOfApp -g NameOfResourceGroup
```

6 . From the command in step 5 you should get a **url** in return. Copy this url and add it as a remote to your local git project, for example:

```bash
git remote add azure https://jesperorb@deploy-testing.scm.azurewebsites.net/deploy-testing.git
```

7 . Now you should be able to push your app:
```bash
git push azure master
```

You should be prompted to supply a password, this should be the pass to your account. If not, you can choose a different password at your Dashboard for Azure: **[https://portal.azure.com/](https://portal.azure.com/)**

Choose **App Services** in the sidebar to the left and the choose your app in the list that appears then go to **Deployment Credentials** to change your password for deployment:<br>
https://docs.microsoft.com/en-us/azure/app-service/app-service-deployment-credentials
