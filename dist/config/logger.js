"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const logger = require("pino");
const dayjs = require("dayjs");
exports.log = logger.pino({
    base: {
        pid: false
    },
    timestamp: () => ',"time":"' + dayjs().format() + '"'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQThCO0FBQzlCLCtCQUE4QjtBQUVuQixRQUFBLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pCLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBQyxLQUFLO0tBQ1o7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFFLEdBQUc7Q0FDdEQsQ0FBQyxDQUFBIn0=