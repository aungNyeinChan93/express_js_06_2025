import { Router } from 'express';
import getRandomId from '../middlewares/giveRandomId.js';
import postController from '../controllers/postController.js';

const postRouter = Router();

postRouter.get('/', getRandomId, postController.getPosts);
postRouter.post('/', postController.createPost)
postRouter.get('/:id', postController.getPost)
postRouter.put('/:id', postController.modifyPost)
postRouter.delete('/:id', postController.destroyPost)


export default postRouter;