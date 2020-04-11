"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isClientMessage = function (x) {
    return typeof x.type === "string" && x.type.startsWith("client/");
};
