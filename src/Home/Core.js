
import React,{useEffect} from 'react';
import './Core.css';
import * as Hi from 'react-icons/hi';
import * as Fa from 'react-icons/fa';
import img from '../images/profile.jpg';
import img1 from '../images/K-Eshwar.jpg';
import img2 from '../images/Ankit-Gupta.jpg';
import img4 from '../images/Diwakar-S-G.jpg';
import img5 from '../images/Kaustubh-S.jpg';
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
          <div className="name" data-aos="fade-right" data-aos-once="true">
             <h3>{name}</h3>
          </div>
          <div className="role" data-aos="fade-right" data-aos-once="true">
             <h3>{role}</h3>
          </div>
          <div className="insta" data-aos="fade-in" data-aos-once="true">
             <div className="mem_icon_outer"><Hi.HiMail className="mem_mail"  component="a" href={"mailto:"+ mail} /></div>
             <div className="mem_icon_outer"><Fa.FaLinkedinIn className="mem_lin" onClick={()=> window.open({lin}, "_blank")}/></div>
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
            mail="p@gmail.com"
            lin="#"/>
           <MemberImage
            src={img2}
            name="Ankit Gupta"
            role="President"
            mail="#"
            lin="#"/>
            <MemberImage
            src={img}
            name="Rishu"
            role="Secretary"
            mail="#"
            lin="#" />
            <MemberImage
            src={img4}
            name="Diwaker S Goud"
            role="Technical Lead"
            mail="#"
            lin="#"/>
            <MemberImage
            src={img5}
            name="Kaustubh"
            role="Technical Lead"
            mail="#"
            lin="#"/>
          </div>
          {/*<div className="mem2">

            <MemberImage
            src={img5}
            name="xxx"
            role="xxx"
            mail="#"
            lin="#" />
            <MemberImage
            src={img6}
            name="xxx"
            role="xxx"
            mail="#"
            lin="#" />
           <MemberImage
            src={img7}
            name="Rajat Shukla"
            role="Convener"
            mail="#"
            lin="#"/>

    </div>*/}
          </div>
          
      </div>
    )
}

export default Core
