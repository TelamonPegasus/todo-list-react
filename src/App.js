import React from 'react';
import './App.css';
import ListItems from './ListItems';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBan} from "@fortawesome/free-solid-svg-icons";

library.add(faBan);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.settingState = this.settingState.bind(this);
        this.yapildiHandler = this.yapildiHandler.bind(this);
    }

    handleEvent = (event) => {
        if (event.type === "click") {
            let items = this.state.items;
            items.map(item => {
                if ((item.text.trim() === "") && !(item.key == document.activeElement.id)) {
                    this.deleteItem(item);
                }
            })
        }
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem
        newItem.text = newItem.text.trim();
        newItem.yapildiMi = false;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
                items: filteredItems
            }
        )
    }

    editItem(text, key) {
        const items = this.state.items;
        items.map((item) => {
            if (item.key === key) {
                item.text = text;
            }
        });
        this.setState({
            items: items
        });
    }

    settingState(items) {
        this.setState({
            items: items
        })
    }

    yapildiHandler(e) {
        let elementId = e.target.parentElement.parentElement.children[1].id;
        let items = this.state.items;
        let newItems = items.map(item => {
            console.log(item.key.toString() , elementId);
            if (item.key.toString() === elementId) {
                item.yapildiMi = e.target.checked;
            }
            return item;
        })
        this.settingState(newItems);
    }

    render() {
        return (
            <div onClick={this.handleEvent}>
                <div className="todoWindow">
                    <div className="orta">
                        <div>Merhaba Burak, Hoşgeldin!</div>
                        <div>Ne yapılması gerekiyor?</div>
                    </div>
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder="Enter task"
                               value={this.state.currentItem.text}
                               onChange={this.handleInput}
                        />
                        <button type="submit">Ekle</button>
                    </form>
                    <ListItems items={this.state.items}
                               deleteItem={this.deleteItem}
                               editItem={this.editItem}
                               settingState={this.settingState}
                               yapildiHandler={this.yapildiHandler}
                    />
                </div>
            </div>
        );
    }
}

export default App;
