import React from "react";
import './Project.css';
import img10 from '../images/p.jpg';

import imgp11 from '../images/projects1-1.png';
import imgp12 from '../images/projects1-2.png';
import imgp13 from '../images/projects1-3.png';
import imgp14 from '../images/projects1-4.png';

const Info=({image,desc,name})=>{
    return (
        <div className="info">
            <img className="img_info" src={image} /> 
            <div className="desc_info">
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
        </div>
    )
}

export default function Projects1() {
    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">PROJECTS</h1>
                <h1 className="pp2" >2019-20</h1>
            </div>
            <div className="p_info">
            <Info 
                image={imgp11}
                name="ANN Power Optimization"
                desc="Project on the concepts of EVs, Simulation and Artificial Intelligence called “ANN Power Optimization”. The project dealt with modeling and simulating various EV Models and optimizing them with the basics of Machine learning and Data sciences"
            />
            <Info
                image={imgp12}
                name="Li-ion Battery pack thermal model"
                desc="To model and analyze the temperature distribution of a 12S12P 18650 Li-ion
                    cell in a square array with 1mm spacing using COMSOL along with the
                    cooling analysis and a thermal model."
            />
            <Info 
                image={imgp13}
                name="Disc Brake – Design and Analysis"
                desc="Project on Disc Brake – Design and Analysis where modeling on SolidWorks together with thermomechanical analysis on Ansys with static structural and steady-state thermal modules was done. The gradients of stress, deformation, temperature, and rate of heat transfer were generated accordingly."
            />
            <Info
               image={imgp14}
               name="SAE NITK Media Works"
               desc="SAE-NITK Media has been actively involved in the clubs creative face and planned and executed all our schemes,mainly SAE-NITK Tech Buzz Annual Magazine SAE Tech Chronicle - A Weekly Blog Series."
            />
        </div>
    </div>
    )
}
