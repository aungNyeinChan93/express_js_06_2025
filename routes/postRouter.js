import { Router } from 'express';
import { getPosts } from '../helpers/clients/getposts.js';

const postRouter = Router();

// getAll posts
postRouter.get('/', async (req, res, next) => {
    try {
        const posts = await getPosts();
        posts
            ? res.status(200).json(posts)
            : next(new Error(`Posts Not Found!`))
    } catch (error) {
        next(error)
    }
});

// 



export default postRouter