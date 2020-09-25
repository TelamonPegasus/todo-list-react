import React from "react";
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items = props.items;
    let sayi = 1;
    const listItems = items.map(item => {
        item.sayi = sayi;
        sayi++;
        return <div className="listItem" key={item.key}>
            <p>
                {item.sayi}.{" "}{item.text}
                <span>
                <FontAwesomeIcon className="faIcons" icon="ban"
                                 onClick={() => props.deleteItem(item.key)}/>
                </span>
            </p>
        </div>;
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItems;