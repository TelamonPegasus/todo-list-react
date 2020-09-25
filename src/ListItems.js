import React from "react";
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    let sayi = 1;
    const listItems = items.map(item => {
        item.sayi = sayi;
        if ((item.text.trim() === "") && !(item.key == document.activeElement.id)) {
            return;
        }
        sayi++;
        return <div className="listItem" key={item.key}>
            <p>
                {item.sayi}.{" "} <input type="text" id={item.key} value={item.text} onChange={(e) => {
                props.editItem(e.target.value, item.key)
            }}/>
                <span>
                <FontAwesomeIcon className="faIcons" icon="ban"
                                 onClick={() => props.deleteItem(item.key)}/>
                </span>
            </p>
        </div>;
    })
    return (
        <div><FlipMove duration={750}>{listItems}</FlipMove></div>
    )
}

export default ListItems;