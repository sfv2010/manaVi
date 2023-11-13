import { Link, useLocation } from "react-router-dom";

function OrderPage() {
    const location = useLocation();
    const { username } = location.state || {};
    return (
        <>
            <h1>
                Bonjour{" "}
                {username &&
                    username.charAt(0).toUpperCase() + username.slice(1)}{" "}
            </h1>
            <button type="button">
                {" "}
                <Link to="/login">Déconnexion</Link>
            </button>
        </>
    );
}

export default OrderPage;
