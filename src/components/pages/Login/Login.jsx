import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { FaChevronRight } from "react-icons/fa";
import Input from "./Input";
import { BsPersonCircle } from "react-icons/bs";

import Button from "../../reusable-ui/Button";

function Login() {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/order", { state: { username } });
        navigate(`order/${username}`);
    };
    const handleChange = (e) => setUsername(e.target.value);

    return (
        <LoginStyled>
            <h1 className="bonbon">Bienvenue chez nous!</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    value={username}
                    onChange={handleChange}
                    placeholder={"Entre votre prénom"}
                    type={"text"}
                    required={"required"}
                    Icon={<BsPersonCircle className="inputIcon" />}
                    className={"inputContainer"}
                />
                {/* <Input
                    value={password}
                    onChange={handleChangePassword}
                    placeholder={"Entre votre password"}
                    type={"password"}
                    required={""}
                    Icon={<RiLockPasswordFill className="inputIcon" />}
                    className={"inputContainer"}
                /> */}

                <Button
                    type={"submit"}
                    className="button"
                    Icon={<FaChevronRight className="chevron" />}
                    label={"Accédez à mon espace"}
                />
                <br />
                <Button
                    type={"submit"}
                    className="button"
                    Icon={<FaChevronRight className="chevron button2" />}
                    label={"Accédez"}
                />
            </form>
        </LoginStyled>
    );
}

const LoginStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h1,
    h2 {
        font-family: Amatic SC;
        color: ${theme.colors.white};
        font-weight: bold;
    }

    h1 {
        font-size: ${theme.fonts.size.P5};
    }
    h2 {
        font-size: ${theme.fonts.size.P4};
        margin-bottom: 10px;
    }
    hr {
        width: 400px;
        border: 1px solid #f56a2c;
        margin: 30px 0;
    }
    input,
    .button {
        width: 400px;
        padding: 18px 24px;
        border-radius: ${theme.borderRadius.round};
        align-items: center;
        border: none;
        display: block;
    }
    input {
        display: flex;
        width: 325px;
        margin: 15px 0;
        padding-left: 50px;
        font-weight: ${theme.fonts.weights.regular};
        font-size: 15px;
        color: ${theme.colors.dark};
        border: none;
        &::placeholder {
            color: #d3d3d3;
        }
    }
    .inputContainer {
        position: relative;
        width: 400px;
    }
    .inputIcon {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 18px;
        color: #d3d3d3;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.white};
        background-color: #ff9f1b;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.colors.primary};
            transition: all 200ms ease-out;
        }
        :active {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
        }

        &.is-disabled {
            opacity: 50%;
            cursor: not-allowed;
            z-index: 2;
        }

        &.with-focus {
            border: 1px solid white;
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
            :hover {
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary};
                border: 1px solid ${theme.colors.white};
            }
            :active {
                background-color: ${theme.colors.white};
                color: ${theme.colors.primary};
            }
        }
    }
    .chevron {
        margin-left: 10px;
        font-size: 15px;
    }
    .button2 {
        color: red;
    }
`;

export default Login;
