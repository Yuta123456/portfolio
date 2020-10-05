import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import PokemonContent from './PokemonContent';
import Footer from './Footer';

class Achivement extends React.Component {
    render() {
        // return では一要素しか返せないところをReactFragmentで囲ってやることでOK
        return (
            <React.Fragment>
                <Header />
                <Nav />
                <PokemonContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Achivement;