const fs = require('fs');

const arr = process.argv.slice(2)
arr[0]

const start = "<!-- begin module -->";
const end = "<!-- end module -->";  

const hubifyStatic = (arr) => {

  const file = '_dist/email_static/' + arr + '.html';
  var secondSplit;

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    let firstSplit = data.split(start)[1];
    secondSplit = firstSplit.split(end)[0];
    fs.writeFile(file, secondSplit, 'utf8', (err, data) => {
      if (err) throw err;
      console.log("The " + arr + " static markup is updated");
    });
  });
  
}

hubifyStatic(arr)