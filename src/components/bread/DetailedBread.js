import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bread = () => {
    const [bread, setBread] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://api.thecatapi.com/v1/breeds/search?q=${id}`)
            .then((res) => {
                console.log(res.data[0]);
                setBread(res.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>This is {bread.name}</h1>
            <div><b>description:</b> {bread.description}</div>
        </div>
    );
};

export default Bread;
