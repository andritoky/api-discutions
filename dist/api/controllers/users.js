"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.add = exports.findOne = exports.liste = void 0;
const services = require("../services/users");
let designation = " User ";
let liste = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let liste = yield services.find();
    res.status(200).send(liste);
});
exports.liste = liste;
let findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let find = yield services.findOne(req.params.id);
    res.status(200).send(find);
});
exports.findOne = findOne;
let add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let verify_double = yield services.findOneByNom(req.body.nom);
    if (verify_double.length !== 0) {
        res.status(400).json({ status: 'error', message: designation + req.body.nom + " existe deja !" });
        console.log(designation, req.body.nom + " existe deja !");
    }
    else {
        let add = yield services.add(req.body);
        let id = add._id.toString();
        let sujet = "App Verification User";
        let link = "http://localhost:3000/users/verify/" + id + "";
        services.sendEmail(req.body.email, sujet, req.body.nom, link);
        add ? res.status(200).json({ status: 'succes', message: designation + req.body.nom + ' bien ajouter' })
            : res.status(400).json({ status: 'fail', message: 'ajout fail' });
    }
});
exports.add = add;
let verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services.update(req.params.id);
    let find = yield services.findOne(req.params.id);
    find
        ? res.status(200).send('Bonjour ' + find[0].nom + '! votre compte et Activé !')
        : res.status(400).send('Ereur lors de verification de votre Compte !');
});
exports.verifyUser = verifyUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2NvbnRyb2xsZXJzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDhDQUE0QztBQUU1QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUE7QUFFbkIsSUFBSSxLQUFLLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDeEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDL0IsQ0FBQyxDQUFBLENBQUE7QUFIVSxRQUFBLEtBQUssU0FHZjtBQUVNLElBQUksT0FBTyxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQzFELElBQUksSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQSxDQUFBO0FBSFUsUUFBQSxPQUFPLFdBR2pCO0FBRU0sSUFBSSxHQUFHLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDdEQsSUFBSSxhQUFhLEdBQUcsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0QsSUFBRyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRyxPQUFPLEVBQUcsT0FBTyxFQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsRUFBQyxDQUFDLENBQUE7UUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztLQUM5RDtTQUNHO1FBQ0EsSUFBSSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV0QyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzNCLElBQUksS0FBSyxHQUFHLHVCQUF1QixDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFHLHFDQUFxQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDMUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxLQUFLLEVBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsSUFBSSxDQUFDLENBQUE7UUFFaEUsR0FBRyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRyxRQUFRLEVBQUcsT0FBTyxFQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRSxlQUFlLEVBQUMsQ0FBQztZQUNyRyxDQUFDLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUcsTUFBTSxFQUFHLE9BQU8sRUFBRyxZQUFZLEVBQUMsQ0FBQyxDQUFBO0tBQ3BFO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFqQlUsUUFBQSxHQUFHLE9BaUJiO0FBRU0sSUFBSSxVQUFVLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDN0QsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDcEMsSUFBSSxJQUFJLEdBQVEsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDckQsSUFBSTtRQUNKLENBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRSw0QkFBNEIsQ0FBQztRQUM1RSxDQUFDLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQTtBQUN6RSxDQUFDLENBQUEsQ0FBQTtBQU5VLFFBQUEsVUFBVSxjQU1wQiJ9