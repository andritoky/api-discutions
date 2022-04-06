"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const db_1 = require("./config/db");
const clients_1 = require("./api/routes/clients");
const users_1 = require("./api/routes/users");
const logger_1 = require("./config/logger");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let port = process.env.PORT || 3000;
app.use(helmet.noSniff());
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
app.use('/clients', clients_1.client_routers);
app.use('/users', users_1.users_routers);
app.listen(port, () => {
    (0, db_1.dbConnect)();
    logger_1.log.info('Server run on port :' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUVuQyxpQ0FBZ0M7QUFDaEMsb0NBQXFDO0FBQ3JDLGtEQUFtRDtBQUNuRCw4Q0FBZ0Q7QUFDaEQsNENBQW1DO0FBRW5DLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFFN0IsTUFBTSxHQUFHLEdBQWdCLE9BQU8sRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUVuQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUNqRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ1gsTUFBTSxFQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRSxFQUFFO0lBQ3JDLFdBQVcsRUFBQyxJQUFJO0NBQ2pCLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFZLEVBQUcsR0FBYSxFQUFFLEVBQUU7SUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLHdCQUFjLENBQUUsQ0FBQTtBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRyxxQkFBYSxDQUFFLENBQUE7QUFFbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLElBQUEsY0FBUyxHQUFFLENBQUE7SUFDWCxZQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDIn0=