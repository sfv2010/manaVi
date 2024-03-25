import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";

export default function Admin() {
    const [isAdminMode, setIsAdminMode] = useState(false);

    const toggleAdminMode = () => {
        setIsAdminMode(!isAdminMode);
    };
    return (
        <AdminStyled className="admin-button">
            <input
                id="toggle"
                type="checkbox"
                checked={isAdminMode}
                onChange={toggleAdminMode}
            />
            <label htmlFor="toggle">
                <span className="">
                    {isAdminMode
                        ? "Adminモードです"
                        : "Adminモードにしますか？"}
                </span>
            </label>
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    input {
        display: none;
    }
    --switchHeight: 2rem;
    --switchWidth: 13rem;
    // 外側と丸の隙間
    --switchPadding: 0.2rem;

    // 自動で決定される
    --circleSize: calc(var(--switchHeight) - var(--switchPadding) * 2);
    label {
        display: inline-block;
        cursor: pointer;
        position: relative;
        width: var(--switchWidth);
        height: var(--switchHeight);
        border-radius: var(--switchHeight);

        background: ${theme.colors.primary};
        transition: 0.4s;
        &:after {
            cursor: pointer;
            content: "";
            position: absolute;
            left: var(--switchPadding);
            top: 0;
            bottom: 0;
            margin: auto;

            width: var(--circleSize);
            height: var(--circleSize);
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

            background: #fff;
            transition: 0.4s;
        }
        span {
            position: absolute;
            left: 40px; // Ajustez cette valeur pour positionner le texte
            top: 6px;
            color: #fff; // Couleur du texte
            font-size: small;
        }
    }
    input:checked {
        + label {
            background-color: #4bd865;

            &:after {
                left: calc(
                    var(--switchWidth) - var(--circleSize) -
                        var(--switchPadding)
                );
            }
        }
    }
`;
