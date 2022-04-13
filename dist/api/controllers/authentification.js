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
exports.verify_user_token = exports.verify_cookie = exports.logout = exports.login = void 0;
const users_1 = require("../models/users");
const authentification_1 = require("../services/authentification");
let login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let user = yield users_1.User.findOne({
        email: req.body.email
    });
    if (user) {
        // let compare = await bcrypt.compare(req.body.password, user.password)
        if (req.body.password === user.password) {
            (0, authentification_1.sendToken)(user, req, res);
        }
        else {
            res.json({ status: 'error', user: false, message: 'password incorrect' });
        }
    }
    else {
        return res.json({ status: 'error', user: false, message: 'no user with this email' });
    }
});
exports.login = login;
let logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('logOut!');
    let options = {
        //expires:new Date(Date.now() + 10000),
        secure: true,
        httpOnly: true
    };
    res.cookie("jwt", 'expiredtoken', options);
    res.json({ status: 'destroy token ok', logout: true });
});
exports.logout = logout;
let verify_cookie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    console.log('req.cookies :', req.cookies);
    try {
        if (req.cookies.jwt) {
            token = req.cookies.jwt;
            let decode = yield (0, authentification_1.decryptJWT)(token);
            console.log(decode);
            let decodeID = decode.id;
            let user = yield users_1.User.findById(decodeID);
            if (user) {
                res.json({
                    status: "autorisé",
                    verifyCookie: true,
                    data: token
                });
                console.log(user);
            }
            else {
                res.json({ status: 'error' });
            }
            console.log('verifyCookie decode', decode);
        }
        if (!req.cookies.jwt || req.cookies.jwt === 'expiredtoken') {
            res.status(401).json({
                status: "pas autorisé",
                verifyCookie: false,
                message: "vous n'est pas authentifier"
            });
            console.log('verifyCookie : pas autorisé');
        }
    }
    catch (e) {
        console.log('erreur verify_cookie:', e.message);
    }
});
exports.verify_cookie = verify_cookie;
let verify_user_token = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_token = req.body.token;
        let decode = yield (0, authentification_1.decryptJWT)(user_token);
        let decodeID = decode.id;
        let user = yield users_1.User.findById(decodeID);
        if (user) {
            res.json({ data: user });
        }
        else {
            res.json({ status: 'error' });
        }
    }
    catch (e) {
        console.log('ereur', e.message);
    }
});
exports.verify_user_token = verify_user_token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvYXV0aGVudGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBb0M7QUFDcEMsbUVBQThFO0FBSXZFLElBQUksS0FBSyxHQUFHLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLE1BQU0sWUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQixLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO0tBQ3ZCLENBQUMsQ0FBQTtJQUNGLElBQUcsSUFBSSxFQUFDO1FBQ0osdUVBQXVFO1FBQ3ZFLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNuQyxJQUFBLDRCQUFTLEVBQUMsSUFBSSxFQUFHLEdBQUcsRUFBRyxHQUFHLENBQUMsQ0FBQTtTQUM5QjthQUNHO1lBQ0EsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUcsSUFBSSxFQUFHLEtBQUssRUFBRyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxDQUFBO1NBQzNFO0tBRUo7U0FBSTtRQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUcsSUFBSSxFQUFDLEtBQUssRUFBRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsQ0FBQyxDQUFBO0tBQ3JGO0FBRUwsQ0FBQyxDQUFBLENBQUE7QUFsQlUsUUFBQSxLQUFLLFNBa0JmO0FBRU0sSUFBSSxNQUFNLEdBQUksQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFFLEVBQUU7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFT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