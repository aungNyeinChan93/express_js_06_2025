import { getPosts, createPost, destroyPost, getPost, updatePost } from '../helpers/clients/getposts.js'

const postController = {
    getPosts: async (req, res, next) => {
        try {
            const posts = await getPosts();
            posts
                ? res.status(200).json(posts)
                : next(new Error(`Posts Not Found!`))
        } catch (error) {
            return next(error)
        }
    },
    createPost: async (req, res, next) => {
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
    },
    getPost: async (req, res, next) => {
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
    },
    modifyPost: async (req, res, next) => {
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
    },
    destroyPost: async (req, res, next) => {
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
    }
}

export default postController;