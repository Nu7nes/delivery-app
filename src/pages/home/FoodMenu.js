import React from "react";
import { styled } from "styled-components";

import ListItem from "./ListItem";
import data from '../../data/menu.json';

const Ul = styled.ul`
    max-width: 100vw;
`

function FoodMenu(props) {
    
    return (
        <Ul>
            {data.menu.map((item, index) => (
                <ListItem key={index} item={item}/>
            ))}
        </Ul>
    )
}

export default FoodMenu;