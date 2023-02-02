"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProcessorCallback = void 0;
function isProcessorCallback(processor) {
    return 'function' === typeof processor;
}
exports.isProcessorCallback = isProcessorCallback;
