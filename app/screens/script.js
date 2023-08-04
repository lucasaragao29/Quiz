import React from 'react';
import { TouchableOpacity, View ,Text} from 'react-native';
import { ImageBackground } from 'react-native-web';
import { Link } from 'expo-router';
import { stylesProf } from '../style/style';

// import { Container } from './styles';
export default function profTela(){
  return(
    <View style={stylesProf.container}>
      <View style={stylesProf.texto}>
        <Text>Mussum</Text>
      </View>
     <ImageBackground 
      style={stylesProf.prof}
      > 
     </ImageBackground>
     <TouchableOpacity>
      <Text><Link href='/screens/Quiz.js'>Iniciar o Quiz!!</Link></Text>
     </TouchableOpacity>
    </View>
  );
}