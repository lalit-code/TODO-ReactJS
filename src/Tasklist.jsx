import React from 'react';
import './App.css';
import { useEffect } from "react";

export default function Tasklist(props) {
  return (
    <>
     <div className='taskdiv' data-aos="fade-right">
        <p
          onClick={()=>{
            props.onSelect(props.id);
          }}
        >
           <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/delete-sign.png" alt="delete-sign"/>
        </p>
        
        <li>{props.text}</li>
     </div>

    </>

  )
}

