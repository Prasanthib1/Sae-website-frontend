import React,{useEffect} from 'react';
import './Club.css';

import * as AiIcons from 'react-icons/ai';
import * as Hi from 'react-icons/hi';

import img1c from '../images/club/K-Eshwar.jpg';
import img2c from '../images/club/Ankit-Gupta.jpg';
import img3c from '../images/club/Rishu.jpeg';
import img4c from '../images/club/Kaustubh-S.jpg';
import img5c from '../images/club/Diwakar-S-G.jpg';
import img6c from '../images/club/Vishlavath-T.jpg';
import img7c from '../images/club/Sakshi.jpeg';
import img8c from '../images/club/Sagar.jpg';
import img9c from '../images/club/N-Rahul.jpg';
import img10c from '../images/club/Islavath-M.jpg';
import img11c from '../images/club/GauthamKrishna.jpg';
import img12c from '../images/club/krishnareddy.jpeg';
import img13c from '../images/club/Vedika.jpg';
import img14c from '../images/club/Manoj-G-S.jpg';
import img15c from '../images/club/Mihir.jpg';
import img16c from '../images/club/Akshay-Kumar.jpeg';
import img17c from '../images/club/Prasanthi.jpeg';
import img18c from '../images/club/shrivatsa.jpg';
import img19c from '../images/club/Likhita.jpg';
import img20c from '../images/club/Lucky-P-R.jpg';
import img21c from '../images/club/Guhan.jpg';
import img22c from '../images/club/Aashish.jpeg';
import img23c from '../images/club/Shunu.jpg';
import img24c from '../images/club/Diksha.jpeg';
import img25c from '../images/club/Sumit.jpg';
import img26c from '../images/club/Pradeep.jpg';
import img27c from '../images/club/Shashiprakash.jpg';
import img28c from '../images/club/Kushal.jpg';
import img29c from '../images/club/Meet.jpg';
import img30c from '../images/club/Saransh.jpg';
import img31c from '../images/club/Wilson.jpg';
import AOS from 'aos';


const ClubMember=({src,name,role,mail,lin}) =>{
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <div className="clubMember" data-aos="fade-up" data-aos-once="true">
          <div className="icon">
            <img className="club_img" src={src} alt=""/>
            <div className="club_icons">
            <a href={"mailto:"+ mail}><Hi.HiMail className="c_mail"/></a>
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
            <div className="club_head" data-aos="fade-in" data-aos-once="true">
                <h1>Our Team</h1>
            </div>
            <div className="club_members">
              <div className="cm_row1">
                <ClubMember 
                src={img1c}
                name="K Eshwar Sai Srinivas"
                role="Convenor"
                mail="kessrinivas.181me141@nitk.edu.in"
                lin="https://www.linkedin.com/in/sai--srinivas/"/>
                <ClubMember 
                src={img2c}
                name="Ankit Gupta"
                role="President"
                mail="ankitgupta.181ch007@nitk.edu.in"
                lin="https://www.linkedin.com/in/ankitg0812/"/>
                <ClubMember 
                src={img3c}
                name="Rishu Kumar"
                role="Secretary"
                mail="rishu.181ch034@nitk.edu.in"
                lin="https://www.linkedin.com/in/rishu-kumar-3b93a7170/"/>
                <ClubMember 
                src={img4c}
                name="Kaustubh Prashant Sonawane"
                role="Technical Head"
                mail="kaustubhsonawane.181me236@nitk.edu.in"
                lin="https://www.linkedin.com/in/kaustubh-sonawane-80a326192"/>
                <ClubMember 
                src={img5c}
                name="Diwakar S Goud"
                role="Technical Head"
                mail="diwakarsgoud.181me122@nitk.edu.in"
                lin="http://www.linkedin.com/in/diwakar-s-goud"/>
              </div>
              <div className="cm_row2">
                <ClubMember 
                src={img6c}
                name="Vishlavath Tarun"
                role="Senior Executive member"
                mail="tarunnaik.181me186@nitk.edu.in"
                lin="https://www.linkedin.com/in/vishlavath-tarun-088477193"/>
                <ClubMember 
                src={img7c}
                name="Sakshi Bagde"
                role="Senior Executive member"
                mail="sakshi.181me172@nitk.edu.in"
                lin="https://www.linkedin.com/in/sakshi-bagde-759993192/"/>
                <ClubMember 
                src={img8c}
                name="Sagar"
                role="Senior Executive member"
                mail="sagar.181me171@nitk.edu.in"
                lin="https://www.linkedin.com/in/sagar-ror-8b52621b2"/>
                <ClubMember 
                src={img9c}
                name="N Rahul"
                role="Senior Executive member"
                mail="rahuljavaharlal.181me153@nitk.edu.in"
                lin="https://www.linkedin.com/in/rahuljavaharlal-nenavath-66621b1a4"/>
              </div>
              <div className="cm_row3">
                <ClubMember 
                src={img10c}
                name="Islavath Manohar"
                role="Senior Executive member"
                mail="islavathmanohar.181me231@nitk.edu.in"
                lin="http://linkedin.com/in/manohar-islavath-11908716a"/>
                <ClubMember 
                src={img11c}
                name="Gauthamkrishna S"
                role="Senior Executive member"
                mail="gauthamkrishnas.181me125@nitk.edu.in"
                lin="https://www.linkedin.com/in/gauthamkrishna-s-452781195"/>
                <ClubMember 
                src={img12c}
                name="Krishna Reddy B V"
                role="Senior Executive member"
                mail="krishnareddy.181me139@nitk.edu.in"
                lin="https://www.linkedin.com/in/krishna-reddy-a0b89b188"/>
              </div>
              <div className="cm_row4">
                <ClubMember 
                src={img13c}
                name="Patrike Vedika Rajkumar"
                role="KEP Coordinator"
                mail="patrikevedika.191me256@nitk.edu.in"
                lin="https://www.linkedin.com/in/vedika-patrike-96a9a719b"/>
                <ClubMember 
                src={img14c}
                name="Manoj G S"
                role="KEP Coordinator"
                mail="manojgshekargmailcom.191ec224@nitk.edu.in"
                lin="https://www.linkedin.com/in/manoj-g-s-715a07190"/>
                <ClubMember 
                src={img15c}
                name="Mihir Mali"
                role="Media Coordinator"
                mail="mihir.191ME148@nitk.edu.in"
                lin="https://www.linkedin.com/in/mihir-mali-5247281b3/"/>
                <ClubMember 
                src={img16c}
                name="Akshay Kumar R R"
                role="Media Coordinator"
                mail="akshaykumarrr.191mt003@nitk.edu.in"
                lin="https://www.linkedin.com/in/akshay-ram-5024021b8"/>
              <ClubMember 
                src={img17c}
                name="Prasanthi Bolimera"
                role="Web Master"
                mail="prasanthibolimera.191it240@nitk.edu.in"
                lin="https://www.linkedin.com/in/prasanthi-bolimera-3963391ba/"/>
                </div>
              <div className="cm_row5">
                <ClubMember 
                src={img18c}
                name="Shrivatsa Hegde"
                role="Event Coordinator"
                mail="shrivatsahegde.191me280@nitk.edu.in"
                lin="https://www.linkedin.com/in/shrivatsa-hegde-44b5b1208/"/>
                <ClubMember 
                src={img19c}
                name="Likhita J"
                role="Blog Coordinator"
                mail="likhita.191ee221@nitk.edu.in"
                lin="https://www.linkedin.com/in/likhita-j-20435219a/"/>
                <ClubMember 
                src={img20c}
                name="Lucky Prameeth Rayi "
                role="Publicity Head"
                mail="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"
                lin="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"/>
                <ClubMember 
                src={img21c}
                name="Guhan Sidharth M"
                role="Treasurer"
                mail="guhan.191me134@nitk.edu.in"
                lin="https://www.linkedin.com/in/guhan-sidharth-m-b92043208/"/>
              </div>
              <div className="cm_row5">
                <ClubMember 
                src={img22c}
                name="Lakshmi Aashish Prateek Janaswamy"
                role="Executive Member"
                mail="aashishprateek.191cs225@nitk.edu.in"
                lin="http://linkedin.com/in/aashish-prateek-090009167"/>
                <ClubMember 
                src={img23c}
                name="Shunu P S"
                role="Executive Member"
                mail="shunu.191me281@nitk.edu.in"
                lin="https://www.linkedin.com/in/shunu-ps/"/>
                <ClubMember 
                src={img24c}
                name="Diksha Negi"
                role="Executive Member"
                mail="dikshanegi.191me129@nitk.edu.in"
                lin="https://www.linkedin.com/in/diksha-negi-37b0bb1b4/"/>
                <ClubMember 
                src={img25c}
                name="Sumit Sagar"
                role="Executive Member"
                mail="sumit.191me285@nitk.edu.ins"
                lin=""/>
              </div>
              <div className="cm_row5">
              <ClubMember 
                src={img26c}
                name="Pradeep Singh Solanki"
                role="Executive Member"
                mail="pradeepsinghsolanki.191me259@nitk.edu.in"
                lin="https://www.linkedin.com/in/Pradeep-Singh-Solanki/"/>
                <ClubMember 
                src={img27c}
                name="Aenugutala Shashi Prakash"
                role="WebDev Team"
                mail="shashiprakash.191it204@nitk.edu.in"
                lin="https://www.linkedin.com/in/shashi-prakash-aenugutala-62789b1b9"/>
                <ClubMember 
                src={img28c}
                name="Kushal Narayan Gowda"
                role="Executive Member"
                mail="kushalnarayangowda.191ch019@nitk.edu.in"
                lin="https://www.linkedin.com/in/kushal-narayan-gowda/"/>
              </div>
              <div className="cm_row5">
                <ClubMember 
                src={img29c}
                name="Meet Ajay Shah"
                role="Executive Member"
                mail="meet.191ee133@nitk.edu.in"
                lin="https://www.linkedin.com/in/meet-shah-8a5794179/"/>
                <ClubMember 
                src={img30c}
                name="Saransh Bhaduka"
                role="Executive Member"
                mail="saranshbhaduka.191me175@nitk.edu.in"
                lin="https://www.linkedin.com/in/saransh-bhaduka-841a1619b/"/>
                <ClubMember 
                src={img31c}
                name="Wilson Furtado"
                role="WebDev Team"
                mail="wilson.191cv155@nitk.edu.in"
                lin="https://www.linkedin.com/in/wilson-furtado-58a23018b/"/>
              </div>
            </div>
            </div>

    )

}
