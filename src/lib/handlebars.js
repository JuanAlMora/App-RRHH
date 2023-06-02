const Handlebars = require('handlebars');

Handlebars.registerHelper('isMultipleOf', function(num, divisor) {
    return num % divisor === 0;
  });

  // Define the 'eq' helper
Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
  });
  
  // Define the 'mod' helper
Handlebars.registerHelper('mod', function(num, divisor) {
    return num % divisor;
  });


module.exports = Handlebars;