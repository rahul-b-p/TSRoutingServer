import express from 'express';
import { getRouter,setRouter } from './routers'; 
import { addTimestamp, logger } from './middlewares';

const app = express();

//using middleware at app level
app.use(addTimestamp)
app.use(logger)
app.use('/getRouter',getRouter);
app.use('/setRouter',setRouter);

const port = 3000;

app.listen(port,()=>{
    console.log(`Server Running at ${port}`);
});