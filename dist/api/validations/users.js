"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersShema = void 0;
const yup = require("yup");
exports.usersShema = yup.object({
    nom: yup.string().typeError('Veuiller vérifier votre nom').required(),
    contact: yup.number().typeError('Veuiller vérifier votre numero de contact').required(),
    email: yup.string().email("Entrer un valide email").required(),
    password: yup.string().min(4).max(20).required(),
    profile: yup.string().typeError('Choisir une image').required()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3ZhbGlkYXRpb25zL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUEwQjtBQUVmLFFBQUEsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsR0FBRyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDdEUsT0FBTyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDeEYsS0FBSyxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDL0QsUUFBUSxFQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNqRCxPQUFPLEVBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUNuRSxDQUFDLENBQUEifQ==