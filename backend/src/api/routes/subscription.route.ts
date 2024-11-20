import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";
import {
  findSubScriptionsCtrl,
  subscribeTPlanCtrl,
  unSubscribeCtrl,
} from "../controller/subscription.controller";
import {
  subscriptionValidation,
} from "../../middlewares/validator.mw";

const router = express.Router();

router.post(
  "/plan/subscribe",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  subscriptionValidation,
  subscribeTPlanCtrl
);
router.get(
  "/plans/subscriptions",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  findSubScriptionsCtrl
);router.get(
  "/plans/subscriptions",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  findSubScriptionsCtrl
);
router.delete(
  "/plan/unsubscribe/:subscriptionId",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  unSubscribeCtrl
);

export default router;
