import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import { NavBarItem } from './NavBar/models/NavBarItem';
import { HomeComponent } from './BodyComponents/HomeComponent/HomeComponent';
import { ResumeComponent } from './BodyComponents/ResumeComponent/ResumeComponent';
import { ProjectsComponent } from './BodyComponents/ProjectsComponent/ProjectsComponent';
import { ContactComponent } from './BodyComponents/ContactComponent/ContactComponent';

import './App.css';

class App extends React.Component {

  navBarItems = [
    new NavBarItem("HOME", HomeComponent, '/'),
    new NavBarItem("RESUME", ResumeComponent, '/resume'),
    new NavBarItem("PROJECTS", ProjectsComponent, '/projects'),
    new NavBarItem("CONTACT", ContactComponent, '/contact')
  ];

  render() {
    return (
      <div className="App">
        <Router>
          {/* nav bar */}
          <NavBar navBarItems={this.navBarItems}/>
          <Switch>
            {/* body element */}
            {this.navBarItems.map(element => (
              <Route exact key={element.route} path={element.route} component={element.component} />
            ))}
            
            {/* redirect any other routes to homepage */}
            <Redirect from="/*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
