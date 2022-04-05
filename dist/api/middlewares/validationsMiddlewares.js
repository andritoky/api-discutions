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
exports.validation = void 0;
let validation = (shema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield shema.validate(req.body);
        next();
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.validation = validation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnNNaWRkbGV3YXJlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvdmFsaWRhdGlvbnNNaWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLElBQWtCLEVBQUUsRUFBRTtJQUNqRyxJQUFHO1FBQ0MsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixJQUFJLEVBQUUsQ0FBQTtLQUNUO0lBQ0QsT0FBTSxDQUFNLEVBQUM7UUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDbEM7QUFDSixDQUFDLENBQUEsQ0FBQTtBQVJVLFFBQUEsVUFBVSxjQVFwQiJ9