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
exports.sendEmail = exports.add = exports.findOneByNom = exports.update = exports.findOne = exports.find = void 0;
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
        let find = yield mydb.find({ _id: id });
        return find;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
});
exports.findOne = findOne;
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
let add = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let nouveau = new mydb({
        nom: data.nom,
        contact: data.contact,
        email: data.email,
        password: data.password,
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
            pass: 'lantoniaina'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3NlcnZpY2VzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUVuQyx5Q0FBd0M7QUFFeEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFBO0FBQzFCLElBQUksSUFBSSxHQUFHLFlBQUksQ0FBQTtBQUVSLElBQUksSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUN6QixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDL0IsT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQyxDQUFBLENBQUE7QUFIVSxRQUFBLElBQUksUUFHZDtBQUVNLElBQUksT0FBTyxHQUFHLENBQU8sRUFBbUIsRUFBRSxFQUFFO0lBQy9DLElBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRyxFQUFFLENBQUMsQ0FBQTtRQUN0QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQTtLQUNkO0lBQUEsT0FBTSxDQUFLLEVBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QixPQUFPLEtBQUssQ0FBQTtLQUNmO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFUVSxRQUFBLE9BQU8sV0FTakI7QUFFTSxJQUFJLE1BQU0sR0FBRyxDQUFPLEVBQW1CLEVBQUUsRUFBRTtJQUM5QyxJQUFHO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLENBQUE7UUFDdEIsSUFBSSxJQUFJLEdBQUksTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUUs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