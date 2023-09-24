"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("firebase/storage");
const moment_1 = __importDefault(require("moment"));
const firebase_1 = require("../config/firebase");
class FirebaseFileStorage {
    constructor() {
        this._storage = firebase_1.storage;
    }
    _getRefFile(refName) {
        return (0, storage_1.ref)(this._storage, refName);
    }
    upload(file, refName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storageRef = this._getRefFile(refName);
            const fileContent = file.data;
            const metadata = {
                contentType: file.mimetype,
            };
            yield (0, storage_1.uploadBytes)(storageRef, fileContent, metadata);
            return (0, storage_1.getDownloadURL)(storageRef);
        });
    }
    uploadSnackThumb(file) {
        if (!file) {
            return undefined;
        }
        const refName = (0, moment_1.default)().format("YYYY_MM_DD");
        return this.upload(file, refName);
    }
    delete(refName) {
        const refStorage = this._getRefFile(refName);
        return (0, storage_1.deleteObject)(refStorage);
    }
    deleteTodaySnackThumb() {
        const refName = (0, moment_1.default)().format("YYYY_MM_DD");
        try {
            return this.delete(refName);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = FirebaseFileStorage;
//# sourceMappingURL=FirebaseStorage.js.map