import React from "react";
import Blog from "./Blog";

let data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Air_pollution3.jpg",
    title: "Pollution",
    body: "pollution is not good for health",
  },
  {
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230420093202/Internet-image-(2).webp",
    title: "Internet",
    body: "internet is very useful",
  },
];

function Blogs() {
  return (
    <>
      <Blog image={data[0].image} title={data[0].title} body={data[0].body} />

      <Blog {...data[1]} />
    </>
  );
}

//component -> friend -> call it 5 times with different data 

// function Blogs() {
//   return ( <>
//     <Blog image={'https://upload.wikimedia.org/wikipedia/commons/0/0d/Air_pollution3.jpg'} title="Pollution" body="pollution is not good for health" />

//     <Blog image={'https://media.geeksforgeeks.org/wp-content/uploads/20230420093202/Internet-image-(2).webp'} title= "Internet" body="internet is very useful" />

//   </>
//   )
// }

// function Blogs() {
//   return ( <>
//     <Blog title="Pollution" body="pollution is not good for health" />
//     <Blog title= "Internet" body="internet is very useful" />

//   </>
//   )
// }

export default Blogs;
