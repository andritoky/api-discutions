import * as mongoose from 'mongoose'

let Schema = mongoose.Schema

let usersShema = new Schema({
    conversation_id : String,
    channel : [{
        ch_id: String,
        nom : String,
        profile : String
    }],
    last_message : {
        message : String,
        time: String
    } ,
    conversations: [{
        message: String,
        time: String,
        user: {
            user_id : String,
            nom: String,
            profile: String,
        }
    }]
},{timestamps:true}
)

export let Discutions = mongoose.model("discutions",usersShema)
