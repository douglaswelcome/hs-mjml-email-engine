const fs = require('fs');



const hubifyMarkup = (arr) => {
    fs.readFile('_dist/email_modules/' + arr + '.module/module.html', 'utf8', (err, data) => {
        if (err) throw err;
        fs.writeFile('_dist/email_modules/' + arr + '.module/module.html', data, () => {
          });
      });
} 


  module.exports = hubifyMarkup;