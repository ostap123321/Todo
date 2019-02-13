import React from 'react';
import Button from "./Todo";

class NameGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    };


    render() {
        return(
        <div className="name-greeting">
            <center> <a href="http://online-letters.com/" target="_blank"><img src="http://x-lines.ru/letters/i/cyrillicscript/0394/4040c9/20/0/4njpbcsoszemjwcs4gbpddby4ndpbxb84g8o.png" border="0" /></a></center>
                <input type="text"  onChange={this.handleChange}/>
            {this.state.name ? <h1><center><h2>Good Evening,{this.state.name}</h2></center></h1> : null}
        </div>
        )
    }
}

export default NameGreeting;