import React, { createContext } from 'react'

export const RoutesContext = createContext({});

const RoutesProvider = ({ children }) => {

  const routes = {
    "login" : "usuarios/login",
    
    "buscaNomeUsuario" : "usuarios/buscanomeusuario",
    "buscaAmigosById" : "usuarios/amigos/",
    "buscaPostsDeAmigosByIds" : "posts/buscartodos"
  }

  return (
    <RoutesContext.Provider 
      value={{ 
        routes
      }} >
      {children}
    </RoutesContext.Provider>
  )
}

export default RoutesProvider