import styled from "styled-components";
import Profile from "./Profile";
import PropTypes from "prop-types";

export default function NavbarRightSide({ username }) {
    return (
        <NavbarRightSideStyled className="right-side">
            {/* <div className="admin-button">Admin Button</div> */}
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
