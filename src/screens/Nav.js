import React from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="tabs is-boxed is-fullwidth">
                    <div className="navbar-item"></div>
                    <div className="navbar-item"><NavLink exact to="/">Profile</NavLink></div>
                    <div className="navbar-item"><NavLink exact to="/Achivement">Achivement</NavLink></div>
                    <div className="navbar-item"><NavLink exact to="/Fashions">Fashions</NavLink></div>
                    <div className="navbar-item"><NavLink exact to="/Music">Music</NavLink></div>
                </div>
            </nav>
        );
    }
}
export default Nav;

