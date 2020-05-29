# Well Hello There

This is a little template builder for Hubspot using MJML. Really Simple to use. Let's get started.

### First Time Here?
1. Clone Repo
2. Run `npm install`
3. Start building!

### Wanna build some templates? Alright, I guess you can...

1. Run `npm run email`
2. This will watch `_src/email_markup/`
3. Any changes will trigger the build and take any .mjml modules and static in `_src` and convert them into module.html files in corresponding directories in `_dist/`
4. Use the proper `{{ module.your_field }}` in your MJML files and configure the fields in the modules in the `_dist/email_modules/your.module/fields.json`
5. You can then create regular hubspot .html templates in `_dist/email_templates/`using HUBL and configure the npm scripts to upload to your portal if you like


### Here's some tips

* Wanna get fancy with MJML? Check out their super simple documentation: [Check it out](https://mjml.io/documentation/) 
* Have a question? Have suggestion? Are my instructions terrible? Submit a pull request or contact me: douglaswelcome@gmail.com