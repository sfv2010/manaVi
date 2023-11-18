import LinkButton from "../../components/LinkButton";

function ErrorPage() {
    return (
        <LinkButton
            link={"/"}
            type={"button"}
            label={" Re-tourner vers la page d accueil"}></LinkButton>
    );
}

export default ErrorPage;
