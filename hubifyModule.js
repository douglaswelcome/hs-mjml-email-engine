const fs = require('fs');

const arr = process.argv.slice(2)
arr[0]

const hubifyModule = (arr) => {

  const file = '_dist/email_modules/' + arr + '.module/module.html';

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;

    let search = /(?:<!-- begin module -->)([\s\S]*?)(?:<!-- end module -->)/g
    let inner = data.match(search).join('\n')
    fs.writeFile(file, inner, 'utf8', (err, data) => {
      if (err) throw err;
      console.log("The " + arr + " module markup is updated");
    });
    
  });
  
}

hubifyModule(arr)