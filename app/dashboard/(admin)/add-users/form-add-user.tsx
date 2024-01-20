'use client'

import Textfield from '@/components/textfield/Textfield'
import React, { useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Role } from '@/utils/models/Role';
import { getRoles } from '@/services/auth/RoleService';

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El Apellido es requerido'),
    email: Yup.string().email('El correo electrónico no es válido'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir').required('La contraseña es requerida'),
    role: Yup.string().required('Debe Seleccionar una Opcion'),
    username: Yup.string().required('El Username es requerido')
});

const fetchDataRole = async () => {
    const response: any = await getRoles();
    return response.data;
}

export default function FormAddUser() {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        defaultValues: {
            role: ""
        },
        resolver: yupResolver(validationSchema)
    });
    const [listRole, setListRole] = useState<Array<Role>>([]);
    // const listRole: Array<Role> = await fetchDataRole();
    
    useEffect(() => {
        const fetchRoles = async () => {
          const roles = await fetchDataRole();
          setListRole(roles);
        };
        fetchRoles();
    }, []);


    const onSubmit = (data: any) => {
        console.log(data);
    };




    return (
        <form className='container row justify-content-center p-0 m-md-0' onSubmit={handleSubmit(onSubmit)}>
            <div className='col-md-6'>
                <Textfield
                type='text'
                label='Nombre'
                id='name'
                name='name'
                required
                register={register}
                error={errors['name']}
                />
            </div>

            <div className='col-md-6'>
                <Textfield
                type='text'
                label='Apellido'
                id='lastName'
                name='lastName'
                required
                register={register}
                error={errors['lastName']}
                />
            </div>
            
            <div className='col-md-12'>
                <Textfield
                type='email'
                label='Correo'
                id='email'
                name='email'
                register={register}
                error={errors['email']}
                />
            </div>

            <div className='col-md-6'>
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

            <div className='col-md-6'>
                <Textfield
                type='select'
                label='Rol de Usuario'
                id='role'
                name='role'
                required
                register={register}
                error={errors['role']}
                select
                >
                    <option value="" disabled>Selecciona una Opcion</option>
                    {listRole.map((data, index) => (
                        <option key={data.role_id} value={data.role_id}>{data.name}</option>
                    ))}
                    
                    {/* <option value={'1'}>Op 1</option>
                    <option value={'2'}>Op 2</option>
                    <option value={'3'}>Op 3</option>
                    <option value={'4'}>Op 4</option> */}
                    {/* { listRole.map((roleItem) => {
                        return(
                            <option key={roleItem.role_id} value={roleItem.role_id}>{roleItem.name}</option>
                        );
                    }) } */}
                </Textfield>
            </div>

            <div className='col-md-6'>
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

            <div className='col-md-6'>
                <Textfield
                type='password'
                label='Confirmar Contraseña'
                id='confirmPassword'
                name='confirmPassword'
                required
                register={register}
                error={errors['confirmPassword']}
                />
            </div>

            <div className='col-md-12 row justify-content-center mt-2'>
                <div className='row col-md-6 justify-content-center'>
                    <button type="submit" className='btn btn-primary btn-block'>Crear Usuario</button>
                </div>
            </div>
            
        </form>
  )
}
