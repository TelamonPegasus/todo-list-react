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

    render() {
        return (
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
                           deleteItem={this.deleteItem}/>
            </div>
        );
    }
}

export default App;
