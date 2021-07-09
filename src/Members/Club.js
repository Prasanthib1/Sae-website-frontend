import React from 'react';
import './Club.css';

import * as AiIcons from 'react-icons/ai';

import img from '../images/profile.jpg';
import img1c from '../images/K-Eshwar.jpg';
import img2c from '../images/Ankit-Gupta.jpg';
import img3c from '../images/Rishu.jpeg';
import img4c from '../images/Kaustubh-S.jpg';
import img5c from '../images/Diwakar-S-G.jpg';
import img6c from '../images/Vishlavath-T.jpg';

import img8c from '../images/Sagar.jpg';
import img9c from '../images/N-Rahul.jpg';
import img10c from '../images/Islavath-M.jpg';
import img11c from '../images/GauthamKrishna.jpg';

import img13c from '../images/Vedika.jpg';
import img14c from '../images/Manoj-G-S.jpg';
import img15c from '../images/Mihir.jpg';
import img16c from '../images/Akshay-Kumar.jpeg';
import img17c from '../images/Prasanthi.jpeg';
import img18c from '../images/shrivatsa.jpg';
import img19c from '../images/Likhita.jpg';
import img20c from '../images/Lucky-P-R.jpg';
import img21c from '../images/Guhan.jpg';
import img22c from '../images/Aashish.jpeg';
import img23c from '../images/Shunu.jpg';
import img25c from '../images/Sumit.jpg';
import img26c from '../images/Pradeep.jpg';
import img27c from '../images/Shashiprakash.jpg';
import img28c from '../images/Kushal.jpg';
import img29c from '../images/Meet.jpg';
import img30c from '../images/Saransh.jpg';
import img31c from '../images/Wilson.jpg';

const ClubMember=({src,name,role,lin}) =>{
  return (
      <div className="clubMember">
          <div className="icon">
            <img className="club_img" src={src} />
            <div className="club_icons">
            <AiIcons.AiOutlineMail className="c_mail"/>
            <AiIcons.AiFillLinkedin className="c_lin" onClick={()=> window.open(lin, "_blank")}/>
            </div>
          </div>
          <div className="name">
             <h3>{name}</h3>
          </div>
          <div className="role">
             <h3>{role}</h3>
          </div>
      </div>
  )
}

export default function Club() {
    return (
        <div className="club">
            <div className="club_head">
                <h1>Members</h1>
            </div>
            <div className="club_members">
              <div className="cm_row1">
                <ClubMember 
                src={img1c}
                name="K Eshwar Sai Srinivas"
                role="Convenor"
                lin="https://www.linkedin.com/in/sai--srinivas/"/>
                <ClubMember 
                src={img2c}
                name="Ankit Gupta"
                role="President"
                lin="https://www.linkedin.com/in/ankitg0812/"/>
                <ClubMember 
                src={img3c}
                name="Rishu Kumar"
                role="Secretary"
                lin="https://www.linkedin.com/in/rishu-kumar-3b93a7170/"/>
                <ClubMember 
                src={img4c}
                name="Kaustubh Sonawane"
                role="Technical Head"
                lin="https://www.linkedin.com/in/kaustubh-sonawane-80a326192"/>
                <ClubMember 
                src={img5c}
                name="Diwakar S Goud"
                role="Technical Head"
                lin="http://www.linkedin.com/in/diwakar-s-goud"/>
              </div>
              <div className="cm_row2">
                <ClubMember 
                src={img6c}
                name="Vishlavath Tarun"
                role="Senior Executive member"
                lin="https://www.linkedin.com/in/vishlavath-tarun-088477193"/>
                <ClubMember 
                src={img}
                name="Sakshi Bagde"
                role="Senior Executive member"
                lin="https://www.linkedin.com/in/sakshi-bagde-759993192/"/>
                <ClubMember 
                src={img8c}
                name="Sagar"
                role="Senior Executive member"
                lin="https://www.linkedin.com/in/sagar-ror-8b52621b2"/>
                <ClubMember 
                src={img9c}
                name="N Rahul"
                role="Senior Executive member"
                lin="https://www.linkedin.com/in/rahuljavaharlal-nenavath-66621b1a4"/>
              </div>
              <div className="cm_row3">
                <ClubMember 
                src={img10c}
                name="Islavath Manohar"
                role="Senior Executive member"
                lin="http://linkedin.com/in/manohar-islavath-11908716a"/>
                <ClubMember 
                src={img11c}
                name="Gauthamkrishna S"
                role="Senior Executive member"
                lin="https://www.linkedin.com/in/gauthamkrishna-s-452781195"/>
                <ClubMember 
                src={img}
                name="Krishna Reddy B V"
                role="Senior Executive member"
                lin="https://www.linkedin.com/mwlite/in/krishna-reddy-a0b89b188"/>
              </div>
              <div className="cm_row4">
                <ClubMember 
                src={img13c}
                name="Patrike Vedika Rajkumar"
                role="KEP Coordinator"
                lin="https://www.linkedin.com/in/vedika-patrike-96a9a719b"/>
                <ClubMember 
                src={img14c}
                name="Manoj G S"
                role="KEP Coordinator"
                lin="https://www.linkedin.com/in/manoj-g-s-715a07190"/>
                <ClubMember 
                src={img15c}
                name="Mihir Mali"
                role="Media Coordinator"
                lin="https://www.linkedin.com/in/mihir-mali-5247281b3/"/>
                <ClubMember 
                src={img16c}
                name="Akshay Kumar R R"
                role="Media Coordinator"
                lin="https://www.linkedin.com/in/akshay-ram-5024021b8"/>
              <ClubMember 
                src={img17c}
                name="Prasanthi Bolimera"
                role="Web Master"
                lin=""/>
                </div>
              <div className="cm_row5">
                <ClubMember 
                src={img18c}
                name="Shrivatsa Hegde"
                role="Event Coordinator"
                lin=""/>
                <ClubMember 
                src={img19c}
                name="Likhita J"
                role="Blog Coordinator"
                lin=""/>
                <ClubMember 
                src={img20c}
                name="Lucky Prameeth Rayi "
                role="Publicity Head"
                lin="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"/>
                <ClubMember 
                src={img21c}
                name="Guhan Sidharth M"
                role="Treasurer"
                lin=""/>
              </div>
              <div className="cm_row5">
                <ClubMember 
                src={img22c}
                name="Lakshmi Aashish Prateek Janaswamy"
                role="Executive Member"
                lin="http://linkedin.com/in/aashish-prateek-090009167"/>
                <ClubMember 
                src={img23c}
                name="Shunu P S"
                role="Executive Member"
                lin=""/>
                <ClubMember 
                src={img}
                name="Diksha Negi"
                role="Executive Member"
                lin=""/>
                <ClubMember 
                src={img25c}
                name="Sumit Sagar"
                role="Executive Member"
                lin=""/>
              </div>
              <div className="cm_row5">
              <ClubMember 
                src={img26c}
                name="Pradeep Singh Solanki"
                role="Executive Member"
                lin="https://www.linkedin.com/in/Pradeep-Singh-Solanki/"/>
                <ClubMember 
                src={img27c}
                name="Aenugutala Shashi Prakash"
                role="WebDev Team"
                lin="https://www.linkedin.com/in/shashi-prakash-aenugutala-62789b1b9"/>
                <ClubMember 
                src={img28c}
                name="Kushal Narayan Gowda"
                role="Executive Member"
                lin="https://www.linkedin.com/in/kushal-narayan-gowda/"/>
              </div>
              <div className="cm_row5">
                <ClubMember 
                src={img29c}
                name="Meet Ajay Shah"
                role="Executive Member"
                lin="https://www.linkedin.com/in/meet-shah-8a5794179/"/>
                <ClubMember 
                src={img30c}
                name="Saransh Bhaduka"
                role="Executive Member"
                lin="https://www.linkedin.com/in/saransh-bhaduka-841a1619b/"/>
                <ClubMember 
                src={img31c}
                name="Wilson Furtado"
                role="WebDev Team"
                lin=""/>
              </div>
            </div>
            </div>

    )

}
