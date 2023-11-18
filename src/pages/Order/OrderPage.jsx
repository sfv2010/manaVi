import { useParams } from "react-router-dom";

import LinkButton from "../../components/LinkButton";

function OrderPage() {
    // const location = useLocation();
    // const { username } = location.state || {};
    const { username } = useParams();
    return (
        <>
            <h1>
                Bonjour{" "}
                {username &&
                    username.charAt(0).toUpperCase() + username.slice(1)}{" "}
            </h1>

            <LinkButton link="/" type={"button"} label={" Déconnexion"} />
        </>
    );
}

export default OrderPage;
