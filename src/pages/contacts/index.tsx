import { useContext, useEffect } from "react"
import NavBar from "../../components/NavBar"
import Contacts from "../../components/contacts"
import { ClientContext } from "../../provider/ClientContext"
import { ModalEdit } from "../../components/Modal"
import { useNavigate } from "react-router-dom"

const ContactsPage = () => {
    const {defaultValue} = useContext(ClientContext)
    const navigate = useNavigate()

    if(!defaultValue.completeName){
        navigate("/home")
    }
   
    return(
        <div className="md:flex">
            <NavBar/>
            <main className="p-4">
                <section>
                    <div className="flex items-center gap-4 text-white">
                        <span className=" w-20 h-20 bg-purple-950 rounded-full flex justify-center items-center"> {!defaultValue.avatar ? "A" : <img src={defaultValue.avatar} /> }</span>
                        <h2 className="md:text-4xl">{defaultValue.completeName}</h2>
                    </div>
                    <div className="flex flex-col text-white mt-5 gap-4 md:text-2xl">
                       <span>{defaultValue.profession? defaultValue.profession: "Profisao nao informado" }</span>
                       <span>Telefone: <span className=" text-text-gray">{defaultValue.phone}</span></span>
                       <span>E-mail: <span  className=" text-text-gray">{defaultValue.email}</span></span>
                        
                    </div>
                </section>
                <h1 className="text-white text-2xl mt-20">Contatos</h1>
                <Contacts/>
                <ModalEdit/>
            </main>
        </div>
    )
}

export default ContactsPage