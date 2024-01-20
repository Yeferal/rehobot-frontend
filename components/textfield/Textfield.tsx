'use client'

import Link from "next/link";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { RiArrowDownSFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";


interface InputProps {
    readonly: boolean;
}
interface DataTextfield {
    type: string;
    id?: string;
    label: string;
    name: string;
    variant?: string;
    value?: any;
    defaultValue?: any;
    disable?: boolean;
    required?: boolean;
    select?: boolean;
    helperText?: string;
    InputProps?: InputProps;
    error?: FieldError;
    onChange?: any;
    children?: React.ReactNode;
    register?: UseFormRegister<any>;
}
export default function Textfield( {
    type,
    id = undefined,
    label,
    name,
    variant = undefined,
    value = undefined,
    defaultValue = undefined,
    disable = false,
    required = false,
    select = false,
    helperText = undefined,
    InputProps = undefined,
    error,
    onChange = undefined,
    children,
    register,
}: DataTextfield) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className="textfield">
            { (!select && register && type!='password') && 
                <input 
                type={type}
                id={id}
                className={`input-text ${error? 'textfield-error':''}`} 
                {...register(name)}
                // value={value? value : undefined} 
                // defaultValue={defaultValue? defaultValue : undefined}
                placeholder={label}/>
            }

            { (!select && !register && type!='password') && 
                <input 
                type={type} 
                name={name}
                id={id}
                className="input-text" 
                // value={value? value : undefined} 
                // defaultValue={defaultValue? defaultValue : undefined}
                placeholder={label}/>
            }

            { (select && register && type!='password') && 
                <>
                    <select 
                    {...register(name)}
                    className="select-list"
                    defaultValue={defaultValue? defaultValue : ''}
                    >
                        {children}
                    </select>
                    <RiArrowDownSFill className="select-icon"/>
                </>
            }

            { (select && !register && type!='password') && 
                <>
                    <select
                    className="select-list"
                    defaultValue={defaultValue? defaultValue : ''}
                    >
                        {children}
                    </select>
                    <RiArrowDownSFill className="select-icon"/>
                </>
            }

            { (!select && register && type=='password') && 
                <>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    className={`input-password ${error? 'textfield-error':''}`} 
                    {...register(name)}
                    // value={value? value : undefined} 
                    // defaultValue={defaultValue? defaultValue : undefined}
                    placeholder={label}/>
                    <Link href={''} className="btn btn-sqr btn-sm btn-password" onClick={handleClickShowPassword}>{showPassword? <RiEyeFill/> : <RiEyeOffFill/>}</Link>
                </>
            }

            { (!select && !register && type=='password') && 
                <>
                <input 
                type={showPassword ? 'text' : 'password'}
                id={id}
                className={`input-password ${error? 'textfield-error':''}`} 
                // value={value? value : undefined} 
                // defaultValue={defaultValue? defaultValue : undefined}
                placeholder={label}/>
                <button className="btn-password" onClick={handleClickShowPassword}>{showPassword? <RiEyeFill/> : <RiEyeOffFill/>}</button>
            </>
                
            }


            
            <label htmlFor={name} className="input-label">
                <span>{label}</span>
                {required && <span>*</span>}
            </label>
            { (error) && 
                <div className="legend">
                    <p className="helper-text helper-text-visible text-danger">{error.message}</p>
                </div>
            }
        </div>
    );
}
