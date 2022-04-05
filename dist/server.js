"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const dbLocale_1 = require("./config/dbLocale");
const clients_1 = require("./api/routes/clients");
const users_1 = require("./api/routes/users");
const logger_1 = require("./config/logger");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let port = 3000;
app.use(helmet.noSniff());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(cors({
    origin: "http://localhost:" + port + "",
    credentials: true
}));
app.get('/', (req, res) => {
    res.status(200).send("Welcome TypeMan Dev !");
});
app.use('/clients', clients_1.client_routers);
app.use('/users', users_1.users_routers);
app.listen(port, () => {
    (0, dbLocale_1.dbConnect)();
    logger_1.log.info('Server run on port 12 :' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUVuQyxpQ0FBZ0M7QUFDaEMsZ0RBQTJDO0FBQzNDLGtEQUFtRDtBQUNuRCw4Q0FBZ0Q7QUFDaEQsNENBQW1DO0FBRW5DLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFFN0IsTUFBTSxHQUFHLEdBQWdCLE9BQU8sRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVmLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDWCxNQUFNLEVBQUMsbUJBQW1CLEdBQUcsSUFBSSxHQUFFLEVBQUU7SUFDckMsV0FBVyxFQUFDLElBQUk7Q0FDakIsQ0FBQyxDQUFDLENBQUE7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRyxHQUFhLEVBQUUsRUFBRTtJQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUcsd0JBQWMsQ0FBRSxDQUFBO0FBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFHLHFCQUFhLENBQUUsQ0FBQTtBQUVsQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsSUFBQSxvQkFBUyxHQUFFLENBQUE7SUFDWCxZQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDIn0=