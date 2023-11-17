import styled from "styled-components";
import PropTypes from "prop-types";

import { theme } from "../theme";

export default function Logo({ textLeft, textRight, logoImg }) {
    return (
        <LogoStyled className="logoContainer">
            <span>{textLeft}</span>
            <img src={logoImg}></img>
            <span>{textRight}</span>
        </LogoStyled>
    );
}

Logo.propTypes = {
    textLeft: PropTypes.string,
    textRight: PropTypes.string,
    logoImg: PropTypes.string,
};

const LogoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .logoContainer {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    img {
        margin: 0 10px;
        max-height: 110px;
    }
    span {
        font-family: Amatic SC;
        font-size: 110px;
        color: ${theme.colors.primary_burger};
    }
`;
