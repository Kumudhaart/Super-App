import { useState } from 'react';
import action from '../assets/action.png';
import drama from '../assets/drama.png';
import fantasy from '../assets/fantasy.png';
import fiction from '../assets/fiction.png';
import horror from '../assets/horror.png';
import music from '../assets/music.png';
import romance from '../assets/romance.png';
import thriller from '../assets/thriller.png';
import western from '../assets/western.png';
import MoviesBox from '../components/MoviesBox';
import MoviesChip from '../components/MoviesChip';
import vector from '../assets/Vector.png';
import { useNavigate } from 'react-router-dom';


export default function Choice(){
    const geners=[
        {
            id:"Action",
            color:"#FF5209",
            image:<img src={action} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Drama",
            color:"#D7A4FF",
            image:<img src={drama} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Romance",
            color:"#148A08",
            image:<img src={romance} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Thriller",
            color:"#84C2FF",
            image:<img src={thriller} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Western",
            color:"#902500",
            image:<img src={western} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Horror",
            color:"#7358FF",
            image:<img src={horror} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Fantasy",
            color:"#FF4ADE",
            image:<img src={fantasy} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Music",
            color:"#E61E32",
            image:<img src={music} style={{width:"160px",height:"120px"}}/> 
        },
        {
            id:"Fiction",
            color:"#6CD061",
            image:<img src={fiction} style={{width:"160px",height:"120px"}}/> 
        },
        
            ]
    const [selected,setSelected]=useState([]);
    const navigate=useNavigate();
    const handleClick=()=>{
       if(selected.length<3){
        return;
       }else{
            navigate('./display')
       }
    }
    return(
        <>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"}}>
        {
        geners.map((geners)=>{
            return <>
            <MoviesBox data={geners} selected={selected} setSelected={setSelected}/>
            </> 
        })
        }
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        {
            selected.map((data)=>{
                return <MoviesChip data={data} setSelected={setSelected}/>
            })
        }
        </div>
        {
            selected.length<3 ? 
            <p style={
                {color:"red",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: '400',
                lineHeight: "27px",
                letterSpacing: "0.02em",
                textAlign: "left",
                }
                }><img src={vector}/> &nbsp; Minimum 3 category required</p>:<></>}
        <button style={{background:"#148A08",color:"white",borderRadius:"20px",width:"200px",outline:"none",border:"none",height:"40px",fontWeight:"500",fontSize:"20px"}} onClick={handleClick}>Next Page</button>
    
        </>
    );
}