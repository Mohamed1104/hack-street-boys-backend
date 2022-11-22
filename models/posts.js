import query from '../db/index.js'

export async function getPosts () {
  const result = await query('SELECT * FROM posts;')
  const postsArray = result.rows
  return postsArray
}