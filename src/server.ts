import * as express from 'express';
import { Application , Request , Response} from 'express';
import * as helmet from 'helmet'
import {dbConnect} from './config/dbLocale'
import {client_routers} from './api/routes/clients'
import {users_routers} from './api/routes/users'
import {log} from './config/logger'

import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app: Application = express();
let port = process.env.PORT || 3000

app.use(helmet.noSniff())
app.use(express.static('public'));    
app.use(bodyParser.urlencoded({ extended: true , limit: '25mb'}))  
app.use(bodyParser.json({limit: '25mb'})) 
app.use(cors({
  origin:"http://localhost:" + port +"",
  credentials:true
}))

app.get('/', (req: Request , res: Response) => {
  res.status(200).send("Welcome TypeMan Dev !")
});

app.use('/clients' , client_routers )
app.use('/users' , users_routers )

app.listen(port, () => {
  dbConnect()
  log.info('Server run on port 12 :'+ port);
}); 


