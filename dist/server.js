"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./config/db");
const clients_1 = require("./api/routes/clients");
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
app.use('/clients', clients_1.client_routers);
app.use('/users', users_1.users_routers);
app.use('/auth', authentification_1.authentification_routers);
app.use('/discutions', discutions_1.discutions_routers);
app.listen(port, () => {
    (0, db_1.dbConnect)();
    logger_1.log.info('Server run on port :' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUduQyxvQ0FBcUM7QUFDckMsa0RBQW1EO0FBQ25ELDhDQUFnRDtBQUNoRCxvRUFBc0U7QUFDdEUsd0RBQTBEO0FBQzFELDRDQUFtQztBQUVuQywwQ0FBMEM7QUFDMUMsNkJBQTZCO0FBRzdCLE1BQU0sR0FBRyxHQUFnQixPQUFPLEVBQUUsQ0FBQztBQUNuQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUE7QUFFbkMsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUU1QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNYLE1BQU0sRUFBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUUsRUFBRTtJQUNyQyxXQUFXLEVBQUMsSUFBSTtDQUNqQixDQUFDLENBQUMsQ0FBQTtBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFHLEdBQWEsRUFBRSxFQUFFO0lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRyx3QkFBYyxDQUFFLENBQUE7QUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUcscUJBQWEsQ0FBRSxDQUFBO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFHLDJDQUF3QixDQUFFLENBQUE7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUcsK0JBQWtCLENBQUUsQ0FBQTtBQUU1QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsSUFBQSxjQUFTLEdBQUUsQ0FBQTtJQUNYLFlBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMifQ==