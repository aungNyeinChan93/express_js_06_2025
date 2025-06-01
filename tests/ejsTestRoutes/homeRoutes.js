import { Router } from "express";
import { getPosts } from '../../helpers/clients/getposts.js'

const homeRoutes = Router();

homeRoutes.get('/', async (req, res, next) => {
    const posts = await getPosts();
    if (posts) {
        res.render('home/index', {
            name: 'Home Page',
            posts
        });
    }
});


export default homeRoutes;