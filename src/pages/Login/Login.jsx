import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { FaChevronRight } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";

function Login() {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/order", { state: { username } });
        navigate(`order/${username}`);
    };
    return (
        <LoginStyled>
            <h1 className="bonbon">Bienvenue chez nous!</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Entre votre prénom"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <PiUserCircleFill className="inputIcon" />
                </div>

                <button type="submit">
                    Accédez à mon espace <FaChevronRight className="chevron" />
                </button>
            </form>
        </LoginStyled>
    );
}

const LoginStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,
    h2 {
        font-family: Amatic SC;
        color: ${theme.colors.white};
        font-weight: ${theme.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.P5};
    }
    h2 {
        font-size: ${theme.fonts.P4};
        margin-bottom: 10px;
    }
    hr {
        width: 400px;
        border: 1px solid #f56a2c;
        margin: 30px 0;
    }
    input,
    button {
        width: 400px;
        padding: 18px 24px;
        border-radius: 5px;
        align-items: center;
        border: none;
        display: block;
    }
    input {
        margin: 15px 0;
        padding-left: 50px;
        font-weight: ${theme.weights.regular};
        color: ${theme.colors.dark};
    }
    .inputContainer {
        position: relative;
        width: 400px;
    }
    .inputIcon {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 15px;
    }
    button {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
        cursor: pointer;
    }
    button:hover {
        color: ${theme.colors.primary_burger};
        background-color: ${theme.colors.white};
    }
    .chevron {
        text-align: center;
        margin-left: 10px;
        padding-top: 3px;
    }
`;

export default Login;
