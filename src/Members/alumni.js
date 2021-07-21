import React,{useEffect} from 'react';
import './alumni.css';

import * as AiIcons from 'react-icons/ai';
import alumni_img1 from '../images/alumni/alumni_1.jpeg';
import alumni_img2 from '../images/alumni/alumni_2.jpg';
import alumni_img3 from '../images/alumni/alumni_3.jpg';
import alumni_img4 from '../images/alumni/alumni_4.jpg';
import alumni_img5 from '../images/alumni/alumni_5.jpg';
import alumni_img6 from '../images/alumni/alumni_6.jpg';
import alumni_img7 from '../images/alumni/alumni_7.jpg';
import alumni_img8 from '../images/alumni/alumni_8.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AOS from 'aos';

const Alumni_mem=({img,name,year,position,email,message,lin}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return(
        <div className="alumni"  data-aos="fade-in" data-aos-once="true">
         <div className="alumni-image"><img 
          src={img} 
          width="200px"
          height="auto"
          alt=""/></div>
        <div className="alumni-info">
          <p className="alumni-name">{name}</p>
          <p className="alumni-position">{position}</p>
          <p className="alumni-year">Batch of {year}</p>
          <p className="alumni-message">{message}</p>
          <div className="alumni-contact">
           <AiIcons.AiFillLinkedin className="alumni-in"  onClick={()=> window.open(lin, "_blank")}/>
           <a className="alumni-contact-btn" href={"mailto:"+ email} style={{ textDecoration:"none"}}>
             Contact <MailOutlineIcon fontSize="large"/></a>
          </div>  
         </div>
        </div>
    )
}

function Alumni(){
    return(
        <div className="alumni-main">
            <div className="alumni-heading"  data-aos="fade-in" data-aos-once="true">
              <p>Alumni</p>
            </div>
            <Alumni_mem 
              img={alumni_img1}
              name="Rahul Madhogarhiya"
              position=""
              year="2020"
              email="madhogarhiarahul@gmail.com"
              message="SAE-NITK has become one of the most happening and resourceful 
              clubs in the past two years for automotive technologies and knowledge 
              sharing. It spans across the different domains in automobile engineering,
              including electric vehicles, hybrid systems, and self-driving cars.
              The team has been growing every year with more passionate and 
              dedicated members from all disciplines of engineering, making it a 
              very engaging and fun organization to learn together. I had the 
              privilege of leading this club with a team of wonderful people
              during my final year, which gave me an experience worth remembering.
              “Driven through passion” - that's what SAE and its members believe in."
              lin="https://www.linkedin.com/in/madhogarhiarahul/" />
            <Alumni_mem 
              img={alumni_img2}
              name="Pawan Pawar"
              position="R&D Engineer, Advanced Defence Systems Navy(ADSN) at BEL"
              year="2020"
              email="pavanpawar1420@gmail.com"
              message="Being part of SAE NITK was second best that ever happened to me. Learnt lots of 
              things from my peers and juniors. Now that juniors have taken this club to another level
              by doing plethora of work and projects"
              lin="https://www.linkedin.com/in/ppawar07" />
            <Alumni_mem 
              img={alumni_img3}
              name="Shaurya Seth"
              position="Upcoming MS Student @UCLA"
              year="2020"
              email="shaurya.seth480@gmail.com"
              message="Hi guys! I would like to share some things which I was fortunate enough to come 
              across during my college life. Although I joined SAE as the standing President for the even
               semester of 2019-20 academic year, I learned a lot because of the challenges people in the
                core faced or rather were facing. Every situation or circumstance in your life teaches you
                 something. Eventually, this cognizance is highly regarded as experience which enables one
                to become astute and incisive. I would just say, people are opportune to face problems 
                and issues during their college life and come up with practical solutions, because 
                that is life, and no book can teach that. So, be vigilant and grab these opportunities
                by taking up challenges, through being a part of a club, participating in competitions,
                organizing events etc. Lastly, enjoy this segment of your life as much as you can, so
                that one day, you can reminisce those 4 yrs holding a beer in your hand on a beach in
                California. xD P.S. We did, and now it is your time to."
                lin="https://www.linkedin.com/in/shauryaseth1412/" />
            <Alumni_mem 
              img={alumni_img4}
              name="Rajat Shukla"
              position="Research Intern at Indian Institute of Technology, Delhi"
              year="2021"
              email="rajatme58@gmail.com"
              message="I have witnessed SAE NITK grow by leaps and bounds and am glad to be a part of 
              this journey. The club has made me grow professionally as well as technically. The members 
              are really passionate for their work and that's what makes the club one of the most active
              clubs in the college."
              lin="https://www.linkedin.com/in/rajat-shukla07/" />
            <Alumni_mem 
              img={alumni_img5}
              name="Pradeep Kumar Modi"
              position="Summer Intern at GARC Chennai"
              year="2021"
              email="pradeepkumar.171me152@nitk.edu.in"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               it esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               ulpa qui officia deserunt mollit anim id est laborum."
               lin="https://www.linkedin.com/in/pradeep-kumar-modi-74ab25190/" />
            <Alumni_mem 
              img={alumni_img6}
              name="Devendra Gharat"
              position=""
              year="2021"
              email=""
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               it esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               ulpa qui officia deserunt mollit anim id est laborum."
               lin="https://www.linkedin.com/in/devendra-gharat/" />
            <Alumni_mem 
              img={alumni_img7}
              name="Shripad Prakash Kelapure"
              position=""
              year="2021"
              email="shripad.171me170@nitk.edu.in"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               it esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               ulpa qui officia deserunt mollit anim id est laborum."
               lin="https://www.linkedin.com/in/shripad-k/" />
            <Alumni_mem 
              img={alumni_img8}
              name="Ninad Lamture"
              position=""
              year="2021"
              email="ninadlamture27@gmail.com"
              message="Club is doing great work in terms of project, seminars, KEP and more. The current 
              member especially core team are really more motivated to make a statement and working hard
              to club to greater heights. I came across really good senior and also enthusiastic juniors.
              Sorry I didn't paid attention towards the work especially during the covid period but I knew the 
              club is good hand and that's what's most important."
              lin="https://www.linkedin.com/in/ninadlamture/" />
            </div>
    )
}

export default Alumni