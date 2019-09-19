// npx knex migrate:make [migration-name]

exports.up = function(knex) {

  // users
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('username').notNullable().unique();
    users.string('password').notNullable();
    users.string('firstname').notNullable();
    users.string('lastname').notNullable();
    users.string('preferredname');
    users.string('email').notNullable().unique();
    tbl.integer('group_id').unsigned().notNullable()
      .references('id').inTable('groups')
      .onDelete('CASCADE').onUpdate('CASCADE');
  });

  // groups
  return knex.schema.createTable('groups', tbl => {
    tbl.increments();
    tbl.string('groupname').notNullable().unique();
    users.text('description');
  });

  // user_group
    return knex.schema.createTable('user_group', tbl => {
      tbl.integer('user_id').unsigned().notNullable()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('group_id').unsigned().notNullable()
        .references('id').inTable('groups')
        .onDelete('CASCADE').onUpdate('CASCADE');
    });

// ## events Table

// Potluck events - will need events table for the individual events

// | id | increments |
// | eventname | string, notNullable |
// | description | string |
// | eventdate | date |
// | eventtime | time |
// | location_id | link to eventlocation table |
// | user_id | links to the user_id who created the event |

// ### user_event Table

// table to connect users and the event they created

// | user_id        | integer, .unsigned().notNullable().references('id').inTable('users') |
// | event_id       | integer, .unsigned().notNullable().references('id').inTable('events') |
// tbl.primary(['user_id', 'event_id']);

// ### locations Table

// Locations that events can occur

// | id | increments |
// | location | string, notNullable |
// | description | string |

// ### event_location Table

// Locations may be reused - multiple events can have the same location

// | event_id        | integer, .unsigned().notNullable().references('id').inTable('events') |
// | location_id       | integer, .unsigned().notNullable().references('id').inTable('locations') |
// tbl.primary(['event_id', 'location_id']);


// ## foods Table

// Potluck Food - will need a table for different foods, what category the food belongs to, is it vegetarian/vegan friendly, and is it guten free

// | id | increments |
// | foodname | string, notNullable |
// | description | string |
// | category_id | links to category table |
// | vegetarian | boolean |
// | vegan | boolean | 
// | gutenfree | boolean |

// ## categories Table

// Potluck Food categories

// | id | increments |
// | category | string, notNullable |
// | description | string |

// ### foods_category Table

// multiple foods can be in different categories

// | food_id        | integer, .unsigned().notNullable().references('id').inTable('foods') |
// | category_id       | integer, .unsigned().notNullable().references('id').inTable('categories') |
// tbl.primary(['food_id', 'category_id']);

// ## guests Table

// Guests may register and gain a username, however they do not have to register. Email required.

// | id | increments |
// | guestname | string, notNullable |
// | guestemail | string, notNullable |
// | user_id | link to user id optional |

// ### guests_events

// Guests may attend multiple different events and if attending: "going", "not going", or "unknown" may be null

// | event_id    | integer, .unsigned().notNullable().references('id').inTable('events') |
// | guest_id    | integer, .unsigned().notNullable().references('id').inTable('guests') |
// | attending   | string | 
// tbl.primary(['event_id', 'guest_id']);

// ### guests_events

// multiple foods can be in different events, and Guests should be able to select items to bring to an event

// | food_id   | integer, .unsigned().notNullable().references('id').inTable('foods') |
// | event_id  | integer, .unsigned().notNullable().references('id').inTable('events') |
// | guest_id  | integer, .unsigned().notNullable().references('id').inTable('guests') |
// | quantity  | integer, notNullable |
// tbl.primary(['guest_id', 'food_id', 'event_id']);

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

// npx knex migrate:latest
// npx knex migrate:latest --env=testing