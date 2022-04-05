import {Client} from'../models/clients'
import {DataClients} from'../types/interfaces'

let designation = " client "
let mydb = Client

export let find = async () => {
    let liste = await mydb.find({})
    return liste
}

export let findOne = async (id: number | string) => {
    console.log('id' , id)
    let find = await mydb.find({_id : id})
    return find
}

export let findOneByNom = async (nom: string) => {
    console.log(designation , nom)
    let find_nom = await mydb.find({nom : nom})
    return find_nom
}

export let add = async (data: DataClients) => {
    let nouveau = new mydb({
        nom : data.nom ,
        adresse : data.adresse ,
        description : data.description
    })
    let add = await mydb.create(nouveau)
    console.log('nouveau ' , designation , 'ajouté :' , nouveau);  
    return add
}