import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";
import {
  adminFindAllTransactionCtrl,
  adminFindTransactionCtrl,
  adminGetUserTransactionCountsServiceCtrl,
  adminHandleTransactionCtrl,
  adminHandleWithdrawalApprovalCtrl,
  depositMoneyCtrl,
  findAllTransactionCtrl,
  getTransactionAnalyticsCtrl,
  getTransactionUserAnalyticsCtrl,
  getUserTransactionCountsServiceCtrl,
  requestWithdrawalCtrl,
} from "../controller/transaction.controller";
import { filterQueryValidator } from "../../middlewares/validator.mw";

const router = express.Router();

// router.post(
//   "/admin/update-tx",
//   AuthorizationMw.verifyJWT,
//   AuthorizationMw.ensureAuthenticated,
//   AuthorizationMw.isAdmin,
//   adminHandleTransactionCtrl
// );

router.get(
  "/transactions",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  filterQueryValidator,
  findAllTransactionCtrl
);
router.get(
  "/admin/transactions",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  filterQueryValidator,
  adminFindAllTransactionCtrl
);
router.get(
  "/admin/transactions/:transactionId",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  filterQueryValidator,
  adminFindTransactionCtrl
);

router.post(
  "/transaction/deposit",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  depositMoneyCtrl
);
router.post(
  "/transaction/withdrawal",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  requestWithdrawalCtrl
);
router.patch(
  "/admin/update/transaction/:transactionId",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  adminHandleWithdrawalApprovalCtrl
);
router.get(
  "/admin/transaction/analytics",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  getTransactionAnalyticsCtrl
);
router.get(
  "/transaction/analytics",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  getTransactionUserAnalyticsCtrl
);
router.get(
  "/transaction/stat",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isInvestor,
  getUserTransactionCountsServiceCtrl
);
router.get(
  "/admin/transaction/stat",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  AuthorizationMw.isAdmin,
  adminGetUserTransactionCountsServiceCtrl
);

export default router;
