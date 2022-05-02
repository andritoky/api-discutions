import * as express from 'express';
import { Application , Request , Response} from 'express';
import * as helmet from 'helmet'
import {dbConnect} from './config/db'
import {users_routers} from './api/routes/users'
import {authentification_routers} from './api/routes/authentification'
import {discutions_routers} from './api/routes/discutions'
import {log} from './config/logger'
import { verifyHeaders } from './api/helpers/verifyHeaders';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';


const app: Application = express();
let port = process.env.PORT || 4000

// app.use('/', verifyHeaders)
// app.use(helmet.noSniff())

app.use(express.static('public'));    
app.use(bodyParser.urlencoded({ extended: true , limit: '25mb'}))  
app.use(bodyParser.json({limit: '25mb'})) 
app.use(cors({
  origin:"http://localhost:" + port +"",
  credentials:true
}))

app.get('/', (req: Request , res: Response) => {
  res.status(200).send("Welcome api-discutions")
});

app.use('/users' , users_routers )
app.use('/auth' , authentification_routers )
app.use('/discutions' , discutions_routers )

app.listen(port, () => {
  try{
    dbConnect()
  }catch(e){
    log.info('Connection DB Fail !');
  }
  log.info('Server run on port :'+ port);
}); 


