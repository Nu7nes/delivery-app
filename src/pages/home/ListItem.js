import React, { useState } from "react"

import { ListItemStyled } from "./Home.styled";
import OptionsModal from "../../components/OptionsModal";

function ListItem({ item }) {

    const [options, setOptions] = useState(false)
    function onCloseOptions(e) {
        if(e){
            if(!e.currentTarget) return
            const target = e.currentTarget.id
            if (options) {
                if (target === 'close') setOptions(!options)
            } else {
                setOptions(!options)
            }
        } else {
            setOptions(!options)
        }

    }

    return (
        <ListItemStyled id={item.id} onClick={onCloseOptions} >
            <div>
                <h4>{item.flavor}</h4>
                <p>{item.ingredients.map(ingredient => ingredient + ' ')}</p>
                <p>R${item.price},00</p>
            </div>
            <div id="image"></div>
            {options ? <OptionsModal item={item} onCloseOptions={onCloseOptions} /> : ''}
        </ListItemStyled>
    )
}

export default ListItem;