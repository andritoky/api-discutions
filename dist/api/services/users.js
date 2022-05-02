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
exports.sendEmail = exports.add = exports.deleteOne = exports.findOneByNom = exports.update = exports.search = exports.findOne = exports.find = void 0;
const users_1 = require("../models/users");
const nodemailer = require("nodemailer");
let designation = " User ";
let mydb = users_1.User;
let find = () => __awaiter(void 0, void 0, void 0, function* () {
    let liste = yield mydb.find({});
    return liste;
});
exports.find = find;
let findOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('id', id);
        let find = yield mydb.findOne({ _id: id });
        return find;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
});
exports.findOne = findOne;
let search = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('search : ', data);
        let find = yield mydb.findOne({ nom: { $regex: '.*' + data + '.*' } });
        return find;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
});
exports.search = search;
let update = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('id', id);
        let edit = yield mydb.updateOne({ _id: id }, [{ $set: { "verify": true } }]);
        return edit;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
});
exports.update = update;
let findOneByNom = (nom) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(designation, nom);
    let find_nom = yield mydb.find({ nom: nom });
    return find_nom;
});
exports.findOneByNom = findOneByNom;
let deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield mydb.findByIdAndDelete({ _id: id });
    console.log("User delete :", id);
});
exports.deleteOne = deleteOne;
let add = (data, image_name) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("user ajout !");
    let nouveau = new mydb({
        nom: data.nom,
        contact: data.contact,
        email: data.email,
        password: data.password,
        profile: image_name,
        verify: false
    });
    let add = yield mydb.create(nouveau);
    console.log('nouveau ', designation, 'ajouté :', nouveau);
    return add;
});
exports.add = add;
let sendEmail = (email, sujet, nom, link) => __awaiter(void 0, void 0, void 0, function* () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'randriamampionona9@gmail.com',
            pass: '#Lantoniaina9'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: 'randriamampionona9@gmail.com',
        to: email,
        subject: sujet,
        html: '<h3>Bonjour ' + nom + '! </h3><p> Cliquer sur ce lien pour activer votre compte </p><a href="' + link + '">Activation de compte</a>'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Send Email Succes : ' + info.response);
        }
    });
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3NlcnZpY2VzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUVuQyx5Q0FBd0M7QUFFeEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFBO0FBQzFCLElBQUksSUFBSSxHQUFHLFlBQUksQ0FBQTtBQUVSLElBQUksSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUN6QixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDL0IsT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQyxDQUFBLENBQUE7QUFIVSxRQUFBLElBQUksUUFHZDtBQUVNLElBQUksT0FBTyxHQUFHLENBQU8sRUFBbUIsRUFBRyxFQUFFO0lBQ2hELElBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRyxFQUFFLENBQUMsQ0FBQTtRQUN0QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUN6QyxPQUFPLElBQUksQ0FBQTtLQUNkO0lBQUEsT0FBTSxDQUFLLEVBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QixPQUFPLEtBQUssQ0FBQTtLQUNmO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFUVSxRQUFBLE9BQU8sV0FTakI7QUFFTSxJQUFJLE1BQU0sR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO0lBQ3ZDLElBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsQ0FBQTtRQUMvQixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxH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