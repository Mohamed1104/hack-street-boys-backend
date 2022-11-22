import query from "../db/index.js";

export async function getComments() {
  const result = await query("SELECT * FROM comments;");
  const postsArray = result.rows;
  return postsArray;
}
