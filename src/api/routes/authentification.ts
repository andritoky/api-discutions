import * as express from 'express';
import * as controllers from '../controllers/authentification'

export let authentification_routers = express.Router()

authentification_routers.post('/login', controllers.login)
authentification_routers.get('/logout', controllers.logout)
authentification_routers.get('/verify-cookie', controllers.verify_cookie)
authentification_routers.post('/verify-user-token', controllers.verify_user_token)

  