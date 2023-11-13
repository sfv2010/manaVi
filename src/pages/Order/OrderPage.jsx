import { useParams } from "react-router-dom";
import Button from "../../components/Button";

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

            <Button link="/">Déconnexion</Button>
        </>
    );
}

export default OrderPage;
