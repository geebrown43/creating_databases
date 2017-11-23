
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstname:"T.H.", lastname: "Mack", company: "Ameribuild", description: "Construction Company"},
        {firstname:"Gavin", lastname: "Brown", company: "EllisWorks", description: "Freelance Mobile Developer"}
        
      ]);
    });
};
