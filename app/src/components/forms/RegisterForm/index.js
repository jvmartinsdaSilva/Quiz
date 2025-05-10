import { Button } from "../../Button/index.js"
import { Input } from "../../Input/index.js"

export const RegisterForm = () => {
    return (
        <form>
            <h3 className='title'>CADASTRO</h3>
            <Input text={"Nome"} placeholder="Informe o seu Nome"/>
            <Input text={"Email"} placeholder="Informe seu e-mail" type='email'/>
            <Input text={"Password"} placeholder="Informe seu e-mail" type="password"/>
            <Input text={"Confirme sua senha"} placeholder="Confirme sua senha" type="password"/>
            <Button textInfo={'Cadastrar-se'} />
        </form>
    )
}