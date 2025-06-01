import express from 'express';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import postRouter from './routes/postRouter.js';
import notFound from './middlewares/notFound.js';


const app = express();

app.use(express.json());

// Global MIddleware 
app.use(loggerMiddleware);

app.use('/api/posts', postRouter)

// error handling
app.use(notFound)
app.use(errorMiddleware)

app.listen(4000, () => console.log(`Server is running in port 4000`))