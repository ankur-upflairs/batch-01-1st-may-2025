import React, { useEffect, useState } from 'react'
//useeffect is used for data fetching mainly
//takes 2 arguents => cb fn and dependency array
//it calls cb fn based on dependency array
//if dependency array is blank than it runs only once 
//if array has a value than if this value changes than fn runs


function UseEffect() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
      async function getData(){
        try {
            let res= await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
      }
      getData()
    },[])
    
  return (
    <div>
        {posts.map((post,index)=>{
            return <div>
                <h3>Title:- {post.title}</h3>
                <p>Body : - {post.body}</p>
                <hr />
            </div>
        })}
    </div>
  )
}


// function UseEffect() {
//     const [posts,setPosts]=useState([])
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>res.json())
//         .then(data=>{console.log(data)
//             setPosts(data)
//         })
//     },[])
    
//   return (
//     <div>
//         {posts.map((post,index)=>{
//             return <div>
//                 <h3>Title:- {post.title}</h3>
//                 <p>Body : - {post.body}</p>
//                 <hr />
//             </div>
//         })}
//     </div>
//   )
// }

export default UseEffect