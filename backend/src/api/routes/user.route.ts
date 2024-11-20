import express from "express";
import {
    findWalletCtrl,
  updateProfileCtrl,
  userProfileCtrl,
} from "../controller/user.controller";
import authorizationMw from "../../middlewares/authorization.mw";
import { updateProfileValidation } from "../../middlewares/validator.mw";

const router = express.Router();

router.get(
  "/profile",
  authorizationMw.verifyJWT,
  authorizationMw.ensureAuthenticated,
  userProfileCtrl
);

router.patch(
  "/profile",
  authorizationMw.verifyJWT,
  authorizationMw.ensureAuthenticated,
  updateProfileValidation,
  updateProfileCtrl
);
router.get(
  "/wallet",
  authorizationMw.verifyJWT,
    authorizationMw.ensureAuthenticated,
  authorizationMw.isInvestor,
  findWalletCtrl
);
export default router;
