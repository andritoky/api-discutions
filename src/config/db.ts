import * as mongoose from 'mongoose'
import {log} from './logger'

let uri = "mongodb+srv://toky:lantoniaina@cluster0.sh3ga.mongodb.net/monbd?retryWrites=true&w=majority";
export let dbConnect = function () {
    mongoose.connect(uri,{
    })
    
    try {
        let connection = mongoose.connection
        connection.once("open" , ()  => {
            log.info('connection Base de donnée online succes !')
        })
    }catch(e: any){
        log.error(e.message)
    }
    
}

