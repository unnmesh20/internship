import "./App.css";
import "./index.css";
import Header from "./components/layout/Header";
import Education from "./components/layout/Education";
import Contact from "./components/layout/Contact";
import Github from './Github';
import Github1 from './Github1'
import LifeCycleA from './LifeCycleA'
import Table from './AdvanceTopics/Table'
import FormikPractice from './AdvanceTopics/FormikPractice'
import ReactStrapPractice from './AdvanceTopics/ReactStrapPractice'
import Clicked from './AdvanceTopics/HigherOrderComponents/Clicked'
import Hovered from './AdvanceTopics/HigherOrderComponents/Hovered'
import FormikReact from './AdvanceTopics/FormikReact'
import Ref from './AdvanceTopics/RefsPractice/Ref'
import RefClassParent from "./AdvanceTopics/RefsPractice/RefClassParent";
import FwdRefP from "./AdvanceTopics/RefsPractice/FwdRefP";
import RenderPropsPractice from "./RenderProps/RenerPropsPractice";
import ClickTwo from "./RenderProps/ClickTwo";
import HoverTwo from './RenderProps/HoverTwo';
import React, { useReducer } from 'react';
import ComponentA from './AdvanceTopics/HooksPractice/ComponentA'
import UseReducerCounter from './AdvanceTopics/UseReducerCounter'
import ParentComponent from "./AdvanceTopics/HooksPractice/CallBack/ParentComponent";
import MemoHookCounter from "./AdvanceTopics/HooksPractice/MemoHookCounter";
import MainFile from './Imdb_Clone/MainFile'
import Search from "./Imdb_Clone/Search";




function App() {
  const temp1 = "Welcome, Let's learn React together";
  const temp2 = "Let's Begin";
  const url="https://www.google.com"
  return (
    <div className="App">
      {/* <Navbar/>
      <div className="content">
        <h1>App Component</h1>
        <p>{temp1}</p>
        <p>{temp2}</p>
        <p>{10 + 20}</p>
        <a href={url}>Google</a>
        <Home></Home>
      </div> */}
    {/* <Header></Header>
    <Education></Education>
    <Contact></Contact>  */}
     {/* <Github></Github> */}
    {/* <Github1></Github1> */}
    {/* <LifeCycleA></LifeCycleA> */}
    {/* <Table></Table> */}
    {/* <FormikPractice></FormikPractice> */}
    {/* <ReactStrapPractice></ReactStrapPractice> */}
    {/* <Clicked></Clicked> */}
    {/* <Hovered></Hovered> */}
    {/* <FormikReact></FormikReact> */}
    
    {/* <Ref></Ref> */}
    {/* <RefClassParent></RefClassParent> */}
    {/* <FwdRefP></FwdRefP> */}
    {/* <RenderPropsPractice render={(count,incrementCount) =>( */}
      {/* <ClickTwo count={count} incrementCount={incrementCount} /> */}
    {/* )} */}
    {/* /> */}
    {/* <RenderPropsPractice render={(count,incrementCount) =>(
      <HoverTwo count={count} incrementCount={incrementCount} /> */}
    {/* )} */}
    {/* /> */}
    {/* <h2 style={{marginLeft:"25rem"}}>WORKING OF 04.03.2021</h2> <br/> */}
    {/* <h4>PRACTICE OF REDUCER HOOK with USE CONTEXT</h4> <br/> */}
     {/* <ComponentA></ComponentA><br/> */}
     {/* <h4>PRACTICE OF CALLBACK HOOK</h4> <br/> */}
     {/* <ParentComponent></ParentComponent> <br/> */}
     {/* <h4>PRACTICE OF MEMO HOOK</h4> <br/> */}
     {/* <MemoHookCounter></MemoHookCounter> */}
     {/* <UseReducerCounter></UseReducerCounter> */}
     <MainFile></MainFile>
    
    
    </div>
  );
}

export default App;
