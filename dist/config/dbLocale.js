"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const logger_1 = require("./logger");
const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1384427",
    key: "f3f919f78d1f3d88c1b0",
    secret: "42176e669c4f1c358a73",
    cluster: "ap2",
    useTLS: true
});
function changeStream() {
    let changeStream = mongoose.connection.collection('discutions').watch();
    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            pusher.trigger('discutions', 'newDiscution', {
                'change': change
            });
        }
        else if (change.operationType === 'update') {
            pusher.trigger('messages', 'newMessage', {
                'change': change
            });
        }
        else {
            console.log("Erreur Pusher trigger ...");
        }
    });
}
let uri = '' + process.env.URI_DB_LOCALE + '';
let dbConnect = function () {
    try {
        mongoose.connect(uri, {
            retryWrites: true,
            w: 'majority'
        });
        let connection = mongoose.connection;
        connection.once("open", () => {
            logger_1.log.info('DB Local connexion succes !');
            // changeStream()
        });
    }
    catch (e) {
        logger_1.log.info('Mongodb Fail connection !');
        console.log(e.message);
        process.exit(1);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJMb2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiTG9jYWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFrQztBQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNsRCxxQ0FBb0M7QUFDcEMscUNBQTRCO0FBRTVCLGlDQUFnQztBQUVoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUN4QixLQUFLLEVBQUUsU0FBUztJQUNoQixHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUIsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQztBQUVILFNBQVMsWUFBWTtJQUNqQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2RSxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUM7WUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUcsY0FBYyxFQUFHO2dCQUMzQyxRQUFRLEVBQUUsTUFBTTthQUNuQixDQUFDLENBQUE7U0FDTDthQUNJLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUM7WUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUcsWUFBWSxFQUFHO2dCQUN2QyxRQUFRLEVBQUUsTUFBTTthQUNuQixDQUFDLENBQUE7U0FDTDthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1NBQzNDO0lBQ0wsQ0FBQyxDQUFFLENBQUE7QUFDUCxDQUFDO0FBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLEVBQUUsQ0FBRTtBQUN0QyxJQUFJLFNBQVMsR0FBRztJQUNuQixJQUFJO1FBQ0EsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUM7WUFDakIsV0FBVyxFQUFHLElBQUk7WUFDbEIsQ0FBQyxFQUFHLFVBQVU7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQTtRQUNoQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxHQUFJLEVBQUU7WUFDL0IsWUFBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQ3ZDLGlCQUFpQjtRQUNyQixDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQUEsT0FBTSxDQUFNLEVBQUM7UUFDVixZQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNsQjtBQUNMLENBQUMsQ0FBQTtBQWhCVSxRQUFBLFNBQVMsYUFnQm5CIn0=