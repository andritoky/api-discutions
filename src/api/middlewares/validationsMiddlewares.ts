import { Request , Response , NextFunction} from 'express';
import { sendError } from '../helpers/sendResponse';

export let validation = (shema: any) => async (req: Request , res: Response , next: NextFunction) => {
   try{
       await shema.validate(req.body)
       next()
   }
   catch(e: any){
       sendError(res , e.message)
   }
}