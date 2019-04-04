import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <div className="NavBar">
        <label id="name-label">— DANIEL PENG —</label>
        <span id="nav-bar-list">
          {this.props.navBarItems.map((navBarItem, index) => {
            return <span onClick={() => {this.props.onClickItem(index)}} 
                    className={(this.props.currentPageIndex === index) ? "nav-bar-item selected" : "nav-bar-item"}
                    key={index}>{navBarItem.name}</span>;
          })}
        </span>
      </div>
    );
  }

}

export default NavBar;
