import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}