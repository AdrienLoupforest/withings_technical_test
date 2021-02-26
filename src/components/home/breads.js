
import React from "react";
import Bread from "./bread";
import './breads.css'

const Breads = ({breads, searchBread}) => {

    return (
           <div className='breads'>
               {breads.filter(bread => bread.name.includes(searchBread) ).map((bread) => (
                    <Bread key={bread.id} name={bread.name} />
                ))}
           </div>
    );
};

export default Breads;