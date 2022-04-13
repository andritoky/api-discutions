import { Request , Response , NextFunction} from 'express';
import {log} from '../../config/logger';
import * as dotenv from 'dotenv'; dotenv.config()

export let verifyHeaders = (req: Request , res: Response , next:  NextFunction) => {
    try{
        if(req.headers.apikey === process.env.API_KEY){
            log.info("apiKey :"+ req.headers.apikey );
            next()
        }
        else{
            res.status(400).send("invalid key! you are not authorized ")
            log.error("error apikey :"+ req.headers.apikey);
        }   
    }
    catch(e: any){
        log.error(e.message);
    } 
}