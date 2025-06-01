import { Router } from "express";
import path from 'path'

const testRoutes = Router();

// about static page 
testRoutes.get('/about', (req, res, next) => {
    res.sendFile(path.join(import.meta.dirname, '../../public', 'about.html'));
})

export default testRoutes;