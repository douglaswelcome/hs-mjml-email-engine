# Well Hello There

This is a little template builder for Hubspot using MJML. Really Simple to use. Let's get started.

### First Time Here?
1. Clone Repo
2. Run `npm install`
3. Start building!

### Wanna build some templates? Alright, I guess you can...

1. Run `npm run email`
2. This will watch `_src/email_markup/components` and `_src/email_markup/templates`
3. Any changes will trigger the template builder and take any .mjml files in `/templates` and convert them into email ready .html files in `_dist/processed_templates/*`
4. To get started, clone and rename `_src/templates/boiler_plate.mjml` and use `<mj-include path="../components/component_you_want.mjml"/>` in the tempalte file to build the template body.
5. Open up `_dist/processed_templates/your_template.html` in a browser and soak in the magic.


### Here's some tips

* Wanna get fancy with MJML? Check out their super simple documentation: [Check it out](https://mjml.io/documentation/) 