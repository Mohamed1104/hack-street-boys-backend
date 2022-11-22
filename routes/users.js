import { Router } from "express";

import {
  getUsers,
  createUser,
  patchUser,
  deleteUser,
} from "../models/users.js";
const usersRouter = Router();
export default usersRouter;

usersRouter.get("/", async function (req, res) {
  const result = await getUsers();
  res.json({ success: true, payload: result });
});

usersRouter.post("/", async function (req, res) {
  const body = req.body;
  const result = await createUser(body);
  res.json({ success: true, payload: result });
});

usersRouter.patch("/:id", async function (req, res) {
  const updated = req.body;
  const id = req.params.id;
  const result = await patchUser(id, updated);
  res.json({ success: true, payload: result });
});

usersRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const result = await deleteUser(id);
  res.json({ success: true, payload: result });
});
