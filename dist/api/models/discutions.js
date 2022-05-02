"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discutions = void 0;
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let usersShema = new Schema({
    conversation_id: String,
    channel: [{
            ch_id: String,
            nom: String,
            profile: String
        }],
    last_message: {
        message: String,
        time: String
    },
    conversations: [{
            message: String,
            time: String,
            user: {
                user_id: String,
                nom: String,
                profile: String,
            }
        }]
}, { timestamps: true });
exports.Discutions = mongoose.model("discutions", usersShema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY3V0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2Rpc2N1dGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9DO0FBRXBDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7QUFFNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsZUFBZSxFQUFHLE1BQU07SUFDeEIsT0FBTyxFQUFHLENBQUM7WUFDUCxLQUFLLEVBQUUsTUFBTTtZQUNiLEdBQUcsRUFBRyxNQUFNO1lBQ1osT0FBTyxFQUFHLE1BQU07U0FDbkIsQ0FBQztJQUNGLFlBQVksRUFBRztRQUNYLE9BQU8sRUFBRyxNQUFNO1FBQ2hCLElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxhQUFhLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxFQUFHLE1BQU07Z0JBQ2hCLEdBQUcsRUFBRSxNQUFNO2dCQUNYLE9BQU8sRUFBRSxNQUFNO2FBQ2xCO1NBQ0osQ0FBQztDQUNMLEVBQUMsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLENBQ2xCLENBQUE7QUFFVSxRQUFBLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQSJ9