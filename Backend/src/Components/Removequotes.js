"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RemoveQuotes(Info) {
    var stringWithQuotes = "".concat(Info);
    var stringWithoutQuotes = stringWithQuotes.replace(/"/g, '');
    return stringWithQuotes;
}
exports.default = RemoveQuotes;
