import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import MusicContent from './MusicContent';
import Footer from './Footer';

class Achivement extends React.Component {
    render() {
        // return では一要素しか返せないところをReactFragmentで囲ってやることでOK
        return (
            <React.Fragment>
                <Header />
                <Nav />
                <MusicContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Achivement;