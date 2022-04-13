"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersShema = void 0;
const yup = require("yup");
exports.usersShema = yup.object({
    nom: yup.string().required(),
    contact: yup.number().typeError('Veuiller revérifier votre numero de contact').required(),
    email: yup.string().email("Entrer un valide email").required(),
    password: yup.string().min(4).max(20).required()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3ZhbGlkYXRpb25zL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUEwQjtBQUVmLFFBQUEsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsR0FBRyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsT0FBTyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDMUYsS0FBSyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDL0QsUUFBUSxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUNwRCxDQUFDLENBQUEifQ==