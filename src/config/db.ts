import * as mongoose from 'mongoose'


let uri = "mongodb+srv://toky:lantoniaina@cluster0.sh3ga.mongodb.net/monbd?retryWrites=true&w=majority";
export let dbConnect = function () {
    mongoose.connect(uri,{
    })
    
    try {
        let connection = mongoose.connection
        connection.once("open" , ()  => {
            console.log('connection Base de donnée succes !')
        })
    }catch(e: any){
        console.log(e.message)
    }
    
}

