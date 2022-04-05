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
exports.add = exports.findOne = exports.liste = void 0;
const services = require("../services/clients");
let designation = " client ";
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
        add ? res.status(200).json({ status: 'succes', message: designation + req.body.nom + ' bien ajouter' })
            : res.status(400).json({ status: 'fail', message: 'ajout fail' });
    }
});
exports.add = add;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvY2xpZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxnREFBOEM7QUFFOUMsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFBO0FBRXJCLElBQUksS0FBSyxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQ3hELElBQUksS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQy9CLENBQUMsQ0FBQSxDQUFBO0FBSFUsUUFBQSxLQUFLLFNBR2Y7QUFFTSxJQUFJLE9BQU8sR0FBSSxDQUFPLEdBQVksRUFBRyxHQUFhLEVBQUcsRUFBRTtJQUMxRCxJQUFJLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QixDQUFDLENBQUEsQ0FBQTtBQUhVLFFBQUEsT0FBTyxXQUdqQjtBQUVNLElBQUksR0FBRyxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQ3RELElBQUksYUFBYSxHQUFHLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdELElBQUcsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUcsT0FBTyxFQUFHLE9BQU8sRUFBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFBO1FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUM7S0FDOUQ7U0FDRztRQUNBLElBQUksR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsR0FBRyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRyxRQUFRLEVBQUcsT0FBTyxFQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRSxlQUFlLEVBQUMsQ0FBQztZQUNyRyxDQUFDLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUcsTUFBTSxFQUFHLE9BQU8sRUFBRyxZQUFZLEVBQUMsQ0FBQyxDQUFBO0tBQ3BFO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFYVSxRQUFBLEdBQUcsT0FXYiJ9