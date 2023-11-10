import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(username);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${username}`);
        setUsername("");
        setPassword("");
        // const res = {
        //     username: e.target.username.value,
        //     password: e.target.password.value,
        // };
        // alert(`Bonjour ${res.username}`);
        //下のようにすることもできるが、その場合Reactの状態管理に反しており、通常はsetUsername("") などの状態更新関数を使用する方が良い実践。通常はsubmitした後は他のページに遷移されるので問題ない。
        // e.target.username.value = "";
        // e.target.password.value = "";
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className="loginH1">Bienvenue chez nous!</h1>
            <h2 className="loginH2">Connectez-vous</h2>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Entrez votre prénom..."
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
    );
}
