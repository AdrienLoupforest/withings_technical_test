import React, {useState, useEffect} from 'react'
import Breads from "./breads";
import axios from 'axios';


const Home = () => {
    const [breads, setBreads] = useState([])
    const [searchBread, setSearchBread] = useState('aaa')

    useEffect(()=> {
        axios.get('https://api.thecatapi.com/v1/breeds').then(
            res => {
                setBreads(res.data)
            }
        ).catch(err => {
            console.log(err)
        })
    })

    function HandleSeachBreadChange(event) {
        setSearchBread(event.target.value);
    }


    return (
        <div>
           <h2>Liste des races de chats</h2>
           <input value={searchBread} type="text" onChange={HandleSeachBreadChange}></input>
           <Breads breads={breads} searchBread={searchBread}></Breads>
        </div>
    );
};

export default Home;