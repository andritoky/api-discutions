let mongoose = require('mongoose')

let Schema = mongoose.Schema

let clientShema = new Schema({
    nom : {
        type : String ,
    },
    adresse : {
        type : String
    },
    description : {
        type : String
    },
    image : {type : String },
},{timestamps:true}
)

export let Client = mongoose.model("client", clientShema )
