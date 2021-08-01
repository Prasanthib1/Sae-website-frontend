
import React,{useEffect} from 'react';
import './Core.css';
import * as Hi from 'react-icons/hi';
import * as Fa from 'react-icons/fa';

import img1 from '../images/club/K-Eshwar.jpg';
import img2 from '../images/club/Ankit-Gupta.jpg';
import img3 from '../images/club/Rishu.jpeg';
import img4 from '../images/club/Diwakar-S-G.jpg';
import img5 from '../images/club/Kaustubh-S.jpg';
import AOS from 'aos';


const MemberImage =({src,name,role,mail,lin}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <div className="member">
          <div className="icon" data-aos="fade-in" data-aos-once="true">
            <img src={src} />
          </div>
          <div className="name" data-aos="fade-in" data-aos-once="true">
             <h3>{name}</h3>
          </div>
          <div className="role" data-aos="fade-in" data-aos-once="true">
             <h3>{role}</h3>
          </div>
          <div className="mem_icons" data-aos="fade-in" data-aos-once="true">
             <div className="mem_icon_outer"><a href={"mailto:"+ mail}><Hi.HiMail className="mem_mail" /></a></div>
             <div className="mem_icon_outer"><Fa.FaLinkedinIn className="mem_lin" onClick={()=> window.open(lin, "_blank")}/></div>
          </div>
      </div>
  )
}
function Core() {
    return (
        <div className="core" >
          <div className="heading">
            <h1>Core Team</h1>
          </div>
          <div className="core_members">
           <div className="mem1" >
           <MemberImage
            src={img1}
            name="K Eshwar Sai Srinivas"
            role="Convener"
            mail="kessrinivas.181me141@nitk.edu.in"
            lin="https://www.linkedin.com/in/sai--srinivas/"/>
           <MemberImage
            src={img2}
            name="Ankit Gupta"
            role="President"
            mail="ankitgupta.181ch007@nitk.edu.in"
            lin="https://www.linkedin.com/in/ankitg0812/"/>
            <MemberImage
            src={img3}
            name="Rishu"
            role="Secretary"
            mail="rishu.181ch034@nitk.edu.in"
            lin="https://www.linkedin.com/in/rishu-kumar-3b93a7170/" />
            <MemberImage
            src={img4}
            name="Diwakar S Goud"
            role="Technical Lead"
            mail="diwakarsgoud.181me122@nitk.edu.in"
            lin="http://www.linkedin.com/in/diwakar-s-goud"/>
            <MemberImage
            src={img5}
            name="Kaustubh Prashant Sonawane"
            role="Technical Lead"
            mail="kaustubhsonawane.181me236@nitk.edu.in"
            lin="https://www.linkedin.com/in/kaustubh-sonawane-80a326192"/>
          </div>
          </div>
      </div>
    )
}

export default Core
