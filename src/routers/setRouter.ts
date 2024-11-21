import { Request, Router } from "express";

export const router = Router();

router.get('/', (req, res) => {
    throw new Error('Application Error');  //error handler
    res.send('hi');
});

router.get('/time',(req:Request,res)=>{
    res.send({timestamp:req.timestamp})
})