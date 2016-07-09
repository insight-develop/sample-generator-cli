'use strict';
const fs = require('fs');
const path = require('path');
const Config = require('../class/Config');
const Logger = require('../class/Logger');

module.exports = (args) => {
    let directives = args.slice(3, args.length);
    let templatePath = path.normalize(`${Config.rootFolder}/template/angular/template.directive.js`);
    let templateData = fs.readFileSync(templatePath, {encoding: 'utf8'});

    directives.forEach((directive) => {
        if (!fs.existsSync(`${directive}.ctrl.js`)) {
            let newData = templateData.replace(/_DIRECTIVE_TEMPLATE_/g, directive);
            fs.writeFileSync(`${directive}.ctrl.js`, newData);
            Logger.success('Created', `${directive}.directive.js`);
        } else {
            Logger.wanring('Already Exists', `${directive}.ctrl.js`);
        }
    });
};