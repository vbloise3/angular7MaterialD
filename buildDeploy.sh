#/bin/bash
#build the site
ng build --prod --aot
#upload files
aws s3 cp ./dist/angular7MaterialD s3://angular7materialdesign --recursive --acl public-read
