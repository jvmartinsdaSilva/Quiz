import { Button } from '../../Button/index.js'
import { Input } from '../../Input/index.js'

export const FormLogin = () => {
    return (
        <form>
            <h3 className='title'>LOGIN</h3>
            <br />
            <Input placeholder='Informe seu e-mail' text='EMAIL:' type='email' />
            <Input placeholder='Informe sua senha' text='SENHA:' type='password' />
            <Button textInfo='Login' />
        </form>
    )
}