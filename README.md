# Test

### Project Setup

Once you clone or download project go into you folder

> now cope **.env.local** file to **.env** file

### Installing

```
> npm install or yarn install  (this will install all dependent libraries)
```

### Database Config Setup

Create new database (let's say i'm going to use postgres and my database name is **test**).
so in my **.env** file will set below parameters.

```
DB_HOST=localhost               # database connection host
DB_USER=postgres                # database username
DB_PASS=secret@123              # database password
DB_NAME=test                    # database name
DB_DIALECT=postgres             # database dialect
DB_PORT=5432                    # database port
```

some other inportant parameters/keys in **.env** file

```
APP_HOST=localhost      # application host name
APP_PORT=3000           # application port
SECRET=secret           # secret key for encrypt/decrypt JWT token
```

### Migration and Seeders run

After creating database and updating .env file run below commands

```
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:seed:all
```

Migration will create table users and seed some default users

- **users** - this is normal user table with some required fields like (firstName, lastName, email, password, and isAdmin)
  Seeders will create one new client entry in application and 2 users entry one admin and one normal user.

`npm start` to run your project

> Everythig is setup and you are good to go now. Happy Coding :)

# Other Information about setup/commands

## Useful terminal commands

```
> node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:migrate:undo
> node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
> node_modules/.bin/sequelize seed:generate --name demo-user
```
