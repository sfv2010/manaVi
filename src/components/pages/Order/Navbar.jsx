import { useParams } from "react-router-dom";

import LinkButton from "../../reusable-ui/LinkButton";
import styled from "styled-components";
import { PiUserCircleFill } from "react-icons/pi";
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";

export default function Navbar() {
    // const location = useLocation();
    // const { username } = location.state || {};
    const { username } = useParams();
    return (
        <OrderStyled>
            <LinkButton
                className="linkButton"
                link="/"
                type={"button"}
                label={<Logo />}
            />
            <div className="navRight">
                {" "}
                <div className="navRightUser">
                    <h1 className="NavUser">
                        Hey,{" "}
                        <span className="navSpan">
                            {" "}
                            {username &&
                                username.charAt(0).toUpperCase() +
                                    username.slice(1)}{" "}
                        </span>
                    </h1>

                    <LinkButton
                        className="linkButton linkButtonHover"
                        link="/"
                        type={"button"}
                        label={"Se déconnecter"}
                    />
                </div>
                <PiUserCircleFill className="navIcon" />
            </div>
        </OrderStyled>
    );
}

const OrderStyled = styled.nav`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.greyBlue};
    font-family: "Open Sans";
    border-radius: 15px 15px 0px 0px;
    background-color: white;
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
