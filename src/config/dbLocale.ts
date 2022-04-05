import * as mongoose from 'mongoose'
import {log} from './logger'

export let dbConnect = function () {
    let uri = "mongodb://127.0.0.1:27017/test";
    mongoose.connect(uri,{
        retryWrites : true ,
        w : 'majority'
    })
    try {
        let connection = mongoose.connection
            connection.once("open" , ()  => {
            log.info('DB Local connexion succes !')
        })
    }catch(e: any){
        log.info('Mongodb Fail connection !')
        console.log(e.message)
        process.exit(1)
    }
}