import burgerLogo from "../../assets/logoOrange.png";
import styled from "styled-components";
import PropTypes from "prop-types";

import { theme } from "../../theme";

export default function Logo({ className }) {
    return (
        <LogoStyled className={className}>
            <h1>CRAZEE</h1>
            <img src={burgerLogo}></img>
            <h1>BURGER</h1>
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
    transform: scale(3);

    img {
        margin: 0 10px;
        width: 60px;
        object-fit: contain;
        object-position: center;
    }
    h1 {
        font-family: Amatic SC, cursive;
        text-transform: uppercase;
        font-size: ${theme.fonts.P4};
        line-height: 1em;
        font-weight: ${theme.weights.bold};
        letter-spacing: 1.5px;
        color: ${theme.colors.primary};
    }
`;

Logo.propTypes = {
    className: PropTypes.string,
};
