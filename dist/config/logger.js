"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
// import * as logger from 'pino'
// import * as dayjs from 'dayjs'
const winston_1 = require("winston");
let constomFormat = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf((info) => {
    return '' + info.timestamp + ' [' + info.level.toUpperCase().padEnd(7) + '] - ' + info.message + '';
}));
exports.log = (0, winston_1.createLogger)({
    format: constomFormat,
    level: 'debug',
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logger/app.log' })
    ]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxxQ0FBMEQ7QUFFMUQsSUFBSSxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzFFLE9BQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUUsSUFBSSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFJLE1BQU0sR0FBRSxJQUFJLENBQUMsT0FBTyxHQUFFLEVBQUUsQ0FBQTtBQUNsRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ08sUUFBQSxHQUFHLEdBQUcsSUFBQSxzQkFBWSxFQUFDO0lBQzFCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRTtRQUN4QixJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7S0FDckQ7Q0FDSixDQUFDLENBQUEifQ==