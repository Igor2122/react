import ReactDOM from 'react-dom';
import React from 'react';
import Message from './Message/message.jsx';
import './index.html'; 

class App extends React.Component{
    render() {
        return (
            <div>
                <Message title="Hello There"/>
                <Message title="We are here"/>
                <Message title="Come to see us"/>
            </div>
            )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));

