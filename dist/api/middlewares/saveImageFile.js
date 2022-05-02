"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImageFile = void 0;
const fs = require("fs");
function saveImageFile(myBase64) {
    let image_name = "profile" + new Date().getTime().toString() + ".jpeg";
    let path = "public/uploads/" + image_name;
    let base64Image = myBase64.split(';base64,').pop();
    fs.writeFile(path, base64Image, { encoding: 'base64' }, function (err) {
        console.log('Image file created');
    });
    return image_name;
}
exports.saveImageFile = saveImageFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUltYWdlRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvc2F2ZUltYWdlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBdUI7QUFFdkIsU0FBZ0IsYUFBYSxDQUFFLFFBQWdCO0lBQzNDLElBQUksVUFBVSxHQUFHLFNBQVMsR0FBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFDLE9BQU8sQ0FBQTtJQUNuRSxJQUFJLElBQUksR0FBRyxpQkFBaUIsR0FBQyxVQUFVLENBQUE7SUFDdkMsSUFBSSxXQUFXLEdBQVEsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4RCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLEVBQUUsVUFBUyxHQUFHO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sVUFBVSxDQUFBO0FBQ3JCLENBQUM7QUFSRCxzQ0FRQyJ9