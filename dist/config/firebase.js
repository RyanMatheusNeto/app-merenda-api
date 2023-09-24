"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyDstkpj7NlHACA-frwMVLymsDC9Hln4pVc",
    authDomain: "exemplo03-cpw4-1002.firebaseapp.com",
    projectId: "exemplo03-cpw4-1002",
    storageBucket: "exemplo03-cpw4-1002.appspot.com",
    messagingSenderId: "636722423529",
    appId: "1:636722423529:web:c2e636bfd65fb3c3d47278",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.storage = (0, storage_1.getStorage)(app);
//# sourceMappingURL=firebase.js.map