import NavigationBar from "./components/NavigationBar";
import './App.css'
import HomeSection from "./components/HomeSection";
import WorkExpSection from "./components/WorkExpSection";
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSection from "./components/ProjectSection";
import YouthForDementia from "./components/YouthForDementia";
import ExCur from "./components/ExCur";
import Outreach from "./components/Outreach";
import More from "./components/More";


function App() {
  return (
    <>
      <NavigationBar/>
      <HomeSection/>
      <WorkExpSection/>
      <YouthForDementia/>
      <ProjectSection/>
      <Outreach/>
      <ExCur/>
      <More/>
    </>
  );
}

export default App;
