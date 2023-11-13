import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <button type="button">
            <Link to="/login">Re-tourner vers la page d'accueil</Link>
        </button>
    );
}

export default ErrorPage;
