"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSnackModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    score: { type: Number, required: true, min: 1, max: 5 },
    description: { type: String, required: false, maxlength: 250 },
    email: { type: String, required: true },
    snackId: { type: String, required: true },
});
exports.ReviewSnackModel = (0, mongoose_1.model)("ReviewSnack", schema);
//# sourceMappingURL=ReviewSnack.js.map