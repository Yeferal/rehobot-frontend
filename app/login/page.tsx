import Image from 'next/image'
import FormLogin from "./formLogin";
import leftPic from "@/public/herramientas.jpg";
import logoPic from "@/public/next.svg";
import { Suspense } from 'react';
import LoadingComponent from '@/components/loading/loading';

export default async function Login() {
    
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <div className="login">
            <div className="row card-login bg-white">
                <div className= 'd-flex justify-content-center align-items-center col-6-login p-0'>
                <Suspense fallback={<div>Loading Image...</div>}>
                    <Image src={leftPic} alt='poster' className="login-img"/>
                </Suspense>
                </div>
                <div className='col-6-login p-2'>
                    <div className='container pt-5'>
                        {/* <Image src={logoPic} alt='logo' className="logo"/> */}
                        <h1 className="title-login">Rehobot Ferreteria</h1>
                        <p className="subtitle-login">Bienvenido, Inicia Sesion Ingresando los Datos Solicitados</p>
                        <FormLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
}
