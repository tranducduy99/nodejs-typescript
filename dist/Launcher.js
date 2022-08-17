"use strict";
exports.__esModule = true;
var Server_1 = require("./Server/Server");
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.server = new Server_1.Server();
        this.name = 'APP-VERSION-1';
    }
    Launcher.prototype.launchApp = function () {
        console.log('Started app');
        this.server.createServer();
    };
    return Launcher;
}());
new Launcher().launchApp();
