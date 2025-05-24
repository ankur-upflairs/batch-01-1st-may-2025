import React from "react";

function Blog({image, title, body }) {
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
          </div>
        </div>
      </div>
    </>
  );
}

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
