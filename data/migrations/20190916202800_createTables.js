// npx knex migrate:make [migration-name]

exports.up = function(knex) {
  return knex.schema

  // groups  
  .createTable('groups', tbl => {
    tbl.increments();
    tbl.string('groupname').notNullable().unique();
    tbl.text('description');
  })

  // locations
  .createTable('locations', tbl => {
    tbl.increments();
    tbl.string('location').notNullable();
    tbl.string('description');
  })

  // categories
  .createTable('categories', tbl => {
    tbl.increments();
    tbl.string('category').notNullable();
    tbl.string('description');
  })

  // users
  .createTable('users', tbl => {
    tbl.increments();
    tbl.string('username').notNullable().unique();
    tbl.string('password').notNullable();
    tbl.string('firstname');
    tbl.string('lastname');
    tbl.string('preferredname');
    tbl.string('email').notNullable().unique();
    tbl.integer('group_id').unsigned().notNullable()
      .references('id').inTable('groups')
      .onDelete('CASCADE').onUpdate('CASCADE');
  })

  // events
  .createTable('events', tbl => {
    tbl.increments();
    tbl.string('eventname').notNullable();
    tbl.string('description');
    tbl.date('eventdate');
    tbl.time('eventtime');
    tbl.integer('location_id').unsigned()
      .references('id').inTable('locations')
      .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('user_id').unsigned().notNullable()
      .references('id').inTable('users')
      .onDelete('CASCADE').onUpdate('CASCADE');
  })

  // foods
  .createTable('foods', tbl => {
    tbl.increments();
    tbl.string('foodname').notNullable();
    tbl.string('description');
    tbl.integer('category_id').unsigned().notNullable()
      .references('id').inTable('categories')
      .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.string('vegetarian');
    tbl.string('vegan');
    tbl.string('gutenfree');
  })

  // guests
  .createTable('guests', tbl => {
    tbl.increments();
    tbl.string('guestname').notNullable();
    tbl.string('guestemail').notNullable();
    tbl.integer('user_id').unsigned()
      .references('id').inTable('users');
    tbl.integer('group_id').unsigned().notNullable()
      .references('id').inTable('groups')
      .onDelete('CASCADE').onUpdate('CASCADE');
  })

// Table relationships

  // guests_events
  .createTable('guests_events', tbl => {
    tbl.integer('event_id').unsigned().notNullable()
      .references('id').inTable('events')
      .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('guest_id').unsigned().notNullable()
      .references('id').inTable('guests');
    tbl.primary(['event_id', 'guest_id']);
    tbl.string('attending');
  })

  // foods_category
  .createTable('foods_category', tbl => {
    tbl.integer('food_id').unsigned().notNullable()
      .references('id').inTable('foods')
      .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('category_id').unsigned().notNullable()
      .references('id').inTable('categories');
    tbl.primary(['food_id', 'category_id']);
  })

  // food_events
  .createTable('food_events', tbl => {
    tbl.integer('event_id').unsigned().notNullable()
      .references('id').inTable('events')
      .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('food_id').unsigned().notNullable()
      .references('id').inTable('foods');
    tbl.integer('guest_id').unsigned().notNullable()
      .references('id').inTable('guests');
    tbl.primary(['event_id', 'food_id']);
    tbl.integer('quantity').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('food_events')
    .dropTableIfExists('foods_category')
    .dropTableIfExists('guests_events')
    .dropTableIfExists('user_event')
    .dropTableIfExists('event_location')
    .dropTableIfExists('user_group')
    .dropTableIfExists('guests')
    .dropTableIfExists('events')
    .dropTableIfExists('foods')
    .dropTableIfExists('users')
    .dropTableIfExists('categories')
    .dropTableIfExists('locations')
    .dropTableIfExists('groups');
};

// npx knex migrate:latest
// npx knex migrate:latest --env=testing