import { Request , Response , NextFunction} from 'express';

export let validation = (shema: any) => async (req: Request , res: Response , next: NextFunction) => {
   try{
       await shema.validate(req.body)
       next()
   }
   catch(e: any){
       res.status(400).send(e.message)
   }
}