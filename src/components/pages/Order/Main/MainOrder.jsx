import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function MainOrder() {
    const [menu, setMenu] = useState(fakeMenu2);
    return (
        <MainOrderStyled>
            <div className="basket">Basket</div>
            <div className="mainContainer">
                <Card />
            </div>
        </MainOrderStyled>
    );
}
const MainOrderStyled = styled.main`
    padding: 50px 30px;
    display: grid;
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;

    .mainContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(auto-fill, minmax(330px, 1fr));
        /* padding: 50px 50px 150px; */
        /* overflow-y: scroll; */
        row-gap: 50px;
        justify-content: space-evenly;
        justify-items: center;
        align-items: center;
    }
`;
