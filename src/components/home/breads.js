import React from 'react';
import Bread from './Bread';
import './Breads.css';

const Breads = ({ breads, searchBread }) => {
    return (
        <div className="breads">
            {breads
                .filter((bread) =>
                    bread.name.toLowerCase().includes(searchBread.toLowerCase())
                )
                .map((bread) => (
                    <Bread key={bread.id} name={bread.name} />
                ))}
        </div>
    );
};

export default Breads;
