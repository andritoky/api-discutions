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
            console.log('Changement !!!');
        }
        else if (change.operationType === 'update') {
            pusher.trigger('messages', 'newMessage', {
                'change': change
            });
            console.log('Changement message!!!');
        }
        else {
            console.log("Erreur Pusher trigger ...");
        }
    });
}
let uri = '' + process.env.URI_DB_ONLINE + '';
let dbConnect = function () {
    mongoose.connect(uri, {});
    try {
        let connection = mongoose.connection;
        connection.once("open", () => {
            logger_1.log.info('connection Base de donnée online succes !');
            changeStream();
        });
    }
    catch (e) {
        logger_1.log.error(e.message);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNqRCxxQ0FBb0M7QUFDcEMscUNBQTRCO0FBRzVCLGlDQUFnQztBQUVoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUN4QixLQUFLLEVBQUUsU0FBUztJQUNoQixHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUIsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQztBQUVILFNBQVMsWUFBWTtJQUNqQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2RSxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xDLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUM7WUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUcsY0FBYyxFQUFHO2dCQUMzQyxRQUFRLEVBQUUsTUFBTTthQUNuQixDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakM7YUFDSSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFHLFlBQVksRUFBRztnQkFDdkMsUUFBUSxFQUFFLE1BQU07YUFDbkIsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBRXhDO2FBQ0k7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7U0FDM0M7SUFDTCxDQUFDLENBQUUsQ0FBQTtBQUNQLENBQUM7QUFFRCxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsRUFBRSxDQUFFO0FBQ3RDLElBQUksU0FBUyxHQUFHO0lBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3hCLElBQUk7UUFDQSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO1FBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFHLEdBQUksRUFBRTtZQUMzQixZQUFHLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUE7WUFDckQsWUFBWSxFQUFHLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7S0FDTDtJQUFBLE9BQU0sQ0FBTSxFQUFDO1FBQ1YsWUFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDdkI7QUFFTCxDQUFDLENBQUE7QUFaVSxRQUFBLFNBQVMsYUFZbkIifQ==