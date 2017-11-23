
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', (table) => {
            table.increments().primary()
            table.string('firstname')
            table.string('lastname')
            table.string('company')
            table.string('description')
        })
    ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('users')
};
