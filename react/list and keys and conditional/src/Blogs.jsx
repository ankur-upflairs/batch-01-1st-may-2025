import React from "react";
import Blog from "./Blog";
import { data } from "./blogData";

//conditional rendering


function Blogs() {
  return (
    <>
    <div className="row row-cols-4">
     {data.map((el,index,arr)=>{
        return <Blog key={index} {...el} />
     })}
     </div>
    </>
  );
}

// function Blogs() {
//   return (
//     <>
//     <ul>
//      {data.map((el,index,arr)=>{
//         return <li key={index}>Title - {el.title}</li>
//      })}
//      </ul>
//     </>
//   );
// }


export default Blogs;






