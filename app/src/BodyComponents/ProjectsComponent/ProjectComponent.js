import React from 'react';
import './ProjectsComponent.css';
import '../BodyComponents.css';


export class ProjectComponent extends React.Component {

    render() {
        const project = this.props.project;
        return (
            <div>
                <div className="project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{ project.name }</a>
                </div>
                {project.content}
            </div>
        );
    }
}

export class Project {
    constructor(name, link, imageSrc, timePeriod, content) {
        this.name = name;
        this.link = link;
        this.imageSrc = imageSrc;
        this.timePeriod = timePeriod;
        this.content = content;
    }
}