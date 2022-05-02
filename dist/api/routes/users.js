"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_routers = void 0;
const express = require("express");
const controllers = require("../controllers/users");
const validationsMiddlewares_1 = require("../middlewares/validationsMiddlewares");
const users_1 = require("../validations/users");
exports.users_routers = express.Router();
exports.users_routers.get('/', controllers.liste);
exports.users_routers.get('/liste-users/:user_id', controllers.liste_users);
exports.users_routers.post('/add', (0, validationsMiddlewares_1.validation)(users_1.usersShema), controllers.add);
exports.users_routers.get('/delete/:id', controllers.deleteOne);
exports.users_routers.get('/find/:id', controllers.findOne);
exports.users_routers.get('/verify/:id', controllers.verifyUser);
exports.users_routers.get('/search/:data', controllers.searchUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy91c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsb0RBQW1EO0FBQ25ELGtGQUFtRTtBQUNuRSxnREFBa0Q7QUFFdkMsUUFBQSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRTNDLHFCQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDMUMscUJBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3BFLHFCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxJQUFBLG1DQUFVLEVBQUMsa0JBQVUsQ0FBQyxFQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN0RSxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3hELHFCQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDcEQscUJBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUN6RCxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBIn0=