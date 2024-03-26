import styled from "styled-components";
import Profile from "./Profile";
import PropTypes from "prop-types";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const displayToast = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setIsModeAdmin(!isModeAdmin);
    };

    return (
        <NavbarRightSideStyled className="right-side">
            <ToggleButton
                isChecked={isModeAdmin}
                onToggle={displayToast}
                labelIfChecked="désactiver le mode admin"
                labelIfUnchecked="activer le mode Admin"
            />
            <Profile username={username} />
            <ToastAdmin />
        </NavbarRightSideStyled>
    );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;
NavbarRightSide.propTypes = {
    username: PropTypes.string,
};
