'use strict';

exports.base = {
    port: 9000,
    apiUri: 'http://localhost:8080/sigap',
};
exports.paths = {
    base: 'webapp',
    dist: 'webapp/dist',
    src: 'webapp/src',
    tmp: 'webapp/tmp',
    static: ['webapp/src/index.html'],
    vendors: ['webapp/src/plugins/**/*.js'],
    css: ['webapp/src/content/css/*.css'],
}
