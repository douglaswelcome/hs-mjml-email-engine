for f in _src/email_markup/module_markup/*.mjml; do
  file="${f##*/}"
  file="${file%.*}"
  if [ -d "_dist/email_modules/$file.module" ]; then
    echo "$file module already exists"
  else
   npx hs create module $file _dist/email_modules/
    echo "$file module created"
  fi
  npx mjml _src/email_markup/module_markup/$file.mjml -o _dist/email_modules/$file.module/module.html
  sed -n '/<!-- begin module -->/,/<!-- end module -->/ p ' _dist/email_modules/$file.module/module.html > _dist/email_modules/$file.module/temp.html
  mv _dist/email_modules/$file.module/temp.html _dist/email_modules/$file.module/module.html
  echo "$file module markup converted"
done

for x in _src/email_markup/static_markup/*.mjml; do
  static="${x##*/}"
  static="${static%.*}"
  npx mjml _src/email_markup/static_markup/$static.mjml -o _dist/email_static/$static.html
  if grep -q '<!-- begin module -->' _dist/email_static/$static.html; then
   sed -n '/<!-- begin module -->/,/<!-- end module -->/ p ' _dist/email_static/$static.html > _dist/email_static/$static-temp.html
   mv _dist/email_static/$static-temp.html _dist/email_static/$static.html
   echo "$static block created"
  else
    echo "$static block created"
  fi
  
done


