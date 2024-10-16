#!/bin/bash

#Optionally
#npm install
#npm clean-install

# Thanks to https://itnext.io/how-to-add-git-hash-into-your-angular-application-bec20b702bb1
node grab-git-info.js

ng build --configuration production --base-href "https://softwaredam.com/archive"