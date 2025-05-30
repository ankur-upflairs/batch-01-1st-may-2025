import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [product, setproduct] = useState([]);
  const [id,setId] = useState(1)
  async function getData() {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
        <input type="text" onChange={(e)=>setId(e.target.value)} value={id} />
      <div class="card" style={{ width: "25rem" }}>
        <img src={product.thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">
            {product.description}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

// function DataFetching() {
//    const [posts,setPosts]=useState([])
//    async function getData(){
//      try {
//         let res = await axios.get('https://icanhazdadjoke.com/',{
//             headers:{
//                 Accept:'application/json'
//             }
//         })
//         console.log(res.data)
//          setPosts(res.data)
//      } catch (error) {
//          console.log(error)
//      }
//    }
//       useEffect(()=>{
//         getData()
//       },[])

//     return (
//       <div>
//           <p>Joke:- {posts.joke}</p>

//       </div>
//     )
// }

// function DataFetching() {
//    const [posts,setPosts]=useState([])
//    async function getData(){
//      try {
//         let res = await axios.get('https://jsonplaceholder.typicode.com/posts',{
//             headers:{

//             }
//         })
//         console.log(res.data)
//          setPosts(res.data)
//      } catch (error) {
//          console.log(error)
//      }
//    }
//       useEffect(()=>{
//         getData()
//       },[])

//     return (
//       <div>
//           {posts.map((post,index)=>{
//               return <div>
//                   <h3>Title:- {post.title}</h3>
//                   <p>Body : - {post.body}</p>
//                   <hr />
//               </div>
//           })}
//       </div>
//     )
// }

export default DataFetching;
