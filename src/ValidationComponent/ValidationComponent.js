import React from 'react';
const style1={
    border: "2px solid black",
    padding: "16px",
    display: "inline-block",
    backgroundColor: "red"   
}
const style2={
    border: "2px solid black",
    padding: "16px",
    display: "inline-block",
    backgroundColor: "green"   
}

const validationComponent = (props) => {
    if (props.name.length >= 5) {
        return <p style={style1}>Text long enough</p>
    } else if(props.name.length < 5 && props.name.length >=1)
    return <p style={style2}>Text too short</p>
    else if(props.name.length === 0)
    return <p>Plase Enter The Char</p>
    } 
export default validationComponent;
