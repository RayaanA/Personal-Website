import React, {useState} from 'react';
import TypeAnimation from 'react-type-animation';
import "../styles/intro.css";
import "../fonts/hello-world.ttf";

class Intro extends React.Component{
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
      const after = (<p>I'm a computer science student from New Jersey, US. I am interested in machine learning, artificial intelligence, and all forms of software development.</p>);
        return(
            <div id = "intro" className= "intro">
                <div className = "firstHalf">
                    
                        <TypeAnimation
                        cursor = {true}
                        sequence = {["Hello World.\n   My name is Rayaan,\n       an aspiring software developer.", 2000,""]}
                        repeat= {Infinity}
                        className= "text1">
                        </TypeAnimation>
                        {/*
                        <TypeAnimation 
                        cursor = {false}
                        sequence = {[1000,'My name is Rayaan,',]}
                        repeat= {1}
                        className= "text2"
                        />
                        <TypeAnimation 
                        cursor = {false}
                        sequence = {[2500,'an aspiring software developer.',]}
                        repeat= {1}
                        className= "text3"
                        />*/}
                    {/*<p></p>*/}
                </div>
                
                <div className= "second-half">
                    <div className = "textAfter">
                            {[after]}
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;

