"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var HandleOrdersProducts_1 = require("./Orders-Products/HandleOrdersProducts");
var App = (0, express_1.default)();
App.use((0, cors_1.default)());
App.use(express_1.default.json());
App.use("/DatabaseInfo", HandleOrdersProducts_1.default);
var port = 3000;
function StartServer() {
    App.listen(port, function () {
        console.log("http:localhost://".concat(port, " is running."));
    });
}
function StopServer() {
    var currentDate = new Date();
    if (currentDate.getDate() <= 10) {
        StartServer();
    }
}
StopServer();
