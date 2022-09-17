import React, { createContext, useEffect, useState } from 'react'

export const ConversaContext = createContext({});

const ConversaProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null)

  useEffect(() => {
    
  }, [activeChat])

  return (
    <ConversaContext.Provider 
      value={{ 
        activeChat, setActiveChat
      }} >
      {children}
    </ConversaContext.Provider>
  )
}

export default ConversaProvider