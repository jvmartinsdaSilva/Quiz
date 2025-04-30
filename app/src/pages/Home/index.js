import { Button } from '../../components/Button/index.js'
import { Input } from '../../components/Input/index.js'
import s from './index.module.css'

export const Home = () => {
    return (
        <div className={s.WelcomeCard}>
            <form className={s.container_left}>
                <h3 className='title'>LOGIN</h3>
                <br/>   
                <p className={s.textInfo}>Entre agora e comece a testar seus conhecimentos</p>
                <Input placeholder='Informe seu e-mail' text='EMAIL:' type='email'/>
                <Input placeholder='Informe sua senha' text='SENHA:' type='password' />
                <Button textInfo='Login' />
                <span className={s.textInfo}>Não tem uma Conta ? Cadastre-se agora</span>
                <Button textInfo='Cadastro' />
            </form>
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