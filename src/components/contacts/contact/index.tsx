import { MdOutlineDeleteOutline } from "react-icons/md"
import { IContacts } from ".."
import { LuEdit } from "react-icons/lu"
import { useContext } from "react"
import { ClientContext } from "../../../provider/ClientContext"

const Contact = ({completeName, email , phone, id}:IContacts) => {
    const {setOpenModalEdit, setIsClient, setCurrentConact, deleteContact} = useContext(ClientContext)
    
    const changeModalType = () => {
        setOpenModalEdit(true)
        setIsClient(false)
        setCurrentConact({completeName, email, phone,id})
    }
    
    return (
        <li className="flex flex-row bg-bg-secundary rounded-xl p-2 h-24">
            <div className="flex flex-col gap-1">
                <h3>{completeName}</h3>
                <span className="text-white">Telefone: <span className="text-black">{phone}</span></span>
                <span className="text-white">E-mail: <span className="text-black">{email}</span></span>

            </div>
            <div className="flex flex-col justify-center pl-3 gap-4">
                <button onClick={changeModalType}><LuEdit className=" text-white hover:text-yellow-600"/></button>
                <button onClick={()=> deleteContact(id)} ><MdOutlineDeleteOutline className="text-white hover:text-red-600"/> </button>
            </div>
        </li>
    )
}
export default Contact