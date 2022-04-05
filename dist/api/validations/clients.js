"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsShema = void 0;
const yup = require("yup");
exports.clientsShema = yup.object({
    nom: yup.string().required(),
    adresse: yup.string().required(),
    description: yup.string().required()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdmFsaWRhdGlvbnMvY2xpZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMEI7QUFFZixRQUFBLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLEdBQUcsRUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLE9BQU8sRUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2pDLFdBQVcsRUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ3hDLENBQUMsQ0FBQSJ9