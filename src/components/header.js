import React from 'react'


const header = () =>{
  const refreshPage = ()=>{
       window.location.reload();
    }
    
  return(
    <div>
      <div onClick={refreshPage} className="d-flex p-4">
        <i className="material-icons">autorenew</i>
        <p>Random </p>
      </div>
    </div>
  )
}

export default header
