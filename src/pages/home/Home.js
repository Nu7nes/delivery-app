import React from "react";
import './Home.css';
import Shortcuts from "./Shortcuts";
import Carrousel from "./Carroussel";
import Recommended from "./Recommended";
import FoodMenu from "./FoodMenu";

function Home(props) {

    // console.log(props);

    return (
        <div className={props.active === 0 ? 'home pageActive' : 'home'}>
            <h1>Faça seu pedido agora mesmo!</h1>
            <Carrousel></Carrousel>
            <Recommended></Recommended>
            <Shortcuts></Shortcuts>
            <FoodMenu></FoodMenu>
        </div>
    )
}

export default Home;