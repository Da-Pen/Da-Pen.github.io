import React from 'react';
import NavBar from './NavBar/NavBar';
import { NavBarItem } from './NavBar/models/NavBarItem';
import { HomeComponent } from './BodyComponents/HomeComponent/HomeComponent';
import { ResumeComponent } from './BodyComponents/ResumeComponent/ResumeComponent';
import './App.css';

class App extends React.Component {

  navBarItems = [
    new NavBarItem("HOME", <HomeComponent />),
    new NavBarItem("RESUME", <ResumeComponent />),
    new NavBarItem("PROJECTS", <HomeComponent />), // TODO add other 2 components
    new NavBarItem("CONTACT", <ResumeComponent />)
  ];

  constructor() {
    super();
    this.state = {
      currentPageIndex: 0
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar currentPageIndex={this.state.currentPageIndex} navBarItems={this.navBarItems} onClickItem={this.onClickItem.bind(this)}/>
        {this.navBarItems[this.state.currentPageIndex].component}
      </div>
    );
  }

  onClickItem(index) {
    this.setState({
      currentPageIndex: index
    });
  }
}

export default App;
