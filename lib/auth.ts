// lib/auth.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "../data/user";

const SECRET_KEY = "your_secret_key";

type User = {
    username: string;
    password: string;
}

export async function loginService(username: string, password: string) {
    const user = users.find((u: User) => u.username === username);
    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
    });

    return { token };
}
