import * as yup from 'yup'

export let usersShema = yup.object({
    nom : yup.string().typeError('Veuiller vérifier votre nom').required(),
    contact : yup.number().typeError('Veuiller vérifier votre numero de contact').required(),
    email : yup.string().email("Entrer un valide email").required(),
    password : yup.string().min(4).max(20).required(),
    profile : yup.string().typeError('Choisir une image').required()
})