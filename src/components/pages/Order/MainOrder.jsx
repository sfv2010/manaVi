import styled from "styled-components";
import { theme } from "../../../theme";

export default function MainOrder() {
    return <MainOrderStyled>MainOrder</MainOrderStyled>;
}

const MainOrderStyled = styled.main`
    padding: 20px 10px;
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
`;
