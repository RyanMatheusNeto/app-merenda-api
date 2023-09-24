"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSnackInputs = exports.SnackModel = void 0;
const mongoose_1 = require("mongoose");
const snack_1 = require("../types/snack");
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    offerDate: { type: Date, default: new Date() },
    evaluationScore: { type: Number, default: 0 },
    description: { type: String, required: true },
    thumbURL: { type: String },
});
exports.SnackModel = (0, mongoose_1.model)("Snack", schema);
const validateSnackInputs = (snackObj) => {
    const { title, description } = snackObj;
    const errorMessages = [];
    if (title.length < 5) {
        errorMessages.push(snack_1.SnackMessages.INVALID_TITLE);
    }
    if (description.length < 5) {
        errorMessages.push(snack_1.SnackMessages.INVALID_DESCRIPTION);
    }
    return errorMessages;
};
exports.validateSnackInputs = validateSnackInputs;
//# sourceMappingURL=SnackModel.js.map