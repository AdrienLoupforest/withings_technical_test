import React from "react";

const Bread = ({key, name}) => {
    return (
           <li key={key}>
               {name}
           </li>
    );
};

export default Bread;