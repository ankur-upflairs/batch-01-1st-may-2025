import React from "react";
import CheckIcon from '@mui/icons-material/Check';

function Varified(){
  return <b>
     <CheckIcon />
      varified</b> 
}
function NotVarified(){
  return <b>not varified</b>
}

function Blog({image, title, body ,varified }) {
  return (
    <>
      <div className="container mt-5">
        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <img
            src={image}
            className="card-img-top"
            alt="Blog Image"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">
             {body}
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
            <p className={`card-text`} 
            style={{color: varified ?'green':'red '}}
            >
             
             {varified ? <Varified /> : <NotVarified />}</p>
             {/* <p className={`card-text ${varified ? 'bg-success' : 'bg-danger'}`}>
             
             {varified ? <Varified /> : <NotVarified />}</p> */}
          
            {/* <p className={varified ? 'cart-text bg-warning' : 'card-text bg-success'}>{varified ? <Varified /> : <NotVarified />}</p>*/}
          </div> 
        </div>
      </div>
    </>
  );
}


// function Blog({image, title, body ,varified }) {
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
//           <img
//             src={image}
//             className="card-img-top"
//             alt="Blog Image"
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
            
//             <p className="card-text">
//              {body}
//             </p>
//             <a href="#" className="btn btn-primary">
//               Read More
//             </a>
//             <p className="cart-text">{varified ? <b> <CheckIcon /> varified</b>: 'not varified'}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default Blog;

{
  /* function Blog({title,body} ) {    
  return (
    <div>
        <h1>Title - {title}</h1>
        <p>Body - {body}</p>
    </div>
  )
}

export default Blog */
}

// function Blog(props) {
//     const {title,body} =props
//   return (
//     <div>
//         <h1>Title - {title}</h1>
//         <p>Body - {body}</p>
//     </div>
//   )
// }

// export default Blog

// function Blog(props) {

//   return (
//     <div>
//         <h1>Title - {props.title}</h1>
//         <p>Body - {props.body}</p>
//     </div>
//   )
// }

// export default Blog
