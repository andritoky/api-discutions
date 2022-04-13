import { Request , Response , NextFunction} from 'express';
import * as jwt from 'jsonwebtoken'
import {promisify} from 'util'

export let loginJWT = function(id: number | string){
    return jwt.sign({id}, 'secret122');
}

export let sendToken = function(user: any , req: Request , res: Response ){
    let token = loginJWT(user._id)
    let options = {
        secure:true,
        httpOnly:true
    }
    res.cookie("jwt", token , options)
    res.json({status:'ok' , user:token , myUser: user})
}

export let decryptJWT = async (token: string) => {
    let secret = 'secret122'
    let decode = await jwt.verify(token , secret)
    return decode
}
// export let decryptJWT2 = async (token: string) => {
//     let jwtVerify = promisify(jwt.verify)
//     return await jwtVerify(token , 'secret122')
// }