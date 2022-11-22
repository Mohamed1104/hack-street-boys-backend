import { Router } from 'express'

import {
    getPosts,
    createPost,
    patchPost,
    deletePost
} from '../models/posts.js'
const postRouter = Router()
export default postRouter


postRouter.get('/', async function (req, res) {
        const resultPosts = await getPosts()
        res.json({ success: true, payload: resultPosts})
    
})

postRouter.post("/", async function (req, res) {
    const post = req.body;
    const result = await createPost (post);
    res.json({ success: true, payload: result });
  });
  
  postRouter.patch("/:id", async function (req, res) {
    const post = req.body;
    const id = req.params.id;
    const result = await patchPost(id, post);
    res.json({ success: true, payload: result });
  });
  
  postRouter.delete("/:id", async function (req, res) {
    const id = req.params.id;
    const result = await deletePost(id);
    res.json({ success: true, payload: result });
  });