"use strict";
exports.__esModule = true;
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.somePrivateLogic = function () {
        console.log('Doing private logic!');
    };
    Server.prototype.createServer = function () {
        console.log('Create Server');
    };
    return Server;
}());
exports.Server = Server;
