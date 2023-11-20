import PropTypes from "prop-types";
export default function Button({ type, className, label, Icon, onClick }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            <span>{label}</span>
            {Icon && Icon}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    type: PropTypes.string,
    className: PropTypes.string,
    Icon: PropTypes.object,
    onClick: PropTypes.func,
};
