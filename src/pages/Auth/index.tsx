import { Input } from "../../components/Input"

const Auth = () => {
    return(
        <div className="flex  items-center justify-center h-screen">
            <form className="flex flex-col items-center mx-auto  w-4/5 md:w-[31.25rem] bg-primary  border border-gray-main">
                <h1 className="text-white text-center font-bold mt-4 text-xl">Login</h1>
                <div className="flex flex-col w-4/5 gap-4 mt-5">
                    <Input label="Email" placeholder="digite seu email" type="email"/>
                    <Input label="Senha" placeholder="digite sua senha" type="password"/>
                </div>
                <button className="btn mx-auto mt-8">Login</button>
                <p className="text-white text-sm mt-7 mb-4">Não tem conta ? clique <button className="text-blue-600 bg-none border-none">aqui</button> para criar </p>
            </form>
        </div>
    )
}
export default Auth