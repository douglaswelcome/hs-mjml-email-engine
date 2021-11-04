const fs = require('fs');

const moduleName = process.argv.slice(2)
moduleName[0]
console.log('Creating the ' + moduleName + ' module');




// create new directory
const createDir = (moduleName) => {
    const dir = '_dist/email_modules/' + moduleName + '.module';
    fs.mkdir(dir, (err) => {
        if (err) {
            throw err;
        }
        console.log(moduleName + " module is created.");
    });
}

// create fields.json
const createFields = (moduleName) => {
    const fieldsDir = '_dist/email_modules/' + moduleName + '.module/fields.json';
    const fieldsContent = `[
        //add your fields here
        ]
    `;
    fs.writeFile(fieldsDir, fieldsContent, (err) => {
        if (err) {
            throw err;
        }
        console.log("fields.json created");
    });

}

// create meta.json
const createMeta = (moduleName) => {
    const metaDir = '_dist/email_modules/' + moduleName + '.module/meta.json';
    const metaContent = `{
        "global": false,
        "host_template_types": ["EMAIL"],
        "smart_type": "NOT_SMART",
        "is_available_for_new_content": true
    }
    `;
    fs.writeFile(metaDir, metaContent, (err) => {
        if (err) {
            throw err;
        }
        console.log("meta.json created");
    });

}

// create module.html
const createHtml = (moduleName) => {
    const markupDir = '_dist/email_modules/' + moduleName + '.module/module.html';
    const markupContent = `{

    }
    `;
    fs.writeFile(markupDir, markupContent, (err) => {
        if (err) {
            throw err;
        }
        console.log("module.html created");
    });

}



const createModule = (moduleName) => {
    const dir = '_dist/email_modules/' + moduleName + '.module';

    fs.access(dir, function (err) {
       
        if (err) {
            createDir(moduleName);
            createFields(moduleName);
            createMeta(moduleName);
            createHtml(moduleName);

        } else {
            console.log("Module Already Created")
        }
    })
}


createModule(moduleName);

module.exports = createModule;