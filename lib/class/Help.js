'use strict';
const Logger = require('./Logger');

/**
 * Help Class
 * @class Help
 * @namespace class.Help
 * @exports Help
 */
class Help {

    /**
     * Print controller help
     * @static
     */
    static generateController () {
        Logger.info(" --controller", "[list of controller names]");
        Logger.info(" >", "Description:");
        Logger.info("       ", "Create Controllers based on input name(s)");
        Logger.info(" >", "Sample:");
        Logger.info("       ", "--controller Controller1 Controller2");
        Logger.info("       ", "-C Controller1 Controller2");
    }

    /**
     * Print directive help
     * @static
     */
    static generateDirective () {
        Logger.info(" --directive", "[list of directive names]");
        Logger.info(" >", "Description:");
        Logger.info("       ", "Create Directives based on input name(s)");
        Logger.info(" >", "Sample:");
        Logger.info("       ", "--directive Directive1 Directive2");
        Logger.info("       ", "-D Directive1 Directive2");
    }

    /**
     * Print all helps
     * @static
     */
    static all () {
        Help.generateController();
        Help.generateDirective();
    }
}

module.exports = Help;