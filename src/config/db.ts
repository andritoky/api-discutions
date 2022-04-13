import * as dotenv from 'dotenv'; dotenv.config()
import * as mongoose from 'mongoose'
import {log} from './logger'


import * as Pusher from 'pusher'

const pusher = new Pusher({
  appId: "1384427",
  key: "f3f919f78d1f3d88c1b0",
  secret: "42176e669c4f1c358a73",
  cluster: "ap2",
  useTLS: true
});

function changeStream () {
    let changeStream = mongoose.connection.collection('discutions').watch()
    changeStream.on('change' , (change) => {
        if (change.operationType === 'insert'){
            pusher.trigger('discutions' , 'newDiscution' , {
                'change': change
            })
            console.log('Changement !!!');
        }
        else if (change.operationType === 'update'){
            pusher.trigger('messages' , 'newMessage' , {
                'change': change
            })
            console.log('Changement message!!!');
            
        }
        else {
            console.log("Erreur Pusher trigger ...")
        }
    } )
}

let uri = ''+ process.env.URI_DB_ONLINE +'' ;
export let dbConnect = function () {
    mongoose.connect(uri,{})
    try {
        let connection = mongoose.connection
        connection.once("open" , ()  => {
            log.info('connection Base de donnée online succes !')
            changeStream ()
        })
    }catch(e: any){
        log.error(e.message)
    }
    
}

