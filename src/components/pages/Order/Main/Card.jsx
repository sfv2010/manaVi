import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";

export default function Card({ title, imageSource, price }) {
    return (
        <>
            <CardStyled>
                <img className="img" src={imageSource} alt={title} />
                <div className="descriptionContainer">
                    <h1 className="title">{title}</h1>
                    <div className="description">
                        {" "}
                        <p className="price">{formatPrice(price)}</p>
                        <div className="rightDesc">
                            <Button className="menuButton" label={"Ajouter"} />
                        </div>
                    </div>
                </div>
            </CardStyled>
        </>
    );
}
const CardStyled = styled.div`
    display: grid;
    grid-template-rows: 65% 1fr;
    width: 240px;
    height: 330px;
    border-radius: 15px;
    box-shadow: -8px 8px 20px 0px rgba(0 0 0/ 20%);
    box-sizing: border-box;
    padding: 50px 20px 10px;
    .img {
        width: 200px;
        height: 145px;
        object-fit: contain;
    }
    .descriptionContainer {
        display: grid;
        grid-template-rows: 30% 70%;
        padding: 0 5px;
    }
    .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
    }
    .description {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
    }
    .rightDesc {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .menuButton {
        padding: 10px 20px;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.XS};
        border: none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary};
    }
`;
Card.propTypes = {
    title: PropTypes.string,
    imageSource: PropTypes.string,
    price: PropTypes.number,
};
