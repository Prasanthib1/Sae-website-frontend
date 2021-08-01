import React, {useEffect} from "react";
import './Project.css';

import imgp11 from '../images/projects/project1-1.jpeg';
import imgp12 from '../images/projects/project1-2.jpeg';
import imgp13 from '../images/projects/project1-3.jpeg';
import imgp14 from '../images/projects/project1-4.jpeg';
import AOS from 'aos';

const Project_info1=({image,desc,name})=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div className="info" data-aos="fade-up" data-aos-once="true">
            <img className="img_info" src={image} data-aos="fade-in" data-aos-once="true" alt=""/> 
            <div className="desc_info" data-aos="fade-in" data-aos-once="true">
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
                <h1 className="pp1">Project - Expo</h1>
                <h1 className="pp2" >2019-20</h1>
            </div>
            <div className="p_info">
            <Project_info1 
                image={imgp11}
                name="ANN Power Optimization"
                desc="Project on the concepts of EVs, Simulation and Artificial Intelligence called “ANN Power Optimization”. The project dealt with modeling and simulating various EV Models and optimizing them with the basics of Machine learning and Data sciences"
            />
            <Project_info1
                image={imgp12}
                name="Li-ion Battery pack thermal model"
                desc="To model and analyze the temperature distribution of a 12S12P 18650 Li-ion
                    cell in a square array with 1mm spacing using COMSOL along with the
                    cooling analysis and a thermal model."
            />
            <Project_info1 
                image={imgp13}
                name="Disc Brake – Design and Analysis"
                desc="Project on Disc Brake – Design and Analysis where modeling on SolidWorks together with thermomechanical analysis on Ansys with static structural and steady-state thermal modules was done. The gradients of stress, deformation, temperature, and rate of heat transfer were generated accordingly."
            />
            <Project_info1
               image={imgp14}
               name="SAE NITK Media Works"
               desc="SAE-NITK Media has been actively involved in the clubs creative face and planned and executed all our schemes,mainly SAE-NITK Tech Buzz Annual Magazine SAE Tech Chronicle - A Weekly Blog Series."
            />
        </div>
    </div>
    )
}
