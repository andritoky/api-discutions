"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = exports.loginJWT = void 0;
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
let { promisify } = require('util');
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
    res.json({ status: 'ok', user: token });
};
exports.sendToken = sendToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9zZXJ2aWNlcy9hdXRoZW50aWZpY2F0aW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM5QixJQUFJLEVBQUMsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRzFCLElBQUksUUFBUSxHQUFHLFVBQVMsRUFBbUI7SUFDOUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBO0FBRlUsUUFBQSxRQUFRLFlBRWxCO0FBQ00sSUFBSSxTQUFTLEdBQUcsVUFBUyxJQUFTLEVBQUcsR0FBWSxFQUFHLEdBQWE7SUFDcEUsSUFBSSxLQUFLLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixJQUFJLE9BQU8sR0FBRztRQUNWLE1BQU0sRUFBQyxJQUFJO1FBQ1gsUUFBUSxFQUFDLElBQUk7S0FDaEIsQ0FBQTtJQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRyxPQUFPLENBQUMsQ0FBQTtJQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUE7QUFSVSxRQUFBLFNBQVMsYUFRbkIifQ==