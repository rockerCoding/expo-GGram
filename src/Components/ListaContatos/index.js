import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import Contact from './Contact';

const ListaContatos = ({contatos, more}) => {

  const refValue = useRef(contatos)

  useEffect(() => {
    refValue.value = contatos.push("")
    setRenderizacoes([...renderizacoes, Contact])
  }, [more])

  useEffect(() => {
    console.log(contatos)
  }, [refValue.current])
  

  const [renderizacoes, setRenderizacoes] = useState([])

  const remove = (index) => {
    console.log('remover')
    //var novaLista = contatos
    var novaLista = []
    console.log(index)
    contatos.map((item, i) => {
      if(i != index) novaLista.push(item)
    })
    
    setRenderizacoes(novaLista)
    

  }

  return (
    <View style={styles.listContacts}>
      <FlatList
        data={renderizacoes}
        renderItem={({item, index}) => <Contact key={index} refValue={refValue} index={index} remove={remove}/>}
      />
    </View>
  )
}

export default ListaContatos