exports.up = function(knex, Promise) {
    return knex.schema.createTable('favorites', function(table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.integer('user_id').references('id').inTable('users');
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('favorites');
  }