import Client from "./Client/Client";

export interface iClients {
    completeName: string;
    avatar?: string;
    email: string;
    phone: string;
    profession?: string;
}

const Clients = () => {
    const clients:iClients[] = [{
        completeName: 'Leonardo L Cunha',
        email:'leonavidareal@gmail.com',
        phone: '73988994770',
        profession: "Progamador"
    }]
    return(
        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-5">
            {clients.map((client) => (
                <Client key={client.completeName} {...client}/>
            ))}
        </ul>
    )
}

export default Clients