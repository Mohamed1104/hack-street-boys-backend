import express from "express";
import morgan from "morgan";

import postRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";
import commentsRouter from "./routes/comments.js";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/users", usersRouter);
app.use("/api/comments", commentsRouter);
// example app.use('/api/cities', router)

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
