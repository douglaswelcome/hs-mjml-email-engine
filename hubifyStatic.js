const { Console } = require('console');
const fs = require('fs');

const arr = process.argv.slice(2)
arr[0]

const hubifyStatic = (arr) => {
  
  const file = '_dist/email_static/' + arr + '.html';

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    let check = "<!-- begin module -->";
    if(data.includes(check)){
      let search = /(?:<!-- begin module -->)([\s\S]*?)(?:<!-- end module -->)/g;
      let inner = data.match(search).join('\n');
      fs.writeFile(file, inner, 'utf8', (err, data) => {
              if (err) throw err;
              console.log("The " + arr + " static markup is updated");
            });
    } else {
      console.log(arr + " doesn't need hubifying");
    }
  });

}

hubifyStatic(arr)