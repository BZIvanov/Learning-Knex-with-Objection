### package.json commands

- **migrate** - will migrate the tables to the database. Note that knex will also create 2 additional tables (knex_migrations and knex_migrations_lock). In the knex_migrations table knex will keep track of what is already migrated so if we run migrate command twice we will get 'Already up to date' message the second time.

- **seed** - will seed data to the already migrated tables.

- **down** - will remove the last migration. If you run this command twice you will remove latest 2 migration files. You can see the order in the database in knex_migrations table. As you can see in the migrations file this command is deleting the table.
