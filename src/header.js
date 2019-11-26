import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';

class Header extends Component {

    render(){

        return (
        <div className="header">
            <Particles height={'150px'} />
            <h2 className="section-title">we are hackademy</h2>
            <span>In the true sense of the word hacking is about exploring, understand how things work and we can change them in order to make them operate as we want too.</span>
        </div>

        )
    }
}

export default Header