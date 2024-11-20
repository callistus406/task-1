import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";
import {
  adminFindAllTransactionCtrl,
  adminHandleTransactionCtrl,
  adminHandleWithdrawalApprovalCtrl,
  depositMoneyCtrl,
  findAllTransactionCtrl,
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

export default router;
