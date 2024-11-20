import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";
import {
  adminCreateInvestment,
  adminFindInvestment,
  adminFindInvestments,
  adminUpdateInvestment,
} from "../controller/investment.controller";
import {
  filterQueryValidator,
  investmentPlanValidation,
} from "../../middlewares/validator.mw";

const router = express.Router();

router.get(
  "/investments",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  filterQueryValidator,
  adminFindInvestments
);
router.get(
  "/admin/investment/:investmentId",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  adminFindInvestment
);
router.post(
  "/admin/investment",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  investmentPlanValidation,
  adminCreateInvestment
);

router.patch(
  "/admin/update/investment/:investmentId",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  investmentPlanValidation,
  adminUpdateInvestment
);

export default router;
