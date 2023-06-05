import { useContext, useEffect, useState } from "react"
import { Input } from "./Input"
import { ClientContext } from "../provider/ClientContext"
import { useForm } from "react-hook-form"
import { ClientData, ContactData } from "../schema/user.schema"
import FileBase, { FileData } from 'react-file-base64';


export const Modal = () => {
    const { openModal , setOpenModal, createClient, isClient, defaultValue, createContact} = useContext(ClientContext)
    const {register, handleSubmit, setValue} = useForm<ClientData>({
       
    })
   
    const onSubmit = (data:ClientData) =>{
        if(isClient){
            createClient(data)
        }else{
            createContact(data,defaultValue.id)
        }
        setOpenModal(false)
    }
    const handleFileChange = (base64: FileData)=>{
        setValue("avatar", base64)
    }
    return(
       <>
        {openModal && <div className="flex justify-center items-center bg-bg-modal fixed top-0 w-screen h-screen">
            <div className=" w-[90%] max-w-[500px] bg-bg-primary">
                <div className="flex justify-between items-center bg-bg-gray-segundary text-white h-16 p-4">
                    <h1>{isClient? "Adiconar Cliente": "Adicionar Contato"}</h1>
                    <button onClick={()=> setOpenModal(false)}>X</button>
                </div>
                <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Nome Completo" type="text" placeholder="Nome Completo" {...register("completeName")} />
                    <Input label="Email" type="email" placeholder="Email" {...register("email")} />
                    <div className="flex items-center justify-between">
                        <div className={isClient ? " w-2/5" : "w-full"}>
                            <Input label="Telefone" type="number" placeholder="Telefone" {...register("phone")} />
                        </div>
                        <div className={isClient ? " w-2/5" : "hidden"}>
                            <Input label="Profisão (opicional)" type="text" placeholder="Profisão" {...register("profession")}  />
                        </div>
                    </div>
                    <div className={isClient ? "text-white flex flex-col" : "hidden"}>
                        <FileBase  type="file" multiple={false}  onDone={({base64}:FileData) => handleFileChange(base64)} />
                        <label htmlFor="fileInput">foto de perfil(opicional)</label>
                    </div>
                    <button type="submit" className="w-full h-12 bg-bg-secundary text-center text-white border-none rounded">{isClient ? "Criar Cliente": "Criar Contato"}</button>
                </form>
            </div>
        </div>}
       </>
    )
}


export const ModalEdit = () => {
   
    const { openModalEdit, setOpenModalEdit, defaultValue, updatedClient, isClient, currentContact, updatedContact} = useContext(ClientContext)
    const {register, handleSubmit, setValue} = useForm<ClientData | ContactData>({})
   
    const onSubmit = (data:ClientData) =>{
        if(isClient){
            updatedClient(data, defaultValue.id)
        }else{
            updatedContact(data,currentContact.id)
        }
        setOpenModalEdit(false)
    }

    useEffect(() => {
        setValue("completeName", currentContact.completeName)
        setValue("email", currentContact.email)
        setValue("phone", currentContact.phone)
    },[setValue, currentContact])

    useEffect(() =>{
        setValue("completeName", defaultValue.completeName)
        setValue("email", defaultValue.email)
        setValue("phone", defaultValue.phone)
        setValue("profession", defaultValue.profession)
        setValue("avatar", defaultValue.avatar)
    },[setValue,defaultValue])

    
     
    
    const handleFileChange = (base64: FileData)=>{
        setValue("avatar", defaultValue.avatar || base64)
    }
    return(
       <>
        {openModalEdit && <div className="flex justify-center items-center bg-bg-modal fixed top-0 w-screen h-screen">
            <div className=" w-[90%] max-w-[500px] bg-bg-primary">
                <div className="flex justify-between items-center bg-bg-gray-segundary text-white h-16 p-4">
                    <h1>{isClient? "Editar Cliente": "Editar Contato"}</h1>
                    <button onClick={()=> setOpenModalEdit(false)}>X</button>
                </div>
                <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Nome Completo" type="text" placeholder={defaultValue.completeName} {...register("completeName")}/>
                    <Input label="Email" type="email" placeholder={defaultValue.email} {...register("email")} />
                    <div className="flex items-center justify-between">
                        <div className={isClient ? " w-2/5" : "w-full"}>
                            <Input label="Telefone" type="number" placeholder={defaultValue.phone} {...register("phone")} />
                        </div>
                        <div className={isClient ? " w-2/5" : "hidden"}>
                            <Input label="Profisão (opicional)" type="text" placeholder={defaultValue.profession? defaultValue.profession : "Profissão"} {...register("profession")}  />
                        </div>
                    </div>
                    <div className={isClient ? "text-white flex flex-col" : "hidden"}>
                        <FileBase  type="file" multiple={false}  onDone={({base64}:FileData) => handleFileChange(base64)} />
                        <label htmlFor="fileInput">foto de perfil(opicional)</label>
                    </div>
                    <button type="submit" className="w-full h-12 bg-bg-secundary text-center text-white border-none rounded">Salvar Alterações</button>
                </form>
            </div>
        </div>}
       </>
    )
}
