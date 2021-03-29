# demo-a

1. To create the **knexfile.js** run below command. After that update it manually. Because we need to provide the database name, before that we will have to create our database with the same name as in the .env file.

```
npx knex init
```

Knexfile.js is the starting point of using Knex, so we specify the database configurations, migrations and seeds in it.

2. To create migrations file run the below command.

```
npx knex migrate:make create_users
```

The name of the generated file is many numbers representing current date and hour followed by the name you provided. If you want to reorder the migrations file simply change the numbers.

3. To create the tables in the database run the below command.

```
npx knex migrate:latest
```

The files from migrations folder will be used to provide details for creating the tables.

4. To create seeding files run the below command. Make sure you provided seed configurations in the knexfile.js. As for the migrations files, seeds files will be also created, whereever specified in the knexfile.js.

```
npx knex seed:make 01_people
```

5. To seed data from the seeding files run the below command.

```
npx knex seed:run
```

IMPORTANT NOTE: because everytime we run this command the data is first deleted and then recreated (as specififed in the files in the seeds folder) id's in the database will increase everytime. Keep that in mind if you face violation error for foreign keys. If you don't want to recreate all of the tables especially users, because for them we use foreign key you have the option to seed only from specific files with the below command:

```
npx knex seed:run --specific 01_people.js
```
