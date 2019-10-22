A 5-days training sprint to learn Vue, Nuxt, and GraphQL with task checklists for faster learning process.

# Table of Contents

1. [Objective](#objective)
2. [Prequisites](#prequisites)
3. [How to Do This Training](#how-to)
4. [Task Checklist](#tasks)
5. [Rules](#rules)
6. [Contribution](#contribution)


# 1. Objective <a name="objective"></a>

This repository is a curated learning steps intended for `junior web developer` to learn faster, so that they can start to contribute feature / bug fix for software projects requiring combination of following technology :

- NodeJS + Express
- TypeScript
- VueJS
- ExpressJS
- PostgreSQL
- GraphQL 
- Apollo
- NuxtJS


# 2. Prequisites <a name="prequisites"></a>

Following knowledges / experiences on these technology are required before proceeding.

1. HTML, CSS, Javascript
2. Database (ex: MySQL, PostgreSQL)
3. Git


# 3. How to Follow This Training <a name="how-to"></a>

Try to complete the tasks given per day. This training should take around 5 (five) working days or around 40 hours of learning.

1. Fork this repo
2. As we are using [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), start creating `develop` branch first on your forked repo
3. Before starting the task on specific day, create new `feature/day-x` branch
4. Push all of the code related to that day task into that branch. 
5. After tasks on that day finished, merge back the `feature/day-x` to the `develop` feature
6. Check the checklist of the task finished, after the code is working and pushed to repository.

**Notes:**

- You only need to push code for task inside `Task` list. The task inside `Reference` list is not mandatory.


# 4. Task Checklist <a name="tasks"></a>

### Day 1 - Introduction - Node & Typescript

**References**

- [ ] have forked this repository and pushed the develop branch
- [ ] have followed [NodeJS tutorial](https://www.tutorialspoint.com/nodejs/index.htm)
- [ ] have followed [TypeScript tutorial](https://www.tutorialspoint.com/typescript/index.htm)
- [ ] have made a [simple web server using Node & TypeScript](https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/)

**Task**

- [ ] have added route `/custom` that return `Hello [my-name]!`
 
 
### Day 2 - Front End - VueJS

**References**

- [ ] have followed [VueJS tutorial](https://www.tutorialspoint.com/vuejs/index.htm)
- [ ] have finished [tutorial to build a sample Agenda app](https://mdbootstrap.com/education/vue/agenda-app-1-overview/)

**Task**

- [ ] have made a simple to-do list app with following front-end functions :
	- show list of to-do 
	- add new to-do list
	- edit new to-do list
	- delete a to-do list 

Sample (not mandatory to look like [this](https://www.freecodecamp.org/news/learn-how-to-create-your-first-angular-app-in-20-min-146201d9b5a7/))

![Reference](https://github.com/alanyudh/nuxt-graphql-5-days-training-sprint/blob/master/reference-from-freeCodeCamp.org.gif)


### Day 3 - Back End - Node + Express + PostgreSQL

**References**

- [ ] have followed [ExpressJS tutorial](https://www.tutorialspoint.com/expressjs/index.htm)
- [ ] have finished [tutorial to build a API server using Express + PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

**Task**

- [ ] change the database connection from directly to PostgreSQL into`Sequelize` as the ORM connection

Reference : [Setup PostgreSQL with Sequelize in Express](https://www.robinwieruch.de/postgres-express-setup-tutorial)


### Day 4 - Back End - GraphQL

**References**

- [ ] have followed the [GraphQL tutorial](https://www.tutorialspoint.com/graphql/index.htm)
- [ ] have followed [GraphQL and Express sample app tutorial](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)
- [ ] have followed [GraphQL w/ Apollo Server tutorial](https://www.robinwieruch.de/graphql-apollo-server-tutorial)

**Task**

- [ ] create GraphQL mutation & queries for to-do list app on day 2

Additional reference :

- [graphql-concepts-i-wish-someone-explained-to-me-a-year-ago](https://medium.com/naresh-bhatia/graphql-concepts-i-wish-someone-explained-to-me-a-year-ago-514d5b3c0eab)
- [a-beginners-guide-to-graphql](https://medium.freecodecamp.org/a-beginners-guide-to-graphql-60e43b0a41f5)


### Day 5 - Universal Web App - NuxtJS
 
**References**

- [ ] have read [NuxtJS guide](https://nuxtjs.org/guide/)
- [ ] have followed [NuxtJS sample app tutorial]()
- [ ] have followed [NuxtJS + GraphQL + Apollo tutorial](https://www.djamware.com/post/5cdc0ba280aca754f7a9d1f4/node-express-postgresql-vue-2-and-graphql-crud-web-app)
 
 
**Task**

- [ ] create the previous simple to-do list app using :
	- NuxtJS
	- GraphQL
	- PostgreSQL

	
# 5. Rules <a name="rules"></a>

### 1. Use Proper Commit Message

Instead of inserting `fix stuff` or `haksdhfks`, insert a commit message that simply explains what happened. You can follow [this guide](https://chris.beams.io/posts/git-commit/) for example.

### 2. Follow a Style Guide

For example, you can refer to [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)

### 3. Spent Time to Understand the Concept

It is recommended for you to not only understand how to use the technology, but also on the underlying concept behind the technology.


# 6. Contribution <a name="contribution"></a>

If you have ideas how to improve this training sprint guideline, please do a PR or leave an issue. Thanks a lot :)



**Sidenote**

_I'm looking for a developer that have experience on these technology. If you happen to be one OR has finished this training, leave me a message on [alan.yudh@gmail.com](mailto:alan.yudh@gmail.com?subject=[GitHub]%20Source%205DayTraining%20NuxtGraphQL)_
