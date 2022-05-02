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
const sendResponse_1 = require("../helpers/sendResponse");
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
            (0, sendResponse_1.sendError)(res, 'password incorrect');
        }
    }
    else {
        return (0, sendResponse_1.sendError)(res, 'no user with this email');
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
                (0, sendResponse_1.sendError)(res, 'Request Cookies Fail');
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
            (0, sendResponse_1.sendError)(res, 'Verify token FAIL');
        }
    }
    catch (e) {
        console.log('ereur', e.message);
    }
});
exports.verify_user_token = verify_user_token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvYXV0aGVudGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBb0M7QUFDcEMsbUVBQThFO0FBRTlFLDBEQUFvRDtBQUc3QyxJQUFJLEtBQUssR0FBRyxDQUFPLEdBQVksRUFBRyxHQUFhLEVBQUcsRUFBRTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLElBQUksR0FBRyxNQUFNLFlBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsS0FBSyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztLQUN2QixDQUFDLENBQUE7SUFDRixJQUFHLElBQUksRUFBQztRQUNKLHVFQUF1RTtRQUN2RSxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDbkMsSUFBQSw0QkFBUyxFQUFDLElBQUksRUFBRyxHQUFHLEVBQUcsR0FBRyxDQUFDLENBQUE7U0FDOUI7YUFDRztZQUNBLElBQUEsd0JBQVMsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUUsQ0FBQTtTQUN4QztLQUNKO1NBQUk7UUFDRCxPQUFPLElBQUEsd0JBQVMsRUFBQyxHQUFHLEVBQUUseUJBQXlCLENBQUUsQ0FBQTtLQUNwRDtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBaEJVLFFBQUEsS0FBSyxTQWdCZjtBQUVNLElBQUksTUFBTSxHQUFJLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRSxFQUFFO0lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSSxPQUFPLEdBQUc7UUFDVix1Q0FBdUM7UUFDdkMsTUFBTSxFQUFDLElBQUk7UUFDWCxRQUFRLEVBQUMsSUFBSTtLQUNoQixDQUFB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