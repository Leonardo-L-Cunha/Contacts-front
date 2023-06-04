import { useState } from "react"
import { Input } from "./Input"


const Modal = () => {
    const [isClient, setIsClient] = useState<boolean>(true)
    return(
        <div className=" flex justify-center items-center bg-bg-modal fixed top-0 w-screen h-screen">
            <div className=" w-[90%] max-w-[500px] bg-bg-primary">
                <div className="flex justify-between items-center bg-bg-gray-segundary text-white h-16 p-4">
                    <h1>{isClient? "Adiconar Cliente": "Adicionar Contato"}</h1>
                    <button>X</button>
                </div>
                <form className="flex flex-col gap-4 p-4">
                    <Input label="Nome Completo" type="text" placeholder="Nome Completo"/>
                    <Input label="Email" type="email" placeholder="Email"/>
                    <div className="flex items-center justify-between">
                        <div className={isClient ? " w-2/5" : "w-full"}>
                            <Input label="Telefone" type="number" placeholder="Telefone"/>
                        </div>
                        <div className={isClient ? " w-2/5" : "hidden"}>
                            <Input label="Profisão (opicional)" type="text" placeholder="Profisão"/>
                        </div>
                    </div>
                    <div className={isClient ? "text-white flex flex-col" : "hidden"}>
                        <input type="file" id="fileInput" accept=".png" className=" text-xs md:text-base"/>
                        <label htmlFor="fileInput">foto de perfil(opicional)</label>
                    </div>
                    <button className="w-full h-12 bg-bg-secundary text-center text-white border-none rounded">{isClient ? "Criar Cliente": "Criar Contato"}</button>
                </form>
            </div>
        </div>
    )
}
export default Modal