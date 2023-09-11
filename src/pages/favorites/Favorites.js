import React from "react";
import './Favorites.css'
import Items from "./Items";


const favs = {
    favorites: [
        { name: 'Burguer' },
        { name: 'Pizza' }
    ],
    lastOrder: [
        { name: 'Callzone', price: 8.00 },
        { name: 'Coca Cola', price: 6.00 }
    ]
}
console.log(favs.favorites)


function NotContent() {
    return (
        <div className="notContent">
            <div>LOGO</div>
            <p>Favorite o que mais gostar</p>
        </div>
    )
}

function Favorites(props) {
    return (
        <div
            className={props.active === 1
                ? favs.favorites.length ? 'favorites pageActive' : 'favorites justifyCenter pageActive'
                : favs.favorites.length ? 'favorites' : 'favorites justifyCenter'}
        >
            {favs.favorites.length ? <Items favs={favs}></Items> : <NotContent></NotContent>}
        </ div>
    )
}

export default Favorites;