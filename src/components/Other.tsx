import React, { useState } from "react"

export const Other = () =>{
    const [value , setValue] = useState();


    const handleChange = (e:React.BaseSyntheticEvent) => {
        setValue(e.target.value)
        console.log(value);
    }

    const handleOK = (e:React.MouseEvent) => {
        console.log(e)
    }
    return (
        <div>
            <input type = 'text' onChange={(e) =>{
                handleChange(e)
            }}/>
            <button onClick={(e)=>{
                handleOK(e)
            }}>OK</button>
            <button></button>
            <button></button>
        </div>
    )
}