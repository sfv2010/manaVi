import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";
export default function LinkButton({ link, type, label, className }) {
    return (
        <Link to={link}>
            <Button className={className} type={type} label={label} />
        </Link>
    );
}

LinkButton.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};
