import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//import screens
import Home from './screens/Home';
import Achivement from './screens/Achivement';
import Fashions from './screens/Fashions';
import Music from './screens/Music'
class App extends React.Component {
     render() {
       //ページを追加したいときには、ここで指定
       //<Route exact path="/About" component={About} />
       //今のディレクトリと、pathが厳密に同じ時だけ、Componentを表示
          return (
               <BrowserRouter>
                    <Switch>
                         <Route exact path="/" component={Home} />
                         <Route exact path="/Achivement" component={Achivement} />
                         <Route exact path="/Fashions" component={Fashions} />
                         <Route exact path="/Music" component={Music} />
                         <Route render={() => (<p>Page not found.</p>)} />
                    </Switch>
               </BrowserRouter>
          );
     }
}

export default App;