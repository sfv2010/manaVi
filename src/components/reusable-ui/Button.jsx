import PropTypes from "prop-types";
export default function Button({ type, className, label, Icon }) {
    return (
        <button type={type} className={className}>
            <span>{label}</span>
            {Icon && Icon}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    Icon: PropTypes.object,
};
