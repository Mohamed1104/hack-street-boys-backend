import { Router } from "express";

import { getComments } from "../models/comments.js";
const commentsRouter = Router();
export default commentsRouter;

commentsRouter.get("/", async function (req, res) {
  const result = await getComments();
  res.json({ success: true, payload: result });
});
