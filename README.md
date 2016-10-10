# angular-scripts
Simple AngularJS Boilerplate to kick start your new project with SASS support and Gulp watch/build tasks

# Features
* SASS support including sourceMaps
* Minimal CSS styling of the view
* Gulp watch, build and local server tasks
* clear folder structure
* minified CSS and JS build files

## For quick install 
```bash
sudo npm install -g create-angular-app

create-angular-app projectName
```

## 1. Setup
```bash
npm install
```
- install all npm and bower dependencies

## 2. Watch files
```bash
gulp dev
```
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```
## 4. Start webserver
```bash
npm start
```
## Structure of App
```
public/
    ico/
    styles
    template
src/
    _config/
    controller/
    factories/
    services/
    modules/
        moduleName/
            .html
            .js
            .scss
```
## Contact
Copyright (C) 2016 Semianchuk Vitalii<br>
[www.github.com/fix2015](http://www.github.com/fix2015)<br>
