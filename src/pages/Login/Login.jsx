import { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${username}`);
        setUsername("");
    };
    return (
        <main className="loginContainer">
            <h1 className="loginH1">Bienvenue chez nous!</h1>
            <h2 className="loginH2">Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Entre votre prénom..."
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Accédez à votre espace</button>
            </form>
        </main>
    );
}

export default Login;
