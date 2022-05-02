import { Request , Response , NextFunction} from 'express';
import {User} from '../models/users'
import {loginJWT , sendToken ,decryptJWT } from '../services/authentification'
import * as bcrypt from 'bcrypt'
import { sendError } from '../helpers/sendResponse';


export let login = async (req: Request , res: Response ) => {
    console.log(req.body);
    let user = await User.findOne({
        email:req.body.email 
    })
    if(user){
        // let compare = await bcrypt.compare(req.body.password, user.password)
        if(req.body.password === user.password){
            sendToken(user , req , res)
        }
        else{
            sendError(res ,'password incorrect' )
        }
    }else{
        return sendError(res ,'no user with this email' )
    }
}

export let logout =  async (req: Request , res: Response) => {
    console.log('logOut!');
    let options = {
        //expires:new Date(Date.now() + 10000),
        secure:true,
        httpOnly:true
    }
    res.cookie("jwt", 'expiredtoken' , options)
    res.json({status:'destroy token ok' , logout : true})
}


export let verify_cookie = async (req: Request , res: Response ) => {
    let token
    console.log('req.cookies :' , req.cookies);
    try{
        if(req.cookies.jwt) {
            token = req.cookies.jwt
            let decode: any = await decryptJWT(token)
            console.log(decode);
            
            let decodeID = decode.id
            let user = await User.findById(decodeID)
            if(user){
                res.json({
                    status:"autorisé" ,
                    verifyCookie:true ,
                    data : token
                })
                console.log(user);
            }else{
                sendError(res,'Request Cookies Fail')
            }
            console.log('verifyCookie decode',decode);
        } 
        if(!req.cookies.jwt || req.cookies.jwt ==='expiredtoken'){
            res.status(401).json({
                status:"pas autorisé",
                verifyCookie:false,
                message:"vous n'est pas authentifier"
            })
            console.log('verifyCookie : pas autorisé');
        }
    }
    catch(e: any) {
        console.log('erreur verify_cookie:' ,e.message)
    } 
}

export let verify_user_token = async (req: Request , res: Response ) => {
    try{
        let user_token =  req.body.token
        let decode: any = await decryptJWT(user_token)
        let decodeID = decode.id
        let user = await User.findById(decodeID)
        if(user){
            res.json({ data : user })
        }else{
            sendError(res,'Verify token FAIL')
        }
    }
    catch(e: any){console.log('ereur', e.message)}
}
