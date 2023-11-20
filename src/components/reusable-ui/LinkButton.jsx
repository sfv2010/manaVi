import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";
export default function LinkButton({ link, type, label }) {
    return (
        <Link to={link}>
            <Button type={type} label={label} />
        </Link>
    );
}

LinkButton.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
};
