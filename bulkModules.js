
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

            let start = "<!-- begin module -->";
            let end = "<!-- end module -->";

            
            let firstSplit = data.split(start)[1];
            
            let secondSplit = firstSplit.split(end)[0];

            console.log(secondSplit);

            fs.writeFile(moduleDist, secondSplit, 'utf8', (err, data) => {
            if (err) throw err;
            console.log("The " + moduleName + " module markup is updated");
             });
          });

        
    });



});

       



      
    
   
  
  
  
  


//   ;
//     var toPath = path.join(moveTo, file);

//     fs.stat(fromPath, function (error, stat) {
//       if (error) {
//         console.error("Error stating file.", error);
//         return;
//       }

//       if (stat.isFile())
//         console.log("'%s' is a file.", fromPath);
//       else if (stat.isDirectory())
//         console.log("'%s' is a directory.", fromPath);

//       fs.rename(fromPath, toPath, function (error) {
//         if (error) {
//           console.error("File moving error.", error);
//         } else {
//           console.log("Moved file '%s' to '%s'.", fromPath, toPath);
//         }
//       });
//     });
//   });
// });




// const runIt = require("child_process");


// const modrun = () => {


//     runIt.exec("npx mjml _src/email_markup/static_markup/* -o _dist/email_static/ ", (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     });


// }

// modrun();
