import { getTest, postLoginTest } from "@/services/test";
import React, { useEffect, useState } from "react";
import TestComp from "./test";


async function testApi() {
    console.log("Hola");
    
    // const response: any = await postLoginTest();
    const response: any = await postLoginTest();
    // console.log(response);
    return response;
    
}


export default async function Test() {
    // const res = await testApi();
    // console.log(res);
    

    return (
        <>
            <h1>Hola Mundo</h1>
            <TestComp/>
        </>
    );
}