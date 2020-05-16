function getDate() {
    const date = new Date();
    const DD = (date.getDate() < 10) ? ("0" + date.getDate()) : date.getDate();
    const MM = ((date.getMonth() + 1) < 10) ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1;
    const YYYY = date.getFullYear();

    const HH = (date.getHours() < 10) ? ("0" + date.getHours()) : date.getHours();
    const mm = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : date.getMinutes();
    const ss = (date.getSeconds() < 10) ? ("0" + date.getSeconds()) : date.getSeconds();
    
    return `${DD}-${MM}-${YYYY} ${HH}:${mm}:${ss}`;
}

const colours = {
    blue: function (text) {
        return `\u001b[34m${text}\u001b[0m`;
    },

    yellow: function (text) {
        return `\u001b[33m${text}\u001b[0m`;
    },

    red: function (text) {
        return `\u001b[31m${text}\u001b[0m`;
    },

    green: function (text) {
        return `\u001b[32m${text}\u001b[0m`;
    },

    bgblue: function (text) {
        return `\u001b[44m\u001b[30m${text}\u001b[0m`;
    },

    bgyellow: function (text) {
        return `\u001b[43m\u001b[30m${text}\u001b[0m`;
    },

    bgred: function (text) {
        return `\u001b[41m\u001b[30m${text}\u001b[0m`;
    },

    bggreen: function (text) {
        return `\u001b[42m\u001b[30m${text}\u001b[0m`;
    },

    bgwhite: function (text) {
        return `\u001b[47m\u001b[30m${text}\u001b[0m`;
    }
}

module.exports = class Logger {
    static blue(title, ...msg) {
        if (title == '' || msg == '') throw new Error('Invalid args provided');
        return console.log(`${colours.blue('[')}${getDate()}${colours.blue(']')} ` +
        `${colours.bgblue(' ' + title.toUpperCase() + ' ')} ${msg.join(', ')}\n`);
    }

    static yellow(title, ...msg) {
        if (title == '' || msg == '') throw new Error('Invalid args provided');
        return console.log(`${colours.yellow('[')}${getDate()}${colours.yellow(']')} ` +
        `${colours.bgyellow(' ' + title.toUpperCase() + ' ')} ${msg.join(', ')}\n`);
    }

    static red(title, ...msg) {
        if (title == '' || msg == '') throw new Error('Invalid args provided');
        return console.log(`${colours.red('[')}${getDate()}${colours.red(']')} ` +
        `${colours.bgred(' ' + title.toUpperCase() + ' ')} ${msg.join(', ')}\n`);
    }

    static green(title, ...msg) {
        if (title == '' || msg == '') throw new Error('Invalid args provided');
        return console.log(`${colours.green('[')}${getDate()}${colours.green(']')} ` +
        `${colours.bggreen(' ' + title.toUpperCase() + ' ')} ${msg.join(', ')}\n`);
    }
    
    static white(title, ...msg) {
        if (title == '' || msg == '') throw new Error('Invalid args provided');
        return console.log(`[${getDate()}] ` +
        `${colours.bgwhite(' ' + title.toUpperCase() + ' ')} ${msg.join(', ')}\n`);
    }
}