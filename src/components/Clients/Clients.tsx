import { useContext } from "react";
import Client from "./Client/Client";
import { ClientContext } from "../../provider/ClientContext";

export interface iClients {
    id: number;
    completeName: string;
    avatar?: string;
    email: string;
    phone: string;
    profession?: string;
}

const Clients = () => {
   const {client} = useContext(ClientContext)
   
    return(
        <ul className="flex mt-5 gap-10 flex-wrap">
            {client.map((client) => (
                <Client key={client.id} {...client}/>
            ))}
        </ul>
    )
}

export default Clients