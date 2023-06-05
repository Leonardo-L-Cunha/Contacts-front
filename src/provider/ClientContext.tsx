import { ReactNode, createContext, useEffect, useState } from "react";
import { ClientData, ContactData } from "../schema/user.schema";
import { api } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface ClientProps {
    id: number;
    completeName: string;
    email: string;
    phone: string;
    avatar?: string | undefined;
    profession?: string | undefined;
}

interface ClientProviderProps {
    client: ClientData[],
    setClient: React.Dispatch<React.SetStateAction<ClientData[]>>,
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    createClient: (body: ClientData) => Promise<void>,
    updatedClient: (body: ClientData, id: number) => Promise<void>,
    defaultValue: ClientProps,
    setDefaultValue: React.Dispatch<React.SetStateAction<ClientProps>>,
    openModalEdit: boolean,
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
    deleteClient: (id: number) => Promise<void>,
    isClient: boolean,
    setIsClient: React.Dispatch<React.SetStateAction<boolean>>,
    ContactListClient: (id: number) => Promise<void>,
    contacts: ContactData[],
    createContact: (body: ContactData, id: number) => Promise<void>,
    setCurrentConact: React.Dispatch<React.SetStateAction<ContactData>>,
    currentContact: ContactData,
    updatedContact: (body: ContactData, id: number) => Promise<void>,
    deleteContact: (id: number) => Promise<void>,
    
}

interface iChildren {
    children: ReactNode
}

export const ClientContext = createContext<ClientProviderProps>({} as ClientProviderProps)

export const ClientProvider = ({children}:iChildren) => {
    const [client , setClient ] = useState<ClientData[]>([])
    const token: string | null = localStorage.getItem('user')
    const [openModal , setOpenModal ] = useState<boolean>(false)
    const [openModalEdit , setOpenModalEdit ] = useState<boolean>(false)
    const [isClient, setIsClient] = useState<boolean>(true)
    const [contacts, setContacts] = useState<ContactData[]>([])
    const [defaultValue, setDefaultValue] = useState<ClientData>({} as ClientData)
    const [currentContact, setCurrentConact] = useState<ContactData>({} as ContactData)
    const [currentClient, setCurrentClient] = useState<ClientData>({} as ClientData)

    const navigate = useNavigate()
    
    

    useEffect(() => {
        const listClients = async () => {
            if(!token){
                navigate('/')
            }
            try {
               const { data } = await api.get("clients", {
                headers:{
                    Authorization:`Bearer ${token}`
                }
               })
               setClient(data)
            } catch (error) {
                console.log(error)
            }
        }
        listClients()
    },[defaultValue])

    const createClient = async (body: ClientData) => {
        try {
            const { data }= await  api.post("clients", body, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setClient([...client,data])
        } catch (error) {
            console.log(error)
        }
    }
    const updatedClient = async (body:ClientData, id:number) => {
        try {
            const { data } = await api.patch(`clients/${id}`,body, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setDefaultValue(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteClient = async(id: number) => {
        try {
           await api.delete(`clients/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    const ContactListClient = async (id: number) => {
        try {
            const { data } = await api.get(`contacts/${id}/clients`, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setContacts(data)
        } catch (error) {
            console.log(error)
        }
    }
    const createContact = async (body: ContactData, id:number) => {
        try {
            const { data }= await  api.post(`contacts/${id}/clients`, body, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setContacts([...contacts,data])
            toast.success("contato criado com sucesso")
        } catch (error) {
            console.log(error)
        }
    }
    const updatedContact = async (body:ContactData, id:number) => {
        try {
            const { data } = await api.patch(`contacts/${id}`,body, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
           setCurrentConact(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteContact = async(id: number) => {
        try {
           await api.delete(`contacts/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const newContacts = contacts.filter((contact) => {
                return contact.id !== id
            })
            setContacts(newContacts)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <ClientContext.Provider value={{client, setClient, openModal, setOpenModal, createClient, 
            updatedClient, defaultValue, setDefaultValue, setOpenModalEdit, openModalEdit,deleteClient ,isClient, setIsClient, 
            ContactListClient, contacts, createContact, currentContact, setCurrentConact, updatedContact, deleteContact  }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientProvider