import React from "react";

const pop = ['Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer', 'Burguer']

function Recommended(props) {
    // console.log(props)
    // function onOrderedItems () {
    //     let orderedItems = props.card.sort((a, b) => {
    //         return a.count - b.count
    //     });
    //     console.log(orderedItems);
    // }
    // onOrderedItems()
    return (
        <div className="popular">
            <div>
                <h4>Queridinhos</h4>
                <a href="#">Ver todos</a>
            </div>
            <ul className="popularGrid">
                {pop.map((item, index) => {
                    if (index < 4) {
                        return (
                            <li key={index}>
                                <div></div>
                                <p>{item}</p>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Recommended;