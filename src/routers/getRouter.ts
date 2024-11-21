import { Request, Router } from "express";
import { logger } from "../middlewares";

export const router = Router();

//using middleware at router level
router.use(logger)

router.get('/',logger,(req:Request,res)=>{        //using middleware path level
    res.send({messege:'Hello World',timestamp:req.timestamp});
});

router.get('/:content',(req,res)=>{
    res.status(206).send(req.params.content);
});