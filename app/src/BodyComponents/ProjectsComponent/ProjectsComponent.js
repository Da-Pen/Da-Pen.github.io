import React from 'react';
import '../BodyComponents.css';
import './ProjectsComponent.css';
import { Project, ProjectComponent } from './ProjectComponent';


export class ProjectsComponent extends React.Component {

    projects = [

        new Project("Hidden Art",
        "https://play.google.com/store/apps/details?id=me.dpeng.clickdots",
        "./images/Hidden-Art.jpg",
        "August-September 2018",
        <div>hidden art description</div>),

        new Project("Tank Fighter",
        "https://github.com/Da-Pen/Tank-Fighter",
        "./images/Tank-Fighter.png",
        "March-June 2017",
        <div>tank fighter description</div>)
    
    ];
    

    render() {
        return (<div className="BodyComponent">
            <div className="middle-column">
                <h1 className="title">Projects</h1>
                {this.projects.map((currProject, index) => {
                    return <ProjectComponent key={index} project={currProject}></ProjectComponent>
                })}
            </div>
        </div>);
    }
}