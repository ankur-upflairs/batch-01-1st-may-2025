import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//components => 1 class component  2. functional component
//functional component -> js function -> name starts with capital letter
//always retun jsx
//to use a component call it as a tag
function Header() {
  return <div className="header">this is header</div>;
}

let SideBar = () => {
  return <div className="side">this is side bar</div>;
};
function Content() {
  return <div className="content">this is content</div>;
}

function App() {
  function Footer() {
    return <div>this is footer </div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="main">
        <SideBar />
      <Content />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   let name = 'suman'
//   //jsx -> allow to write html code inside js
//   let el1= <h1>hello everyone</h1>
//   //single parent element
//   //class -> className
//   let el2 = <div>
//      <h1 className='a'>hello </h1><p>world</p>
//   </div>
//   // every tag must be closed
//   let el3= <div>
//     <h1>hello {name} </h1>
//     <input type="text" ></input><br ></br>
//     <input type="text" readOnly />
//     {45+23}
//   </div>

//   //{} -> we use {} to insert js code into jsx
//   //can't use if-else and loop inside curly brackets
//   //ternary operator  -> map, for,filter
//   //use 20 tags in single jsx ->paragraph -> list -> table-> 2 inputs
//   return (
//     <>
//       {el3}
//      {/* hello every one  */}
//     </>
//   )
// }

// export default App
