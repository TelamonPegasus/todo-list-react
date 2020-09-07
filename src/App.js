import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [],
            currentItem:{
                text:'',
                key:''
            }
        }
    }
    render() {
        return (
            <div className="todoWindow">
                <div className="orta">
                    <div>Merhaba Burak, Hoşgeldin!</div>
                    <div>Ne yapılması gerekiyor?</div>
                </div>
                <input type="text" placeholder="Enter task" value={this.state.currentItem}/>
                <button type="input">Ekle</button>
            </div>
        );
    }
}

export default App;
