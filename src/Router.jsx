import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import  Login  from './pages/Login'
import Cadastro from './pages/Cadastro'
import Loja from './pages/Loja'
import Painel from './pages/Dashboard'


function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/loja' element={<Loja />} />
        <Route path='/painel' element={<Painel />} />
    </Routes>
    </BrowserRouter>
)

}

export default Router