import React, { useEffect, useState } from "react";
import './Content.css'
import Home from "../../pages/home/Home";
import Favorites from "../../pages/favorites/Favorites";
import Orders from "../../pages/orders/Orders";
import Perfil from "../../pages/perfil/Perfil";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Content(props) {

    
   
    return (
        
            <div className="pagesCarrousel">
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </div>
        
    )
}

export default Content;