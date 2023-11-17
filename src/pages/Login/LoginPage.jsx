import Logo from "../../components/Logo";
import styled from "styled-components";
import burgerBG from "../../assets/burgerBG.jpg";
import Login from "./Login";

function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo />
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
`;
export default LoginPage;
