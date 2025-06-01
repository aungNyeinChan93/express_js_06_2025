import express from 'express';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import postRouter from './routes/postRouter.js';
import notFound from './middlewares/notFound.js';
import { join } from 'path';
import testRoutes from './tests/routeTest/test_1.js';
import homeRoutes from './tests/ejsTestRoutes/homeRoutes.js';


const app = express();

// EJS Configure
app.set('view engine', 'ejs');
app.set('views', 'views')

// Global MIddleware 
app.use(express.json());
app.use(express.static(join(import.meta.dirname, 'public')))
app.use(loggerMiddleware);

// testRoutes
app.use('/api/tests', testRoutes)
app.use('/ejs/tests', homeRoutes)

app.use('/api/posts', postRouter)

// error handling
app.use(notFound)
app.use(errorMiddleware)

app.listen(4000, () => console.log(`Server is running in port 4000`))