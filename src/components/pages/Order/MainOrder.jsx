import styled from "styled-components";
import { theme } from "../../../theme";

export default function MainOrder() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    return (
        <MainOrderStyled>
            MainOrder
            <div className="mainContainer">
                {numbers.map((number) => (
                    <div key={number}>{number}</div>
                ))}
            </div>
        </MainOrderStyled>
    );
}

const MainOrderStyled = styled.main`
    padding: 20px 10px;
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
    .mainContainer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-template-rows: repeat(2, 330px);
        grid-column-gap: 50px;
        grid-row-gap: 20px;
    }
`;
