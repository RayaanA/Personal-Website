import React from 'react';
import "../styles/work.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";

class Work extends React.Component{
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
      const projects = {
        "Web Scraping Bot": {
          desc:
            "Track daily price change of different computer parts on online websites",
          techStack: "Python, Selenium",
          link: "",
          open: ""
        },
        "Small Programming Language": {
          desc:
            "Created a lexical analyzer, parser, and interpreter for a small programming language",
          techStack: "C++",
          link: "",
          open: ""
        },
        "Simple website with database": {
          desc:
            "Create a website that acts as an interface for a database",
          techStack: "PHP, HTML, SQL",
          link:
            ""
        },
        "Interactive Website": {
          desc:
            "Personal website that tells a little about myself",
          techStack: "Javascript, Node.js, React.js, PHP, HTML",
          link: "",
          open: ""
        }
      };
        return (
            <div id = "work">
                <div className = "section-header">
                  <span>Work</span>
                </div>
                <div className="work">
                  <ul className="projects-grid">
                    {Object.keys(projects).map((key, i) => (
                        <li className="projects-card">
                          {/*
                          <div className="card-header">
                            <div className="folder-icon">
                              <FolderOpenRoundedIcon
                                style={{ fontSize: 35 }}
                              ></FolderOpenRoundedIcon>
                            </div>
                            
                            <ExternalLinks
                              githubLink={projects[key]["link"]}
                              openLink={projects[key]["open"]}
                            ></ExternalLinks>
                          </div>*/}
                          <div className="card-title">{key}</div>
                          <div className="card-desc">{projects[key]["desc"]}</div>
                          <div className="card-tech">{projects[key]["techStack"]}</div>
                        </li>
                    ))}
                  </ul>
                </div>
            </div>
        );
    }
}

export default Work;