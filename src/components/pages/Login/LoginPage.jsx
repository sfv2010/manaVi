import Logo from "../../reusable-ui/Logo";
import Login from "./Login";
import styled from "styled-components";
import burgerBG from "../../../assets/burgerBG.jpg";

function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo className={"loginLogo"} />
            <Login />;
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
        background-image: url(${burgerBG});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        filter: brightness(0.5);
        /* background-blend-mode: darken;
        beforeの前にbackground-image: url(${burgerBG})ーを出すとダークモードが効かない */
    }
    .loginLogo {
        transform: scale(2.5);
    }
`;
export default LoginPage;
