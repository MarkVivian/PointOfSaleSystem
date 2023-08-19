"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Database_1 = require("../Database/Database");
var Removequotes_1 = require("../Components/Removequotes");
var HandleOrdersProducts = express_1.default.Router();
HandleOrdersProducts.post("/GetData", function (req, res) {
    var Info = req.body;
    var tableName = (0, Removequotes_1.default)(Info.Name);
    console.log(tableName);
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var DB, Data, Err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    DB = new Database_1.default();
                    return [4 /*yield*/, DB.ConnectToDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DB.ReadDatabase(tableName)];
                case 2:
                    Data = _a.sent();
                    res.status(200).send(Data);
                    resolve(Data);
                    return [3 /*break*/, 4];
                case 3:
                    Err_1 = _a.sent();
                    reject(Err_1);
                    res.status(200).send({ message: "unable to read from the database" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
HandleOrdersProducts.post("/AddData", function (req, res) {
    var Info = req.body;
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var DB, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    DB = new Database_1.default();
                    return [4 /*yield*/, DB.ConnectToDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DB.WriteToDatabase(Info.DataToWrite, Info.Columns, Info.tableName)];
                case 2:
                    _a.sent();
                    res.status(200).send({ message: "Successfully added the data to the database." });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    reject(err_1);
                    res.status(200).send({ message: "unable to write to the database" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
HandleOrdersProducts.post("/DeleteData", function (req, res) {
    var info = req.body;
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var DB, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    DB = new Database_1.default();
                    return [4 /*yield*/, DB.ConnectToDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DB.DeleteFromDatabase(info.tableName, info.idColumnName, info.columnId)];
                case 2:
                    _a.sent();
                    res.status(200).send({ message: "the data has been deleted successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    res.status(200).send({ message: "unable to delete the data from the database" });
                    reject(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
HandleOrdersProducts.post("/UpdateData", function (req, res) {
    var Data = req.body;
    console.log(Data);
    console.log("Updated data is ".concat(Data.UpdatedData));
    var DB = new Database_1.default();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, DB.ConnectToDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DB.UpdateDataFromDatabase(Data.tableName, Data.id, Data.columns, Data.UpdatedData, Data.idColumn)];
                case 2:
                    _a.sent();
                    res.status(200).send({ message: "the data has been updated succesfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    reject(err_3);
                    res.status(200).send({ "message": "could not update the data from the database." });
                    console.log("an error occured while updating data in the database . \n ".concat(err_3));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
HandleOrdersProducts.post("/DeleteTable", function (req, res) {
    var Info = req.body;
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var DB, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    DB = new Database_1.default();
                    return [4 /*yield*/, DB.ConnectToDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DB.DeleteDatabase(Info.name)];
                case 2:
                    _a.sent();
                    res.status(200).send({ "message": "succesfully cleared the info in the database." });
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    reject(err_4);
                    res.status(200).send({ "message": "an error occured while deleting the table " });
                    console.log("an error occured while deleting the static table");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
exports.default = HandleOrdersProducts;
