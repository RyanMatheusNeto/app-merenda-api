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
exports.snacksRouter = void 0;
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const SnackController_1 = require("../controllers/SnackController");
const SnackMiddleware_1 = __importDefault(require("../middlewares/SnackMiddleware"));
const SnackModel_1 = require("../models/SnackModel");
exports.snacksRouter = (0, express_1.Router)();
const snackCtrl = new SnackController_1.SnackController();
const loginCtrl = new LoginController_1.default();
const snackMiddleware = new SnackMiddleware_1.default();
const PER_PAGE = 9;
exports.snacksRouter.post("/new-snack", loginCtrl.verifyToken, snackMiddleware.getBodyFromFileUploader, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errorMessages = (0, SnackModel_1.validateSnackInputs)(req.body);
    const thumbUpload = req.files
        ? req.files["thumb"]
        : null;
    if (errorMessages.length === 0) {
        const { title, description } = req.body;
        const snack = new SnackModel_1.SnackModel({ title, description });
        const savedSnack = yield snackCtrl.save(snack, thumbUpload);
        // sendPushNotificationToAll("Eba! Saiu o cardápio de hoje!", description);
        return res.status(200).json({
            snack: savedSnack,
        });
    }
    return res.render("new_snack", { errorMessages });
}));
// snacksRouter.get('/new_snack', loginCtrl.verifyToken, (req, res) =>
//   res.render('new_snack')
// )
// snacksRouter.get('/details/:id', loginCtrl.verifyToken, async (req, res) => {
//   const snack = await snackCtrl.findById(req.params.id)
//   const page = Number(req.query.page)
//   res.render('snack_details', { snack, page: !isNaN(page) ? page : 1 })
// })
// snacksRouter.get('/:page', loginCtrl.verifyToken, async (req, res) => {
//   const page = Number(req.params.page)
//   const amount = await snackCtrl.findSnacksAmount()
//   const snacks = await snackCtrl.findLastSnacks(page, PER_PAGE)
//   res.render('snacks', {
//     snacks,
//     totalPages: Math.ceil(amount / PER_PAGE),
//     page,
//     perPage: PER_PAGE,
//   })
// })
//# sourceMappingURL=snacks.js.map