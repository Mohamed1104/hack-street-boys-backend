import { Router } from "express";

import { getComments,
        createComment,
        patchComment,
        deleteComment} from "../models/comments.js";
const commentsRouter = Router();
export default commentsRouter;

commentsRouter.get("/", async function (req, res) {
  const result = await getComments();
  res.json({ success: true, payload: result });
});

commentsRouter.post("/", async function (req, res) {
  const comment = req.body;
  const result = await createComment(comment);
  res.json({ success: true, payload: result });
});

commentsRouter.patch("/:id", async function (req, res) {
  const comment = req.body;
  const id = req.params.id;
  const result = await patchComment(id, comment);
  res.json({ success: true, payload: result });
});

commentsRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const result = await deleteComment(id);
  res.json({ success: true, payload: result });
});