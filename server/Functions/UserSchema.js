import {object, string, ref} from 'yup'


export const userSchema = object({
    name: string("Nome deve ser uma texto").min(3, "Nome deve conter mais do que 3 caracteres").required("Nome não pode ser vazio"),
    email: string("Email deve ser um texto").email("Email inválido").required("Email não pode ser vazio"),
    password: string("Senha deve ser uma texto").min(8, "Senha deve ter no mínimo 8 caracteres").required("Senhã não pode ser vazia"),
    confirmPassword: string().oneOf([ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})