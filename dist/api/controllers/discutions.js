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
exports.post_verify_duscution = exports.get_my_discution = exports.get_my_channel = exports.get_all_discution = exports.add_message = exports.delete_discution = exports.add_discution = void 0;
const sendResponse_1 = require("../helpers/sendResponse");
const discutions_1 = require("../models/discutions");
let add_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let add = yield discutions_1.Discutions.create(data);
        console.log(add);
        add ? (0, sendResponse_1.sendSimpleResponse)(res, 'new discution open :' + add)
            : (0, sendResponse_1.sendError)(res, 'Error append discution');
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
        add ? (0, sendResponse_1.sendSimpleResponse)(res, 'Delete discution :' + id)
            : (0, sendResponse_1.sendError)(res, 'Error delete discution');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.delete_discution = delete_discution;
let add_message = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let update = yield discutions_1.Discutions.updateOne({ conversation_id: req.params.conversation_id }, { last_message: req.body,
            $push: { conversations: req.body }
        });
        console.log(update);
        update ? (0, sendResponse_1.sendSimpleResponse)(res, "send succes !")
            : (0, sendResponse_1.sendError)(res, 'Error update message');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.add_message = add_message;
let get_all_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let liste = yield discutions_1.Discutions.find({});
        liste ? (0, sendResponse_1.sendResponse)(res, liste, "")
            : (0, sendResponse_1.sendError)(res, 'Error get all discution!');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.get_all_discution = get_all_discution;
let get_my_channel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let liste = yield discutions_1.Discutions.find({ "channel.ch_id": req.params.id });
        let my_channel = [];
        for (let discu of liste) {
            let d_channel = discu.channel.filter((channel) => channel.ch_id !== req.params.id);
            let last_message = discu.last_message;
            let conversation_id = discu.conversation_id;
            my_channel.push({
                conversation_id: conversation_id,
                last_message: last_message,
                user: d_channel[0]
            });
        }
        liste ? (0, sendResponse_1.sendResponse)(res, my_channel, "my channel")
            : (0, sendResponse_1.sendError)(res, 'Error get my channel');
    }
    catch (e) {
        console.log(e.message);
    }
});
exports.get_my_channel = get_my_channel;
let get_my_discution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get-dISCUTION :", req.params.id);
    try {
        let liste = yield discutions_1.Discutions.findOne({ conversation_id: req.params.id });
        let my_liste = liste.conversations;
        liste ? (0, sendResponse_1.sendResponse)(res, my_liste, "my liste")
            : (0, sendResponse_1.sendError)(res, 'Error get my discutio');
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
            (0, sendResponse_1.sendResponse)(res, find_id_T_R, "conversation_id");
            console.log("coversation_id_T_R :", find_id_T_R);
        }
        if (!verify_id_duscution) {
            nextVerification();
        }
        function nextVerification() {
            return __awaiter(this, void 0, void 0, function* () {
                let verify_next = yield discutions_1.Discutions.findOne({ conversation_id: find_id_R_T });
                if (verify_next) {
                    (0, sendResponse_1.sendResponse)(res, find_id_R_T, "conversation_id");
                    console.log("conversation_id_R_T :", find_id_R_T);
                }
                else {
                    let add = yield discutions_1.Discutions.create({
                        conversation_id: find_id_T_R,
                        channel: req.body.channel
                    });
                    add ? (0, sendResponse_1.sendResponse)(res, add.conversation_id, "create conversation_id")
                        : (0, sendResponse_1.sendError)(res, "error creaction conversation_id");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY3V0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvZGlzY3V0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwwREFBc0Y7QUFDdEYscURBQWtEO0FBRzNDLElBQUksYUFBYSxHQUFHLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQy9ELElBQUc7UUFDQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO1FBQ25CLElBQUksR0FBRyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLENBQUEsQ0FBQyxDQUFDLElBQUEsaUNBQWtCLEVBQUMsR0FBRyxFQUFFLHNCQUFzQixHQUFFLEdBQUcsQ0FBQztZQUN0RCxDQUFDLENBQUMsSUFBQSx3QkFBUyxFQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO0tBQ2hEO0lBQ0QsT0FBTSxDQUFNLEVBQUM7UUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBVlUsUUFBQSxhQUFhLGlCQVV2QjtBQUVNLElBQUksZ0JBQWdCLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDbEUsSUFBRztRQUNDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO1FBQ3RCLElBQUksR0FBRyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUMvQyxHQUFHLENBQUEsQ0FBQyxDQUFDLElBQUEsaUNBQWtCLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixHQUFFLEVBQUUsQ0FBQztZQUNuRCxDQUFDLENBQUMsSUFBQSx3QkFBUyxFQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO0tBQ2hEO0lBQ0QsT0FBTSxDQUFNLEVBQUM7UUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBVFUsUUFBQSxnQkFBZ0Isb0JBUzFCO0FBRU0sSUFBSSxXQUFXLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDN0QsSUFBRztRQUNDLElBQUksTUFBTSxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxTQUFTLENBQ25DLEVBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFDLEVBQzdDLEVBQUksWUFBWSxFQUFHLEdBQUcsQ0FBQyxJQUFJO1lBQ3ZCLEtBQUssRUFBRSxFQUFDLGFBQWEsRUFBRyxHQUFHLENBQUMsSUFBSSxFQUFDO1NBQ3BDLENBQ0osQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFBLENBQUMsQ0FBQyxJQUFBLGlDQUFrQixFQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7WUFDMUMsQ0FBQyxDQUFDLElBQUEsd0JBQVMsRUFBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtLQUNqRDtJQUNELE9BQU0sQ0FBTSxFQUFDO1FBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWRVLFFBQUEsV0FBVyxlQWNyQjtBQUVNLElBQUksaUJBQWlCLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDbkUsSUFBRztRQUNDLElBQUksS0FBSyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDckMsS0FBSyxDQUFBLENBQUMsQ0FBQyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFHLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLElBQUEsd0JBQVMsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtLQUNwRDtJQUNELE9BQU0sQ0FBTSxFQUFDO1FBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJVLFFBQUEsaUJBQWlCLHFCQVEzQjtBQUVNLElBQUksY0FBYyxHQUFHLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQ2hFLElBQUc7UUFDQyxJQUFJLEtBQUssR0FBRyxNQUFNLHVCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUNsRSxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsS0FBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUM7WUFDbkIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFXLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN0RixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFBO1lBQ3JDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUE7WUFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDWixlQUFlLEVBQUcsZUFBZTtnQkFDakMsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQTtTQUNMO1FBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFHLFVBQVUsRUFBRSxZQUFZLENBQUM7WUFDOUMsQ0FBQyxDQUFDLElBQUEsd0JBQVMsRUFBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtLQUNoRDtJQUNELE9BQU0sQ0FBTSxFQUFDO1FBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQW5CVSxRQUFBLGNBQWMsa0JBbUJ4QjtBQUVNLElBQUksZ0JBQWdCLEdBQUcsQ0FBTyxHQUFZLEVBQUcsR0FBYSxFQUFHLEVBQUU7SUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLElBQUc7UUFDQyxJQUFJLEtBQUssR0FBRyxNQUFNLHVCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUN2RSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFBO1FBQ2xDLEtBQUssQ0FBQSxDQUFDLENBQUMsSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxJQUFBLHdCQUFTLEVBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUE7S0FDakQ7SUFDRCxPQUFNLENBQU0sRUFBQztRQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFWVSxRQUFBLGdCQUFnQixvQkFVMUI7QUFFTSxJQUFJLHFCQUFxQixHQUFHLENBQU8sR0FBWSxFQUFHLEdBQWEsRUFBRyxFQUFFO0lBQ3ZFLElBQUc7UUFDQyxJQUFJLFdBQVcsR0FBRyxFQUFFLEdBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3RFLElBQUksV0FBVyxHQUFHLEVBQUUsR0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFFdEUsSUFBSSxtQkFBbUIsR0FBRyxNQUFNLHVCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFHLFdBQVcsRUFBQyxDQUFDLENBQUE7UUFDbkYsSUFBRyxtQkFBbUIsRUFBQztZQUNuQixJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFHLFdBQVcsRUFBRyxpQkFBaUIsQ0FBQyxDQUFBO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUcsV0FBVyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFHLENBQUMsbUJBQW1CLEVBQUM7WUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQTtTQUNyQjtRQUVELFNBQWUsZ0JBQWdCOztnQkFDM0IsSUFBSSxXQUFXLEdBQUcsTUFBTSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLGVBQWUsRUFBRyxXQUFXLEVBQUMsQ0FBQyxDQUFBO2dCQUMzRSxJQUFHLFdBQVcsRUFBQztvQkFDWCxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFHLFdBQVcsRUFBRyxpQkFBaUIsQ0FBQyxDQUFBO29CQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUNyRDtxQkFDRztvQkFDQSxJQUFJLEdBQUcsR0FBRyxNQUFNLHVCQUFVLENBQUMsTUFBTSxDQUFDO3dCQUM5QixlQUFlLEVBQUcsV0FBVzt3QkFDN0IsT0FBTyxFQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztxQkFDN0IsQ0FBQyxDQUFBO29CQUNGLEdBQUcsQ0FBQSxDQUFDLENBQUMsSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRyxHQUFHLENBQUMsZUFBZSxFQUFHLHdCQUF3QixDQUFDO3dCQUNwRSxDQUFDLENBQUMsSUFBQSx3QkFBUyxFQUFDLEdBQUcsRUFBRyxpQ0FBaUMsQ0FBQyxDQUFBO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtpQkFDdEQ7WUFDTCxDQUFDO1NBQUE7S0FDSjtJQUNELE9BQU0sQ0FBTSxFQUFDO1FBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWpDVSxRQUFBLHFCQUFxQix5QkFpQy9CIn0=