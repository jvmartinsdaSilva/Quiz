import { useForm } from "react-hook-form";
import { object, string, ref } from 'yup'

import { yupResolver } from "@hookform/resolvers/yup"  

import { Button } from "../../Button/index.js"
import { Input } from "../../Input/index.js"

import s from '../index.module.css'


const userSchema = object({
    name: string("Nome deve ser uma texto").min(3, "Nome deve conter mais do que 3 caracteres").required("Nome não pode ser vazio"),
    email: string("Email deve ser um texto").email("Email inválido").required("Email não pode ser vazio"),
    password: string("Senha deve ser uma texto").min(8, "Senha deve ter no mínimo 8 caracteres").required("Senhã não pode ser vazia"),
    confirmPassword: string().oneOf([ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})


export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(userSchema)
    })

    const handleSubmitUser = async datas => {
        console.log(datas)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitUser)}>
            <h3 className='title'>CADASTRO</h3>
            <Input text={"Nome"} placeholder="Informe o seu Nome" innerRef={register("name")}/>
            <span className={s.messageError}>{errors.name?.message}</span>
            <Input text={"Email"} placeholder="Informe seu e-mail" type='email' innerRef={register("email")}/>
            <span className={s.messageError}>{errors.email?.message}</span>
            <Input text={"Password"} placeholder="Informe seu e-mail" type="password" innerRef={register("password")}/>
            <span className={s.messageError}>{errors.password?.message}</span>
            <Input text={"Confirme sua senha"} placeholder="Confirme sua senha" type="password" innerRef={register("confirmPassword")}/>
            <span className={s.messageError}>{errors.confirmPassword?.message}</span>
            <Button textInfo={'Cadastrar-se'} />
        </form>
    )
}