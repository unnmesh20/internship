import "./App.css";
import Navbar from "./Navbar"
import Home from "./Home";
import Header from "./components/layout/Header";
import Education from "./components/layout/Education";
import Contact from "./components/layout/Contact";
import Github from './Github';
import Github1 from './Github1'

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
    <Github1></Github1>
    </div>
  );
}

export default App;
