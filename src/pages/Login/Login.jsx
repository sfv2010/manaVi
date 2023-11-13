import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/order", { state: { username } });
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

                <button type="submit">Accédez à votre espace</button>
            </form>
        </main>
    );
}

export default Login;
