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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.deleteAll = exports.parseAndSaveUsers = void 0;
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const prisma = new client_1.PrismaClient();
const parseAndSaveUsers = (path) => {
    return new Promise((resolve, reject) => {
        const users = [];
        fs_1.default.createReadStream(path)
            .pipe((0, csv_parser_1.default)())
            .on('data', data => users.push(data))
            .on('end', () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield prisma.usuario.createMany({
                    data: users
                });
                resolve("listo, usuarios en db");
            }
            catch (error) {
                reject(error);
            }
        }));
    });
};
exports.parseAndSaveUsers = parseAndSaveUsers;
const deleteAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.usuario.deleteMany();
});
exports.deleteAll = deleteAll;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.usuario.findMany();
});
exports.findAll = findAll;
