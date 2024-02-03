import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../theme";
import { fakeMenu2 } from "../../fakeData/fakeMenu";
import { useState } from "react";

export default function Card() {
    const [menu, setMenu] = useState(fakeMenu2);
    return (
        <>
            {menu.map((produit) => (
                <CardStyled key={produit.id}>
                    <img
                        className="img"
                        src={produit.imageSource}
                        alt={produit.title}
                    />
                    <div className="descriptionContainer">
                        <h1 className="title">{produit.title}</h1>
                        <div className="description">
                            {" "}
                            <p className="price">{produit.price}</p>
                            <button className="menuButton">Ajouter</button>
                        </div>
                    </div>
                </CardStyled>
            ))}
        </>
    );
}
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 240px;
    height: 330px;
    padding-top: 35px;
    border-radius: 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    .img {
        width: 200px;
        height: 145px;
        object-fit: contain;
    }
    .descriptionContainer {
        width: 200px;
        height: 105px;
        padding: 0 10px;
        margin-top: 20px;
    }
    .title {
        margin-bottom: 10px;
        font-family: Amatic SC, cursive;
        font-weight: bold;
    }
    .description {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .price {
        color: ${theme.colors.primary_burger};
    }
    .menuButton {
        padding: 10px 20px;
        color: ${theme.colors.white};
        font-weight: ${theme.weights.bold};
        border: none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary_burger};
    }
`;
Card.propTypes = { menuItems: PropTypes.array };
