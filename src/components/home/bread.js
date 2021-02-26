import React from "react";
import './bread.css'

const Bread = ({id, name}) => {
    return (
           <div key={id} className='bread'>
               {name}
           </div>
    );
};

export default Bread;