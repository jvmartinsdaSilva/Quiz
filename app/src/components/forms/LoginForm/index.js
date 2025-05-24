import { useForm } from "react-hook-form";
import { object, string, ref } from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"  

import { Button } from '../../Button/index.js'
import { Input } from '../../Input/index.js'


import s from '../index.module.css'


const loginSchema = object({
    email: string("Email deve ser um texto").email("Email inválido").required("Email não pode ser vazio"),
    password: string("Senha deve ser uma texto").min(8, "Senha deve ter no mínimo 8 caracteres").required("Senhã não pode ser vazia"),
})

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(loginSchema)
    })

    const handleSubimitLogin = async datas => {
        
    }


    return (
        <form onSubmit={handleSubmit(handleSubimitLogin)}>
            <h3 className='title'>LOGIN</h3>
            <br />
            <Input placeholder='Informe seu e-mail' text='EMAIL:' type='email' innerRef={register("email")}/>
            {errors.email && <span className={s.messageError}>{errors.email.message}</span>}
            <Input placeholder='Informe sua senha' text='SENHA:' type='password' innerRef={register("password")} />
            {errors.password && <span className={s.messageError}>{errors.password.message}</span>}
            <Button textInfo='Login' />
        </form>
    )
}