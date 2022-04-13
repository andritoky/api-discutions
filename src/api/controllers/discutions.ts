import { Request , Response } from 'express';
import { Discutions } from '../models/discutions';


export let add_discution = async (req: Request , res: Response ) => {
    try{
        let data = req.body
        let add = await Discutions.create(data)
        console.log(add);
        add? res.status(200).send('new discution open :'+ add) 
           : res.status(400).send('Error append discution') 
    }
    catch(e: any){console.log(e.message);
    }
}

export let delete_discution = async (req: Request , res: Response ) => {
    try{
        let id = req.params.id
        let add = await Discutions.deleteOne({_id: id})
        add? res.status(200).send('Delete discution :'+ id) 
           : res.status(400).send('Error delete discution') 
    }
    catch(e: any){console.log(e.message);
    }
}

export let add_message = async (req: Request , res: Response ) => {
    try{
        
        let update = await Discutions.updateOne(
            {conversation_id: req.params.conversation_id} , 
            {$push: {conversations : req.body}}
        )
        console.log(update);
        update? res.status(200).json({MessageSend : "succes !"}) 
              : res.status(400).send('Error update message') 
    }
    catch(e: any){console.log(e.message);
    }
}

export let get_all_discution = async (req: Request , res: Response ) => {
    try{
        let liste = await Discutions.find({})
        liste? res.status(200).send(liste) 
             : res.status(400).send('Error !') 
    }
    catch(e: any){console.log(e.message);
    }
}

export let get_my_discution = async (req: Request , res: Response ) => {
    console.log("get-dISCUTION :",req.params.id);
    try{
        let liste = await Discutions.findOne({conversation_id : req.params.id})
        let my_liste = liste.conversations
        liste? res.status(200).json({data : my_liste}) 
             : res.status(400).json({status : 'Error !'}) 
    }
    catch(e: any){console.log(e.message);
    }
}

export let post_verify_duscution = async (req: Request , res: Response ) => {
    try{
        let find_id_T_R = ''+ req.body.id_emeteur + req.body.id_recepteur + ''
        let find_id_R_T = ''+ req.body.id_recepteur + req.body.id_emeteur + ''

        let verify_id_duscution = await Discutions.findOne({conversation_id : find_id_T_R})
        if(verify_id_duscution){
            res.status(200).json({conversation_id : find_id_T_R})
            console.log("coversation_id_T_R :" , find_id_T_R);
        }
        if(!verify_id_duscution){
            nextVerification()
        }
        

        async function nextVerification() {
            let verify_next = await Discutions.findOne({conversation_id : find_id_R_T})
            if(verify_next){
                res.status(200).json({conversation_id : find_id_R_T})
                console.log("conversation_id_R_T :", find_id_R_T);
            }
            else{
                let add = await Discutions.create({conversation_id : find_id_T_R})
                add? res.status(200).json({conversation_id : add.conversation_id})
                   :res.status(400).json({status : 'error'})
                console.log("new conversation",add.conversation_id)
            }
        }  
        
    }
    catch(e: any){console.log(e.message);
    }
}