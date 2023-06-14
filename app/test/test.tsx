'use client'

import { getTest } from "@/services/test";
import { useEffect, useState } from "react";
import axios from "axios";
//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ZWZlcmFsIiwiaWF0IjoxNjg2NTU5MDMxLCJleHAiOjE2ODY1NjE2MjN9.-urYTVpAPdzN8NiKPexuBah2RPE84BZJOcxddet2H74

const fetchData = async () => {
    try {
        const response = await getTest();
    //   const data = await response.json();
      // Hacer algo con los datos obtenidos
      console.log('data: ', response);
      
      return response;
    } catch (error) {
      // Manejar el error
      console.error('Error: ',error);
      return null;
    }
  };

export default async function TestComp() {
    const [count, setCount] = useState(0);

    const handleSubmit = () => {
        console.log("CLICK");
        
        setCount(count + 1);
    }

    useEffect( () => {
        const res = fetchData();

        console.log(res);
        loadUser();
        
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(result);
        
        // setUser(result.data);
      };

    return (
        <>
            <button onClick={handleSubmit}>Boton</button>
            <p>{count}</p>
        </>
    );
}