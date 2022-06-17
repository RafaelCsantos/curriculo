import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import foto from 'curriculo/src/assets/Octocat-2.png';
import {Github} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Feather';
 
const App = () => {
  return (
      <>
<View style={style.page}>

<View style= {style.container_cabecalho}> 
  <Image style= {style.foto} source={foto}/>
  <Text style= {style.nome}> RAFAEL SANTOS </Text>
  <Text style= {style.funcao}> Bacharel Em ciencia e tecnologia </Text>
   <View>
      <Icon name= "github"> </Icon>
      <Icon name= "facebok"> </Icon>
      <Icon name= "linkedin"> </Icon>

   </View>


</View>

</View>
</>

  );
};

const style = StyleSheet.create({

  page: {
  backgroundColor: 'grey',
  flex: 1,
},

foto: { 
  width: 250,
  height: 250,
  borderRadius: 125,
},

container_cabecalho: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

nome: {
  fontSize: 32,
  fontWeight: 'bold',
},

funcao: {
  color: 'white',
},


},
);

export default App;