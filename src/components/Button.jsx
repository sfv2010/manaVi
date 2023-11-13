import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Button({ link, children }) {
    return (
        <Link to={link}>
            <button type="button">{children}</button>{" "}
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.string,
    link: PropTypes.string,
};
