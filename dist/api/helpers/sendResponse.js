"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSimpleResponse = exports.sendResponse = void 0;
let sendResponse = (res, data, message) => {
    let responseObj = {
        data: data,
        message: message,
        succes: true,
        code: 200,
        class: "alert alert-primary"
    };
    res.status(200).json(responseObj);
};
exports.sendResponse = sendResponse;
let sendSimpleResponse = (res, data) => {
    let simpleResponseObj = {
        data: data,
        succes: true,
        code: 200,
    };
    res.status(200).json(simpleResponseObj);
};
exports.sendSimpleResponse = sendSimpleResponse;
let sendError = (res, message) => {
    let errorObj = {
        message: message || "Request Fail",
        succes: false,
        code: 400,
        class: "alert alert-danger"
    };
    res.status(400).json(errorObj);
};
exports.sendError = sendError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9oZWxwZXJzL3NlbmRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFUSxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQWEsRUFBRyxJQUFTLEVBQUcsT0FBZSxFQUFHLEVBQUU7SUFDeEUsSUFBSSxXQUFXLEdBQUc7UUFDZCxJQUFJLEVBQUcsSUFBSTtRQUNYLE9BQU8sRUFBRyxPQUFPO1FBQ2pCLE1BQU0sRUFBRyxJQUFJO1FBQ2IsSUFBSSxFQUFHLEdBQUc7UUFDVixLQUFLLEVBQUUscUJBQXFCO0tBQy9CLENBQUE7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUE7QUFUVyxRQUFBLFlBQVksZ0JBU3ZCO0FBRU8sSUFBSSxrQkFBa0IsR0FBRyxDQUFDLEdBQWEsRUFBRyxJQUFTLEVBQUcsRUFBRTtJQUM1RCxJQUFJLGlCQUFpQixHQUFHO1FBQ3BCLElBQUksRUFBRyxJQUFJO1FBQ1gsTUFBTSxFQUFHLElBQUk7UUFDYixJQUFJLEVBQUcsR0FBRztLQUNiLENBQUE7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQTtBQVBXLFFBQUEsa0JBQWtCLHNCQU83QjtBQUVNLElBQUksU0FBUyxHQUFHLENBQUMsR0FBYSxFQUFHLE9BQWUsRUFBRSxFQUFFO0lBQ3ZELElBQUksUUFBUSxHQUFHO1FBQ1gsT0FBTyxFQUFHLE9BQU8sSUFBSSxjQUFjO1FBQ25DLE1BQU0sRUFBRyxLQUFLO1FBQ2QsSUFBSSxFQUFHLEdBQUc7UUFDVixLQUFLLEVBQUcsb0JBQW9CO0tBQy9CLENBQUE7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUE7QUFSVSxRQUFBLFNBQVMsYUFRbkIifQ==