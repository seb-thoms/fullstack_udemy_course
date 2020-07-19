import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Emaily</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Login with Google</a></li>
                    </ul>
                </div>
          </nav>
                
        
        );
    }
}

export default Header;