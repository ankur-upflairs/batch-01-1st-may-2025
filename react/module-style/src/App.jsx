import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css"


function App() {
  //pass object to style and object key -css property , value is value
  //value must be in string 
  //in multiword properties -> remove hyphen and convert them into
  //camelcase 
  let inlineStyle={
    borderRadius:'10px',backgroundColor:"lightblue",
    padding:'4px 16px',border:'none'
  }
  return (
    <div>     
      <p className="x">paragraph</p>
      <p style={{
          color:'blue', fontSize :'40px'
      }}>hello everyone</p>
      <button style={inlineStyle}>click here</button>
    </div>
  );
}

export default App;






// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Header from "./Header";
// import { SideBar,Content } from "./Content";
// import Footer from "./Footer";
// //first letter of file name should be capital
// //extension should be .jsx

// //we export component or variable from file
// //export and export default 
// // export default - can only export one component
// //export = can import multiple component 
// //export and export default can be used at same time 

// // to use exported comp , we have import it 
// //u can import 'export default by any name
// //in importing of export - use curly brackets and same name as in file



// function App() {
//   return (
//     <div>
      
//       <Header></Header>
      
       
//       <Content />
      
      
//       <Footer />
//     </div>
//   );
// }

// export default App;
