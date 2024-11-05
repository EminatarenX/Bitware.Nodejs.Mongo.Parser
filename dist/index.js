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
const find_create_users_1 = require("./src/find-create-users");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, find_create_users_1.deleteAll)();
        const result = yield (0, find_create_users_1.parseAndSaveUsers)("./usuarios.csv");
        const users = yield (0, find_create_users_1.findAll)();
        const viewFormated = true;
        if (!viewFormated) {
            console.log({ result: result, user: JSON.stringify(users) });
        }
        else {
            console.log({ result: result, user: users });
        }
    });
}
main();
