import express from "express";

import auth from "./auth.route";
import transaction from "./transaction.route";
import register from "./register.route";
import investment from "./investment.route";
import user from "./user.route";
import subscription from "./subscription.route";
import dashboard from "./dashboard.route";

const router = express.Router();
router.use(register);
router.use(subscription);
router.use(dashboard);
router.use(investment);
router.use(auth);
router.use(user);
router.use(transaction);

export default router;
