import { StyleSheet } from 'react-native';

const image={uri:"https://img.freepik.com/vetores-gratis/fundo-de-galaxia-de-desenho-animado_23-2148983450.jpg?w=1060&t=st=1682094894~exp=1682095494~hmac=8653118ba181c617db5a01007faa955dd7f9e14501bf210af94a6cd4f14ab713"}
export const stylesIniciar = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '',
          alignItems: 'center',
          justifyContent: 'center',
        },
        start:{
          height:98,
          width:200,
          borderWidth:5,
          borderRadius:50,
          backgroundColor:"#7BD6D0",
          alignItems:"center",
          justifyContent:"center",
          textShadowColor:'#000',
          textShadowOffset:{width: 20, height: 5},
        },
        btnStartTxt:{
          fontSize:40,
          borderRadius:20
        },
        viewTtl:{
          backgroundColor:"rgba(255,200,200,0.5)",
          borderRadius:20,
          justifyContent:"center",
          alignItems:"center",
          marginBottom:200
        },
        titulo:{
          color:'#FFFFFF',
          fontSize:60,
          paddingLeft:30,
          paddingRight:30,
          textShadowColor:'#585858',
          textShadowOffset:{width: 5, height: 5},
          textShadowRadius:10,
          marginBottom:100
        },
        subTitulo:{
          fontSize:26,
          paddingBottom:20
        },
        imageBack:{
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          
        },
        lG:{
          height:98,
          width:200,
          alignItems:"center",
          justifyContent:"center",
          borderWidth:5,
          borderRadius:50,
        },
      });

export const stylesQuiz = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
  },
  imgBack:{
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  carta:{
    backgroundColor:"red",
    height:"90%",
    width:"75%",
    borderRadius:20,
    alignItems:"center",
    flexDirection:"column",
  },
  cartaPg:{
    backgroundColor:"green",
    height:"50%",
    width:"90%",
    marginTop:"5%",
    borderRadius:10,
    alignContent:"center",
    justifyContent:"center",
  },
  txtPrgta:{
    margin:"5%",
    color:"white",
  },
  txtrpsta:{
    height:"8%",
    width:"80%",
    backgroundColor:"#352F77",
    marginTop:"7%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  txt:{
    color:"white",
  }
});