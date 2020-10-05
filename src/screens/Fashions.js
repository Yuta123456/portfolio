import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import FashionsContent from './FashionsContent';
import Footer from './Footer';

class Fashions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Nav />
                <FashionsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Fashions;