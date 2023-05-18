import React from "react";

const Alert = ({ message, type }) => {
  
    return (
        <>
            <div class={`alert alert-${type}`} role="alert">
                {message}
            </div>
        </>
    )
}
export default Alert;