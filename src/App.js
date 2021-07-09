import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './Home/home';
import Vision from './Home/Vision';
import Core from './Home/Core';
import Youtube from './Home/Youtube';
import Contact from './components/Contact';

import About from './AboutUs/About';

import App2 from './Blogs/Blogsmain';

import Club from './Members/Club';
import Alumni from './Members/alumni';

import Projects1 from './Projects/projects1';
import Projects2 from './Projects/projects2';
import Magazine from './Projects/magazine';

import EventMain from './Event/event2';
import {Event1_21, Event2_21, Event3_21, Event4_21, Event5_21, Event6_21, Event7_21, Event8_21, Event9_21, Event10_21,Event1_20, Event2_20, Event3_20, Event4_20, Event5_20, Event6_20, Event7_20} from './Event/Events/event_1';
//import { Carousel } from 'bootstrap';

function App() {
  return (
    <Router className="router">
      <Header />
       <Switch>
       <div className="app">
        <Route exact path="/">
          <Home />
          <Vision />
          <Core />
          <Youtube />         
        </Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/blog"><App2 /></Route>
        <Route exact path="/project1"><Projects1 /></Route>
        <Route exact path="/project2">
            <Projects2 />
            <Magazine />
        </Route>
        <Route exact path="/club"><Club /></Route>
        <Route exact path="/alumni"><Alumni/></Route>
        <Route exact path="/event"><EventMain /></Route>

        <Route exact path="/event/event1_21"><Event1_21/></Route>
        <Route exact path="/event2_21"><Event2_21/></Route>
        <Route exact path="/event3_21"><Event3_21/></Route>
        <Route exact path="/event4_21"><Event4_21/></Route>
        <Route exact path="/event5_21"><Event5_21/></Route>
        <Route exact path="/event6_21"><Event6_21/></Route>
        <Route exact path="/event7_21"><Event7_21/></Route>
        <Route exact path="/event8_21"><Event8_21/></Route>
        <Route exact path="/event9_21"><Event9_21/></Route>
        <Route exact path="/event10_21"><Event10_21/></Route>
        <Route exact path="/event1_20"><Event1_20/></Route>
        <Route exact path="/event2_20"><Event2_20/></Route>
        <Route exact path="/event3_20"><Event3_20/></Route>
        <Route exact path="/event4_20"><Event4_20/></Route>
        <Route exact path="/event5_20"><Event5_20/></Route>
        <Route exact path="/event6_20"><Event6_20/></Route>
        <Route exact path="/event7_20"><Event7_20/></Route>
        </div>
      </Switch>
      <Contact />
    </Router>
  );
}

export default App;

