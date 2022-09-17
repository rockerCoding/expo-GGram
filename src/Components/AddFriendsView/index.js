import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FriendToAdd from '../FriendToAdd'


const AddFriendsView = () => {

  const peopleToAdd = [
    {
      id: 1, 
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    }

  ]

  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.textWhite}>Sugestões para você</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable>
            <Text style={styles.linkText}>Ver tudo</Text>
          </Pressable>
        </View>
      </View>
      <FlatList 
        data={peopleToAdd}
        renderItem={({item, index}) => <FriendToAdd user={item} key={index}/> }
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 5
        }}
      />
    </View>
  )
}

export default AddFriendsView