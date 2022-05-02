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
exports.searchUser = exports.verifyUser = exports.add = exports.deleteOne = exports.findOne = exports.liste_users = exports.liste = void 0;
const dotenv = require("dotenv");
dotenv.config();
const services = require("../services/users");
const saveImageFile_1 = require("../middlewares/saveImageFile");
const sendResponse_1 = require("../helpers/sendResponse");
let designation = " User ";
let liste = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let liste = yield services.find();
    (0, sendResponse_1.sendSimpleResponse)(res, liste);
});
exports.liste = liste;
let liste_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.user_id;
    let liste = yield services.find();
    let data = liste.filter(user => user.id !== userId);
    (0, sendResponse_1.sendSimpleResponse)(res, data);
});
exports.liste_users = liste_users;
let findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let find = yield services.findOne(req.params.id);
    (0, sendResponse_1.sendSimpleResponse)(res, find);
});
exports.findOne = findOne;
let deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services.deleteOne(req.params.id);
    (0, sendResponse_1.sendError)(res, 'Delete:' + req.params.id);
});
exports.deleteOne = deleteOne;
let add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let verify_double = yield services.findOneByNom(req.body.nom);
        if (verify_double.length !== 0) {
            (0, sendResponse_1.sendError)(res, designation + req.body.nom + " existe deja !");
        }
        else {
            let image_name = yield (0, saveImageFile_1.saveImageFile)(req.body.profile);
            let add = yield services.add(req.body, image_name);
            let id = add._id.toString();
            let sujet = "App Verification User";
            let linkOnline = process.env.LINK_VERIFY_USER_ONLINE + id;
            services.sendEmail(req.body.email, sujet, req.body.nom, linkOnline);
            add ? (0, sendResponse_1.sendResponse)(res, null, designation + req.body.nom + ' bien ajouter')
                : (0, sendResponse_1.sendError)(res, "fail add new user");
        }
    }
    catch (e) {
        console.log(e.response.data.errors);
    }
});
exports.add = add;
let verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield services.update(req.params.id);
    let find = yield services.findOne(req.params.id);
    find
        ? (0, sendResponse_1.sendResponse)(res, null, 'Bonjour ' + find[0].nom + '! votre compte et Activé !')
        : (0, sendResponse_1.sendError)(res, 'Ereur lors de verification de votre Compte !');
});
exports.verifyUser = verifyUser;
let searchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.params.data;
    let search = yield services.search(data);
    search
        ? (0, sendResponse_1.sendResponse)(res, search, 'search user')
        : (0, sendResponse_1.sendError)(res, 'Ereur search user');
});
exports.searchUser = searchUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2NvbnRyb2xsZXJzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLGlDQUFpQztBQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNqRCw4Q0FBNEM7QUFDNUMsZ0VBQTZEO0FBQzdELDBEQUFzRjtBQUV0RixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUE7QUFFbkIsSUFBSSxLQUFLLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDeEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDakMsSUFBQSxpQ0FBa0IsRUFBQyxHQUFHLEVBQUcsS0FBSyxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBLENBQUE7QUFIVSxRQUFBLEtBQUssU0FHZjtBQUVNLElBQUksV0FBVyxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQzlELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELElBQUEsaUNBQWtCLEVBQUMsR0FBRyxFQUFHLElBQUksQ0FBQyxDQUFBO0FBQ2xDLENBQUMsQ0FBQSxDQUFBO0FBTFUsUUFBQSxXQUFXLGVBS3JCO0FBRU0sSUFBSSxPQUFPLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDMUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFD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