import React from 'react'

function Alert(props) {

    const capitalize=(letter)=>{
        letter = letter.toLowerCase();
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }

  return (

    

    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-10 mx-2`}  role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      
    </div>
  )
}

export default Alert

