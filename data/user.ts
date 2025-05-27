import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash("123456", 10);

export const users = [
    {
        id: 1,
        username: "admin",
        password: hashedPassword, // hashed password
    },
];