const observable = require('./src/observable');
const dom = require('./src/dom');
const binders = require('./src/binders');

module.exports = {
    ...observable,
    ...dom,
    ...binders
};
