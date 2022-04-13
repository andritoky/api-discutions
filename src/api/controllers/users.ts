import { Request , Response} from 'express';
import * as services from'../services/users'

let designation = " User "

export let liste  = async (req: Request , res: Response ) => {
    let liste = await services.find()
    res.status(200).send(liste)
}

export let liste_users  = async (req: Request , res: Response ) => {
    let userId = req.params.user_id
    let liste = await services.find()
    let data = liste.filter(user => user.id !== userId)
    res.status(200).send(data)
}

export let findOne  = async (req: Request , res: Response ) => {
    let find = await services.findOne(req.params.id)
    res.status(200).send(find)
}

export let deleteOne  = async (req: Request , res: Response ) => {
     await services.deleteOne(req.params.id)
     res.status(200).send('Delete:'+ req.params.id)
}


export let add  = async (req: Request , res: Response ) => {
    let verify_double = await services.findOneByNom(req.body.nom)
    if(verify_double.length !== 0){
        res.status(400).json({status : 'error' , message : designation + req.body.nom + " existe deja !"})
        console.log(designation , req.body.nom + " existe deja !");
    }
    else{
        let add = await services.add(req.body)
        
        let id = add._id.toString()
        let sujet = "App Verification User"
        // let link = "http://localhost:3000/users/verify/" + id + ""
        let linkOnline = "https://api-typescritpe.herokuapp.com/users/verify/" + id + ""
        services.sendEmail(req.body.email , sujet , req.body.nom , linkOnline)

        add?res.status(200).json({status : 'succes' , message : designation + req.body.nom +' bien ajouter'})
        :res.status(400).json({status : 'fail' , message : 'ajout fail'})
    }
}

export let verifyUser  = async (req: Request , res: Response ) => {
    await services.update(req.params.id)
    let find: any = await services.findOne(req.params.id)
    find
    ?res.status(200).send('Bonjour '+ find[0].nom +'! votre compte et Activé !')
    :res.status(400).send('Ereur lors de verification de votre Compte !')
}