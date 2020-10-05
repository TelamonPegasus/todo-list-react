import React, {useEffect} from "react";
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const LOCAL_STORAGE_KEY = "react-todo-list-items";

function ListItems(props) {

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedItems) {
            props.settingState(storedItems);
        }
    }, []);

    const items = props.items;

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    let sayi = 1;
    const listItems = items.map(item => {
        item.sayi = sayi;
        if ((item.text.trim() === "") && !(item.key == document.activeElement.id)) {
            props.deleteItem(item.key);
            return;
        }
        sayi++;
        return <div className="listItem" key={item.key}>
            <p>
                <label className="container">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                {/*<input type="checkbox" style={{width:"10px", height:"10px", zoom:1.75, margin: "5px 5px 0px 0px"}}/>*/}
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