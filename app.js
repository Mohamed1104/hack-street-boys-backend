import express from "express";
import morgan from "morgan";
import cors from "cors";

import postRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";
import commentsRouter from "./routes/comments.js";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/posts", postRouter);
app.use("/api/users", usersRouter);
app.use("/api/comments", commentsRouter);


export default app;