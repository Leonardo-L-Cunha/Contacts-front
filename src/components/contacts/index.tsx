import { useContext, useEffect } from "react";
import Contact from "./contact";
import { ClientContext } from "../../provider/ClientContext";

export interface IContacts {
    id: number;
    completeName: string;
    email: string;
    phone:string
}

const Contacts = () => {
   const { contacts} = useContext(ClientContext)
   
    return(
        <ul className="flex flex-wrap mt-20 gap-8">
            {contacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </ul>
    )
}

export default Contacts