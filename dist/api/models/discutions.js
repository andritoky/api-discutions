"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discutions = void 0;
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let usersShema = new Schema({
    conversation_id: String,
    conversations: [{
            message: String,
            user: {
                user_id: String,
                nom: String,
                profile: String,
                time: String,
            }
        }]
}, { timestamps: true });
exports.Discutions = mongoose.model("discutions", usersShema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY3V0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2Rpc2N1dGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9DO0FBRXBDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7QUFFNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDeEIsZUFBZSxFQUFHLE1BQU07SUFDeEIsYUFBYSxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRTtnQkFDRixPQUFPLEVBQUcsTUFBTTtnQkFDaEIsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUVKLENBQUM7Q0FDTCxFQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxDQUNsQixDQUFBO0FBRVUsUUFBQSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUEifQ==