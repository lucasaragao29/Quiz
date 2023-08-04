import React from "react"
import { StatusBar } from "expo-status-bar"
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { CORES } from "./constants"
import { stylesIniciar }  from "./style/style"
import { Link } from "expo-router"
import Logo from './image/logo.svg'

export default function Inicio() {

  

  return (
      <View style={stylesIniciar.container}>
        <StatusBar barStyle="light-content" backgroundColor={CORES.primary} />
        <LinearGradient 
          colors={['#3FFF46','#2C4D56']}
          style={{flex:1,alignItens:'center',justifyContent:'center'}}
          >
        <View>
        <Logo style={stylesIniciar.imageBack}/>
        </View>
        <TouchableOpacity 
        style={{ justifyContent:"center",
                  alignItems:"center",
                  flexDirection:"column",}}
        >
          <LinearGradient 
          colors={['#7BD6D0','#D0F1EF']}
          style={stylesIniciar.lG}
          >
          <Text style={stylesIniciar.btnStartTxt}><Link href='/screens/Quiz' >Iniciar</Link></Text>
          </LinearGradient>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
