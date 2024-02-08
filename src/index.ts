// console.log('Hello, world!');

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// prisma.user1.create({

// })


async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    try {
        const res = await prisma.user1.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error inserting user:", error);
    }
}

// insertUser('user1', 'password1', 'John', 'Doe')



interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {

    try {
        const res = await prisma.user1.update({
            where: {
                username
            },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error updating user:", error);
    }
  
}

//  updateUser('user1', { firstName: 'Anish', lastName: 'Doe' });



