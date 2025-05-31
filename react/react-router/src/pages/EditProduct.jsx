import React from 'react'
import { useParams } from 'react-router'

function EditProduct() {
//    let param = useParams()
let {id} = useParams()
  return (
    <div>this is  EditProduct page and <br /> we are editing product
    with Id : {id} </div>
  )
}

export default EditProduct