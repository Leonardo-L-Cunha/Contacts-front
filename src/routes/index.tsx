import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import ContactsPage from '../pages/contacts'

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contacts/:id' element={<ContactsPage/>} />
        </Routes>
    )
}