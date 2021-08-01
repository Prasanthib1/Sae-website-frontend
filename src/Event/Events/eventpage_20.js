import React from "react";
import EventTemplate from './event_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './event_page.css';

import autocad from '../../images/Events/autocad.png';
import mind_fiz from '../../images/Events/mind-fiz.jpg';
import keynote from '../../images/Events/keynote.jpg';
import kasting from '../../images/Events/kasting.jpg';
import otto from '../../images/Events/otto-quiz.png';
import mat_sim from '../../images/Events/matlab-simulink.jpg';
import career from '../../images/Events/Career-building.jpg';

function Event1_20(){
    return(
    <div>
        <EventTemplate 
         title=" AutoCAD Workshop"
         img={autocad}
         desc="The workshop aimed at covering the basics of 2D and 3D design and modeling of automobile components using the AutoCAD software. It was a hands-on session where the attendees had to follow the instructions given by the speaker, Mr. Sachin Kuchekar, third-year Mechanical Engineering, and implement them on their own system. The event spanned for around 2 hours, starting with the basics of the software such as 2D design using different tools followed by the 3D modeling of a crankshaft.
         "
         date="August 7, 2019"
         platform="In-person on the campus"
         speakers="Mr. Sachin Kuchekar"
         type="External" />
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
         date="September 28, 2019"
         platform="In-person on the campus"
         speakers="SAE NITK"
         type="External" />
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
         date="October 18, 2019"
         platform="In-person on the campus"
         speakers="SAE NITK"
         type="External" />
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
         platform="In-person on the campus"
         speakers="Mr. Pradeep Modi"
         type="External"
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
         date="October 29, 2019"
         platform="In-person on the campus"
         speakers="Mr. Anish Dua and Mr. Diwakar Goud"
         type="External" />
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
        with SAEINDIA. The inaugural ceremony of the event  was presided over by Dr. Jagannath Nayak (DSW) and
        Prof. Ananthanarayana V.S. (Deputy Director), MCed by Mr. Shaurya Seth (President of SAE-NITK). 
        Furthermore, the crowd witnessed the launch of SAE magazine Techbuzz, with the inauguration by the 
        dignitaries present on the dias.The event consisted of talks on Autonomous Vehicles on day 1 by three 
        of the speakers from Robert Bosch Engineering namely Mr. Prakash Verma, Mr. Sreeram S., and Ms. Devayani
        Kulkarni. It was a 3hrs long session on the first day. Day 2 consisted of a talk by Mr. Devaraj Tuppad 
        from Vitesco Technologies on Hybrid and Electric Vehicles. The talk was for 3hrs and described the 
        existing technology in the field and their future prospects. The talk on the last day of the event was
        by Mr. Neelakandan Chandrasekaran from 3M India Ltd. on the topic, Smart Materials followed by question
        answers from the audience. The closing ceremony consisted of a few words from our faculty advisor 
        Prof. Poornesh Kumar and Mr. Shaurya Seth, followed by a group photo.
         "
         date="January 28-30, 2020"
         platform="In-person on the campus"
         speakers=" Mr. Prakash Verma, Mr. Sreeram S., and Ms. Devayani Kulkarni, Mr. Devaraj Tuppad, Mr. Neelakandan Chandrasekaran"
         type="External " />
    </div>
    )
}

function Event7_20(){
    return(
    <div>
        <EventTemplate 
         title="Career Building KEP"
         img={career}
         desc="The event was a knowledge exchange program by, Mr. Rahul Madhograhia (Convenor SAE-NITK 2019-20), 
         and Mr. Dhruv Thakkar (Final year, Mechanical Engineering Dept). The KEP started with Mr. Rahul addressing
        the crowd with the help of a PowerPoint presentation on CV/Resume building tips, a brief about the letter
        of recommendations about what they are and how to procure them followed by delivery of internship 
        opportunities rolled out by various companies and institutes across India and abroad. It even consisted
        of assisting club members to build a rough draft of their CVs on LaTex. Finally, the KEP concluded by 
        Mr. Dhruv addressing the crowd and sharing his past experiences on the points mentioned above for
        better clarity on things and process intricacies involved."
         date="March 12, 2020"
         platform="In-person on the campus"
         speakers="Mr. Rahul Madhograhia and Mr. Dhruv Thakkar"
         type="External " />
    </div>
    )
}

export {
    Event1_20,
    Event2_20,
    Event3_20,
    Event4_20,
    Event5_20,
    Event6_20,
    Event7_20,
  }