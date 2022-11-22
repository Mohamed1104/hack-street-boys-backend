import query from "../db/index.js";

export async function getUsers() {
  const result = await query("SELECT * FROM users;");
  const postsArray = result.rows;
  return postsArray;
}

export async function createUser(user) {
  const result = await query(
    " INSERT INTO users (name) VALUES ($1) RETURNING *",
    [user.name]
  );
  const createdUser = result.rows;
  return createdUser;
}

export async function patchUser(id, updated) {
  const result = await query(
    `UPDATE users SET name = $1 WHERE id = $2 RETURNING *`,
    [updated.name, id]
  );
  const updatedUser = result.rows;
  return updatedUser;
}

export async function deleteUser(id) {
  const result = await query(`DELETE FROM users WHERE id = $1`, [id]);
  const remove = result.rows[0];
  return remove;
}
