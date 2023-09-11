import React, { useEffect, useState } from "react";

function Perfil (props) {

    const [info, setInfo] = useState({});

    useEffect(()=>{
        fetch('/api/data').then(res=>res.json()).then(obj=>{
            setInfo(obj)
        })
    }, [])

    return (
        <div className={props.active === 3
            ? 'pageActive' : ''}>
            <h1>PERFIL</h1>
            {info.address}
        </div>
    )
}

export default Perfil;