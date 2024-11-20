import express from "express";
import authorizationMw from "../../middlewares/authorization.mw";
import { adminDashboardCtrl } from "../controller/dashboard.controller";

const router = express.Router();

router.get(
  "/admin/dashboard",
  authorizationMw.verifyJWT,
  authorizationMw.ensureAuthenticated,
  authorizationMw.isAdmin,
  adminDashboardCtrl
);

export default router;
