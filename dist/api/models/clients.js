"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let clientShema = new Schema({
    nom: {
        type: String,
    },
    adresse: {
        type: String
    },
    description: {
        type: String
    },
    image: { type: String },
}, { timestamps: true });
exports.Client = mongoose.model("client", clientShema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRWxDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7QUFFNUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDekIsR0FBRyxFQUFHO1FBQ0YsSUFBSSxFQUFHLE1BQU07S0FDaEI7SUFDRCxPQUFPLEVBQUc7UUFDTixJQUFJLEVBQUcsTUFBTTtLQUNoQjtJQUNELFdBQVcsRUFBRztRQUNWLElBQUksRUFBRyxNQUFNO0tBQ2hCO0lBQ0QsS0FBSyxFQUFHLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRTtDQUMzQixFQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxDQUNsQixDQUFBO0FBRVUsUUFBQSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFFLENBQUEifQ==