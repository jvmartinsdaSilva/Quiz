import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, ref } from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"  
import { UserContext } from "../../../context/UserContext.js";
import { LoginUser } from "../../../services/users_api.js";
import { useNavigate } from 'react-router-dom';

import { Button } from '../../Button/index.js'
import { Input } from '../../Input/index.js'

import s from '../index.module.css'


const loginSchema = object({
    email: string("Email deve ser um texto").email("Email inválido").required("Email não pode ser vazio"),
    password: string("Senha deve ser uma texto").min(8, "Senha deve ter no mínimo 8 caracteres").required("Senhã não pode ser vazia"),
})

export const FormLogin = () => {
    const [message, setServerMessage] = useState(null)
    const {login} = useContext(UserContext)
    const navegate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(loginSchema)
    })

    const handleSubimitLogin = async datas => {
        const response = await LoginUser(datas)
        setServerMessage(response.message)
        if(!response.success) return

        login({user: response.datas.user, token: response.datas.token})
        navegate("/menu")
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
            {message && <span>{message}</span>}
        </form>
    )
}