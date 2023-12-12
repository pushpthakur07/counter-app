
import React from 'react';
import './App.css';
import { useState } from 'react';
// import logo from './logo.svg';

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }


export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {

    if(counter >= 3){
    return
    }
    setCounter(counter+1)
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  // const x = 23;
  // let text = "goodddd";
  // if (x > 9){
  //   text = "hello"
  // }
  // const myElm = <h1>{text}</h1>
  const y = 5;

const myE = <h1>{(y) < 10 ? "Hello" : "Goodbye"}</h1>;
const my2 = <h1>{(y) > 4 ? "go" : "come"}</h1>

const paragraph = React.createElement('h3', {}, 'This is a paragraph without using JSX!');



 return (

    <div className = {`test level${counter} ${isActive ? "light" :  ""}`}>
    <div className="ticket-options" style={{ backgroundImage: `url('../hnt.jpg')` }}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <img src="../logo192.png" alt="logo" /> */}
      {/* <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton /> */}
     <div class="light_setng">
        <div class="light_btn switch" onClick={handleToggle}>
        <span class="switch-label" data-on="On" data-off="Off"></span> 
          <span class="switch-handle"></span>
        </div>
        <div className="option-adult">
              <button className="arrow-down arw-cmn" onClick={decrementCounter}></button>
              {/* <input type="text" value={counter}/> */}
              <button className="arrow-up arw-cmn" onClick={incrementCounter}></button>
          </div>
      </div>

    
  <div class="bulb-container">
    <div class="wire"></div>
    <div class="connector">
      <div class="grove"></div>
      <div class="grove"></div>
      <div class="grove"></div>
    </div>
  <div class="bulb">
    <div class="metal-wire"></div>
    <div class="metal-wire"></div>
    <div class="metal-wire"></div>
  </div>
</div>


    </div>
    {paragraph}
    <p>{my2}</p>
    <p>{myE}</p>
    </div>
  );
}
