# Well Hello There

This is a little template builder for Hubspot using MJML. Really simple to use. I hope. Let's get started.

### First Time Here?
1. Clone Repo
2. Run `npm install`
3. Run `npx hs init` to create a `hubspot.config.yml`
4. Start building!

### Wanna build some templates? Alright, I guess you can...

1. Run `npm run email`
2. This will watch `_src/email_markup/`
3. Any changes to `_src/email_markup/module_markup/` will trigger the processing of markup in mjml and convert them into module.html files in corresponding directories in `_dist/`. If a module has yet to be created, the script will build the necessary module files first.
4. Similarly, any changes to `_src/email_markup/static_markup` will trigger the process and convert them into `filename.html` files in `_dist/email_static'.
5. Any chances to `_src/required_markup` will trigger a build to all 
6. Use the proper `{{ module.your_field }}` in your MJML files and configure the fields in the modules in the `_dist/email_modules/your.module/fields.json`
7. You can then create regular hubspot .html templates in `_dist/email_templates/`using HUBL and configure the npm scripts to upload to your portal if you like

### Some Notes
* Make sure your MJML module and static markup includes 
```
<mjml>
<mj-include path="../required_markup/head.mjml" />
<mj-body>
<!-- begin module -->
```

at the top and 

```
<!-- end module -->
</mj-body>
</mjml>
```

at the bottom. This is how MJML pulls in any styling and adds it inline in your html markup before.



### Some More Thoughts

* Wanna get fancy with MJML? Check out their super simple documentation: [Check it out](https://mjml.io/documentation/) 
* Have a question? Have suggestion? Are my instructions terrible? Submit a pull request or contact me: douglaswelcome@gmail.com