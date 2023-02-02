"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdvancedSeparateProcessor = void 0;
const is_separate_processor_util_1 = require("./is-separate-processor.util");
function isAdvancedSeparateProcessor(processor) {
    return ('object' === typeof processor &&
        !!processor.path &&
        (0, is_separate_processor_util_1.isSeparateProcessor)(processor.path));
}
exports.isAdvancedSeparateProcessor = isAdvancedSeparateProcessor;
