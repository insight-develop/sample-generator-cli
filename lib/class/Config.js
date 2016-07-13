'use strict';
const OsType = require('os').type();

/**
 * Config Class
 * @class Config
 * @namespace class.Config
 * @exports Config
 */
class Config {

    /**
     * Get root folder
     * @static
     * @return {String} Module root folder
     */
    static get rootFolder () {
        if (OsType == 'Windows_NT') return __dirname.replace('lib\\class', '');
        else __dirname.replace('lib/class', '');
    }

}

module.exports = Config;