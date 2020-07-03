import React, { Component } from 'react';
import SectionCard from '../SectionCard/SectionCard.js'
import './About.css';

class About extends Component {
  render() {
    return (
            <div>
                <div className="about">
                <h2>Gagandeep Singh Ahuja</h2>
                    I'm a full-time Software Engineer and a part-time competitive programmer. I am a 2020 graduate from Thapar Institute Of Engineering And Technology
                    <br/>
                    <br/>
                    I enjoy working on team projects which can have a large impact on 
                    I'm constantly learning new tools and technologies and creating my own personal projects.
                    Besides, I really enjoy solving competitive programming problems and taking parting in competitive programming contests.
                    Take a look at my CV, my list of project, my blog or the hackathons I've attended to know more about me.
                    <br/>
                    <br/>
                    Please feel free to reach out to me with your valuable comments in the comments section.
                </div>
                <div className="cards-section">
                    <SectionCard title="About" />
                    <SectionCard title="Experience" />
                    <SectionCard title="Projects" />
                    <SectionCard title="Acheivements" />
                    <SectionCard title="Resume" />
                    <SectionCard title="Components" />
                </div>
            </div>
    );
  }
}

export default About;