import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './event_page.css';

import gate_webinar from './gate-webinar.png'
import rspant from '../../images/Events/webinar-rspant.jpg';
import matlab from '../../images/Events/matlab.jpeg';
import simulink from '../../images/Events/simulink.jpeg';
import solidworks from '../../images/Events/solidworks.jpeg';
import adobe from '../../images/Events/adobe.jpg';
import cosmol from '../../images/Events/cosmol.png';
import autocad from '../../images/Events/Autocad.jpg';
import mind_fiz from '../../images/Events/mind-fiz.jpg';
import keynote from '../../images/Events/keynote2.jpg';
import kasting from '../../images/Events/kasting.jpg';
import otto from '../../images/Events/otto-quiz.jpg';
import mat_sim from '../../images/Events/matlab-simulink.jpg';
import career from '../../images/Events/Career-building.jpg';
import magazine from '../../images/Events/magazine.jpeg';

const EventTemplate=({title, img ,desc, date, speakers, platform, type}) => {
    return(
        <div className="event_page my-5">
            <h1 className="ep-title text-center col-12 my-5">{title}</h1>
            <img className="ep-img text-center center-block mx-auto" width="600px" height="auto" src={img}/>
            <div className="ep-about text-center">About the event</div>
            <div className="ep-desc text-center my-5">{desc}</div>
            <div className="ep-info">
            <p className="ep-date text-center"><b>Date : </b>{date}</p>
            <p className="ep-date text-center"><b>Speaker(s) : </b>{speakers}</p>
            <p className="ep-date text-center"><b>Platform : </b>{platform}</p>
            <p className="ep-date text-center"><b>Type of Event : </b>{type}</p>
            </div>
        </div>
    )

}

function Event1_21(){
    return(
    <div>
        <EventTemplate 
         title="Webinar by Prof RS Pant"
         img={rspant}
         desc="The webinar was conducted by Dr. Rajkumar S Pant, a professor in the Department of Aerospace Engineering, Indian Institute of Technology, Bombay. It was focused on meditation and yoga which helps in handling anxiety especially in the pandemic scenario.
         It started off with a brief discussion about the COVID – 19 pandemic scenario until then: its causes, its effects on public health, effects on other sectors with a special focus on aerospace sector. “Equip or Enrich yourself” – a formula to gear up and make oneself future proof was discussed. A gist of how minds do actions and techniques to develop bare observations were covered. 
         Finally, all the participants performed a form of Buddhist meditation “Anapana Sati”, which translates to “mindfulness of breathing”. This 10 minute activity enabled the attendees to witness the real feeling of how effective meditation can produce a calm and relaxed mind.
         "
         date="May 31, 2020"
         speakers="Dr. Rajkumar S Pant"
         platform="Zoom"
         type=" " />
    </div>
    )
} 

function Event2_21(){
    return(
    <div>
        <EventTemplate 
         title="MATLAB KEP"
         img={matlab}
         desc="The KEP was conducted by Diwakar S Goud. The first phase focused on installation of Matlab. 
         The different sources to learn about the software were also explored. In the second phase basic 
         coding, the GUI and the different built-in apps in Matlab were covered.  The events was open to 
         members of the club."
         date="October 23, 2020 (Phase 1)
         October 24, 2020 (Phase 2)"
         speakers="Diwakar S Goud"
         platform="MS Teams"
         type="Only members of sae" />
    </div>
    )
}

function Event3_21(){
    return(
    <div>
        <EventTemplate 
         title="Simulink KEP"
         img={simulink}
         desc="The event was conducted by Rishu Kumar and Ankit Gupta. It was divided into two phases.
         The first phase dealt with the basics of Simulink. A general overview of the software, such as the types and models that can be made, was discussed along with a specific view of a blank Simulink model. The various toolboxes and the associated shortcuts were dealt with. Mathematical toolboxes such as sine, transfer functions, gain, display, etc., were also briefed. A simple step function was simulated in the model to find out the display functions of various trigonometric functions.
         The second phase dealt with certain advanced features and functionalities. PID controller and various tuning methods were discussed. The participants were introduced to various features of transfer functions of first and second order. Visualisation of graphs and optimization were also included in the KEP. 
         The event was open to the members of the club.         
         "
         date="December 18, 2020 (Phase 1)
         January 17, 2021 (Phase 2)"
         speakers="Rishu Kumar, Ankit Gupta"
         platform="MS Teams"
         type="Only members of sae"  />
    </div>
    )
}

function Event4_21(){
    return(
    <div>
        <EventTemplate 
         title="SolidWorks KEP"
         img={solidworks}
         desc="The KEP was conducted by Eshwar Sai Srinivas. It covered a wide range of topics in Solidworks from sketching to custom weldment. The basics of sketching such as drawing lines, circles, etc., along with applying suitable constraints such as tangent, horizontal, etc., was discussed with examples. Sketch patterns and section planes were also explained.
         The basics of 3D modelling such as extrusion, loft, sweep etc was dealt with. Edit features like trim, fillet, chamfer, etc., were discussed. Modelling problems associated with the conversion of orthographic views to isometric views and vice-versa were also covered. Multi-section solid, helix spring and weldments were briefed. 
         The event was open to the members of the club.                 
         "
         date="January 21, 2021 (Phase 1)
         January 23, 2021 (Phase 2)"
         speakers="Eshwar Sai Srinivas"
         platform="MS Teams"
         type="Only members of sae" />
    </div>
    )
}

function Event5_21(){
    return(
    <div>
        <EventTemplate 
         title="Adobe Photoshop KEP"
         img={adobe}
         desc="The KEP was conducted by Islavath Manohar. It was mainly based on the tools used for editing photos in Adobe Photoshop. The usage of layers and filters was explained. Certain shortcuts were discussed. Editing of images captured in camera was also covered.
         The event was open to the members of the club.                            
         "
         date="February 06, 2021"
         speakers="Islavath Manohar"
         platform="MS Teams"
         type="Only members of sae" />
    </div>
    )
}

function Event6_21(){
    return(
    <div>
        <EventTemplate 
         title="COMSOL KEP"
         img={cosmol}
         desc="A 2 hour KEP on Comsol was conducted by Rajat Shukla, Convenor of SAE NITK. Basics of modelling and analysis were covered along with battery modelling, heat transfer and fluid flow analysis. The event was open to the members of SAE NITK and other students of NITK as well.                            
         "
         date="February 28, 2021"
         speakers="Rajat Shukla"
         platform="Google Meet"
         type="All the students of NITK" />
    </div>
    )
}


function Event7_21(){
    return(
    <div>
        <EventTemplate 
         title="Internship Webinar"
         img="http://localhost:3000/static/media/pre-2.9805bb0d.jpg"
         desc="The webinar was conducted in two phases.
         The first phase mainly dealt with internship opportunities in the fields of research and management. Rajat Shukla spoke about the various types of fellowships, their application processes, the perks associated, etc., with a special focus on internships in the core domain. He also spoke about his own internship experience. 
         Rishu Kumar and Ankit Gupta dealt with the topic of cold mailing. They shared detailed information about the content to include, making the right choice of professors and projects, and the general dos and don’ts in cold mailing. 
         Sagar talked about the Indian Academy of Sciences (IAS) fellowship with a special focus on SOPs and LORs. 
         Shuvam Senapati, a former convenor of SAE NITK was also present to talk about CAT, careers and internships in management and also shared a glimpse of his approach towards projects, internships and college life in general.
         The second phase was mainly focused on industrial internships. Kaustubh Sonawane and Eshwar Sai Srinivas spoke about bagging internships in the core domain from campus. Nisarg Shah and Karan Jain provided insights about earning internship opportunities in the non-core domains. Finally, Pradeep Kumar Modi spoke about off campus core internships in companies such as IOCL, SAIL, GARC, etc.,.
         All the speakers were very happy to answer the doubts and questions of the other participants. The event was open to all the students of NITK.                                    
         "
         date="March 13, 2021 (Phase 1)
         March 14, 2021 (Phase 2)"
         speakers="Rajat Shukla, Rishu Kumar, Ankit Gupta, Sagar, Shuvam Senapati, Kaustubh Sonawane, Eshwar Sai Srinivas and Pradeep Kumar Modi"
         platform="MS Teams"
         type="All the students of NITK" />
    </div>
    )
}

function Event8_21(){
    return(
    <div>
        <EventTemplate 
         title="Interactive Session on GATE"
         img={gate_webinar}
         desc="The event was conducted to enable the undergraduate students to learn about the experiences of GATE toppers in terms of building deep conceptual understanding, preparation strategies, time management both during preparation and in the exam scenario, along with a structured approach to attempting mock tests. The importance of GATE in securing PSU/Government jobs, research oriented jobs in prestigious institutions such as DRDO, BARC, etc., and higher studies opportunities in IITs, IISc, and foreign universities such as NUS, NTU (Singapore) was also discussed. The speakers actively answered the constructive questions posed by the attendees.
         The event was hosted by Diksha Negi and Pradeep Singh Solanki. One of the speakers Abhisheka Shetty, who secured AIR 05 in GATE 2021 mechanical engineering was sponsored by “Exergic”. The other speaker was an alumnus of NITK, Bharath Desikan who secured AIR 17 in GATE 2021 chemical engineering.  
         The event witnessed participation from students of NIT Surathkal, MNNIT Allahabad, NIT Silchar and various other colleges.
                                            
         "
         date="May 09, 2021"
         speakers="Abhisheka Shetty and Bharath Desikan"
         platform="MS Teams"
         type="Open to everyone"
         />
    </div>
    )
}

function Event9_21(){
    return(
    <div>
        <EventTemplate 
         title="Magazine Release"
         img={magazine}
         desc="The second volume of SAE NITK’s annual magazine Techbuzz was released this year. The theme of the magazine was Electric Vehicles. A total of 14 articles covering the historical, technical, financial and environmental aspects of EVs have been published. The articles have been authored by various members of the club belonging to different SIGs.
         “Exergic” is the official sponsor for Techbuzz Vol 2.
         (List of articles of the magazine available in appendix – page 33)                                              
         "
         date="May 31, 2021"
         speakers="-"
         platform="-"
         type="-"/>
    </div>
    )
}

function Event10_21(){
    return(
    <div>
        <EventTemplate 
         title="Website release"
         img="http://localhost:3000/static/media/pre-2.9805bb0d.jpg"
         desc="The revamp of the club website started in October 2020. A new website has been developed with the aim of making it more interactive for the users and simplifying the various procedures involved in the club. It has been built using React JS as compared to the current website that was built using WordPress. It is a responsive website that has various front end and back end features for presenting valuable club information such as projects, blogs, members, etc., to the outside world. 
         A lot of dedicated effort from the web development team has gone into the development of this new website. Presently, it is under final stages of development and testing. The release is expected soon.                                            
         "
         date="-"
         speakers="-"
         platform="-"
         type="-" />
    </div>
    )
}
/****************** */

function Event1_20(){
    return(
    <div>
        <EventTemplate 
         title="AutoCAD Workshop"
         img={autocad}
         desc="The workshop aimed at covering the basics of 2D and 3D design and modeling of automobile components using the AutoCAD software. It was a hands-on session where the attendees had to follow the instructions given by the speaker, Mr. Sachin Kuchekar, third-year Mechanical Engineering, and implement them on their own system. The event spanned for around 2 hours, starting with the basics of the software such as 2D design using different tools followed by the 3D modeling of a crankshaft.
         "
         date=" "
         speakers="Mr. Sachin Kuchekar"
         platform="In-person on the campus"
         type="All the students of NITK" />
    </div>
    )
}

function Event2_20(){
    return(
    <div>
        <EventTemplate 
         title="The Mind Fiz"
         img={mind_fiz}
         desc="It was a 24-hour online event, the problem statement for which was circulated to the registered Participation and they were required to submit their CAD files having the full assembly of a CV Axle. It was conducted after the AutoCAD Workshop conducted by SAE-NITK to help the attendees practice the knowledge gained in the workshop."
         date=" "
         speakers=" - "
         platform="In-person on the campus"
         type="All the students of NITK" />
    </div>
    )
}

function Event3_20(){
    return(
    <div>
        <EventTemplate 
         title="Kasting"
         img={kasting}
         desc="SAE-NITK in collaboration with MetaMorph, Metallurgy Committee as part of our technical fest, Engineer’19, conducted a presentation on the crankshaft part of automobiles, in addition to the process of building a sand mold and the explanation of various tools used for it. Furthermore, the presentation was followed by a demonstration of the casting process of the crankshaft using Aluminium metal. The event was an hour-long including the presentation and the casting demo."
         date=" "
         speakers=" "
         platform="In-person on the campus"
         participants="All the students of NITK" 
         />
    </div>
    )
}

function Event4_20(){
    return(
    <div>
        <EventTemplate 
         title="MATLAB & Simulink Workshop"
         img={mat_sim}
         desc="The workshop was spanned across two days and was mainly focussed on covering the basics of
        MATLAB such as Scalar, Vector and Matrix operations, strings and plotting and on day 1 followed
        Functions, Cell Arrays and Mathematical Optimisation using Gauss-Seidel and other methods on 
        day 2. It was a hands-on session wherein the attendees had to execute the instructions given by 
        the speaker, Mr. Pradeep Modi, third-year Mechanical Engineering on their system and practice
        accordingly. Each session lasted for two to three hours depending on the topics covered and
        Q&As from the audience. The workshop received very positive feedback from the audience."

         date="October 23, 2019"
         speakers="Mr. Pradeep Modi"
         platform="In-person on the campus"
         participants="All the students of NITK"
         />
        </div>
    )
}

function Event5_20(){
    return(
    <div>
        <EventTemplate 
         title="Otto Quiz"
         img={otto}
         desc="Otto quiz was a competition based on automobiles for the first-year students. The event was
        hosted by the second year Mechanical Engineering students Mr. Anish Dua and Mr. Diwakar Goud. The 
        quiz had only one round, consisting of non-factual questions asked in a jovial manner so as to make
        a recreational ambiance for the new admissions. The quiz spanned out for an hour. The candidates
        gave their best, however, only one was felicitated."
         date=" "
         moc="In-person on the campus"
         speakers="-"
         type="Open to everyone" />
    </div>
    )
}

function Event6_20(){
    return(
    <div>
        <EventTemplate 
         title="Keynote Talk Series"
         img={keynote}
         desc="The Keynote Talk series spanned from 28th to 30th January. The event was in collaboration 
         with SAEINDIA. The inaugural ceremony of the event  was presided over by Dr. Jagannath Nayak (DSW) and Prof. Ananthanarayana V.S. (Deputy Director), MCed by Mr. Shaurya Seth (President of SAE-NITK). Furthermore, the crowd witnessed the launch of SAE magazine Techbuzz, with the inauguration by the dignitaries present on the dias.
         The event consisted of talks on Autonomous Vehicles on day 1 by three of the speakers from Robert Bosch Engineering namely Mr. Prakash Verma, Mr. Sreeram S., and Ms. Devayani Kulkarni. It was a 3hrs long session on the first day. Day 2 consisted of a talk by Mr. Devaraj Tuppad from Vitesco Technologies on Hybrid and Electric Vehicles. The talk was for 3hrs and described the existing technology in the field and their future prospects. The talk on the last day of the event was by Mr. Neelakandan Chandrasekaran from 3M India Ltd. on the topic, Smart Materials followed by question answers from the audience. The closing ceremony consisted of a few words from our faculty advisor Prof. Poornesh Kumar and Mr. Shaurya Seth, followed by a group photo.
         "
         date=" "
         speakers="Mr.Prakash Verma, Mr.Sreeram S., Ms. Devayana Kulkarni, Mr. Devaraj Tuppad and Mr. Neelankantan Chandrasekaran"
         platform="In-person on the campus"
         type="All the students of NITK"
          />
    </div>
    )
}

function Event7_20(){
    return(
    <div>
        <EventTemplate 
         title="Career Building KEP"
         img={career}
         desc="The event was a knowledge exchange program by, Mr. Rahul Madhograhia (Convenor SAE-NITK 2019-20), and Mr. Dhruv Thakkar (Final year, Mechanical Engineering Dept). The KEP started with Mr. Rahul addressing the crowd with the help of a PowerPoint presentation on CV/Resume building tips, a brief about the letter of recommendations about what they are and how to procure them followed by delivery of internship opportunities rolled out by various companies and institutes across India and abroad. It even consisted of assisting club members to build a rough draft of their CVs on LaTex. Finally, the KEP concluded by Mr. Dhruv addressing the crowd and sharing his past experiences on the points mentioned above for better clarity on things and process intricacies involved."
         date=" "
         speakers="Mr. Rahul Madhograhia and Mr. Dhruv Thakkar"
         platform="In-person on the campus"
         type="Only members of the club " />
    </div>
    )
}

export {
    EventTemplate,
    Event1_21,
    Event2_21,
    Event3_21,
    Event4_21,
    Event5_21,
    Event6_21,
    Event7_21,
    Event8_21,
    Event9_21,
    Event10_21,
    Event1_20,
    Event2_20,
    Event3_20,
    Event4_20,
    Event5_20,
    Event6_20,
    Event7_20,
  }

