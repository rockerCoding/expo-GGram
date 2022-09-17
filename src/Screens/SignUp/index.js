import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import ListaContatos from '../../Components/ListaContatos';

import Hello from './Sections/Hello';
import UserNameForm from './Sections/UserNameForm';

import Usuario from '../../Services/Usuario';
import ContactSection from './Sections/ContactSection';
import ContactsList from '../../Components/ContactsList';
import ContactsForm from './Sections/ContactsForm';

const SignUp = () => {

  const [image, setImage] = useState(null);
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("");
  const [senha, setSenha] = useState("")
  const [repeticaoSenha, setRepeticaoSenha] = useState("")
  const [inputsDone, setInputsDone] = useState(0)
  const [inputsTotal, setInputsTotal] = useState(5)
  const [errorNome, setErrorNome] = useState("")
  const [userNameIsValid, setuserNameIsValid] = useState(false)
  const listaSections = ["Bem-vindo", "Foto", "Dados da Conta", "Dados de contato", "Senha", "Resumo"]
  const [indexOf, setIndexOf] = useState(0)
  const scroll = useRef(null);
  const [listaContatos, setListaContatos] = useState([])
  const [more, setMore] = useState(false)


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) setImage(result.uri);
  };

  const verifyProgress = () => {
    var initial = 0;
    if (nome != "" && nome.length > 6) initial++;
    if (descricao != "") initial++;
    if (senha != "") initial++;
    return initial;
  }

  const moveTo = (value) => {
    var index = indexOf + value;
    setIndexOf(index)
  }

  useEffect(() => {
    scroll.current.scrollTo({
      x: (Dimensions.get("screen").width * 2) * indexOf,
      y: 0,
      animated: true
    })
  }, [indexOf])

  useEffect(() => {
    //console.log('mudando')
    if(nome.length >= 6){
      
    }
    nome.length >= 6 ? setuserNameIsValid(true) : setuserNameIsValid(false);
  }, [nome])

  useEffect(() => {
    setInputsDone(verifyProgress)
  }, [nome, descricao, senha, image])

  const moreContact = () => {
    setMore(!more)
  }

  const finaliza = () => {
    console.log("function finaliza")
    console.log("Nome" + nome)
  }

  
  

  return (
    <View style={styles.outContainer}>

      <View style={[styles.laterais, styles.esquerda]}>
        {
          indexOf > 0 &&
          <Pressable onPress={() => moveTo(-1)}>
            <EntypoIcon name="chevron-thin-left" size={40} color="white" />
          </Pressable>
        }
      </View>
      
      <ScrollView
        horizontal
        pagingEnabled
        ref={scroll}
        scrollEnabled={false}
        bounces
        decelerationRate={0.18}
      >

        <Hello />
        <UserNameForm nome={nome} setNome={setNome}/>
        <Image />
        <ContactSection contatos={listaContatos} /> 
        
        

        <View style={styles.section}>
          <View style={[styles.innerSection, { backgroundColor: 'green' }]}>

          </View>
          <View style={styles.translate}>
            <LinearGradient
              style={{
                height: Dimensions.get("screen").height,
                width: Dimensions.get("screen").width,
                borderRadius: 5
              }}

              start={{ x: 0, y: 0 }}
              end={{ x: 100, y: 0 }}

              colors={['green', 'cyan']}>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.section}>
          <View style={[styles.innerSection, { backgroundColor: 'cyan' }]}>

          </View>
          <View style={styles.translate}>
            <LinearGradient
              style={{
                height: Dimensions.get("screen").height,
                width: Dimensions.get("screen").width,
                borderRadius: 5
              }}

              start={{ x: 0, y: 0 }}
              end={{ x: 100, y: 0 }}

              colors={['red', 'green']}>
            </LinearGradient>
          </View>
        </View>

      </ScrollView>
      <View style={[styles.laterais, styles.direita]}>
        <Pressable onPress={() => moveTo(1)}
          disabled={!userNameIsValid && indexOf == 1}
        >
          <EntypoIcon name="chevron-thin-right" size={40} color={!userNameIsValid && indexOf == 1 ? "rgba(1,1,1,0.3)" : "white"} />
        </Pressable>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={indexOf / listaSections.length}
          color="yellow"

        />
      </View>
    </View>
  )
}

export default SignUp