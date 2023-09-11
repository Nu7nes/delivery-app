import React from "react";
import { styled } from "styled-components";
import { GrFormClose } from 'react-icons/gr'
import Button from "./Button.styled";
import { CloseButton } from "./CloseButton.styled";

const Component = styled.div`
    background-color: #F4921D;
    color: #ffffff;
    position: fixed;
    top: 0 ;
    left: 0;
    width: 100vw !important;
    height: 100vh;
    display: grid;
    place-content: center;
    width: 90%;
    padding: 2em;
    text-decoration: none;
    z-index: 100;
    box-sizing: border-box;
    >form{
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
    >div{
        display: grid;
        gap: 0.6rem;
    }
`;


function Modal({ children, onConcludeModal, onCloseModal }) {
    return (
        <Component>
            {children ? children :
                <div>
                    <h2>Deseja realmente sair?</h2>
                    <Button onClick={onConcludeModal}>Confirmar</Button>
                    <Button onClick={onCloseModal}>Cancelar</Button>
                </div>}

            <CloseButton onClick={onCloseModal}>{<GrFormClose />}</CloseButton>
        </Component>
    )
}

export default Modal;