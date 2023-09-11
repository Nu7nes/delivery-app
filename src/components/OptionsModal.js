import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartSlice";
import Item from "./models/Item";
import { CloseButton } from "./CloseButton.styled";
import Checkbox from "./Checkbox";
import Button from "./Button.styled"
import { GrFormClose } from "react-icons/gr";

const Component = styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    >.image{
        width: 100%;
        height: 20vh;
        background-color: black;
    }
    >h2{
        color: white;
        margin-left: 1.5rem;
        transform: translateY(-100%);
    }
`

function OptionsModal({ item, onCloseOptions }) {

    const dispatch = useDispatch()
    const ingredients = item.ingredients
    const itensCopy = Array.from({ length: item.ingredients.length }, () => true);
    // const [ingredientStates, setIngredientStates] = useState(itensCopy)

    function onHandleChecked(isChecked, index) {
        itensCopy[index] = !isChecked
        console.log(itensCopy);
    }

    function handleAddItem(e) {
        e.preventDefault()
        const selecteItems = []
        itensCopy.map((item, index) => item ? selecteItems.push(ingredients[index]) : '')
        const newItem = new Item(item.id, selecteItems)
        dispatch(add(JSON.stringify(newItem)))
    }

    return (
        <Component>
            <CloseButton id="close" onClick={onCloseOptions}>{<GrFormClose />}</CloseButton>
            <div className="image"></div>
            <h2>{item.flavor}</h2>
            <ul>
                <h4>Melhore sua pizza!</h4>
                <form onSubmit={handleAddItem}>
                    {item.ingredients.map((ingredient, index) => {
                        return (<Checkbox key={index}
                            index={index}
                            data={ingredient}
                            onHandleChecked={onHandleChecked} />)
                    })}
                    <Button type="submit">Adicionar</Button>
                </form>

            </ul>
        </Component>
    )
}

export default OptionsModal;