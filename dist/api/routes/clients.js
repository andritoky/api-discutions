"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client_routers = void 0;
const express = require("express");
const controllers = require("../controllers/clients");
const validationsMiddlewares_1 = require("../middlewares/validationsMiddlewares");
const clients_1 = require("../validations/clients");
exports.client_routers = express.Router();
exports.client_routers.get('/', controllers.liste);
exports.client_routers.post('/add', (0, validationsMiddlewares_1.validation)(clients_1.clientsShema), controllers.add);
exports.client_routers.get('/find/:id', controllers.findOne);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLHNEQUFxRDtBQUNyRCxrRkFBbUU7QUFDbkUsb0RBQXNEO0FBRTNDLFFBQUEsY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUU1QyxzQkFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzNDLHNCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxJQUFBLG1DQUFVLEVBQUMsc0JBQVksQ0FBQyxFQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN4RSxzQkFBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=