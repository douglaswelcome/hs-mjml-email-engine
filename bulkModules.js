const fs = require('fs');
const path = require('path');
const runIt = require("child_process");

var moduleSrc = "_src/email_markup/module_markup/";


// Loop through all the files in the MJML Module directory
fs.readdir(moduleSrc, (err, files) => {
    if (err) {
        console.error("Could not list module mjml files", err);
        process.exit(1);
    }
    files.forEach(file => {
        // Parse out the Module Name
        let moduleName = path.parse(file).name;
        let moduleDist = '_dist/email_modules/' + moduleName + '.module/module.html';
        // Create MJML command for each module
        let command = "npx mjml " + moduleSrc + file + " -o " + moduleDist;
        console.log(command);
        // Run MJML command for each module
        runIt.execSync(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log();
        });
        fs.readFile(moduleDist, 'utf8', (err, data) => {
            if (err) throw err;
            let search = /(?:<!-- begin module -->)([\s\S]*?)(?:<!-- end module -->)/g
            let inner = data.match(search).join('\n')
            fs.writeFile(file, inner, 'utf8', (err, data) => {
                if (err) throw err;
                console.log("The " + moduleName + " module markup is updated");
            });
        });


    });



});












