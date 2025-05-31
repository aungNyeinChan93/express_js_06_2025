import { Router } from 'express';
import { createPost, destroyPost, getPost, getPosts, updatePost } from '../helpers/clients/getposts.js';

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

// cretae posts
postRouter.post('/', async (req, res, next) => {
    // const { id, title, body, tags } = req.body;
    try {
        const result = await createPost(req.body);
        if (!result) {
            return new Error('Create post is fail!')
        }
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

// get post
postRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await getPost(id);
        if (!post) {
            return new Error(`post ${id} is not found!`);
        }
        res.status(200).json(post);
    } catch (error) {
        next(error)
    }
})


// update post
postRouter.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await updatePost(id, req.body)
        if (!post) {
            return new Error(`post ${id} is not found!`);
        }
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
})

// delete post
postRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await destroyPost(id)
        if (!post) {
            return new Error(`post ${id} is not found!`);
        }
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
})


export default postRouter