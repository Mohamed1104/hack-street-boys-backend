import query from '../db/index.js'

export async function getPosts () {
  const result = await query('SELECT * FROM posts;')
  const postsArray = result.rows
  return postsArray
}

export async function createPost(post) {
  const result = await query(
    " INSERT INTO posts (user_id, post_text, week_number, topic) VALUES ($1, $2, $3, $4) RETURNING *",
    [post.user_id, post.post_text, post.week_number, post.topic]
  );
  const createdPost = result.rows;
  return createdPost;
}

export async function patchPost(id, post) {
  const result = await query(
    `UPDATE posts SET user_id = $1, post_text = $2, week_number = $3, topic = $4 WHERE id = $5 RETURNING *`,
    [post.user_id, post.post_text, post.week_number, post.topic, id]
  );
  const updatedPost = result.rows;
  return updatedPost;
}

export async function deletePost(id) {
  const result = await query(`DELETE FROM posts WHERE id = $1`, [id]);
  const remove = result.rows[0];
  return remove;
}
