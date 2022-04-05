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
exports.add = exports.findOneByNom = exports.findOne = exports.find = void 0;
const clients_1 = require("../models/clients");
let designation = " client ";
let mydb = clients_1.Client;
let find = () => __awaiter(void 0, void 0, void 0, function* () {
    let liste = yield mydb.find({});
    return liste;
});
exports.find = find;
let findOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('id', id);
    let find = yield mydb.find({ _id: id });
    return find;
});
exports.findOne = findOne;
let findOneByNom = (nom) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(designation, nom);
    let find_nom = yield mydb.find({ nom: nom });
    return find_nom;
});
exports.findOneByNom = findOneByNom;
let add = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let nouveau = new mydb({
        nom: data.nom,
        adresse: data.adresse,
        description: data.description
    });
    let add = yield mydb.create(nouveau);
    console.log('nouveau ', designation, 'ajouté :', nouveau);
    return add;
});
exports.add = add;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvc2VydmljZXMvY2xpZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBdUM7QUFHdkMsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFBO0FBQzVCLElBQUksSUFBSSxHQUFHLGdCQUFNLENBQUE7QUFFVixJQUFJLElBQUksR0FBRyxHQUFTLEVBQUU7SUFDekIsSUFBSSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQy9CLE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUMsQ0FBQSxDQUFBO0FBSFUsUUFBQSxJQUFJLFFBR2Q7QUFFTSxJQUFJLE9BQU8sR0FBRyxDQUFPLEVBQW1CLEVBQUUsRUFBRTtJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRyxFQUFFLENBQUMsQ0FBQTtJQUN0QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQTtJQUN0QyxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQSxDQUFBO0FBSlUsUUFBQSxPQUFPLFdBSWpCO0FBRU0sSUFBSSxZQUFZLEdBQUcsQ0FBTyxHQUFXLEVBQUUsRUFBRTtJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRyxHQUFHLENBQUMsQ0FBQTtJQUM5QixJQUFJLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUcsR0FBRyxFQUFDLENBQUMsQ0FBQTtJQUMzQyxPQUFPLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQTtBQUpVLFFBQUEsWUFBWSxnQkFJdEI7QUFFTSxJQUFJLEdBQUcsR0FBRyxDQUFPLElBQWlCLEVBQUUsRUFBRTtJQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztRQUNuQixHQUFHLEVBQUcsSUFBSSxDQUFDLEdBQUc7UUFDZCxPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87UUFDdEIsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXO0tBQ2pDLENBQUMsQ0FBQTtJQUNGLElBQUksR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRyxXQUFXLEVBQUcsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdELE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQyxDQUFBLENBQUE7QUFUVSxRQUFBLEdBQUcsT0FTYiJ9