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
exports.verifyUser = exports.add = exports.deleteOne = exports.findOne = exports.liste_users = exports.liste = void 0;
const services = require("../services/users");
let designation = " User ";
let liste = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let liste = yield services.find();
    res.status(200).send(liste);
});
exports.liste = liste;
let liste_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.user_id;
    let liste = yield services.find();
    let data = liste.filter(user => user.id !== userId);
    res.status(200).send(data);
});
exports.liste_users = liste_users;
let findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let find = yield services.findOne(req.params.id);
    res.status(200).send(find);
});
exports.findOne = findOne;
let deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services.deleteOne(req.params.id);
    res.status(200).send('Delete:' + req.params.id);
});
exports.deleteOne = deleteOne;
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
        // let link = "http://localhost:3000/users/verify/" + id + ""
        let linkOnline = "https://api-typescritpe.herokuapp.com/users/verify/" + id + "";
        services.sendEmail(req.body.email, sujet, req.body.nom, linkOnline);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2NvbnRyb2xsZXJzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDhDQUE0QztBQUU1QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUE7QUFFbkIsSUFBSSxLQUFLLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDeEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDL0IsQ0FBQyxDQUFBLENBQUE7QUFIVSxRQUFBLEtBQUssU0FHZjtBQUVNLElBQUksV0FBVyxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQzlELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQSxDQUFBO0FBTFUsUUFBQSxXQUFXLGVBS3JCO0FBRU0sSUFBSSxPQUFPLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDMUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxH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