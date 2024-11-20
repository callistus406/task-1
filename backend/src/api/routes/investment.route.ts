import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";
import {
  adminCreateInvestment,
  adminFindInvestment,
  adminFindInvestments,
  adminInvestmentStatisticsCtrl,
  adminUpdateInvestment,
} from "../controller/investment.controller";
import {
  filterQueryValidator,
  investmentPlanValidation,
} from "../../middlewares/validator.mw";
import { adminDashboardCtrl } from "../controller/dashboard.controller";

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
router.get(
  "/admin/inv/analytics",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  adminInvestmentStatisticsCtrl,

);

export default router;
