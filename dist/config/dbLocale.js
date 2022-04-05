"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose = require("mongoose");
const logger_1 = require("./logger");
let dbConnect = function () {
    let uri = "mongodb://127.0.0.1:27017/test";
    mongoose.connect(uri, {
        retryWrites: true,
        w: 'majority'
    });
    try {
        let connection = mongoose.connection;
        connection.once("open", () => {
            logger_1.log.info('DB Local connexion succes !');
        });
    }
    catch (e) {
        logger_1.log.info('Mongodb Fail connection !');
        console.log(e.message);
        process.exit(1);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJMb2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiTG9jYWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUNwQyxxQ0FBNEI7QUFFckIsSUFBSSxTQUFTLEdBQUc7SUFDbkIsSUFBSSxHQUFHLEdBQUcsZ0NBQWdDLENBQUM7SUFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUM7UUFDakIsV0FBVyxFQUFHLElBQUk7UUFDbEIsQ0FBQyxFQUFHLFVBQVU7S0FDakIsQ0FBQyxDQUFBO0lBQ0YsSUFBSTtRQUNBLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUE7UUFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUcsR0FBSSxFQUFFO1lBQy9CLFlBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQUEsT0FBTSxDQUFNLEVBQUM7UUFDVixZQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNsQjtBQUNMLENBQUMsQ0FBQTtBQWhCVSxRQUFBLFNBQVMsYUFnQm5CIn0=