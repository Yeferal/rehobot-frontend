'use client'

// import { NextPage } from 'next';
import Textfield from '@/components/textfield/Textfield'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsAuthenticated, clearToken, setRole } from '../../store/reducers/authReducer';
import { RootState } from '../../store/store';
import { useRouter } from 'next/navigation'
import { postLogin } from '@/services/auth/AuthService';
import style from './login.module.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

async function postLoginApi(data: any) {
    const response: any = await postLogin(data);
    return response;
}

export const validationSchema = Yup.object().shape({
    username: Yup.string().required('El Username es requerido'),
    password: Yup.string().min(4, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
});

export default function FormLogin() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        defaultValues: {
            username: "admin",
            password: "admin"
        },
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data: any) => {
            // reset();
            // Lógica para enviar los datos del formulario
            // return data;
            try {
                
                const res = await postLoginApi(data);
                console.log(res);
                
                handleAuthentication(res.data.accessToken, res.data.role);
                // router.push("/dashboard");
            } catch (error) {
                console.log("Ups no Dio",error);
                
            }
    };

    const handleAuthentication = (token: string, role: string) => {
        const decodedToken = jwt.decode(token);
        // Realiza la autenticación y obtén el token
        dispatch(setToken("Bearer "+token));
        if (decodedToken) {
            const userRole = decodedToken.roles? decodedToken.roles[0]: undefined;
            dispatch(setRole(userRole));
        }
        
        dispatch(setIsAuthenticated(true));
    };
    return (
        <form className='container row justify-content-center p-0 m-0' onSubmit={handleSubmit(onSubmit)}>
            <div className='col-md-12 px-0'>
                <Textfield
                type='text'
                label='Username'
                id='username'
                name='username'
                required
                register={register}
                error={errors['username']}
                />
            </div>

            <div className='col-md-12 px-0'>
                <Textfield
                type='password'
                label='Contraseña'
                id='password'
                name='password'
                required
                register={register}
                error={errors['password']}
                />
            </div>
            
            <div className='col-md-12 my-4 px-2'>
                    <button type="submit" className='btn btn-primary btn-block'>Iniciar Sesion</button>
            </div>
        </form>
    );
}

