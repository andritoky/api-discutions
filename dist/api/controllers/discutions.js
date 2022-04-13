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
exports.post_verify_duscution = exports.get_my_discution = exports.get_all_discution = exports.add_message = exports.delete_discution = exports.add_discution = void 0;
const discutions_1 = require("../models/discutions");
let add_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let add = yield discutions_1.Discutions.create(data);
        console.log(add);
        add ? res.status(200).send('new discution open :' + add)
            : res.status(400).send('Error append discution');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.add_discution = add_discution;
let delete_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let add = yield discutions_1.Discutions.deleteOne({ _id: id });
        add ? res.status(200).send('Delete discution :' + id)
            : res.status(400).send('Error delete discution');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.delete_discution = delete_discution;
let add_message = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let update = yield discutions_1.Discutions.updateOne({ conversation_id: req.params.conversation_id }, { $push: { conversations: req.body } });
        console.log(update);
        update ? res.status(200).json({ MessageSend: "succes !" })
            : res.status(400).send('Error update message');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.add_message = add_message;
let get_all_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let liste = yield discutions_1.Discutions.find({});
        liste ? res.status(200).send(liste)
            : res.status(400).send('Error !');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.get_all_discution = get_all_discution;
let get_my_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get-dISCUTION :", req.params.id);
    try {
        let liste = yield discutions_1.Discutions.findOne({ conversation_id: req.params.id });
        let my_liste = liste.conversations;
        liste ? res.status(200).json({ data: my_liste })
            : res.status(400).json({ status: 'Error !' });
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.get_my_discution = get_my_discution;
let post_verify_duscution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let find_id_T_R = '' + req.body.id_emeteur + req.body.id_recepteur + '';
        let find_id_R_T = '' + req.body.id_recepteur + req.body.id_emeteur + '';
        let verify_id_duscution = yield discutions_1.Discutions.findOne({ conversation_id: find_id_T_R });
        if (verify_id_duscution) {
            res.status(200).json({ conversation_id: find_id_T_R });
            console.log("coversation_id_T_R :", find_id_T_R);
        }
        if (!verify_id_duscution) {
            nextVerification();
        }
        function nextVerification() {
            return __awaiter(this, void 0, void 0, function* () {
                let verify_next = yield discutions_1.Discutions.findOne({ conversation_id: find_id_R_T });
                if (verify_next) {
                    res.status(200).json({ conversation_id: find_id_R_T });
                    console.log("conversation_id_R_T :", find_id_R_T);
                }
                else {
                    let add = yield discutions_1.Discutions.create({ conversation_id: find_id_T_R });
                    add ? res.status(200).json({ conversation_id: add.conversation_id })
                        : res.status(400).json({ status: 'error' });
                    console.log("new conversation", add.conversation_id);
                }
            });
        }
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.post_verify_duscution = post_verify_duscution;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY3V0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvZGlzY3V0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxxREFBa0Q7QUFHM0MsSUFBSSxhQUFhLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDL0QsSUFBRztRQUNDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7UUFDbkIsSUFBSSxHQUFHLEdBQUcsTUFBTSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUUsR0FBRyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0tBQ3REO0lBQ0QsT0FBTSxDQUFNLEVBQUM7UUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBVlUsUUFBQSxhQUFhLGlCQVV2QjtBQUVNLElBQUksZ0JBQWdCLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDbEUsSUFBRztRQUNDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO1FBQ3RCLElBQUksR0FBRyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUMvQyxHQUFHLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FB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