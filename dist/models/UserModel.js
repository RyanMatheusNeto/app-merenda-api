"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserInputs = exports.UserModel = void 0;
const email_validator_1 = __importDefault(require("email-validator"));
const mongoose_1 = require("mongoose");
const user_1 = require("../types/user");
const schema = new mongoose_1.Schema({
    login: { type: String, required: true },
    name: { type: String, required: true },
    salt: { type: String, required: true },
    hash: { type: String, required: true },
});
exports.UserModel = (0, mongoose_1.model)("User", schema);
const validateUserInputs = (userObj) => {
    const errorMessages = [];
    const { login, name, password } = userObj;
    if (!email_validator_1.default.validate(login)) {
        errorMessages.push(user_1.UserMessages.INVALID_EMAIL);
    }
    if (name.length < 3) {
        errorMessages.push(user_1.UserMessages.INVALID_NAME);
    }
    if (password &&
        password.length >= 8 &&
        /[A-Z]/g.test(password) &&
        /[0-9]/g.test(password)) {
        errorMessages.push(user_1.UserMessages.INVALID_PASSWORD);
    }
    return errorMessages;
};
exports.validateUserInputs = validateUserInputs;
//# sourceMappingURL=UserModel.js.map