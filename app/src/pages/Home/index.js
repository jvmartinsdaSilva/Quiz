import { useState } from 'react'

import { Button } from '../../components/Button/index.js'
import { Input } from '../../components/Input/index.js'
import { FormLogin } from '../../components/forms/LoginForm/index.js'
import { RegisterForm } from '../../components/forms/RegisterForm/index.js'

import s from './index.module.css'

export const Home = () => {
    const [formLogin, setFormLogin] = useState(true)

    return (
        <div className={s.WelcomeCard}>
            <div className={s.container_left}>
                {formLogin ? <FormLogin /> : <RegisterForm />}
                <br/>
                <span className={s.textInfo}>{formLogin ?
                    "Não tem uma Conta ? Cadastre-se agora" :
                    "Entre agora"}
                </span>
                <Button textInfo={ formLogin ? 'Cadastre-se' : 'Login'} onClick={() => setFormLogin(!formLogin)}/>
            </div>
            <div className={s.container_right}>
                <h1 className='title'>Quizzaria </h1>
                <br />
                <br />
                <span className={s.textInfo}>Entre no mundo do conhecimento com o Quizzaria! </span>
                <span className={s.textInfo}>Responda perguntas de diversos temas e se torne um verdadeiro campeão de quizzes.</span>
            </div>
        </div>
    )
}