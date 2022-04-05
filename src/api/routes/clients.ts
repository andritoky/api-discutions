import * as express from 'express';
import * as controllers from '../controllers/clients'
import { validation } from '../middlewares/validationsMiddlewares';
import { clientsShema } from '../validations/clients';

export let client_routers = express.Router()

client_routers.get('/' , controllers.liste)
client_routers.post('/add' , validation(clientsShema) , controllers.add)
client_routers.get('/find/:id' , controllers.findOne)

