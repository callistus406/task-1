import express from "express";

import AuthorizationMw from "../../middlewares/authorization.mw";

const router = express.Router();

router.get(
  "/nearest-volunteer",
  AuthorizationMw.verifyJWT,
  AuthorizationMw.ensureAuthenticated,
  // AuthorizationMw.isAdmin,
  // findWa
);

export default router;
