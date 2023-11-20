import styled from "styled-components";
import MainOrder from "./MainOrder";
import Navbar from "./Navbar";

function OrderPage() {
    return (
        <OrderPageStyled>
            <Navbar />
            <MainOrder />
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    height: 98vh;
    margin: 20px auto;
`;

export default OrderPage;
