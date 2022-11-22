import query from "../db/index.js";

export async function getComments() {
  const result = await query("SELECT * FROM comments;");
  const postsArray = result.rows;
  return postsArray;
}

export async function createComment(comment) {
  const result = await query(
    " INSERT INTO comments (user_id, post_id, comment) VALUES ($1, $2, $3) RETURNING *",
    [comment.user_id, comment.post_id, comment.comment]
  );
  const createdComment = result.rows;
  return createdComment;
}

export async function patchComment(id, comment) {
  const result = await query(
    `UPDATE comments SET user_id = $1, post_id =$2, comment =$3 WHERE id = $4 RETURNING *`,
    [comment.user_id, comment.post_id, comment.comment, id]  );
  const updatedComment = result.rows;
  return updatedComment;
}

export async function deleteComment(id) {
  const result = await query(`DELETE FROM comments WHERE id = $1`, [id]);
  const remove = result.rows[0];
  return remove;
}

