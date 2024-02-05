import styled from "styled-components";
import Menu from "./Main/Menu";
import Navbar from "./Navbar/Navbar";
import { theme } from "../../../theme";
import { useParams } from "react-router-dom";

function OrderPage() {
    // state
    const { username } = useParams();
    // comportements

    //affichage
    return (
        <OrderPageStyled>
            <div className="container">
                {" "}
                <Navbar username={username} />
                <Menu />
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;

export default OrderPage;
