import { styled } from "styled-components"

export const ListItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid gray;
    >div{
        >p:first-of-type{
            font-size: 0.8rem;
        }
    }
    >.image{
        min-width: 60px;
        height: 60px;
        background-color: grey;
        border-radius: 0.2rem;
    }
`