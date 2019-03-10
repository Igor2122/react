import './message.css';
import image  from  './goat.jpg';
import React from 'react';


class Message extends React.Component{


    handleClick () {
      alert(this.props)
    }
    
    render() {
        return (
            // <div className={css.h1}>
            <div >
                
                <div>{this.props.title}</div>
                {/* <img className={css.Image} src={image} /> */}
                <img className="image" src={image} />
                <button onClick={this.handleClick.bind(this)}>Show Props</button>
                
            </div>
        );
    }

}

export default Message;


