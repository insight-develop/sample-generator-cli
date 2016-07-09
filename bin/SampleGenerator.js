#!/usr/bin/env node
'use strict';
const Logger = require('../lib/class/Logger');
const Help = require('../lib/class/Help');
var args = process.argv;

switch(args[2].trim()) {
    case '-H':
    case '--help':
        Help.all();
        break;
    case '-C':
    case '--controller':
        if (args[3] == '--help' || args[3] == '-H') Help.generateController();
        else require('../lib/generator/Controller')(args);
        break;
    case '-D':
    case '--directive':
        if (args[3] == '--help' || args[3] == '-H') Help.generateDirective();
        else require('../lib/generator/Directive')(args);
        break;
    default:
        Logger.error("Invalid Command");
        Help.all();
        break;
}