import { iClients } from "../Clients"


const Client = ({completeName, avatar, email, phone, profession }:iClients) => {
    return(
        <>
            <li className=" w-[90%] max-w-[350px] bg-bg-secundary rounded-xl flex">
                <div className="flex flex-col w-1/3 p-2">
                    <span className=" w-12 h-12 bg-purple-950 rounded-full flex justify-center items-center"> {!avatar ? completeName.charAt(0): <img src={avatar} /> }</span>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="flex flex-col w-2/3">
                    <h3>{completeName}</h3>
                    <span>{profession}</span>
                    <span>Telefone: {phone}</span>
                    <span>E-mail: {email}</span>
                </div>
            </li>
        </>
    )
}

export default Client