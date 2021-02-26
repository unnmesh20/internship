import {useState} from 'react'
const Home = () => {
  const func1 = () => {
    console.log("Click me has been clicked");
  };
  
  const func2=(n) =>{
      console.log("Hello "+n);
  }
  //const name="mario";
  const [name,setNewName]=useState('mario');
  const func3=() =>{
      setNewName('Rapid');

  }
  return (
    <div className="home">
      <button onClick={func1}>Click me</button>
      {/* We need to understand that we don't write func1() because we dont want to invoke the function until click me is pressed. 
      Therefore if we write func1() then its called at the time of execution. */}
      <button onClick={()=>{
          func2("Everyone")
      }}>Click 2</button>
      <p>{name}</p>
      <button onClick={func3}>Dynamic Change</button>
    </div>
  );
};

export default Home;
