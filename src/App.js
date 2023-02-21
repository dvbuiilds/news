import './App.css';
import React, { useState, Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Calender from './components/Calender';
import LoadingBar from '../node_modules/react-top-loading-bar/dist/index';
  // @ts-ignore

/**
 * Class based components provide us advantage with methods. rest is same as function based components.
 */

const App = ()=> {
  const [progress, setProgress] = useState(0);
  const API_KEY = process.env.REACT_APP_NEWS_API;


  const settingProgress = (progress)=>{
    setProgress(progress);
  };

  const name = "Dhairya";
    return (
      <>
        <LoadingBar
          color='#f11946'
          height={5}
          progress={progress}
          transitionTime={2000}
        />
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News apiKey={API_KEY} setProgress={settingProgress} key={"general"} country={"US"} pageSize={8} category={"general"}/></Route>
            <Route exact path="/general"><News apiKey={API_KEY} setProgress={setProgress} key={"general"} country={"US"} pageSize={8} category={"general"}/></Route>
            <Route exact path="/business"><News apiKey={API_KEY} setProgress={setProgress} key={"business"} country={"US"} pageSize={8} category={"business"}/></Route>
            <Route exact path="/entertainment"><News apiKey={API_KEY} setProgress={setProgress} key={"entertainment"} country={"US"} pageSize={8} category={"entertainment"}/></Route>
            <Route exact path="/health"><News apiKey={API_KEY} setProgress={setProgress} key={"health"} country={"US"} pageSize={8} category={"health"}/></Route>
            <Route exact path="/science"><News apiKey={API_KEY} setProgress={setProgress} key={"science"} country={"US"} pageSize={8} category={"science"}/></Route>
            <Route exact path="/sports"><News apiKey={API_KEY} setProgress={setProgress} key={"sports"} country={"US"} pageSize={8} category={"sports"}/></Route>
            <Route exact path="/technology"><News apiKey={API_KEY} setProgress={setProgress} key={"technology"} country={"US"} pageSize={8} category={"technology"}/></Route>
            <Route exact path="/calender"><Calender/></Route>
          </Switch>
          <Footer/>
        </Router>
      </>
    )
}
