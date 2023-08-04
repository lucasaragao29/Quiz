import React              from "react";
import { StatusBar }      from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { stylesIniciar }  from "./style/style";
import { Quiz }           from "./screens/Quiz";
import { Link }           from "expo-router";

export default function Inicio() {
  const imagem={uri:"https://img.freepik.com/vetores-gratis/fundo-de-galaxia-de-desenho-animado_23-2148983450.jpg?w=1060&t=st=1682094894~exp=1682095494~hmac=8653118ba181c617db5a01007faa955dd7f9e14501bf210af94a6cd4f14ab713"}
  

  return (
      <View style={stylesIniciar.container}>
        <StatusBar style="auto" />
        <ImageBackground source={imagem} style={stylesIniciar.imageBack} >
        <Text style={stylesIniciar.titulo}>Mussum Ipsum</Text>
        <TouchableOpacity 
        style={stylesIniciar.start}
        >
          <LinearGradient 
          colors={['#7BD6D0','#D0F1EF']}
          style={stylesIniciar.lG}
          >
          <Text style={stylesIniciar.btnStartTxt}><Link href="/Quiz">Iniciar</Link> </Text>
          </LinearGradient>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
