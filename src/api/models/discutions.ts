import * as mongoose from 'mongoose'

let Schema = mongoose.Schema

let usersShema = new Schema({
    conversation_id : String,
    conversations: [{
        message: String,
        user: {
            user_id : String,
            nom: String,
            profile: String,
            time: String,
        }
        
    }]
},{timestamps:true}
)

export let Discutions = mongoose.model("discutions",usersShema)
