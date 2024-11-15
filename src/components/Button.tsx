import * as React from "react";
import {ReactNode} from 'react'; 


type PropsType = {
    children: ReactNode;
    onClick?:() => void;
};

const Button = ({children,onClick}:PropsType) =>{
  return( <button 
    onClick={onClick}
    style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    fontSize: "1.2em",
    cursor:"pointer",
    border: 'none',
    borderRadius: '5px',
  }}
  >
    {children}
  </button>
  );
};

export {Button};