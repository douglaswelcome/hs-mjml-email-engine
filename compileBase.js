const fs = require('fs');
let staticSrc = "_src/email_markup/static_markup/";
let allSections = "_src/email_markup/base_files/allSections.mjml"

let compileMjml = () => {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            fs.readdir(staticSrc, (err, files) => {
                if (err) {
                    console.error("Could read mjml files", err);
                    process.exit(1);
                }
                files.forEach(file => {
                    fs.readFile(staticSrc + file, 'utf8', (err, data) => {
                        if (err) throw err;
                        let check = "<!-- begin module -->";
                        if (data.includes(check)) {
                            let search = /(?:<!-- begin module -->)([\s\S]*?)(?:<!-- end module -->)/g;
                            let inner = data.match(search).join('\n');
                            fs.appendFileSync(allSections, inner, 'utf8', (err) => {
                                if (err) throw err;
                            });


                            //     } else {
                            //         console.log(file + " doesn't need hubifying")
                        }
                    });
                })
            });
            resolve();
        }, 3000);
    })

}


let baseMjml = "_src/email_markup/base_files/base.mjml"


// const replace = (path) => {
//     let initial = "<!-- insert here -->";
//     let block = fs.readFileSync(allSections, 'utf8');
//     // load the html file
//     var fileContent = fs.readFileSync(path, 'utf8');


//     // replacePath is your match[1]
//     fileContent = fileContent.replace(initial, block);
//     console.log(fileContent);

//     // // this will overwrite the original html file, change the path for test
//     fs.writeFileSync(path, fileContent);

// }

// replace(baseMjml);


let clearCompiled = () => {
    const content = 'Some content!'

    fs.writeFileSync(allSections,'donkey balls', err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })
}

compileMjml().then(clearCompiled);
