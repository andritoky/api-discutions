import * as express from 'express';
import * as controllers from '../controllers/users'
import { validation } from '../middlewares/validationsMiddlewares';
import { usersShema } from '../validations/users';

export let users_routers = express.Router()

users_routers.get('/' , controllers.liste)
users_routers.post('/add' , validation(usersShema) ,  controllers.add)
users_routers.get('/find/:id' , controllers.findOne)
users_routers.get('/verify/:id' , controllers.verifyUser)

