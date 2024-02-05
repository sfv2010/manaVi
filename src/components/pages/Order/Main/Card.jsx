import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Card({ id, title, imageSource, price }) {
    return (
        <>
            <CardStyled key={id}>
                <img className="img" src={imageSource} alt={title} />
                <div className="descriptionContainer">
                    <h1 className="title">{title}</h1>
                    <div className="description">
                        {" "}
                        <p className="price">{price}</p>
                        <button className="menuButton">Ajouter</button>
                    </div>
                </div>
            </CardStyled>
        </>
    );
}
const CardStyled = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 240px;
    height: 330px;

    border-radius: 15px;
    box-shadow: -8px 8px 20px 0px rgba(0 0 0/ 20%);
    .img {
        width: 200px;
        height: 145px;
        object-fit: contain;
    }
    .descriptionContainer {
        width: 200px;
        height: 105px;
        padding: 10px;
        box-sizing: border-box;
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
        color: ${theme.colors.primary};
    }
    .menuButton {
        padding: 10px 20px;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
        border: none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary};
    }
`;
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imageSource: PropTypes.string,
    price: PropTypes.string,
};
