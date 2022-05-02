import { Request , Response } from 'express';
import { sendError, sendResponse, sendSimpleResponse } from '../helpers/sendResponse';
import { Discutions } from '../models/discutions';


export let add_discution = async (req: Request , res: Response ) => {
    try{
        let data = req.body
        let add = await Discutions.create(data)
        console.log(add);
        add? sendSimpleResponse(res ,'new discution open :'+ add)
           : sendError(res ,'Error append discution')
    }
    catch(e: any){console.log(e.message);
    }
}

export let delete_discution = async (req: Request , res: Response ) => {
    try{
        let id = req.params.id
        let add = await Discutions.deleteOne({_id: id})
        add? sendSimpleResponse(res ,'Delete discution :'+ id)
           : sendError(res ,'Error delete discution')
    }
    catch(e: any){console.log(e.message);
    }
}

export let add_message = async (req: Request , res: Response ) => {
    try{
        let update = await Discutions.updateOne(
            {conversation_id: req.params.conversation_id} , 
            {   last_message : req.body ,
                $push: {conversations : req.body} 
            }  
        )
        console.log(update);
        update? sendSimpleResponse(res ,"send succes !")
              : sendError(res ,'Error update message')
    }
    catch(e: any){console.log(e.message);
    }
}

export let get_all_discution = async (req: Request , res: Response ) => {
    try{
        let liste = await Discutions.find({})
        liste? sendResponse(res , liste ,"")
             : sendError(res ,'Error get all discution!')
    }
    catch(e: any){console.log(e.message);
    }
}

export let get_my_channel = async (req: Request , res: Response ) => {
    try{
        let liste = await Discutions.find({"channel.ch_id":req.params.id})
        let my_channel = []
        for(let discu of liste){
            let d_channel = discu.channel.filter((channel:any) => channel.ch_id !== req.params.id)
            let last_message = discu.last_message
            let conversation_id = discu.conversation_id
            my_channel.push({
                conversation_id : conversation_id,
                last_message: last_message,
                user: d_channel[0]
            })
        }
        liste? sendResponse(res , my_channel ,"my channel")
             : sendError(res ,'Error get my channel')
    }
    catch(e: any){console.log(e.message);
    }
}

export let get_my_discution = async (req: Request , res: Response ) => {
    console.log("get-dISCUTION :",req.params.id);
    try{
        let liste = await Discutions.findOne({conversation_id : req.params.id})
        let my_liste = liste.conversations
        liste? sendResponse(res , my_liste ,"my liste")
             : sendError(res ,'Error get my discutio')
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
            sendResponse(res , find_id_T_R , "conversation_id")
            console.log("coversation_id_T_R :" , find_id_T_R);
        }
        if(!verify_id_duscution){
            nextVerification()
        }
        
        async function nextVerification() {
            let verify_next = await Discutions.findOne({conversation_id : find_id_R_T})
            if(verify_next){
                sendResponse(res , find_id_R_T , "conversation_id")
                console.log("conversation_id_R_T :", find_id_R_T);
            }
            else{
                let add = await Discutions.create({
                    conversation_id : find_id_T_R,
                    channel : req.body.channel
                })
                add? sendResponse(res , add.conversation_id , "create conversation_id")
                   : sendError(res , "error creaction conversation_id")
                console.log("new conversation",add.conversation_id)
            }
        } 
    }
    catch(e: any){console.log(e.message);
    }
}