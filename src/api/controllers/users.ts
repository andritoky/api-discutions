import { Request , Response} from 'express';
import * as dotenv from 'dotenv'; dotenv.config()
import * as services from'../services/users'
import { saveImageFile } from '../middlewares/saveImageFile';
import { sendError, sendResponse, sendSimpleResponse } from '../helpers/sendResponse';

let designation = " User "

export let liste  = async (req: Request , res: Response ) => {
    let liste = await services.find()
    sendSimpleResponse(res , liste)
}

export let liste_users  = async (req: Request , res: Response ) => {
    let userId = req.params.user_id
    let liste = await services.find()
    let data = liste.filter(user => user.id !== userId)
    sendSimpleResponse(res , data)
}

export let findOne  = async (req: Request , res: Response ) => {
    let find = await services.findOne(req.params.id)
    sendSimpleResponse(res , find)
}

export let deleteOne  = async (req: Request , res: Response ) => {
    await services.deleteOne(req.params.id)
    sendError(res,'Delete:'+ req.params.id)
}

export let add  = async (req: Request , res: Response ) => {
    try{
    let verify_double = await services.findOneByNom(req.body.nom)
    if (verify_double.length !== 0){
        sendError(res , designation + req.body.nom + " existe deja !")
    }
    else{
        let image_name = await saveImageFile(req.body.profile)
        let add = await services.add(req.body , image_name)
        let id = add._id.toString()
        let sujet = "App Verification User"
        let linkOnline = process.env.LINK_VERIFY_USER_ONLINE + id 
        services.sendEmail(req.body.email , sujet , req.body.nom , linkOnline)
        add? sendResponse(res , null , designation + req.body.nom +' bien ajouter')
           : sendError(res , "fail add new user")
    }
    }
    catch(e: any){
        console.log(e.response.data.errors);
    }
}

export let verifyUser  = async (req: Request , res: Response ) => {
    await services.update(req.params.id)
    let find: any = await services.findOne(req.params.id)
    find
    ?sendResponse(res , null , 'Bonjour '+ find[0].nom +'! votre compte et Activé !')
    :sendError(res , 'Ereur lors de verification de votre Compte !')
}

export let searchUser = async (req: Request , res: Response ) => {
    let data = req.params.data
    let search = await services.search(data)
    search 
    ?sendResponse(res , search , 'search user')
    :sendError(res , 'Ereur search user')
}