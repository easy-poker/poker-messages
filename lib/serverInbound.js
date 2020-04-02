"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerInboundMessage = function (x) {
    return typeof x.type === "string";
};
