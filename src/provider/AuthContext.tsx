import { ReactNode, createContext, useState} from "react";
import { UserData } from "../schema/user.schema";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from 'axios'
interface AuthProviderProps {
    register: (payload: UserData) => void
    login: (payload: UserData) => void
    isLogin: boolean
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    
}

interface iChidren {
    children: ReactNode
}

export const authContext = createContext<AuthProviderProps>({} as AuthProviderProps)

export const AuthProvider = ({ children }:iChidren) => {
    const [ isLogin , setIsLogin ] =  useState<boolean>(true)
    const navigate = useNavigate()

    const register = async (payload: UserData) => {
        try {
            const response = await api.post("register", payload )

            setTimeout(() => {
                toast.success('Usuario criado com sucesso')
                setIsLogin(!isLogin)
            },3000)

        } catch (error: any | AxiosError) {
            console.log(error)
            toast.error('error tente usar outro email')
        }
    }

    const login = async (payload: UserData) => {
        try {
            const { data } = await api.post("auth", payload)

            localStorage.setItem('user', data.token)

            setTimeout(() => {
                toast.success('Login realizado com sucesso')
                navigate("/home")
            },3000)
        } catch (error) {
            console.log(error)
            toast.error('Email ou senha estao incorretos')
        }
    }

    return(
        <authContext.Provider value={{register, login, isLogin, setIsLogin}}>
            {children}
        </authContext.Provider>
    )

}