"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdvancedProcessor = void 0;
const is_processor_callback_util_1 = require("./is-processor-callback.util");
function isAdvancedProcessor(processor) {
    return ('object' === typeof processor &&
        !!processor.callback &&
        (0, is_processor_callback_util_1.isProcessorCallback)(processor.callback));
}
exports.isAdvancedProcessor = isAdvancedProcessor;
