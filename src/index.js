import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Logo from './components/Logo.js';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Instruction from './components/Instruction.js';
import AboutUs from './components/AboutUs.js';
import ContactForm from './components/ContactForm.js';
import ColorBlindnessView from './components/ColorBlindnessView.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HueTest from './components/HueTest.js'


ReactDOM.render(

    <Router>
      <div>
        <Navbar></Navbar>

        <Header></Header>
        <Route exact path="/" component={Home}/>
        {/*<Route exact path="/" component={OtherComponent}/>*/}

        <Route path="/instructions" component={Instruction}/>
        <Route path="/quiz" component={App}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/contact-us" component={ContactForm}/>
        <Route path="/color-view" component={ColorBlindnessView}/>
        <Route path="/hue-test" component={HueTest}/>
      </div>
    </Router>,
 root);
registerServiceWorker();
