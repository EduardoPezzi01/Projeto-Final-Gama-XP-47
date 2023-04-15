import React from 'react'
import axios from 'axios'
import { useState } from  'react'


import { ContainerCadastro,FormCadastro, } from '../Cadastro/styles'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 


const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [fone, setFone] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nome,
      email,
      senha,
      fone,
      logradouro,
      numero,
      bairro,
      estado,
      cep,
      tipoUser: '2',
      tipoEnd: '1'
    }
    axios.post('https://api-ecommerce-gamaxp47.herokuapp.com/usuario', data)
      .then(response => { 
        setMensagem('Cadastro criado com sucesso!')
        console.log(response)
    })
      .catch(error => console.log(error))
   
  }
  
  return (
<ContainerCadastro>

<header>
   
   <LogHeader>
             <a href='/'> <img src={LogoPng} /> </a>
          </LogHeader>
         
          
      </header>
      <h1>criar conta</h1>
    <FormCadastro onSubmit={handleSubmit}>
      
    <label>
      Nome:
      <input type="text" value={nome} onChange={event => setNome(event.target.value)} />
    </label>
    <label>
      Email:
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
    </label>
    <label>
      Senha:
      <input type="password" value={senha} onChange={event => setSenha(event.target.value)} />
    </label>
    <label>
      Telefone:
      <input type="text" value={fone} onChange={event => setFone(event.target.value)} />
    </label>
    <label>
      Logradouro:
      <input type="text" value={logradouro} onChange={event => setLogradouro(event.target.value)} />
    </label>
    <label>
      Numero:
      <input type="text" value={numero} onChange={event => setNumero(event.target.value)} />
    </label>
    <label>
      Bairro:
      <input type="text" value={bairro} onChange={event => setBairro(event.target.value)} />
    </label>
    <label>
      Cidade:
      <input type="text" value={cidade} onChange={event => setCidade(event.target.value)} />
    </label>
    <label>
      Estado:
      <input type="text" value={estado} onChange={event => setEstado(event.target.value)} />
    </label>
    <label>
      Cep:
      <input type="text" value={cep} onChange={event => setCep(event.target.value)} />
    </label>



    
    <button type="submit">continuar</button>
    {mensagem && <p>{mensagem}</p>}
  </FormCadastro>

  <footer>

  </footer>
  </ContainerCadastro>
  )
}

export default Cadastro