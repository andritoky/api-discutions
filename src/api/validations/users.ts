import * as yup from 'yup'

export let usersShema = yup.object({
    nom : yup.string().required(),
    contact : yup.number().typeError('Veuiller revérifier votre numero de contact').required(),
    email : yup.string().email("Entrer un valide email").required(),
    password : yup.string().min(4).max(20).required()
})