import * as express from 'express';
import * as controllers from '../controllers/discutions'

export let discutions_routers = express.Router()

discutions_routers.post('/new-discution' ,  controllers.add_discution)
discutions_routers.get('/all-discution' , controllers.get_all_discution)
discutions_routers.get('/delete-discution/:id' , controllers.delete_discution)
discutions_routers.get('/my-channel/:id' , controllers.get_my_channel)

discutions_routers.post('/new-message/:conversation_id' , controllers.add_message)
discutions_routers.get('/my-discution/:id' , controllers.get_my_discution)
discutions_routers.post('/verify-discution/' , controllers.post_verify_duscution)


