import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { CORES, TAMANHO } from '../constants';
import data from "../data/QuizData";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native'

const Quiz = () => {

    const todasPerguntas = data;
    const [perguntaIndex, setperguntaIndex] = useState(0)
    const [opcaoSelecionada, setopcaoSelecionada] = useState(null);
    const [opcaoCorreta, setopcaoCorreta] = useState(null);
    const [opcaoDesabilitada, setopcaoDesabilitada] = useState(false);
    const [score, setScore] = useState(0)
    const [NextBtn, setNextBtn] = useState(false)
    const [modalPont, setmodalPont] = useState(false)

    const validarResposta = (opcaoSelec) => {
        let respostaCorreta = todasPerguntas[perguntaIndex]['respostaCorreta'];
        setopcaoSelecionada(opcaoSelec);
        setopcaoCorreta(respostaCorreta);
        setopcaoDesabilitada(true);
        if(opcaoSelec==respostaCorreta){
            // 
            setScore(score+1)
        }
        // Mostrar Proximo Btn
        setNextBtn(true)
    }
    const handleNext = () => {
        if(perguntaIndex== todasPerguntas.length-1){
            // Ultima pergunta
            // Mostrar Pontos
            setmodalPont(true)
        }else{
            setperguntaIndex(perguntaIndex+1);
            setopcaoSelecionada(null);
            setopcaoCorreta(null);
            setopcaoDesabilitada(false);
            setNextBtn(false);
        }
        Animated.timing(progresso, {
            toValue: perguntaIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setmodalPont(false);

        setperguntaIndex(0);
        setScore(0);

        setopcaoSelecionada(null);
        setopcaoCorreta(null);
        setopcaoDesabilitada(false);
        setNextBtn(false);
        Animated.timing(progresso, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderPrgta = () => {
        return (
            <View style={{
                marginVertical: 40,
                borderWidth:3,
                borderColor:"black",
                backgroundColor:"#F59338",
                opacity:0.8,
                padding:10,
            }}>
                {/* pergunta Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    borderRadius:25,
                }}>
                    <Text style={{color: CORES.branco, fontSize: 20, opacity: 0.6, marginRight: 2}}>{perguntaIndex+1}</Text>
                    <Text style={{color: CORES.branco, fontSize: 18, opacity: 0.6}}>/ {todasPerguntas.length}</Text>
                </View>

                {/* pergunta */}
                <Text style={{
                    color: CORES.branco,
                    fontSize: 20
                }}>{todasPerguntas[perguntaIndex]?.pergunta}</Text>
            </View>
        )
    }
    const renderOpcoes = () => {
        return (
            <View>
                {
                    todasPerguntas[perguntaIndex]?.opcoes.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validarResposta(option)}
                        disabled={opcaoDesabilitada}
                        key={option}
                        style={{
                            borderWidth: 5, 
                            borderColor: option==opcaoCorreta 
                            ? CORES.success
                            : option==opcaoSelecionada 
                            ? CORES.error 
                            : CORES.secondary,
                            backgroundColor: option==opcaoCorreta 
                            ? CORES.success +'80'
                            : option==opcaoSelecionada 
                            ? CORES.error +'80'
                            : CORES.secondary+'80',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 5
                        }}
                        >
                            <Text style={{fontSize: 20, color: CORES.branco}}>{option}</Text>

                            {
                                option==opcaoCorreta ? (
                                    <View style={{
                                        width: 30, height: 30, 
                                        backgroundColor: CORES.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: CORES.branco,
                                            fontSize: 20,
                                            borderRadius:25
                                        }} />
                                    </View>
                                ): option == opcaoSelecionada ? (
                                    <View style={{
                                        width: 30, height: 30,
                                        borderRadius:25,
                                        backgroundColor: CORES.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: CORES.branco,
                                            fontSize: 20,
                                            borderRadius:25
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(NextBtn){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: CORES.accent, padding: 20, borderRadius: 25
                }}>
                    <Text style={{fontSize: 20, color: CORES.branco, textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }
    

      

    const [progresso, setprogresso] = useState(new Animated.Value(0));
    const progressoAnim = progresso.interpolate({
        inputRange: [0, todasPerguntas.length],
        outputRange: ['0%','100%']
    })
    const renderprogressoBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#055E58',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: CORES.accent
                },{
                    width: progressoAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={CORES.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: CORES.background,
               position:'relative'
           }}>

               {/* Barra Progremo */}
               { renderprogressoBar() }

               {/* pergunta */}
               {renderPrgta()}

               {/* opcoes */}
               {renderOpcoes()}

               {/* Btn Proximo */}
               {renderNextButton()}

               {/* Modal Pontos */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={modalPont}
               >
                 
                   <View style={{
                       flex: 1,
                       backgroundColor:CORES.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: score> (todasPerguntas.length/2) ? CORES.success : CORES.error,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                            <LottieView
                            source={score > (todasPerguntas.length/2) ? require('../assets/images/like.json'): require('../assets/images/fail.json')}
                            autoplay
                            loop
                            style={{
                                width:"60%",
                                height:"60%",
                                marginLeft:45
                            }}
                        />
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (todasPerguntas.length/2) ? 'Parabens!' : 'Que Pena... Não foi desta vez' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color:"black",
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: CORES.preto
                                }}>/ { todasPerguntas.length }</Text>
                           </View>
                           {/* Repetir Quiz */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: CORES.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: CORES.branco, fontSize: 20
                               }}>Tentar Novamente</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Imagem */}
               <Image
                source={require('../image/images.jpeg')}
                style={{
                    width: TAMANHO.width,
                    height: "100%",
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.2
                }}
                />

           </View>
       </SafeAreaView>
    )
}

export default Quiz
