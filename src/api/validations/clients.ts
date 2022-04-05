import * as yup from 'yup'

export let clientsShema = yup.object({
    nom : yup.string().required(),
    adresse : yup.string().required(),
    description : yup.string().required()
})