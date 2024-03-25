import styled from "styled-components";
import Profile from "./Profile";
import PropTypes from "prop-types";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
    return (
        <NavbarRightSideStyled className="right-side">
            <ToggleButton
                labelIfChecked="désactiver le mode admin"
                labelIfUnchecked="activer le mode Admin"
            />
            <Profile username={username} />
        </NavbarRightSideStyled>
    );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    /* .admin-button {
    background: lightblue;
  } */

    .profile {
        background: yellow;
    }
`;
NavbarRightSide.propTypes = {
    username: PropTypes.string,
};
