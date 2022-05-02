"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let usersShema = new Schema({
    nom: {
        type: String,
    },
    contact: {
        type: Number,
    },
    email: {},
    password: {
        type: String,
    },
    profile: {
        type: String,
    },
    verify: {
        type: Boolean,
    }
}, { timestamps: true });
exports.User = mongoose.model("user", usersShema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21vZGVscy91c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBb0M7QUFFcEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQTtBQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUN4QixHQUFHLEVBQUc7UUFDRixJQUFJLEVBQUcsTUFBTTtLQUNoQjtJQUNELE9BQU8sRUFBRztRQUNOLElBQUksRUFBRyxNQUFNO0tBQ2hCO0lBQ0QsS0FBSyxFQUFHLEVBRVA7SUFDRCxRQUFRLEVBQUc7UUFDUCxJQUFJLEVBQUcsTUFBTTtLQUNoQjtJQUNELE9BQU8sRUFBRztRQUNOLElBQUksRUFBRyxNQUFNO0tBQ2hCO0lBQ0QsTUFBTSxFQUFHO1FBQ0wsSUFBSSxFQUFHLE9BQU87S0FDakI7Q0FDSixFQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxDQUNsQixDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUEifQ==