
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('Vin', 255).notNullable().unique().index();
        tbl.string('Make', 255).notNullable().index();
        tbl.string('Model', 255).notNullable().index();
        tbl.integer('Mileage');


    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars', tbl => {

  })
};
