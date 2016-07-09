"use strict";
var colors =    require('colors/safe');

/**
 * Logger Class
 * @class Logger
 * @namespace class.Logger
 * @exports Logger
 */
class Logger {

    /**
     * Information Log
     * @param title {String} Log title
     * @param message {String=} Log message
     * @static
     */
    static info (title, message) {
        Logger.log(title, message, colors.cyan, console.info);
    }

    /**
     * Warning Log
     * @param title {String} Log title
     * @param message {String=} Log message
     * @static
     */
    static wanring (title, message) {
        Logger.log(title, message, colors.yellow, console.warn);
    }

    /**
     * Error Log
     * @param title {String} Log title
     * @param message {String=} Log message
     * @static
     */
    static error (title, message) {
        Logger.log(title, message, colors.red, console.error);
    }

    /**
     * Success Log
     * @param title {String} Log title
     * @param message {String=} Log message
     * @static
     */
    static success (title, message) {
        Logger.log(title, message, colors.green, console.log);
    }

    /**
     * Default Log
     * @param title {String} Log title
     * @param message {String=} Log message
     * @param color {Function=} Color function
     * @param fn {Function=} Log function
     * @static
     */
    static log (title, message, color, fn) {
        if (!title) {
            console.log(" ");
            return;
        }

        color = color || colors.white;
        fn = fn || console.log;

        fn(color(title), message || '')
    }
}

module.exports = Logger;