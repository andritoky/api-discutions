"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHeaders = void 0;
const logger_1 = require("../../config/logger");
const dotenv = require("dotenv");
dotenv.config();
let verifyHeaders = (req, res, next) => {
    try {
        if (req.headers.apikey === process.env.API_KEY) {
            logger_1.log.info("apiKey :" + req.headers.apikey);
            next();
        }
        else {
            res.status(400).send("invalid key! you are not authorized ");
            logger_1.log.error("error apikey :" + req.headers.apikey);
        }
    }
    catch (e) {
        logger_1.log.error(e.message);
    }
};
exports.verifyHeaders = verifyHeaders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5SGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvaGVscGVycy92ZXJpZnlIZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdEQUF3QztBQUN4QyxpQ0FBaUM7QUFBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFMUMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxHQUFZLEVBQUcsR0FBYSxFQUFHLElBQW1CLEVBQUUsRUFBRTtJQUM5RSxJQUFHO1FBQ0MsSUFBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQztZQUMxQyxZQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBQzFDLElBQUksRUFBRSxDQUFBO1NBQ1Q7YUFDRztZQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUE7WUFDNUQsWUFBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0tBQ0o7SUFDRCxPQUFNLENBQU0sRUFBQztRQUNULFlBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQyxDQUFBO0FBZFUsUUFBQSxhQUFhLGlCQWN2QiJ9