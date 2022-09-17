import React, { createContext, useEffect, useState } from 'react'

export const PhotoContext = createContext({});

const PhotoProvider = ({ children }) => {

  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    
  }, [photo])

  return (
    <PhotoContext.Provider 
      value={{ 
        photo, setPhoto
      }} >
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoProvider