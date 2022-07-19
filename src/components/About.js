import React from 'react';
import TypeAnimation from 'react-type-animation';
import "../styles/about.css";

class About extends React.Component{
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
      const about = (<p>
        I am currently a third year computer science student from New Jersey Institute of Technology.<br/>
        When I am not in class, I am either working on different projects or playing video games.<br/></p>);
      const tech_intro = (<p>
        Some technologies I have worked with:
      </p>)
      const tech = [
        "Javascript",
        "React.js",
        "Node.js",
        "HTML",
        "CSS",
        "Python",
        "Java",
        "C++",
        "SQL",
      ]
      const final = (<p>
         Also, I am a fan of all things television. I love long t.v series', as well as, all types of movies.
      </p>)
        return (
        <div id = "about">
          <div className = "section-header">
            <span className = "section-title">About Me</span>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className = "about">
            {[about]}
            {[tech_intro]}
            <ul>
              {tech.map(function(item, i){
                return(
                  <li>
                    {item}
                  </li>
                );
                }
              )}

            </ul>
            {[final]}
          </div>
        </div>
        );
    }
}
export default About;
