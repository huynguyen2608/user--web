import { loginService } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        const result = await loginService(username, password);

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err.message }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }
}
