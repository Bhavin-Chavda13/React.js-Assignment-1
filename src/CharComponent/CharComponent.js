import React from 'react';

import './CharComponent.css'
// const style1={
//     backgroundColor: "red"   
// }

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.delete}>
            <span>{props.char}</span>  
             
        </div>
        
    )
}

export default charComponent;