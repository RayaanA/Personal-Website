import "../styles/navbar.css";
import { Sidenav, Nav } from "rsuite";
import React from "react";

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
    }
    render() {
        const { expanded } = this.state;
        const links = [
          <a href="#intro">Rayaan Azmi</a>,
          <a href="#about">About</a>,
          <a href="#work">Work</a>,
          <a href="#contact">Contact</a>
        ];
        return( 
            <Sidenav
            expanded={expanded}
            /*defaultOpenKeys={["3", "4"]}*/
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
            >
                <Sidenav.Body className = "nav">
                  <div className = "box" ><li ><a id = "site" href="#intro">Rayaan Azmi</a></li></div>
                  <div className = "box"><li><a href="#about">About</a></li></div>
                  <div className = "box"><li><a href="#work">Work</a></li></div>
                  <div className = "box"><li><a href="#contact">Contact</a></li></div>
                {/*<div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
                </div>*/}
                </Sidenav.Body>
            </Sidenav>
        );
    }
}
export default NavBar;
