const chalk = require("chalk");
const moment = require("moment");

exports.log = (content, type = "log") => {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
        case "log": {
            return console.log(`${timestamp} ${chalk.blue(type.toUpperCase())} ${content} `);
        }
        case "warn": {
            return console.log(`${timestamp} ${chalk.black.yellow(type.toUpperCase())} ${content} `);
        }
        case "settings": {
            return console.log(`${timestamp} ${chalk.black.yellow(type.toUpperCase())} ${content} `);
        }
        case "error": {
            return console.log(`${timestamp} ${chalk.red(type.toUpperCase())} ${content} `);
        }
        case "debug": {
            return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
        }
        case "cmd": {
            return console.log(`${timestamp} ${chalk.black.white(type.toUpperCase())} ${content}`);
        }
        case "ready": {
            return console.log(`${timestamp} ${chalk.black.green(type.toUpperCase())} ${content}`);
        }
        default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
    }
};

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.settings = (...args) => this.log(...args, "settings");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");