const runIt = require("child_process");
const {
    Console
} = require("console");
const fs = require('fs');
const path = require('path');



let staticSrc = "_src/email_markup/static_markup/";
let staticDist = "_dist/email_static/";

let command = "npx mjml " + staticSrc + "*" + " -o " + staticDist;


let markupify = () => {
    return new Promise(function(resolve, reject) {
    setTimeout( () => {
      
            runIt.execSync(command, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);

                console.log("MJML executed");
                
            });
            resolve();
            }, 3000);
        
    });

    };




let hubify = () => {
    fs.readdir(staticDist, (err, files) => {
        if (err) {
            console.error("Could not list static HTML files", err);
            process.exit(1);
        }
        files.forEach(file => {
            fs.readFile(staticDist + file, 'utf8', (err, data) => {
                if (err) throw err;
                let start = "<!-- begin module -->";
                let end = "<!-- end module -->";
                if (data.indexOf(start) >= 0) {
                    let firstSplit = data.split(start)[1];
                    let secondSplit = firstSplit.split(end)[0];
                    fs.writeFile(staticDist + file, secondSplit, 'utf8', (err, data) => {
                        if (err) throw err;
                        console.log("The " + path.parse(file).name + " static markup is updated");
                    });
                }
            });
        })
    });
}

markupify().then(hubify);


