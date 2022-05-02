"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./config/db");
const users_1 = require("./api/routes/users");
const authentification_1 = require("./api/routes/authentification");
const discutions_1 = require("./api/routes/discutions");
const logger_1 = require("./config/logger");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let port = process.env.PORT || 4000;
// app.use('/', verifyHeaders)
// app.use(helmet.noSniff())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(cors({
    origin: "http://localhost:" + port + "",
    credentials: true
}));
app.get('/', (req, res) => {
    res.status(200).send("API - TYPESCRIPTE - WITH LOGGER");
});
app.use('/users', users_1.users_routers);
app.use('/auth', authentification_1.authentification_routers);
app.use('/discutions', discutions_1.discutions_routers);
app.listen(port, () => {
    try {
        (0, db_1.dbConnect)();
    }
    catch (e) {
        logger_1.log.info('Connection DB Fail !');
    }
    logger_1.log.info('Server run on port :' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUduQyxvQ0FBcUM7QUFDckMsOENBQWdEO0FBQ2hELG9FQUFzRTtBQUN0RSx3REFBMEQ7QUFDMUQsNENBQW1DO0FBRW5DLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFHN0IsTUFBTSxHQUFHLEdBQWdCLE9BQU8sRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUVuQyw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUNqRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ1gsTUFBTSxFQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRSxFQUFFO0lBQ3JDLFdBQVcsRUFBQyxJQUFJO0NBQ2pCLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFZLEVBQUcsR0FBYSxFQUFFLEVBQUU7SUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFHLHFCQUFhLENBQUUsQ0FBQTtBQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRywyQ0FBd0IsQ0FBRSxDQUFBO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLCtCQUFrQixDQUFFLENBQUE7QUFFNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLElBQUc7UUFDRCxJQUFBLGNBQVMsR0FBRSxDQUFBO0tBQ1o7SUFBQSxPQUFNLENBQUMsRUFBQztRQUNQLFlBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUNsQztJQUNELFlBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMifQ==