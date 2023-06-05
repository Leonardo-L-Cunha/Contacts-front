import { useContext, useEffect } from "react"
import Clients from "../../components/Clients/Clients"
import { Modal, ModalEdit } from "../../components/Modal"
import NavBar from "../../components/NavBar"
import { AiOutlinePlus } from 'react-icons/ai'
import { ClientContext } from "../../provider/ClientContext"

const Home = () => {
    const {setOpenModal, setIsClient, client} = useContext(ClientContext)
    
    useEffect(() => {
        console.log()
    },[client])

    const openModalClient = ()=> {
        setOpenModal(true)
        setIsClient(true)
    }
    return(
        <div className="md:flex relative">
            <NavBar/>
                <main className=" flex flex-col w-[90%] mx-auto p-4">
                    <section className="flex flex-col gap-5 text-white text-xs md:text-base w-full">
                        <h1 className=" text-xl md:text-3xl mt-3">Bem-vindo(a)  a  Mobius Clients </h1>
                        <p>Nosso Gerenciador de Clientes! Aqui, você pode facilmente criar e organizar informações sobre seus clientes e seus respectivos contatos.</p>
                        <p>Para criar um novo cliente, basta clicar no botão "Adicionar Cliente". Você será direcionado(a) a um formulário onde poderá inserir informações importantes, como o nome completo do cliente, endereço de e-mail, número de telefone e a data de registro. Após preencher esses campos, clique em "Salvar" e seu cliente será adicionado à lista</p>
                        <p>Agora, para associar contatos a um cliente específico, basta selecionar o cliente desejado na lista de clientes. Em seguida, você terá a opção de adicionar contatos relacionados a esse cliente. Novamente, preencha os campos obrigatórios, como nome completo, e-mail, telefone e data de registro do contato, e clique em "Salvar". Você pode repetir esse processo quantas vezes forem necessárias para adicionar todos os contatos desejados.</p>
                    </section>
                    <button className="flex items-center bg-bg-secundary text-white h-9 rounded p-2 mt-6 w-40" onClick={openModalClient}> <AiOutlinePlus/> Adicionar Cliente</button>
                    <Clients/>
                </main>
            <Modal/>
            <ModalEdit/>
        </div>
    )
}
export default Home