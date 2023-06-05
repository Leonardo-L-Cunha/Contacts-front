import { useContext } from "react"
import { iClients } from "../Clients"
import { LuEdit } from 'react-icons/lu'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Link } from "react-router-dom"
import { ClientContext } from "../../../provider/ClientContext"


const Client = ({completeName, avatar, email, phone, profession, id }:iClients) => {
    const { setDefaultValue,setOpenModalEdit, deleteClient, setIsClient, setOpenModal, ContactListClient } = useContext(ClientContext)
    const deleteClients = () =>{
        deleteClient(id)
    }
    const openContactModal = () => {
        setIsClient(false)
        setOpenModal(true)
        setDefaultValue({completeName,avatar,email, phone, profession, id})

    }
    const listContacts = () => {
        setDefaultValue({completeName,avatar,email, phone, profession, id})
        ContactListClient(id)
        
    }
    
    return(
        <div className="flex flex-col w-[90%] max-w-[350px]">
            <li className="w-full  bg-bg-secundary rounded-t-2xl flex h-36">
                <div className="flex flex-col w-1/3 p-2 justify-between  items-center">
                    <span className=" w-12 h-12 bg-purple-950 rounded-full flex justify-center items-center"> {!avatar ? completeName.charAt(0): <img src={avatar} /> }</span>
                    <div className="flex gap-3 items-center ">
                        <button onClick={()=> setDefaultValue({completeName,avatar,email, phone, profession, id})}><LuEdit onClick={()=> setOpenModalEdit(true)} className=" text-white hover:text-yellow-600"/></button>
                        <button onClick={deleteClients} ><MdOutlineDeleteOutline className="text-white hover:text-red-600"/> </button>
                    </div>
                </div>
                <div className="flex flex-col w-2/3 gap-2 my-2">
                    <h3 className=" text-sm">{completeName}</h3>
                    <span className="text-white text-sm">{profession}</span>
                    <span className="text-white text-sm">Telefone: <span className="text-black">{phone}</span></span>
                    <span className="text-white text-xs">E-mail: <span className="text-black">{email}</span></span>
                </div>
            </li>
            <div className="w-full max-w-[350px] flex">
                <button onClick={listContacts} className=" bg-bg-button w-1/2 h-8 rounded-bl-lg text-white text-sm"><Link to={`/contacts/${id}`} >ver contatos</Link></button>
                <button  className=" bg-white w-1/2  h-8 rounded-br-lg text-xs" onClick={openContactModal}>Adicionar Contato</button>
            </div>
        </div>
    )
}

export default Client