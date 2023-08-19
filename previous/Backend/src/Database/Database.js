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
var mysql2_1 = require("mysql2");
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.ConnectToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.Connection = (0, mysql2_1.createConnection)({
                        host: "127.0.0.1",
                        user: "root",
                        password: "M6a2r7k5",
                        database: "PointOfSale"
                    });
                }
                catch (err) {
                    console.log("an error occured while connecting to the database.");
                }
                return [2 /*return*/];
            });
        });
    };
    Database.prototype.WriteToDatabase = function (DataToWrite, Columns, table) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var commasValues = DataToWrite.map(function () { return "?"; }).join(",");
                        var queryScript = "INSERT INTO ".concat(table, " (").concat(Columns, ") VALUES(").concat(commasValues, ")");
                        _this.Connection.query(queryScript, DataToWrite, function (error) {
                            if (error) {
                                reject(error);
                            }
                            else {
                                console.log("the data has been written correctly");
                            }
                        });
                        _this.Connection.end();
                    })];
            });
        });
    };
    Database.prototype.ReadDatabase = function (table) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryScript = "SELECT * FROM " + table;
                        // Use the connection for database operations
                        _this.Connection.query(queryScript, function (error, results, fields) {
                            // Handle the query results
                            if (error) {
                                console.error('Error executing query:', error);
                                reject(error);
                            }
                            else {
                                resolve(results);
                            }
                        });
                        _this.Connection.end();
                    })];
            });
        });
    };
    Database.prototype.DeleteFromDatabase = function (table, columnName, columnId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryScript = "DELETE FROM " + table + " WHERE " + columnName + "=" + columnId;
                        console.log(queryScript);
                        _this.Connection.query(queryScript, function (error, results, fields) {
                            if (error) {
                                console.log("Error executing query", error);
                                reject(error);
                            }
                            else {
                                resolve(results);
                            }
                        });
                        _this.Connection.end();
                    })];
            });
        });
    };
    Database.prototype.UpdateDataFromDatabase = function (table, tableId, Column, UpdatedData, idColumn) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var Info = "";
                            for (var i = 0; i < Column.length; i++) {
                                var ColumnScript = "\n".concat(Column[i], "=\"").concat(UpdatedData[i], "\",");
                                Info += ColumnScript;
                            }
                            Info = Info.slice(0, -1);
                            var queryScript = "UPDATE ".concat(table, " SET ").concat(Info, " WHERE ").concat(idColumn, "=").concat(tableId);
                            _this.Connection.query(queryScript, function (error, results, fields) {
                                if (error) {
                                    console.log("Error executing query", error);
                                    reject(error);
                                }
                                else {
                                    resolve(results);
                                }
                            });
                            _this.Connection.end();
                        }
                        catch (err) {
                            reject(err);
                            console.log("an error occured while Updating data in the database ".concat(err));
                        }
                    })];
            });
        });
    };
    Database.prototype.DeleteDatabase = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var queryScript = "DELETE FROM ".concat(tableName);
                            _this.Connection.query(queryScript, function (error, results, fields) {
                                if (error) {
                                    console.log("Error while executing query", error);
                                    reject(error);
                                }
                                else {
                                    resolve(results);
                                }
                            });
                        }
                        catch (err) {
                            reject(err);
                            console.log("an error occured while reading specific data from the database.".concat(err));
                        }
                    })];
            });
        });
    };
    return Database;
}());
exports.default = Database;
