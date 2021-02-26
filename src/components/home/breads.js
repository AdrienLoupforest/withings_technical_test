
import React from "react";
import Bread from "./bread";
import './breads.css'

const Breads = ({breads}) => {

    return (
           <div className='breads'>
               {breads.map((bread) => (
                    <Bread key={bread.id} name={bread.name} />
                ))}
           </div>
    );
};

export default Breads;