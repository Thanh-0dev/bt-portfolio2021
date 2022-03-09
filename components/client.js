import {PrismaClient} from "@prisma/client";

/* Launch the only prisma client instance */
const prisma = new PrismaClient();

export default prisma;
