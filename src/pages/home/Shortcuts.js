import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


// function Shortcuts(props) {
//     return (
//         <div className="shortcuts">
//             {menus.map(shortcut => {
//                 return (
//                     <div>{shortcut}</div>
//                 )
//             })}
//         </div>
//     )
// }


function Shortcuts() {

    const options = {
        perPage: 3,
        arrows: false,
        pagination: false
    }

    const menus = [
        { id: 0,text: 'Tapiocas doces' },
        { id: 1,text: 'Tapiocas salgadas' },
        { id: 2,text: 'Bolos' },
        { id: 3,text: 'Bebidas' }
    ]

    menus.push({ id: 9999999, text: 'transparen'})

    return (
        <div className="shortcutWrapper">
            <div className="shortcutSplide">
                <Splide options={options}>
                    {menus.map((menu) => (
                        <SplideSlide key={menu.id}>
                            <div className="shortcutMenus">
                                <div className="shortcutMenuCard">
                                    <p>{menu.text}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default Shortcuts;