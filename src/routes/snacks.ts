import { Router } from "express";

import LoginController from "../controllers/LoginController";
import { SnackController } from "../controllers/SnackController";
import SnackMiddleware from "../middlewares/SnackMiddleware";
import { SnackModel, validateSnackInputs } from "../models/SnackModel";
import { UploadFileObject } from "../types/fileStorage";

export const snacksRouter = Router();
const snackCtrl = new SnackController();
const loginCtrl = new LoginController();
const snackMiddleware = new SnackMiddleware();

const PER_PAGE = 9;

snacksRouter.post(
  "/new-snack",
  loginCtrl.verifyToken,
  snackMiddleware.getBodyFromFileUploader,
  async (req, res) => {
    const errorMessages = validateSnackInputs(req.body);
    const thumbUpload = req.files
      ? (req.files["thumb"] as UploadFileObject)
      : null;

    if (errorMessages.length === 0) {
      const { title, description } = req.body;
      const snack = new SnackModel({ title, description });
      const savedSnack = await snackCtrl.save(snack, thumbUpload);

      // sendPushNotificationToAll("Eba! Saiu o cardápio de hoje!", description);

      return res.status(200).json({
        snack: savedSnack,
      });
    }

    return res.render("new_snack", { errorMessages });
  }
);

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
