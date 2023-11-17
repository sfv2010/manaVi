import Logo from "../../components/Logo";
import burgerLogo from "../../assets/logoOrange.png";
import styled from "styled-components";
import burgerBG from "../../assets/burgerBG.jpg";
import Login from "./Login";

function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo textLeft="CRAZEE" textRight="BURGER" logoImg={burgerLogo} />
            <Login />;
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${burgerBG});
    background-size: cover; /* 画像を背景に合わせて拡大縮小 */
    background-position: center; /* 画像を中央に配置 */
    background-repeat: no-repeat; /* 画像の繰り返しを禁止 */
    height: 100vh;
`;
export default LoginPage;
