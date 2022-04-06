"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose = require("mongoose");
const logger_1 = require("./logger");
let uri = "mongodb+srv://toky:lantoniaina@cluster0.sh3ga.mongodb.net/monbd?retryWrites=true&w=majority";
let dbConnect = function () {
    mongoose.connect(uri, {});
    try {
        let connection = mongoose.connection;
        connection.once("open", () => {
            logger_1.log.info('connection Base de donnée online succes !');
        });
    }
    catch (e) {
        logger_1.log.error(e.message);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUNwQyxxQ0FBNEI7QUFFNUIsSUFBSSxHQUFHLEdBQUcsNkZBQTZGLENBQUM7QUFDakcsSUFBSSxTQUFTLEdBQUc7SUFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFDcEIsQ0FBQyxDQUFBO0lBRUYsSUFBSTtRQUNBLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUE7UUFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUcsR0FBSSxFQUFFO1lBQzNCLFlBQUcsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtRQUN6RCxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQUEsT0FBTSxDQUFNLEVBQUM7UUFDVixZQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN2QjtBQUVMLENBQUMsQ0FBQTtBQWJVLFFBQUEsU0FBUyxhQWFuQiJ9