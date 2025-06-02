import React, { useContext } from 'react'
import { userContext } from './Context'

function ComC() {
    const user = useContext(userContext)
    // console.log(user)
  return (
    <div>ComC 
        <br /> Name of user is {user.name}
    </div>
  )
}

export default ComC