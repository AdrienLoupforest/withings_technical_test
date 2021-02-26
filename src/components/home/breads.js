import React from 'react';
import Bread from './Bread';
import './Breads.css';
import {
    Link,
} from 'react-router-dom';

const Breads = ({ breads, searchBread }) => {
    return (
        <div className="breads">
            {breads
                .filter((bread) =>
                    bread.name.toLowerCase().includes(searchBread.toLowerCase())
                )
                .map((bread) => (
                    <Link to={`bread/${bread.id}`}>
                        <Bread key={bread.id} name={bread.name} />
                    </Link>
                ))}
        </div>
    );
};

export default Breads;
