import * as mongoose from 'mongoose'

let Schema = mongoose.Schema

let usersShema = new Schema({
    nom : {
        type : String ,
    },
    contact : {
        type : Number ,
    },
    email : {
        
    },
    password : {
        type : String ,
    },
    verify : {
        type : Boolean,
    }
},{timestamps:true}
)

export let User = mongoose.model("user",usersShema)
