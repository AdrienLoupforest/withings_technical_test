import React, {useState, useEffect} from 'react'
import Breads from "./breads";
import axios from 'axios';


const Home = () => {
    const [breads, setBreads] = useState([])

    useEffect(()=> {
        axios.get('https://api.thecatapi.com/v1/breeds').then(
            res => {
                console.log(res)
                setBreads(res.data)
            }
        ).catch(err => {
            console.log(err)
        })
    })


    return (
        <div>
           <h2>Liste des races de chats</h2>
           <Breads breads={breads}></Breads>
        </div>
    );
};

export default Home;