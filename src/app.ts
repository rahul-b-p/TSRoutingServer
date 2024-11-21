import express from 'express';
import { getRouter,setRouter,postRouter } from './routers'; 
import { addTimestamp, errorHandler, logger } from './middlewares';

const app = express();
const port = 3000;


//using middleware at app level
app.use(addTimestamp)
app.use(logger)

// using body parser inbuilt middleware of express
app.use(express.json())

// using routers
app.use('/getRouter',getRouter);
app.use('/setRouter',setRouter);
app.use('/postRouter',postRouter);

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server Running at ${port}`);
});