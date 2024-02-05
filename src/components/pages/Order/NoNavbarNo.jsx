import { useParams } from "react-router-dom";

import LinkButton from "../../reusable-ui/LinkButton";
import Button from "../../reusable-ui/Button";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";
import { refreshPage } from "../../../utils/window";

export default function Navbar1() {
    // const location = useLocation();
    // const { username } = location.state || {};
    const { username } = useParams();
    // console.log(username);
    return (
        <OrderStyled>
            <div className="navLeftContainer">
                {" "}
                <Button
                    className="linkButton"
                    type={"button"}
                    label={<Logo />}
                    onClick={refreshPage}
                />
                {/* <Logo onClick = {() => window.location.reload()} /> */}
            </div>

            <div className="navRightContainer">
                <div className="adminButton">activer le mode admin</div>
                <div className="navRight">
                    <div className="navRightUser">
                        <p className="NavUser">
                            Hey,{" "}
                            <b className="navSpan">
                                {" "}
                                {username &&
                                    username.charAt(0).toUpperCase() +
                                        username.slice(1)}{" "}
                            </b>
                        </p>

                        <LinkButton
                            className="linkButton linkButtonHover"
                            link="/"
                            type={"button"}
                            label={"Se déconnecter"}
                        />
                    </div>
                    <BsPersonCircle className="navIcon" />
                </div>
            </div>
        </OrderStyled>
    );
}

const OrderStyled = styled.nav`
    height: 10vh;

    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.greyBlue};
    border-radius: 15px 15px 0px 0px;
    background-color: ${theme.colors.white};
    .navLeftContainer {
        flex: 2;
    }
    .navRightContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }
    .navRight {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 22px;
        gap: 10px;
        width: 120px;
        height: 44px;
        margin-right: 50px;
    }
    .navRightUser {
        display: flex;
        justify-content: baseline;
        flex-direction: column;
        align-items: center;
    }
    .NavUser {
        font-size: 16px;
    }
    .navIcon {
        font-size: ${theme.fonts.P4};
    }
    .navSpan {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};
        line-height: 14px;
    }
    .linkButton {
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.XXS};
        text-decoration: none;
        display: inline-block;
        position: relative;
        border: none;
        background: none;
        cursor: pointer;
    }
    .linkButtonHover:hover {
        &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            border-bottom: 1px solid #747b91;
        }
    }
`;
