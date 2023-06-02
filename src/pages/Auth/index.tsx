
import { useContext } from "react"
import { Input } from "../../components/Input"
import { authContext } from "../../provider/AuthContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserData, UserSchema } from "../../schema/user.schema"

const Auth = () => {
    const { register: registerUser, isLogin, login, setIsLogin } = useContext(authContext)
    const {register , handleSubmit, reset} = useForm<UserData>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    
    const onSubmit: SubmitHandler<UserData> =  (payload: UserData) => {
        if(isLogin) {
             login(payload)
             
        }else {
             registerUser(payload)
             setTimeout(() => {
                reset()
             },2500)
        }
    }
    
   
    return(
        <div className="flex  items-center justify-center h-screen">
            <form className="flex flex-col items-center mx-auto  w-4/5 md:w-[31.25rem] bg-primary  border border-gray-main" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-white text-center font-bold mt-4 text-xl">{isLogin ? "Login" : "Criar conta"}</h1>
                <div className="flex flex-col w-4/5 gap-4 mt-5">
                    <Input label="Email" placeholder="digite seu email" type="email" {...register('email')}/>
                    <Input label="Senha" placeholder="digite sua senha" type="password" {...register('password')} />
                </div>
                <button className="btn mx-auto mt-8" type="submit">Login</button>
                <p className="text-white text-sm mt-7 mb-4">{isLogin ? "Não tem conta ? clique" : "Ja tem conta ? clique "} <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 bg-none border-none">aqui</button> {isLogin ? "criar" : "entrar"} </p>
            </form>
        </div>
    )
}
export default Auth