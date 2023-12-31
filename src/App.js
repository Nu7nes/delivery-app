import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyled from "./styles/Global.styled";
import PublicApp from "./PublicApp";
import AdminApp from "./admin/AdminApp";


function App() {

    const isAdmin = useSelector(state => state.currentUser.isAdmin)

    return (
        <BrowserRouter>
            {isAdmin ? <AdminApp /> : <PublicApp />}
            <GlobalStyled />
        </BrowserRouter>
    )
}

export default App;