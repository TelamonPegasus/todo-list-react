import React from "react";
import './ListItems.css';

function ListItems(props) {
    const items = props.items;
    let sayi = 1;
    const listItems = items.map(item => {
        item.sayi = sayi;
        sayi++;
        return <div className="listItem" key={item.key}>
            <p>
                {item.sayi}.{" "}{item.text}
            </p>
        </div>;
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItems;