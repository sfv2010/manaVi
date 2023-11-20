import styled from "styled-components";
import MainOrder from "./MainOrder";
import Navbar from "./Navbar";

function OrderPage() {
    return (
        <OrderPageStyled>
            <div className="container">
                {" "}
                <Navbar />
                <MainOrder />
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background-color: orange;
    display: flex;
    flex-direction: column;

    .container {
        max-width: 1400px;
        height: 97vh;
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
`;

export default OrderPage;
