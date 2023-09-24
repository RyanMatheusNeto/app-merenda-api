"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
const api_1 = require("./routes/api");
const snacks_1 = require("./routes/snacks");
(0, db_1.connectToMongoDB)();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, express_fileupload_1.default)());
exports.app.use(express_1.default.json());
exports.app.use("/snacks", snacks_1.snacksRouter);
exports.app.use("/api", api_1.apiRouter);
exports.app.use("/", (req, res) => res.send("API Merenda"));
//# sourceMappingURL=app.js.map