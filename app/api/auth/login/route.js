// app/api/auth/login/route.js
export async function POST(req) {
    const { username, password } = await req.json();

    // Dummy authentication logic (replace with real authentication)
    if (username === 'admin' && password === 'admin123') {
        return new Response(JSON.stringify({ role: 'admin' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else if (username === 'user' && password === 'user123') {
        return new Response(JSON.stringify({ role: 'user' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
