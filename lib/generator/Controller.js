'use strict';
const fs = require('fs');
const path = require('path');
const Config = require('../class/Config');
const Logger = require('../class/Logger');

module.exports = (args) => {
    let controllers = args.slice(3, args.length);
    let templatePath = path.normalize(`${Config.rootFolder}/template/angular/template.controller.js`);
    let templateData = fs.readFileSync(templatePath, {encoding: 'utf8'});

    controllers.forEach((controller) => {
        if (!fs.existsSync(`${controller}.ctrl.js`)) {
            let newData = templateData.replace(/_CONTROLLER_TEMPLATE_/g, controller);
            fs.writeFileSync(`${controller}.ctrl.js`, newData);
            Logger.success('Created', `${controller}.ctrl.js`);
        } else {
            Logger.wanring('Already Exists', `${controller}.ctrl.js`);
        }
    });
};