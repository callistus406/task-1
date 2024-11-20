import "source-map-support/register";
import express from "express";
import dbConnect from "./init/dbInit";
import setupExpress from "./init/expressInit";
import { createSuperAdmin } from "./tasks/taskStart";

const app = express();

async function start() {
  await dbConnect();
 await createSuperAdmin()
  setupExpress();
}

export const startPromise = start();

export default app;
