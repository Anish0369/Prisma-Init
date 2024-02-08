"use strict";
// console.log('Hello, world!');
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// prisma.user1.create({
// })
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user1.create({
                data: {
                    username,
                    password,
                    firstName,
                    lastName
                }
            });
            console.log(res);
        }
        catch (error) {
            console.error("Error inserting user:", error);
        }
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user1.update({
                where: {
                    username
                },
                data: {
                    firstName,
                    lastName
                }
            });
            console.log(res);
        }
        catch (error) {
            console.error("Error updating user:", error);
        }
    });
}
updateUser('user1', { firstName: 'Anish', lastName: 'Doe' });
