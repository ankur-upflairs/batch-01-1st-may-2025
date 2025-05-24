import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer,{ SideBar,Content } from "./Content";
//first letter of file name should be capital
//extension should be .jsx

//we export component or variable from file
//export and export default 
// export default - can only export one component
//export = can import multiple component 
//export and export default can be used at same time 

// to use exported comp , we have import it 
//u can import 'export default by any name
//in importing of export - use curly brackets and same name as in file



function App() {
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
