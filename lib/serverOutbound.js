"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerOutboundMessage = function (x) {
    return typeof x.type === "string";
};
