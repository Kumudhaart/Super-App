import React from 'react'

export default function MoviesChip({data,setSelected}) {
    const handleClick =()=>{
        setSelected((prev)=>prev.filter((item)=>item!==data));
    }
  return (
    <p style={{display:"flex",justifyContent:"space-evenly",width:"140px",background:"#148A08",padding:"5px",borderRadius:"20px",color:"white",fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "27px",
    letterSpacing: "0.02em",
    textAlign: "left",
    margin:"5px"
    }}>{data} &nbsp; &nbsp; <span onClick={handleClick}>X</span></p>
  )
}
