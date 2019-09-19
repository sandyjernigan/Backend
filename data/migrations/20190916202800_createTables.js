// npx knex migrate:make [migration-name]

exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('username').notNullable().unique();
    users.string('password').notNullable();
    users.string('firstname').notNullable();
    users.string('lastname').notNullable();
    users.string('preferredname');
    users.string('email').notNullable().unique();
    users.integer('group_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

// npx knex migrate:latest
// npx knex migrate:latest --env=testing