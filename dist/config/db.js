"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose = require("mongoose");
let uri = "mongodb+srv://toky:lantoniaina@cluster0.sh3ga.mongodb.net/monbd?retryWrites=true&w=majority";
let dbConnect = function () {
    mongoose.connect(uri, {});
    try {
        let connection = mongoose.connection;
        connection.once("open", () => {
            console.log('connection Base de donnée succes !');
        });
    }
    catch (e) {
        console.log(e.message);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUdwQyxJQUFJLEdBQUcsR0FBRyw2RkFBNkYsQ0FBQztBQUNqRyxJQUFJLFNBQVMsR0FBRztJQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUNwQixDQUFDLENBQUE7SUFFRixJQUFJO1FBQ0EsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQTtRQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxHQUFJLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFBO0tBQ0w7SUFBQSxPQUFNLENBQU0sRUFBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ3pCO0FBRUwsQ0FBQyxDQUFBO0FBYlUsUUFBQSxTQUFTLGFBYW5CIn0=