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
exports.decryptJWT = exports.sendToken = exports.loginJWT = void 0;
const jwt = require("jsonwebtoken");
let loginJWT = function (id) {
    return jwt.sign({ id }, 'secret122');
};
exports.loginJWT = loginJWT;
let sendToken = function (user, req, res) {
    let token = (0, exports.loginJWT)(user._id);
    let options = {
        secure: true,
        httpOnly: true
    };
    res.cookie("jwt", token, options);
    res.json({ status: 'ok', user: token, myUser: user });
};
exports.sendToken = sendToken;
let decryptJWT = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let secret = 'secret122';
    let decode = yield jwt.verify(token, secret);
    return decode;
});
exports.decryptJWT = decryptJWT;
// export let decryptJWT2 = async (token: string) => {
//     let jwtVerify = promisify(jwt.verify)
//     return await jwtVerify(token , 'secret122')
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvc2VydmljZXMvYXV0aGVudGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBbUM7QUFHNUIsSUFBSSxRQUFRLEdBQUcsVUFBUyxFQUFtQjtJQUM5QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUE7QUFGVSxRQUFBLFFBQVEsWUFFbEI7QUFFTSxJQUFJLFNBQVMsR0FBRyxVQUFTLElBQVMsRUFBRyxHQUFZLEVBQUcsR0FBYTtJQUNwRSxJQUFJLEtBQUssR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLElBQUksT0FBTyxHQUFHO1FBQ1YsTUFBTSxFQUFDLElBQUk7UUFDWCxRQUFRLEVBQUMsSUFBSTtLQUNoQixDQUFBO0lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFHLE9BQU8sQ0FBQyxDQUFBO0lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFHLElBQUksRUFBQyxLQUFLLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFBO0FBUlUsUUFBQSxTQUFTLGFBUW5CO0FBRU0sSUFBSSxVQUFVLEdBQUcsQ0FBTyxLQUFhLEVBQUUsRUFBRTtJQUM1QyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUE7SUFDeEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxNQUFNLENBQUMsQ0FBQTtJQUM3QyxPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDLENBQUEsQ0FBQTtBQUpVLFFBQUEsVUFBVSxjQUlwQjtBQUNELHNEQUFzRDtBQUN0RCw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELElBQUkifQ==