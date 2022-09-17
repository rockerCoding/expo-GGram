import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { RoutesContext } from '../Contexts/RoutesContext'

import api from './api'



const Mensagem = {  

  async buscaMensagensAtivasDoUsuarioById(id, setListaConversas){
    const user = {
      id: id
    }
    api.post("/mensagens/listamensagensusuario", user).then((res, error) => {
      setListaConversas(res.data)
    })
  
  },

  async buscaMensagensDoChatByIdConversa(id, setConversa){
    const conversa = {
      id : id
    }

    api.post("/mensagens/conversa", conversa).then((res, error) => {
      setConversa(res.data)
    })
  },

  async inserirMensagemConversa(mensagem, setIdConversaSalva){

    api.post("/mensagens/inserir", mensagem).then((res, error) => {
      //setIdConversa(res.data.insertId);
      setIdConversaSalva(res.data.insertId)
      
    })
  },

  async apagaConversa(id){
    api.delete("/conversa/apagar/" + id)
  },

  async buscaConversaByIdUsuario(id, setIdConversa){
    api.post("/conversa/usuario", id).then((res, error) => {
      console.log(res.data)
      
      if(res.data.length == 0){
        this.criaConversa(id)
      } else {
        setIdConversa(res.data)
      }
      
    })
  },
  
  async criaConversa(id, setIdConversa){
    console.log("criando conversa")
    api.post("/conversa/criar", id).then((res, error) => {

    })
  }

}

export default Mensagem