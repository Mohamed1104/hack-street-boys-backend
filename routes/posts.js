import { Router } from 'express'

import {
    getPosts
} from '../models/posts.js'
const postRouter = Router()
export default postRouter


postRouter.get('/', async function (req, res) {
        const resultPosts = await getPosts()
        res.json({ success: true, payload: resultPosts})
    
})