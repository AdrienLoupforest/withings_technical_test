
import React from "react";
import Bread from "./bread";

const Breads = ({breads}) => {

    return (
           <div>
               {breads.map((bread) => (
                    <Bread key={bread.id} name={bread.name} />
                ))}
           </div>
    );
};

export default Breads;