import { styled } from 'styled-components'

export const StyledIconLinks = styled.div`
    height: 60px;

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    >a:nth-child(2) {
        margin-right: 2em;
    }

    >a:nth-child(3) {
        margin-left: 2em;
    }

    >a>svg {
        font-size: 1.5em;
        color: rgb(164, 164, 164);
    }

    >a>div {
        width: 28px;
        height: 50px;
        background-color: transparent;
        position: absolute;
        top: 0px;
        cursor: pointer;
    }

    .show {
    opacity: 1 !important;
    height: 70vh !important;
    }

    .activeContrastIcon {
        transform: translateY(-15%);
        transition: 500ms;
        z-index: -1;
    }

    .activeContrastIcon>svg {
        color: var(--contrastColor) !important;
        position: relative;
    }

    .activeContrastIcon::after {
        content: '';
        position: absolute;
        top: 26px;
        transform: translateX(-16px);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--contrastColor);
        transition: all 1s;
    }

     
`