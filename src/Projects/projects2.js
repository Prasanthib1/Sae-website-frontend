import React from "react";
import './Project.css';
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';
import imgp21 from '../images/project2-1.jpg';
import imgp22 from '../images/project2-2.png';
import imgp23 from '../images/project2-3.jpg';
import imgp24 from '../images/project2-4.png';
import imgp25 from '../images/project2-5.png';
import imgp26 from '../images/project2-6.jpeg';


const Info2 = ({image,desc,name,ytlink}) => {
  return (
      <div className="info">
          <img className="img_info" src={image} /> 
          <div className="desc_info">
            <h1>{name}</h1>
            <p>{desc}</p>
            <div className="info-button">
             <button className="info-btn"><DescriptionIcon fontSize="large"/> Report</button>
             <button className="info-btn" onClick={()=> window.open(ytlink, "_blank")}><YouTubeIcon fontSize="large"/> Video</button>
            </div>
          </div>
      </div>
  )
}

function Projects2() {
    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">PROJECT EXPO</h1>
                <h1 className="pp2" >2020-21</h1>
            </div>
            <div className="p_info">
            <Info2 
              image={imgp21}
              name="CFD Analysis of Nose Profiles"
              desc="This project deals with the comparison of various nose profiles and their aerodynamic
              characteristics. The nose profiles are designed using SOLIDWORKS and analyzed on
              ANSYS."
              ytlink="https://www.youtube.com/watch?v=H_aWN_9bUgM&t=1s"
            />
            <Info2
              image={imgp22}
              name="Energy Storing Body Panels"
              desc="To study how the power is stored in the body panels of vehicles. Learn about
              that material used, analysis of stresses on the panel, and Simulating the voltage
              distribution across the Supercapacitor."
              ytlink=""
            />
            <Info2 
              image={imgp23}
              name="Simulink Model Of Antilock Braking System"
              desc="As the name signifies, the anti-lock braking system is a safety system in cars 
                    and other automobiles that keeps their wheels from locking up and helps their 
                    drivers to maintain steering control. Also referred to as anti-skid braking 
                    system sometimes, it enables the wheels of a vehicle to maintain tractive contact
                    with the ground so that they don’t  go into an uncontrolled skid."
                    ytlink=""
            />
            <Info2
              image={imgp24}
              name="Rear Wheel Steering"
              desc="The “rear wheel steering” project was taken up with the main motive of decreasing
              the turning radius of cars to adapt to the dynamic demands of congested cities such as
              Mumbai, Bangalore, etc."
              ytlink="https://www.youtube.com/watch?v=s3OUx93zXgU"
            />
            <Info2
             image={imgp25}
             name="Design, Analysis & Application of a PID Controller"
             desc="This project deals with the designing and simulation of a basic PID controller which controls
             the amount of current flowing in order to control the power given to the wheels of an
             agricultural robot in order to steer it."
             ytlink=""
            />
            <Info2
             image={imgp26}
             name="Aerodynamic Analysis of Helicopter Seeds"
             desc="Our goal is to build a 3D model to analyse its
             structure and evaluate its aerodynamic properties. A solid model matching the structure of a
             single maple seed is created in AutoCAD software. The solid model was imported in ANSYS
             and the flow is analysed using FLUENT module under various conditions. Results are then
             compared with theoretical values."
             ytlink="https://www.youtube.com/watch?v=K5iyIFwuQbE"
            />
         </div>
         </div>
    )
}

export default Projects2