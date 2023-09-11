import React, { useState } from "react";
import Icon from "./Icon";
import { BiHome, BiHeart, BiListUl, BiUser } from "react-icons/bi";

import { Link } from 'react-router-dom';

const i = [<BiHome />, <BiHeart />, <BiListUl />, <BiUser />].map(name => new Icon(name));

function IconsLinks(props) {

    const [icons, setIcons] = useState(i);

    function onChangeActive(event) {
        let elementId = event.target.parentNode.dataset.id
        let elementSelected = icons.map(icon => {
            if (elementId == icon.id) {
                if (icon.selected) {
                    return icon
                } else {
                    icon.selected = !icon.selected;
                }
            } else {
                icon.selected = false
            }
            return icon
        })
        setIcons(elementSelected)
    }

    function switchPage(id) {
        switch (id) {
            case 0:
                return '/'
            case 1:
                return '/favorites'
            case 2:
                return '/orders'
            case 3:
                return '/perfil'
        }
    }

    return (
        <div className="menuLinks">
            {icons.map(icon => {
                return (
                    <Link
                        key={icon.id}
                        className={icon.selected ? 'activeContrastIcon' : ''}
                        data-id={icon.id}
                        onClick={onChangeActive}
                        to={switchPage(icon.id)}>

                        {icon.icon}
                        <div data-id={icon.id}></div>

                    </Link>
                )

            })}
        </div>
    )
}

export default IconsLinks;