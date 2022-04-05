import { Request , Response} from 'express';
import * as services from'../services/clients'

let designation = " client "

export let liste  = async (req: Request , res: Response ) => {
    let liste = await services.find()
    res.status(200).send(liste)
}

export let findOne  = async (req: Request , res: Response ) => {
    let find = await services.findOne(req.params.id)
    res.status(200).send(find)
}

export let add  = async (req: Request , res: Response ) => {
    let verify_double = await services.findOneByNom(req.body.nom)
    if(verify_double.length !== 0){
        res.status(400).json({status : 'error' , message : designation + req.body.nom + " existe deja !"})
        console.log(designation , req.body.nom + " existe deja !");
    }
    else{
        let add = await services.add(req.body)
        add?res.status(200).json({status : 'succes' , message : designation + req.body.nom +' bien ajouter'})
        :res.status(400).json({status : 'fail' , message : 'ajout fail'})
    }
}



