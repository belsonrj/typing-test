import React from 'react';
import Timer from './Timer.component';
import { GrDashboard } from "react-icons/gr";
import { BiError } from "react-icons/bi";

export default function Status({props}) {

  //ternary operator for handling error field visibility
  return(
    <div className="status">
      <h3>Status Bar <GrDashboard/></h3>
      <p>Choose a Quote</p>
      <p>Start typing sample text to begin test</p>
      <Timer 
        props={props}
      />
      {(props.errors) ?
      <div>
        <h3>Error % <BiError/></h3>
        <p>{props.errors} %</p>
      </div>
      : null
      }
    </div>
  )
}