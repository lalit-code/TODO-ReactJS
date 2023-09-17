import React from 'react';
import './Github.css';

export default function Github(props) {
  return (
    <div className="github">
       <a href={props.link} target="_blank"><img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/></a>
    </div>
  )
}
